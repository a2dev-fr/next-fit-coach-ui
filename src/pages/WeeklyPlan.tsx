import { useState, useEffect, useMemo, useRef } from 'react';
import { Card, CardBody, Accordion, AccordionItem, Spinner, Button } from '@nextui-org/react';
import { Dumbbell, Clock, RotateCcw, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { svg2pdf } from 'svg2pdf.js';
import html2canvas from 'html2canvas';
import PageContainer from '../components/PageContainer';
import LoadingState from '../components/LoadingState';
import { ApiClient } from '../lib/api';
import { useFitnessStore } from '../store/fitnessStore';
import type { Day } from '../types/api';

interface WorkoutExercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
  advice?: string;
}

interface WorkoutDay {
  day: string;
  name: string;
  exercises: WorkoutExercise[];
}

export default function WeeklyPlan() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [weeklyPlan, setWeeklyPlan] = useState<WorkoutDay[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [downloading, setDownloading] = useState(false);
  const hasCalledApi = useRef(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const fitnessInfo = useMemo(() => {
    const state = useFitnessStore.getState();
    return {
      gender: state.gender,
      age: parseInt(state.age),
      height: parseInt(state.height),
      weight: parseInt(state.weight),
      trainingDays: state.trainingDays,
      level: state.level,
      objective: state.objective,
      motivation: state.motivation
    };
  }, []); // Empty dependency array as we only need this once

  const translations = useMemo(() => ({
    generating: t('weeklyPlan.generating'),
    title: t('weeklyPlan.title'),
    sets: t('weeklyPlan.sets'),
    reps: t('weeklyPlan.reps'),
    rest: t('weeklyPlan.rest'),
    download: t('weeklyPlan.download'),
    downloading: t('weeklyPlan.downloading')
  }), [t]);

  const handleDownload = async () => {
    if (!contentRef.current || downloading) return;
    setDownloading(true);

    try {
      const pdf = new jsPDF('p', 'mm', 'a4');

      // Load and register Inter font
      const interFontResponse = await fetch('/fonts/Inter-Regular.ttf');
      const interFontBold = await fetch('/fonts/Inter-Bold.ttf');
      
      const regularFont = await interFontResponse.arrayBuffer();
      const boldFont = await interFontBold.arrayBuffer();
      
      // Convert ArrayBuffer to base64 string using browser APIs
      const regularFontBase64 = btoa(
        new Uint8Array(regularFont)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
      const boldFontBase64 = btoa(
        new Uint8Array(boldFont)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
      
      pdf.addFileToVFS('Inter-Regular.ttf', regularFontBase64);
      pdf.addFileToVFS('Inter-Bold.ttf', boldFontBase64);
      
      pdf.addFont('Inter-Regular.ttf', 'Inter', 'normal');
      pdf.addFont('Inter-Bold.ttf', 'Inter', 'bold');
      
      // Set default font to Inter
      pdf.setFont('Inter');
      
      // Add date and time at the top
      const now = new Date();
      const dateStr = now.toLocaleDateString(t('locale'), { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      const timeStr = now.toLocaleTimeString(t('locale'), {
        hour: '2-digit',
        minute: '2-digit'
      });
      const dateTimeStr = `${dateStr} ${timeStr}`;
      pdf.setFontSize(10);
      pdf.setTextColor(100, 100, 100);
      pdf.text(dateTimeStr, pdf.internal.pageSize.width - 20, 15, { align: 'right' });

      // Load and add logo
      const logoResponse = await fetch('/logo.svg');
      const logoSvg = await logoResponse.text();
      
      // Create SVG element
      const parser = new DOMParser();
      const doc = parser.parseFromString(logoSvg, 'image/svg+xml');
      const svg = doc.documentElement;
      
      // Set SVG size (80mm width, maintaining aspect ratio)
      const logoWidth = 80;
      const viewBox = svg.getAttribute('viewBox')?.split(' ').map(Number) || [0, 0, 350, 103.92];
      const aspectRatio = viewBox[3] / viewBox[2];
      const logoHeight = logoWidth * aspectRatio;
      
      // Center the logo horizontally
      const logoX = (pdf.internal.pageSize.width - logoWidth) / 2;
      
      // Add SVG to PDF
      await svg2pdf(svg, pdf, {
        x: logoX,
        y: 15,
        width: logoWidth,
        height: logoHeight
      });

      // Add title with Inter Bold
      pdf.setFont('Inter', 'bold');
      pdf.setFontSize(20);
      pdf.setTextColor(0, 0, 0);
      pdf.text(translations.title, pdf.internal.pageSize.width / 2, logoHeight + 30, { align: 'center' });

      // Reset to regular weight for content
      pdf.setFont('Inter', 'normal');

      let yPosition = logoHeight + 40;

      // Generate table for each day
      weeklyPlan?.forEach((day, index) => {
        // Add day title with Inter Bold
        pdf.setFont('Inter', 'bold');
        pdf.setFontSize(14);
        pdf.setTextColor(0, 0, 0);
        pdf.text(day.day, 20, yPosition);
        pdf.setFont('Inter', 'normal');
        yPosition += 10;

        if (day.exercises && day.exercises.length > 0) {
          // Prepare table data
          const tableData = day.exercises.map(exercise => [
            exercise.name,
            `${exercise.sets}`,
            `${exercise.reps}`,
            `${exercise.rest}`,
            exercise.advice || ''
          ]);

          // Add table with Inter font
          autoTable(pdf, {
            startY: yPosition,
            head: [[
              t('weeklyPlan.tableHeaders.exercise'),
              t('weeklyPlan.tableHeaders.sets'),
              t('weeklyPlan.tableHeaders.reps'),
              t('weeklyPlan.tableHeaders.rest'),
              t('weeklyPlan.tableHeaders.advice')
            ]],
            body: tableData,
            theme: 'striped',
            headStyles: { 
              fillColor: [79, 70, 229], // indigo-600
              textColor: 255,
              fontStyle: 'bold',
              font: 'Inter'
            },
            styles: {
              font: 'Inter',
              fontSize: 10
            },
            margin: { left: 20, right: 20 },
            columnStyles: {
              0: { cellWidth: 40 }, // Exercise name
              1: { cellWidth: 20 }, // Sets
              2: { cellWidth: 25 }, // Reps
              3: { cellWidth: 20 }, // Rest
              4: { cellWidth: 'auto' } // Advice - takes remaining space
            }
          });

          yPosition = (pdf as any).lastAutoTable.finalY + 15;

          // Add new page if needed
          if (yPosition > pdf.internal.pageSize.height - 40 && index < weeklyPlan.length - 1) {
            pdf.addPage();
            yPosition = 20;
          }
        }
      });

      // Add footer
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8);
      pdf.setTextColor(100, 100, 100);
      pdf.text(' 2024 NextFit Coach. All rights reserved.', 
        pdf.internal.pageSize.width / 2, 
        pdf.internal.pageSize.height - 10, 
        { align: 'center' });

      // Save PDF with date and time in filename
      const formattedDateTime = now.toISOString().replace(/[:.]/g, '-').slice(0, 19);
      pdf.save(`workout-plan-${formattedDateTime}.pdf`);
    } catch (err) {
      console.error('Error generating PDF:', err);
    } finally {
      setDownloading(false);
    }
  };

  useEffect(() => {
    const fetchWorkoutPlan = async () => {
      // Only call the API if we haven't called it before
      if (hasCalledApi.current) return;
      hasCalledApi.current = true;

      try {
        const response = await ApiClient.createWeekPlan({
          gender: fitnessInfo.gender || '',
          age: fitnessInfo.age || 0,
          height: fitnessInfo.height || 0,
          weight: fitnessInfo.weight || 0,
          training_days: fitnessInfo.trainingDays,
          sport_relationship: fitnessInfo.level,
          main_objective: fitnessInfo.objective,
          main_motivation: fitnessInfo.motivation,
          training_preference: 'balanced' // Default preference
        });

        const formattedPlan = response.days.map((day: Day) => ({
          day: t(`days.${day.day.toLowerCase()}`),
          name: day.name,
          exercises: day.exercises.map(exercise => ({
            name: exercise.name,
            sets: exercise.sets,
            reps: exercise.reps.toString(),
            rest: exercise.rest_between_series,
            advice: exercise.advice
          }))
        }));

        setWeeklyPlan(formattedPlan);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to generate workout plan');
      } finally {
        setLoading(false);
      }
    };

    fetchWorkoutPlan();
  }, []); // Empty dependency array ensures effect runs only once

  if (loading) {
    return (
      <PageContainer currentStep={7} totalSteps={7}>
        <div className="text-center space-y-6">
          <h1 className="text-2xl font-bold mb-6">
            {translations.generating}
          </h1>
          <Spinner size="lg" color="primary" />
          <LoadingState type="exercise" />
        </div>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer currentStep={7} totalSteps={7}>
        <div className="text-center space-y-6">
          <h1 className="text-2xl font-bold text-red-500 mb-6">
            {error}
          </h1>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer currentStep={7} totalSteps={7}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          {translations.title}
        </h1>
        <Button
          color="primary"
          className='bg-gradient-to-tr from-purple-500 to-blue-500 text-white shadow-lg'
          startContent={<Download className="w-4 h-4" />}
          onClick={handleDownload}
          isLoading={downloading}
        >
          {downloading ? translations.downloading : translations.download}
        </Button>
      </div>

      <div ref={contentRef}>
        <Accordion variant="splitted">
          {weeklyPlan.map((workout) => (
            <AccordionItem
              key={workout.day}
              aria-label={workout.day}
              title={`${workout.day} - ${workout.name}`}
              startContent={<Dumbbell className="text-primary" />}
            >
              <Card className="mb-4">
                <CardBody>
                  <div className="space-y-4">
                    {workout.exercises.map((exercise, exIndex) => (
                      <div key={exIndex} className="border-b border-gray-700 pb-4 last:border-0 last:pb-0">
                        <h3 className="font-semibold mb-2">{exercise.name}</h3>
                        <div className="flex gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <RotateCcw className="w-4 h-4" />
                            {exercise.sets} {translations.sets}
                          </div>
                          <div className="flex items-center gap-1">
                            <Dumbbell className="w-4 h-4" />
                            {exercise.reps} {translations.reps}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {exercise.rest}
                          </div>
                        </div>
                        {exercise.advice && (
                          <p className="mt-2 text-sm text-primary/80">{exercise.advice}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </PageContainer>
  );
}