import React from 'react';
import { SEO } from '../components/SEO';
import { ChristmasBalls } from '../components/seasonal/ChristmasBalls';

export const Privacy: React.FC = () => {
  return (
    <div className="bg-paper min-h-screen pt-32 pb-20 px-4 md:px-12 relative overflow-hidden">
      <SEO
        title="Datenschutzerklärung | Super Sonic Prototypes"
        description="Informationen zur Datenverarbeitung und DSGVO-Konformität."
        lang="de"
        path="/de/datenschutz"
      />

      <ChristmasBalls />

      <div className="max-w-3xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-12 tracking-tighter">Datenschutzerklärung</h1>

        <div className="space-y-8 text-zinc-600 leading-relaxed text-lg">

          <section>
            <h2 className="text-xl font-bold text-black mb-4">1. Datenschutz auf einen Blick</h2>
            <p>
              <strong>Allgemeine Hinweise</strong><br/>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
            <p className="mt-4">
              <strong>Datenerfassung auf dieser Website</strong><br/>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">2. Hosting & Content Delivery Networks (CDN)</h2>
            <p className="mb-4">
              <strong>Render Services, Inc.</strong><br/>
              Wir hosten unsere Website bei Render. Anbieter ist die Render Services, Inc., 525 Brannan St Ste 300, San Francisco, CA 94107, USA.
            </p>
            <p>
              Der Serverstandort für unsere Dienste ist <strong>Frankfurt am Main, Deutschland (eu-central-1)</strong>.
              Render speichert Protokolldaten wie IP-Adressen zur Erkennung und Abwehr von Angriffen.
              Grundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse an Sicherheit und Stabilität).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">3. Analyse & Tracking</h2>
            <p className="mb-4">
              <strong>Umami Analytics</strong><br/>
              Wir nutzen auf dieser Website Umami, eine datenschutzfreundliche Open-Source-Webanalyse-Software.
              Umami verwendet <strong>keine Cookies</strong> und speichert keine personenbezogenen Daten.
              Alle gesammelten Daten sind anonymisiert und lassen keine Rückschlüsse auf einzelne Besucher zu.
            </p>
            <p>
              Die Erfassung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der anonymisierten Analyse des Nutzerverhaltens, um sein Webangebot zu optimieren.
              Da Umami keine personenbezogenen Daten speichert, ist keine Einwilligung (Cookie-Banner) erforderlich.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">4. Allgemeine Hinweise und Pflichtinformationen</h2>
            <p className="mb-4">
              <strong>Verschlüsselung</strong><br/>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung.
            </p>
            <p>
              <strong>Widerruf Ihrer Einwilligung zur Datenverarbeitung</strong><br/>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};
