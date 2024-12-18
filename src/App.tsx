import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Welcome from './pages/Welcome';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import Settings from './pages/Settings';
import Gender from './pages/Gender';
import Age from './pages/Age';
import PhysicalAttributes from './pages/PhysicalAttributes';
import TrainingDays from './pages/TrainingDays';
import Preferences from './pages/Preferences';
import Review from './pages/Review';
import WeeklyPlan from './pages/WeeklyPlan';
import Terms from './pages/legal/Terms';
import Privacy from './pages/legal/Privacy';
import ProtectedRoute from './routes/ProtectedRoute';
import { PATHS } from './routes/paths';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path={PATHS.ABOUT} element={<About />} />
          <Route path={PATHS.LOGIN} element={<Login />} />
          <Route path={PATHS.SIGNUP} element={<Signup />} />
          
          {/* Protected Routes */}
          <Route
            path={PATHS.ACCOUNT}
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path={PATHS.SETTINGS}
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
          
          {/* Onboarding Routes */}
          <Route path={PATHS.GENDER} element={<Gender />} />
          <Route path={PATHS.AGE} element={<Age />} />
          <Route path={PATHS.PHYSICAL} element={<PhysicalAttributes />} />
          <Route path={PATHS.TRAINING_DAYS} element={<TrainingDays />} />
          <Route path={PATHS.PREFERENCES} element={<Preferences />} />
          <Route path={PATHS.REVIEW} element={<Review />} />
          <Route path={PATHS.PLAN} element={<WeeklyPlan />} />
          
          {/* Legal Routes */}
          <Route path={PATHS.TERMS} element={<Terms />} />
          <Route path={PATHS.PRIVACY} element={<Privacy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;