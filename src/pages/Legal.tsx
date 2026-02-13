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
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
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
            <h2 className="text-xl font-bold text-zinc-900 mb-2">2. Hosting (Render)</h2>
            <p>
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <p className="mt-2">
              <strong>Render</strong><br />
              Anbieter ist die Render Services Inc., 525 Brannan St Ste 300, San Francisco, CA 94107, USA (nachfolgend Render).<br />
              Wenn Sie unsere Website besuchen, erfasst Render verschiedene Logfiles inklusive Ihrer IP-Adressen.<br />
              Render verwendet Serverstandorte weltweit, unter anderem auch in den USA. Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://render.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-sonic-orange">https://render.com/privacy</a>.
            </p>
            <p className="mt-2">
              <strong>Auftragsverarbeitung</strong><br />
              Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
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
              <strong>Kontaktformular via submit-form.com</strong><br />
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              Die Datenübertragung erfolgt über den Dienstleister <strong>submit-form.com</strong>. Wir weisen darauf hin, dass die Datenverarbeitung hierbei auch auf Servern außerhalb der EU stattfinden kann.
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
            </p>
            <p className="mt-4">
              <strong>Anfrage per E-Mail oder Telefon</strong><br />
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">5. Analyse-Tools und Werbung</h2>
            <p>
              <strong>Umami Analytics</strong><br />
              Diese Website nutzt den Open-Source-Webanalysedienst Umami. Umami verwendet keine Cookies und speichert keine personenbezogenen Daten (IP-Adressen werden anonymisiert). Die Analyse des Nutzerverhaltens erfolgt anonymisiert, um unser Webangebot zu optimieren.<br />
              Da Umami keine Cookies setzt und keine personenbezogenen Daten speichert, bedarf es hierfür keiner Einwilligung über den Cookie-Banner. Die Nutzung erfolgt auf Grundlage unseres berechtigten Interesses an der Analyse des Nutzerverhaltens zur Optimierung unseres Webangebots (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">6. Plugins und Tools</h2>
            <p>
              <strong>Calendly</strong><br />
              Auf unserer Website haben Sie die Möglichkeit, Termine mit uns zu vereinbaren. Wir nutzen hierfür das Tool "Calendly". Anbieter ist die Calendly LLC, 271 17th St NW, 10th Floor, Atlanta, Georgia 30363, USA.<br />
              Zum Zweck der Terminvereinbarung geben Sie die gewünschten Daten und den Termin in die Maske ein. Die eingegebenen Daten werden für die Planung, Durchführung und ggf. für die Nachbereitung des Termins verwendet. Die Termindaten werden auf den Servern von Calendly gespeichert, deren Standort sich auch in den USA befinden kann.<br />
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details entnehmen Sie der Datenschutzerklärung von Calendly: <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-sonic-orange">https://calendly.com/privacy</a>.
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