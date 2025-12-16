import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const subjectFromQuery = params.get('subject') ?? '';

  return (
    <div className="pt-40">
      <Helmet>
        <title>Contact | Galerie MNC – Galerie d’art contemporain à Paris</title>
        <meta
          name="description"
          content="Contactez la Galerie MNC à Paris pour toute information sur les artistes, œuvres, expositions ou l’encadrement sur mesure."
        />
        <link rel="canonical" href="https://galeriemnc.com/contact" />
      </Helmet>

      <ContactForm initialSubject={subjectFromQuery} />
    </div>
  );
};

export default ContactPage;
