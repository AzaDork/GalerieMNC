import React, { useEffect } from 'react';

const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Politique de confidentialité | Galerie MNC';
  }, []);

  return (
    <div className="pt-40 pb-16 px-4 md:px-8 bg-white">
      <main className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-8">Politique de confidentialité</h1>

        <p className="mb-6">
          Cette politique de confidentialité explique comment le site <strong>Galerie MNC</strong> collecte,
          utilise et protège vos données personnelles, conformément au Règlement Général sur la Protection
          des Données (RGPD).
        </p>

        {/* 1. Données collectées */}
        <section className="space-y-3 mb-8">
          <h2 className="text-2xl font-semibold">1. Données collectées</h2>

          <div>
            <h3 className="text-lg font-semibold">1.1. Formulaire de contact</h3>
            <p>
              Lorsque vous utilisez le formulaire de contact, les informations suivantes peuvent être
              collectées :
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Nom</li>
              <li>Adresse email</li>
              <li>Sujet</li>
              <li>Message</li>
            </ul>
            <p className="mt-2">
              Ces données sont nécessaires pour répondre à votre demande. Les messages sont transmis via le
              service EmailJS.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">1.2. Données techniques</h3>
            <p>
              Lors de votre navigation, certaines données techniques peuvent être collectées de manière
              automatique :
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Adresse IP</li>
              <li>Navigateur utilisé</li>
              <li>Informations sur l’appareil</li>
              <li>Pages consultées</li>
            </ul>
            <p className="mt-2">
              Des cookies strictement nécessaires au fonctionnement du site peuvent être utilisés. Aucun
              cookie de tracking (type Google Analytics) n’est déposé, sauf mention contraire ultérieure.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">1.3. Contenu Sanity</h3>
            <p>
              Le contenu éditorial du site (textes, images d’œuvres, fiches artistes) est hébergé et géré via
              la plateforme Sanity. Aucune donnée personnelle des visiteurs n’est collectée via Sanity.
            </p>
          </div>
        </section>

        {/* 2. Finalités */}
        <section className="space-y-3 mb-8">
          <h2 className="text-2xl font-semibold">2. Finalités de la collecte</h2>
          <p>Les données collectées sont utilisées pour les finalités suivantes :</p>
          <ul className="list-disc list-inside mt-2">
            <li>Répondre aux demandes envoyées via le formulaire de contact</li>
            <li>Assurer le bon fonctionnement et la sécurité du site</li>
            <li>Améliorer éventuellement l’expérience utilisateur</li>
          </ul>
        </section>

        {/* 3. Base légale */}
        <section className="space-y-3 mb-8">
          <h2 className="text-2xl font-semibold">3. Base légale (RGPD)</h2>
          <p>
            Les traitements de données reposent sur les bases légales suivantes :
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              <strong>Consentement</strong> : pour les données envoyées via le formulaire de contact.
            </li>
            <li>
              <strong>Intérêt légitime</strong> : pour garantir la sécurité, la maintenance et
              l’amélioration du site.
            </li>
          </ul>
        </section>

        {/* 4. Transmission des données */}
        <section className="space-y-3 mb-8">
          <h2 className="text-2xl font-semibold">4. Transmission des données</h2>
          <h3 className="text-lg font-semibold">4.1. EmailJS</h3>
          <p>
            Les messages envoyés via le formulaire de contact sont transmis par le service EmailJS, qui peut
            être situé hors de l’Union Européenne.
          </p>
          <p>
            EmailJS met en place des mesures de protection conformes au RGPD. Pour plus d’informations,
            veuillez consulter la politique de confidentialité d’EmailJS sur leur site officiel.
          </p>
        </section>

        {/* 5. Durée de conservation */}
        <section className="space-y-3 mb-8">
          <h2 className="text-2xl font-semibold">5. Durée de conservation</h2>
          <p>Les données sont conservées pour les durées suivantes :</p>
          <ul className="list-disc list-inside mt-2">
            <li>
              Messages envoyés via le formulaire : conservés le temps nécessaire au traitement de la demande,
              puis supprimés.
            </li>
            <li>
              Données techniques (logs) : conservées jusqu’à 12 mois maximum, à des fins de sécurité et de
              maintenance.
            </li>
          </ul>
        </section>

        {/* 6. Droits des utilisateurs */}
        <section className="space-y-3 mb-8">
          <h2 className="text-2xl font-semibold">6. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul className="list-disc list-inside mt-2">
            <li>Droit d’accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit d’opposition</li>
            <li>Droit à l’effacement (droit à l’oubli)</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
          </ul>
          <p className="mt-2">
            Pour exercer vos droits, vous pouvez nous contacter à l’adresse suivante :
            <br />
            Email : {/* À compléter */} votre.email@example.com
          </p>
        </section>

        {/* 7. Sécurité */}
        <section className="space-y-3 mb-8">
          <h2 className="text-2xl font-semibold">7. Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos
            données contre la perte, l’accès non autorisé, la divulgation, l’altération ou la destruction.
          </p>
        </section>

        {/* 8. Modifications */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">8. Modifications de la politique</h2>
          <p>
            La présente politique de confidentialité peut être mise à jour pour refléter les évolutions
            législatives, réglementaires ou techniques.
          </p>
          <p>
            Dernière mise à jour : {/* À compléter si tu veux une date fixe */} 11/12/2025.
          </p>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;