import React, { ReactNode } from 'react';
import StepperNavigation from './navigation/StepperNavigation';

interface PageContainerProps {
  children: ReactNode;
  currentStep?: number;
  totalSteps?: number;
  showBack?: boolean;
}

export default function PageContainer({ 
  children, 
  currentStep, 
  totalSteps,
  showBack = true 
}: PageContainerProps) {
  return (
    <div className="flex flex-col items-center py-3 sm:py-6 px-3 sm:px-4 relative">
      {/* Stepper Navigation */}
      {currentStep && totalSteps && (
        <div className="w-full max-w-2xl mb-4 sm:mb-6">
          <StepperNavigation
            currentStep={currentStep}
            totalSteps={totalSteps}
            showBack={showBack}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="w-full max-w-2xl bg-background/60 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-lg">
        {children}
      </div>
    </div>
  );
}