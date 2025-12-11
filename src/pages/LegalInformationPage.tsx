import React, { useEffect } from 'react';

const LegalInformationPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Mentions légales | Galerie MNC';
  }, []);

  return (
    <div className="pt-40 pb-16 px-4 md:px-8 bg-white">
      <main className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-8">Mentions légales</h1>

        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold">Propriétaire du site</h2>
          <p>
            <strong>Galerie MNC</strong>
            <br />
            Nom / Prénom : {/* À compléter */} Votre nom
            <br />
            Adresse : {/* À compléter */} Votre adresse postale
            <br />
            Email : {/* À compléter */} votre.email@example.com
            <br />
            Téléphone : {/* À compléter */} votre numéro de téléphone
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Statut juridique</h2>
          <p>
            {/* Exemple : Auto-entrepreneur */}
            Statut : Auto-entrepreneur
            <br />
            SIRET : {/* À compléter */} 000 000 000 00000
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Directeur de la publication</h2>
          <p>
            Directeur de la publication : {/* À compléter */} Votre nom
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Conception et développement</h2>
          <p>
            Site réalisé par {/* À compléter */} Galerie MNC.
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Hébergement</h2>
          <p>
            Le site est hébergé par :
            <br />
            <strong>{/* À compléter */} Nom de l’hébergeur (ex : Vercel, Netlify, OVH, etc.)</strong>
            <br />
            Adresse : {/* À compléter */} Adresse de l’hébergeur
            <br />
            Site : {/* À compléter */} https://www.exemple-hebergeur.com
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Propriété intellectuelle</h2>
          <p>
            L’ensemble du contenu présent sur ce site (images, œuvres, textes, logos, design, code, etc.)
            est protégé par le droit d’auteur et plus largement par la législation sur la propriété
            intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des
            éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation
            écrite préalable.
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Responsabilité</h2>
          <p>
            La Galerie MNC s’efforce de fournir des informations aussi précises que possible. Toutefois,
            elle ne pourra être tenue responsable des omissions, des inexactitudes ou des carences dans la
            mise à jour, qu’elles soient de son fait ou du fait de partenaires tiers.
          </p>
          <p>
            L’utilisateur du site reconnaît utiliser les informations et outils disponibles sous sa
            responsabilité exclusive.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Liens hypertextes</h2>
          <p>
            Le site peut contenir des liens vers d’autres sites tiers. La Galerie MNC n’exerce aucun
            contrôle sur le contenu de ces sites et ne peut en aucun cas être tenue responsable de leur
            contenu ou de tout dommage pouvant résulter de leur consultation.
          </p>
        </section>
      </main>
    </div>
  );
};

export default LegalInformationPage;