import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Welcome from './pages/Welcome';
import About from './pages/About';
import Login from './pages/Login';
import Gender from './pages/Gender';
import Age from './pages/Age';
import PhysicalAttributes from './pages/PhysicalAttributes';
import TrainingDays from './pages/TrainingDays';
import Preferences from './pages/Preferences';
import Review from './pages/Review';
import WeeklyPlan from './pages/WeeklyPlan';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="gender" element={<Gender />} />
          <Route path="age" element={<Age />} />
          <Route path="physical" element={<PhysicalAttributes />} />
          <Route path="training-days" element={<TrainingDays />} />
          <Route path="preferences" element={<Preferences />} />
          <Route path="review" element={<Review />} />
          <Route path="plan" element={<WeeklyPlan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;