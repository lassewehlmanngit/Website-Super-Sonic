import React from 'react';
import { SEO } from '../components/SEO';
import { ChristmasBalls } from '../components/seasonal/ChristmasBalls';

export const Privacy: React.FC = () => {
  return (
    <div className="bg-paper min-h-screen pt-32 md:pt-40 pb-16 md:pb-20 relative overflow-hidden">
      <SEO
        title="Datenschutzerklärung | Super Sonic Prototypes"
        description="Informationen zur Datenverarbeitung und DSGVO-Konformität bei Super Sonic Prototypes."
        lang="de"
        path="/de/datenschutz"
      />

      {/* <ChristmasBalls /> */}

      <div className="container-responsive max-w-3xl mx-auto relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black mb-8 md:mb-12 tracking-tighter">Datenschutzerklärung</h1>

        <div className="space-y-6 md:space-y-8 text-zinc-600 leading-relaxed text-base md:text-lg">

          <section>
            <h2 className="text-xl font-bold text-black mb-4">1. Datenschutz auf einen Blick</h2>
            <p>
              <strong>Allgemeine Hinweise</strong><br/>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
              Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
              denen Sie persönlich identifiziert werden können.
            </p>
            <p className="mt-4">
              <strong>Datenerfassung auf dieser Website</strong><br/>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
              können Sie dem Impressum dieser Website entnehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">2. Verantwortliche Stelle</h2>
            <p className="mb-4">
              <strong>Super Sonic Prototypes Pte. Ltd.</strong><br/>
              [Physical Street Address]<br/>
              [Postal Code] Singapore
            </p>
            <p className="mb-4">
              E-Mail: hello@supersonic.design<br/>
              Website: https://supersonic.design
            </p>
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit 
              anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">3. Hosting & Content Delivery Networks (CDN)</h2>
            <p className="mb-4">
              <strong>Render Services, Inc.</strong><br/>
              Wir hosten unsere Website bei Render. Anbieter ist die Render Services, Inc., 525 Brannan St Ste 300, 
              San Francisco, CA 94107, USA.
            </p>
            <p className="mb-4">
              Der Serverstandort für unsere Dienste ist <strong>Frankfurt am Main, Deutschland (eu-central-1)</strong>.
              Render speichert Protokolldaten wie IP-Adressen zur Erkennung und Abwehr von Angriffen.
            </p>
            <p>
              Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse an 
              Sicherheit und Stabilität des Webauftritts).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">4. Analyse & Tracking</h2>
            <p className="mb-4">
              <strong>Umami Analytics</strong><br/>
              Wir nutzen auf dieser Website Umami, eine datenschutzfreundliche Open-Source-Webanalyse-Software.
              Umami verwendet <strong>keine Cookies</strong> und speichert keine personenbezogenen Daten.
              Alle gesammelten Daten sind anonymisiert und lassen keine Rückschlüsse auf einzelne Besucher zu.
            </p>
            <p>
              Die Erfassung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein 
              berechtigtes Interesse an der anonymisierten Analyse des Nutzerverhaltens, um sein Webangebot zu 
              optimieren. Da Umami keine personenbezogenen Daten speichert, ist keine Einwilligung (Cookie-Banner) 
              erforderlich.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">5. Kontaktformular & Anfragen</h2>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem 
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage 
              und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p className="mb-4">
              <strong>Erfasste Daten:</strong><br/>
              • Name und Firmenname<br/>
              • E-Mail-Adresse<br/>
              • Bestehende Website-URL (falls angegeben)<br/>
              • Projektziele und -anforderungen<br/>
              • Sonstige freiwillige Angaben
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO 
              (berechtigtes Interesse an der Bearbeitung von Kundenanfragen). Die Daten werden gelöscht, sobald 
              sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">6. Datenverarbeitung bei Vertragsabschluss</h2>
            <p className="mb-4">
              Bei Beauftragung unserer Dienstleistungen verarbeiten wir folgende Daten zur Vertragserfüllung:
            </p>
            <p className="mb-4">
              • Firmendaten (Name, Anschrift, Rechtsform)<br/>
              • Kontaktdaten des Ansprechpartners<br/>
              • Rechnungsdaten<br/>
              • Projektbezogene Kommunikation<br/>
              • Zugangsdaten zu bereitgestellten Systemen (falls erforderlich)
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung). Die Daten werden nach Ablauf 
              der gesetzlichen Aufbewahrungsfristen (in der Regel 10 Jahre für Geschäftsunterlagen) gelöscht.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">7. Ihre Rechte</h2>
            <p className="mb-4">
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
            </p>
            <p className="mb-4">
              • <strong>Auskunftsrecht (Art. 15 DSGVO)</strong> – Sie können Auskunft über Ihre von uns verarbeiteten 
              personenbezogenen Daten verlangen.<br/>
              • <strong>Recht auf Berichtigung (Art. 16 DSGVO)</strong> – Sie können die Berichtigung unrichtiger 
              Daten verlangen.<br/>
              • <strong>Recht auf Löschung (Art. 17 DSGVO)</strong> – Sie können die Löschung Ihrer Daten verlangen, 
              sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.<br/>
              • <strong>Recht auf Einschränkung (Art. 18 DSGVO)</strong> – Sie können die Einschränkung der 
              Verarbeitung verlangen.<br/>
              • <strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</strong> – Sie können verlangen, dass wir 
              Ihnen Ihre Daten in einem strukturierten Format übermitteln.<br/>
              • <strong>Widerspruchsrecht (Art. 21 DSGVO)</strong> – Sie können der Verarbeitung Ihrer Daten 
              widersprechen.
            </p>
            <p>
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: hello@supersonic.design
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">8. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer 
              personenbezogenen Daten zu beschweren. Für Beschwerden in Deutschland können Sie sich an die 
              zuständige Landesdatenschutzbehörde wenden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">9. SSL/TLS-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, 
              wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. 
              Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" 
              auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">10. Datenübermittlung in Drittländer</h2>
            <p className="mb-4">
              Unser Unternehmen hat seinen Sitz in Singapur. Singapur verfügt über einen Angemessenheitsbeschluss 
              der EU-Kommission, der ein angemessenes Datenschutzniveau bestätigt.
            </p>
            <p>
              Soweit wir Dienste von US-Anbietern nutzen (z.B. Render für Hosting), erfolgt dies auf Grundlage 
              von Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO) oder anderen geeigneten Garantien.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">11. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Februar 2026. Durch die 
              Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher bzw. 
              behördlicher Vorgaben kann eine Anpassung dieser Datenschutzerklärung erforderlich werden.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};
