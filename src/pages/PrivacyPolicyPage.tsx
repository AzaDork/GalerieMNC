import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-40 pb-16 px-4 md:px-8 bg-white">
      <Helmet>
        <title>Politique de confidentialité | Galerie MNC</title>
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href="https://galeriemnc.com/politique-de-confidentialite" />
      </Helmet>

      <main className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-8">Politique de confidentialité</h1>

        <p className="text-gray-800 leading-relaxed mb-8">
          Cette politique de confidentialité décrit comment <strong>Galerie MNC</strong> collecte, utilise et
          protège les données personnelles des utilisateurs, conformément au RGPD.
        </p>

        {/* 1 */}
        <section className="space-y-3 mb-10">
          <h2 className="text-2xl font-semibold">1. Responsable du traitement</h2>
          <p className="text-gray-800 leading-relaxed">
            Le responsable du traitement des données est :
            <br />
            <strong>Galerie MNC</strong> — <span className="italic">À compléter (Nom / Prénom)</span>
            <br />
            Email : <span className="italic">À compléter</span>
          </p>
        </section>

        {/* 2 */}
        <section className="space-y-3 mb-10">
          <h2 className="text-2xl font-semibold">2. Données collectées</h2>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">2.1 Formulaire de contact (EmailJS)</h3>
            <p className="text-gray-800 leading-relaxed">
              Lorsque vous nous contactez via le formulaire, nous collectons les informations suivantes :
            </p>
            <ul className="list-disc list-inside text-gray-800 leading-relaxed">
              <li>Nom</li>
              <li>Adresse email</li>
              <li>Sujet</li>
              <li>Message</li>
            </ul>
            <p className="text-gray-800 leading-relaxed">
              Ces données sont nécessaires pour répondre à votre demande. L’envoi est réalisé via <strong>EmailJS</strong>.
            </p>
          </div>

          <div className="space-y-2 pt-4">
            <h3 className="text-lg font-semibold">2.2 Données d’audience (Plausible Analytics)</h3>
            <p className="text-gray-800 leading-relaxed">
              Nous utilisons <strong>Plausible Analytics</strong> pour mesurer l’audience du site de manière respectueuse de la
              vie privée. Plausible est conçu pour fonctionner sans cookies de tracking et en limitant les données collectées.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Les données d’audience peuvent inclure des informations agrégées comme les pages vues, les sources de trafic ou
              le type d’appareil, sans identifier directement les utilisateurs.
            </p>
          </div>

          <div className="space-y-2 pt-4">
            <h3 className="text-lg font-semibold">2.3 Données techniques (hébergement Netlify)</h3>
            <p className="text-gray-800 leading-relaxed">
              Lors de l’accès au site, des données techniques peuvent être traitées (ex : adresse IP, logs serveur) notamment
              pour la sécurité, la prévention des abus et le bon fonctionnement du service.
            </p>
          </div>

          <div className="space-y-2 pt-4">
            <h3 className="text-lg font-semibold">2.4 Contenu géré via Sanity</h3>
            <p className="text-gray-800 leading-relaxed">
              Le contenu éditorial (artistes, œuvres, textes, images) est géré via <strong>Sanity</strong>. Sanity n’est pas
              utilisé pour collecter des données personnelles des visiteurs.
            </p>
          </div>
        </section>

        {/* 3 */}
        <section className="space-y-3 mb-10">
          <h2 className="text-2xl font-semibold">3. Finalités</h2>
          <ul className="list-disc list-inside text-gray-800 leading-relaxed">
            <li>Répondre aux demandes envoyées via le formulaire de contact</li>
            <li>Mesurer l’audience et améliorer le site (statistiques agrégées via Plausible)</li>
            <li>Assurer la sécurité et le bon fonctionnement du site (hébergement Netlify)</li>
          </ul>
        </section>

        {/* 4 */}
        <section className="space-y-3 mb-10">
          <h2 className="text-2xl font-semibold">4. Base légale</h2>
          <ul className="list-disc list-inside text-gray-800 leading-relaxed">
            <li>
              <strong>Consentement</strong> : lorsque vous envoyez un message via le formulaire de contact.
            </li>
            <li>
              <strong>Intérêt légitime</strong> : mesures de sécurité et statistiques d’audience non intrusives.
            </li>
          </ul>
        </section>

        {/* 5 */}
        <section className="space-y-3 mb-10">
          <h2 className="text-2xl font-semibold">5. Destinataires et transferts</h2>
          <p className="text-gray-800 leading-relaxed">
            Les données peuvent être traitées par des prestataires techniques, selon les services utilisés :
          </p>
          <ul className="list-disc list-inside text-gray-800 leading-relaxed">
            <li><strong>EmailJS</strong> (envoi des messages du formulaire)</li>
            <li><strong>Plausible Analytics</strong> (mesure d’audience)</li>
            <li><strong>Netlify</strong> (hébergement / déploiement, logs techniques)</li>
            <li><strong>Sanity</strong> (hébergement du contenu CMS)</li>
          </ul>
          <p className="text-gray-800 leading-relaxed">
            Certains de ces prestataires peuvent être situés hors de l’Union Européenne. Dans ce cas, des garanties
            appropriées (ex : clauses contractuelles types) peuvent être mises en place par ces prestataires.
          </p>
        </section>

        {/* 6 */}
        <section className="space-y-3 mb-10">
          <h2 className="text-2xl font-semibold">6. Durée de conservation</h2>
          <ul className="list-disc list-inside text-gray-800 leading-relaxed">
            <li>Données du formulaire : conservées le temps nécessaire au traitement de la demande, puis supprimées.</li>
            <li>Données d’audience : conservées selon la politique de rétention de Plausible (données statistiques).</li>
            <li>Logs techniques (Netlify) : conservés pour une durée limitée, à des fins de sécurité et de maintenance.</li>
          </ul>
        </section>

        {/* 7 */}
        <section className="space-y-3 mb-10">
          <h2 className="text-2xl font-semibold">7. Vos droits</h2>
          <p className="text-gray-800 leading-relaxed">
            Conformément au RGPD, vous disposez notamment des droits d’accès, de rectification, d’effacement, d’opposition
            et de limitation du traitement.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Pour exercer vos droits, vous pouvez nous contacter à : <span className="italic">À compléter (email)</span>
          </p>
        </section>

        {/* 8 */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">8. Mise à jour</h2>
          <p className="text-gray-800 leading-relaxed">
            Cette politique peut être modifiée à tout moment pour refléter les évolutions légales, réglementaires ou
            techniques.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Dernière mise à jour : <span className="italic">À compléter (ex : 16/12/2025)</span>
          </p>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
