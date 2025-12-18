import React from 'react';
import { Helmet } from 'react-helmet-async';

const LegalInformationPage: React.FC = () => {
  return (
    <div className="pt-40 pb-16 px-4 md:px-8 bg-white">
      <Helmet>
        <title>Mentions légales | Galerie MNC</title>
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href="https://galeriemnc.com/mentions-legales" />
      </Helmet>

      <main className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-8">Mentions légales</h1>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Éditeur du site</h2>
          <p className="text-gray-800 leading-relaxed">
            <strong>MC International</strong>
            <br />
            NOM Prénom : NAMY Martine
            <br />
            Statut : Dirigeante
            <br />
            SIRET : 33203868600025
            <br />
            Adresse : 36 rue des Saints Pères
            <br />
            Email : gmnc@club-internet.com
            <br />
            Téléphone : 01 45 44 55 27
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Directeur de la publication</h2>
          <p className="text-gray-800 leading-relaxed">
            <span className="italic">CAULIER Antoni</span>
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Nom de domaine</h2>
          <p className="text-gray-800 leading-relaxed">
            Le nom de domaine est enregistré et géré via <strong>WordPress (Automattic / WordPress.com)</strong>.
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Hébergement / Déploiement</h2>
          <p className="text-gray-800 leading-relaxed">
            Le site est hébergé et déployé via <strong>Netlify</strong>.
            <br />
            Netlify, Inc.
            <br />
            2325 3rd Street, Suite 296, San Francisco, California 94107, USA
            <br />
            Site : https://www.netlify.com
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Gestion de contenu (CMS)</h2>
          <p className="text-gray-800 leading-relaxed">
            Le contenu du site (textes, artistes, œuvres, images) est géré via le CMS <strong>Sanity</strong>.
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Propriété intellectuelle</h2>
          <p className="text-gray-800 leading-relaxed">
            L’ensemble du contenu présent sur ce site (œuvres, images, photographies, textes, logo, identité
            visuelle, code) est protégé par le droit d’auteur et, plus largement, par la législation relative
            à la propriété intellectuelle.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des
            éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation
            écrite préalable.
          </p>
        </section>

        <section className="space-y-2 mb-10">
          <h2 className="text-xl font-semibold">Responsabilité</h2>
          <p className="text-gray-800 leading-relaxed">
            La Galerie MNC s’efforce de fournir des informations aussi précises que possible. Toutefois, elle
            ne pourra être tenue responsable des omissions, des inexactitudes ou des carences dans la mise à
            jour, qu’elles soient de son fait ou du fait de partenaires.
          </p>
          <p className="text-gray-800 leading-relaxed">
            L’utilisateur reconnaît utiliser le site sous sa responsabilité exclusive.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Liens hypertextes</h2>
          <p className="text-gray-800 leading-relaxed">
            Le site peut contenir des liens vers des sites tiers. La Galerie MNC n’exerce aucun contrôle sur
            ces sites et ne peut être tenue responsable de leur contenu.
          </p>
        </section>
      </main>
    </div>
  );
};

export default LegalInformationPage;
