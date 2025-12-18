import React, { useEffect, useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

interface FormState {
  civility: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface ContactFormProps {
  initialSubject?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState<FormState>({
    civility: '',
    name: '',
    email: '',
    subject: initialSubject,
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Met à jour le sujet si le paramètre d’URL change
  useEffect(() => {
    if (initialSubject) {
      setFormData(prev => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Un nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Une adresse email est requise';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Adresse email invalide';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Un message est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setIsSubmitted(false);

    try {
      const payload = {
        civility: formData.civility,
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'Nouveau message depuis le site',
        message: formData.message,
      };

      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => '');
        throw new Error(`Contact function failed (${res.status}) ${txt}`);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        civility: '',
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Erreur Brevo:', error);
      setIsSubmitting(false);
      alert("Une erreur est survenue lors de l'envoi du message. Merci de réessayer.");
    }
  };


  return (
    <div className="bg-white p-8 rounded-lg">
      <h2 className="text-2xl font-light mb-6">Envoyer un message</h2>

      {isSubmitted ? (
        <div className="py-8">
          <div className="text-center animate-fadeIn">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Merci
            </h3>
            <p className="text-gray-600">
              Votre message a bien été envoyé. Nous vous répondrons au plus vite.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Civilité */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Civilité
            </label>
            <select
              name="civility"
              value={formData.civility}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-md shadow-sm focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-colors"
            >
              <option value="">--</option>
              <option value="Mme">Madame</option>
              <option value="M.">Monsieur</option>
            </select>
          </div>

          {/* Nom */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 border ${
                errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200'
              } rounded-md shadow-sm focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-colors`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Adresse email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border ${
                errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'
              } rounded-md shadow-sm focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-colors`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Sujet */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Sujet
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-md shadow-sm focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-colors"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`w-full p-3 border ${
                errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200'
              } rounded-md shadow-sm focus:ring-1 focus:ring-gray-900 focus:border-gray-900 resize-none transition-colors`}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          {/* Bouton */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <svg
                    className="animate-spin h-5 w-5 text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Envoie...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Send className="h-5 w-5" />
                  <span>Envoyer</span>
                </div>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
