import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';


const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'À Propos | Galerie MNC';
  }, []);

  return (
    <div className="pt-40">
      <ContactForm />
    </div>
  );
};

export default ContactPage;
