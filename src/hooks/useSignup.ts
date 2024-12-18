import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuthStore } from '../store/authStore';
import { useToast } from './useToast';
import { validateEmail, validatePassword } from '../utils/validation';
import { calculatePasswordStrength } from '../utils/password';

export function useSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const { setUser, setSession } = useAuthStore();
  const { showError, showSuccess } = useToast();

  const passwordStrength = calculatePasswordStrength(password);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateForm = () => {
    let isValid = true;
    setEmailError('');
    setPasswordError('');

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      setUser(data.user);
      setSession(data.session);
      
      showSuccess('Account created successfully');
      navigate('/');
    } catch (err) {
      if (err instanceof Error) {
        showError(err, 'auth.signup');
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isVisible,
    toggleVisibility,
    loading,
    emailError,
    passwordError,
    handleSubmit,
    passwordStrength
  };
}