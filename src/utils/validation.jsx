// src/utils/validation.js

export default function validation(name, email, message) {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;
  const messageRegex = /^[a-zA-ZÀ-ÿ0-9\s.,!?'"()]+$/;

  // Détection SQL Injection
  function containsSQLInjection(input) {
    const sqlInjectionPatterns = [
      /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|OR|AND)\b)/i,
      /(--|;|\/\*|\*\/)/,
      /(\b(1=1|1=0)\b)/,
    ];
    return sqlInjectionPatterns.some(pattern => pattern.test(input));
  }

  // Détection XSS
  function containsXSS(input) {
    const xssPatterns = [
      /<script.*?>.*?<\/script>/i,
      /<.*?on\w+=.*?>/i,
      /javascript:/i,
    ];
    return xssPatterns.some(pattern => pattern.test(input));
  }

  // Caractères interdits
  function containsSpecialChars(input) {
    const specialCharPattern = /[<>\\{}[\]~`]/;
    return specialCharPattern.test(input);
  }

  // Validation du nom
  if (!name || name.trim() === '') {
    errors.name = "Le nom est requis.";
  } else if (!nameRegex.test(name)) {
    errors.name = "Le nom ne doit contenir que des lettres, espaces, apostrophes et tirets.";
  } else if (containsSQLInjection(name) || containsXSS(name) || containsSpecialChars(name)) {
    errors.name = "Le nom contient des caractères ou des motifs interdits.";
  }

  // Validation de l'email
  if (!email || email.trim() === '') {
    errors.email = "L'email est requis.";
  } else if (!emailRegex.test(email)) {
    errors.email = "L'email n'est pas valide.";
  } else if (containsSQLInjection(email) || containsXSS(email) || containsSpecialChars(email)) {
    errors.email = "L'email contient des caractères ou des motifs interdits.";
  }

  // Validation du message
  if (!message || message.trim() === '') {
    errors.message = "Le message est requis.";
  } else if (!messageRegex.test(message)) {
    errors.message = "Le message ne doit contenir que des lettres, chiffres, espaces et ponctuation de base.";
  } else if (containsSQLInjection(message) || containsXSS(message) || containsSpecialChars(message)) {
    errors.message = "Le message contient des caractères ou des motifs interdits.";
  }

  // On renvoie UNIQUEMENT les erreurs trouvées
  return errors;
}