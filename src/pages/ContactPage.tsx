import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const subjectFromQuery = params.get('subject') ?? '';

  useEffect(() => {
    document.title = 'Nous Contacter | Galerie MNC';
  }, []);

  return (
    <div className="pt-40">
      <ContactForm initialSubject={subjectFromQuery} />
    </div>
  );
};

export default ContactPage;
