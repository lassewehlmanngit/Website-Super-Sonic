import React from 'react';

interface Props { lang: 'de' | 'en'; type: 'impressum' | 'privacy'; }

export const Legal: React.FC<Props> = ({ lang, type }) => {
  const isDe = lang === 'de';

  const getContent = () => {
    if (type === 'impressum') {
      return (
        <div className="space-y-6 text-zinc-600">
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              Norddorf Design<br />
              Musterstraße 123<br />
              12345 Musterstadt<br />
              Deutschland
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">Kontakt</h2>
            <p>
              Telefon: [Telefonnummer]<br />
              E-Mail: hey@norddorf.com
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE123456789
            </p>
          </section>
          <p className="text-sm italic mt-8">
            Dies ist ein Platzhalter-Impressum. Bitte ersetzen Sie diese Angaben durch Ihre echten Unternehmensdaten.
          </p>
        </div>
      );
    }

    if (type === 'privacy') {
      const content = isDe ? (
        <div className="space-y-6 text-zinc-600">
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">1. Datenschutz auf einen Blick</h2>
            <p>
              <strong>Allgemeine Hinweise</strong><br />
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            </p>
            <p className="mt-2">
              <strong>Datenerfassung auf dieser Website</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            <p className="mt-2">
              <strong>Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.<br />
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">2. Hosting und Content Delivery Networks (CDN)</h2>
            <p>
              Wir hosten die Inhalte unserer Website bei folgenden Anbietern:
            </p>
            <p className="mt-2">
              <strong>Vercel / Netlify / Render (Beispiel)</strong><br />
              Anbieter ist ... [Hier spezifischen Hoster eintragen]<br />
              Detaillierte Informationen entnehmen Sie bitte der Datenschutzerklärung des Anbieters.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <p>
              <strong>Datenschutz</strong><br />
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="mt-2">
              <strong>Hinweis zur verantwortlichen Stelle</strong><br />
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist im Impressum zu finden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">4. Datenerfassung auf dieser Website</h2>
            <p>
              <strong>Kontaktformular</strong><br />
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mt-2 text-sm italic">
              Hinweis: Diese Datenschutzerklärung ist ein Muster und muss an die tatsächlichen Gegebenheiten (verwendete Tools, Hosting, etc.) angepasst werden.
            </p>
          </section>
        </div>
      ) : (
        <div className="space-y-6 text-zinc-600">
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">1. Data Protection at a Glance</h2>
            <p>
              <strong>General Notes</strong><br />
              The following notes provide a simple overview of what happens to your personal data when you visit this website.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">2. Hosting</h2>
            <p>We host our website with [Provider Name].</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">3. General Information</h2>
            <p>The operators of this website take the protection of your personal data very seriously.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">4. Data Collection on this Website</h2>
            <p>
              <strong>Contact Form</strong><br />
              If you send us inquiries via the contact form, your data from the inquiry form, including the contact details you provided there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions.
            </p>
          </section>
        </div>
      );
      return content;
    }
  };

  return (
    <div className="bg-paper min-h-screen pt-40 md:pt-48 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8 capitalize tracking-tight">
          {type === 'impressum' ? 'Impressum' : (lang === 'de' ? 'Datenschutz' : 'Privacy')}
        </h1>
        <div className="p-8 md:p-12 bg-white border border-zinc-200 rounded-[2rem] shadow-sm leading-relaxed">
          {getContent()}
        </div>
      </div>
    </div>
  );
};