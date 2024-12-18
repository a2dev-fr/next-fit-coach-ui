export function calculatePasswordStrength(password: string): number {
  if (!password) return 0;

  let strength = 0;
  const checks = {
    length: password.length >= 8,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasNumbers: /\d/.test(password),
    hasSpecialChars: /[!@#$%^&*(),.?":{}|<>]/.test(password)
  };

  // Base points
  if (checks.length) strength += 20;
  if (checks.hasUpperCase) strength += 20;
  if (checks.hasLowerCase) strength += 20;
  if (checks.hasNumbers) strength += 20;
  if (checks.hasSpecialChars) strength += 20;

  // Length bonus
  if (password.length > 12) strength += 10;
  if (password.length > 16) strength += 10;

  return Math.min(strength, 100);
}