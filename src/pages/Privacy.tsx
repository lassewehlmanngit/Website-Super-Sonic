import React, { useState, useEffect } from 'react';
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { SEO } from '../components/SEO';
import { businessConfig } from '../config/business';
import { Typography } from '../components/atoms/Typography';
import { Container } from '../components/atoms/Container';
import { Section } from '../components/atoms/Section';

const markdownComponents = {
  h1: (props: any) => <Typography variant="h1" as="h1" className="mb-8 md:mb-12" {...props} />,
  h2: (props: any) => <Typography variant="h2" as="h2" className="mb-4 mt-8" {...props} />,
  h3: (props: any) => <Typography variant="h3" as="h3" className="mb-3 mt-6" {...props} />,
  p: (props: any) => <Typography variant="body" as="p" className="mb-4 text-zinc-600" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-5 mb-4 text-zinc-600 space-y-2" {...props} />,
  li: (props: any) => <li className="pl-1" {...props} ><Typography variant="body" as="span" {...props} /></li>,
};

export const Privacy: React.FC = () => {
  const [initialData, setInitialData] = useState<any>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/content/privacy/privacy.json');
        if (response.ok) {
          const data = await response.json();
          setInitialData({ privacy: data });
        }
      } catch (e) {
        console.log("No CMS content found for Privacy page, using fallback.");
      }
    };
    fetchContent();
  }, []);

  const { data } = useTina({
    query: `
      query Privacy($relativePath: String!) {
        privacy(relativePath: $relativePath) {
          title
          sections {
            title
            content
          }
          seo {
            title
            description
          }
        }
      }
    `,
    variables: { relativePath: "privacy.json" },
    data: initialData || {},
  });

  const cmsData = data?.privacy;

  if (cmsData) {
    return (
      <Section background="paper" className="pt-32 md:pt-40 pb-16 md:pb-20 relative overflow-hidden">
        <SEO
          title={cmsData.seo?.title || cmsData.title || "Datenschutzerklärung | Norddorf"}
          description={cmsData.seo?.description || "Informationen zur Datenverarbeitung und DSGVO-Konformität bei Norddorf."}
          lang="de"
          path="/de/datenschutz"
        />

        <Container className="max-w-3xl relative z-10">
          <Typography variant="h1" className="mb-8 md:mb-12">
            {cmsData.title}
          </Typography>

          <div className="space-y-6 md:space-y-8">
            {cmsData.sections?.map((section: any, index: number) => (
              <section key={index}>
                {section.title && (
                  <Typography variant="h2" className="mb-4">{section.title}</Typography>
                )}
                <div className="prose prose-zinc max-w-none">
                  <TinaMarkdown content={section.content} components={markdownComponents} />
                </div>
              </section>
            ))}
          </div>
        </Container>
      </Section>
    );
  }

  // Fallback to Hardcoded Content
  return (
    <Section background="paper" className="pt-32 md:pt-40 pb-16 md:pb-20 relative overflow-hidden">
      <SEO
        title="Datenschutzerklärung | Norddorf"
        description="Informationen zur Datenverarbeitung und DSGVO-Konformität bei Norddorf."
        lang="de"
        path="/de/datenschutz"
      />

      <Container className="max-w-3xl relative z-10">
        <Typography variant="h1" className="mb-8 md:mb-12">Datenschutzerklärung</Typography>

        <div className="space-y-6 md:space-y-8">

          <section>
            <Typography variant="h2" className="mb-4">1. Datenschutz auf einen Blick</Typography>
            <Typography variant="body" className="mb-4 text-zinc-600">
              <strong className="text-black">Allgemeine Hinweise</strong><br/>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
              Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
              denen Sie persönlich identifiziert werden können.
            </Typography>
            <Typography variant="body" className="mt-4 text-zinc-600">
              <strong className="text-black">Datenerfassung auf dieser Website</strong><br/>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
              können Sie dem Impressum dieser Website entnehmen.
            </Typography>
          </section>

          <section>
            <Typography variant="h2" className="mb-4">2. Verantwortliche Stelle</Typography>
            <Typography variant="body" className="mb-4 text-zinc-600">
              <strong className="text-black">{businessConfig.name}</strong><br/>
              {businessConfig.address.street}<br/>
              {businessConfig.address.postalCode} {businessConfig.address.city}
            </Typography>
            <Typography variant="body" className="mb-4 text-zinc-600">
              E-Mail: {businessConfig.contact.email}<br/>
              Website: {businessConfig.contact.website}
            </Typography>
            <Typography variant="body" className="text-zinc-600">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit 
              anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
            </Typography>
          </section>

          <section>
            <Typography variant="h2" className="mb-4">3. Hosting & Content Delivery Networks (CDN)</Typography>
            <Typography variant="body" className="mb-4 text-zinc-600">
              <strong className="text-black">Render Services, Inc.</strong><br/>
              Wir hosten unsere Website bei Render. Anbieter ist die Render Services, Inc., 525 Brannan St Ste 300, 
              San Francisco, CA 94107, USA.
            </Typography>
            <Typography variant="body" className="mb-4 text-zinc-600">
              Der Serverstandort für unsere Dienste ist <strong className="text-black">Frankfurt am Main, Deutschland (eu-central-1)</strong>.
              Render speichert Protokolldaten wie IP-Adressen zur Erkennung und Abwehr von Angriffen.
            </Typography>
            <Typography variant="body" className="text-zinc-600">
              Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse an 
              Sicherheit und Stabilität des Webauftritts).
            </Typography>
          </section>

          <section>
            <Typography variant="h2" className="mb-4">4. Analyse & Tracking</Typography>
            <Typography variant="body" className="mb-4 text-zinc-600">
              <strong className="text-black">Umami Analytics</strong><br/>
              Wir nutzen auf dieser Website Umami, eine datenschutzfreundliche Open-Source-Webanalyse-Software.
              Umami verwendet <strong className="text-black">keine Cookies</strong> und speichert keine personenbezogenen Daten.
              Alle gesammelten Daten sind anonymisiert und lassen keine Rückschlüsse auf einzelne Besucher zu.
            </Typography>
            <Typography variant="body" className="text-zinc-600">
              Die Erfassung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein 
              berechtigtes Interesse an der anonymisierten Analyse des Nutzerverhaltens, um sein Webangebot zu 
              optimieren. Da Umami keine personenbezogenen Daten speichert, ist keine Einwilligung (Cookie-Banner) 
              erforderlich.
            </Typography>
          </section>

          <section>
            <Typography variant="h2" className="mb-4">5. Kontaktformular & Anfragen</Typography>
            <Typography variant="body" className="mb-4 text-zinc-600">
              Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem 
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage 
              und für den Fall von Anschlussfragen bei uns gespeichert.
            </Typography>
            <Typography variant="body" className="mb-4 text-zinc-600">
              <strong className="text-black">Erfasste Daten:</strong><br/>
              • Name und Firmenname<br/>
              • E-Mail-Adresse<br/>
              • Bestehende Website-URL (falls angegeben)<br/>
              • Projektziele und -anforderungen<br/>
              • Sonstige freiwillige Angaben
            </Typography>
            <Typography variant="body" className="text-zinc-600">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO 
              (berechtigtes Interesse an der Bearbeitung von Kundenanfragen). Die Daten werden gelöscht, sobald 
              sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind.
            </Typography>
          </section>

          <section>
            <Typography variant="h2" className="mb-4">6. Datenverarbeitung bei Vertragsabschluss</Typography>
            <Typography variant="body" className="mb-4 text-zinc-600">
              Bei Beauftragung unserer Dienstleistungen verarbeiten wir folgende Daten zur Vertragserfüllung:
            </Typography>
            <Typography variant="body" className="mb-4 text-zinc-600">
              • Firmendaten (Name, Anschrift, Rechtsform)<br/>
              • Kontaktdaten des Ansprechpartners<br/>
              • Rechnungsdaten<br/>
              • Projektbezogene Kommunikation<br/>
              • Zugangsdaten zu bereitgestellten Systemen (falls erforderlich)
            </Typography>
            <Typography variant="body" className="text-zinc-600">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung). Die Daten werden nach Ablauf 
              der gesetzlichen Aufbewahrungsfristen (in der Regel 10 Jahre für Geschäftsunterlagen) gelöscht.
            </Typography>
          </section>

          <section>
            <Typography variant="h2" className="mb-4">7. Ihre Rechte</Typography>
            <Typography variant="body" className="mb-4 text-zinc-600">
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
            </Typography>
            <Typography variant="body" className="mb-4 text-zinc-600">
              • <strong className="text-black">Auskunftsrecht (Art. 15 DSGVO)</strong> – Sie können Auskunft über Ihre von uns verarbeiteten 
              personenbezogenen Daten verlangen.<br/>
              • <strong className="text-black">Recht auf Berichtigung (Art. 16 DSGVO)</strong> – Sie können die Berichtigung unrichtiger 
              Daten verlangen.<br/>
              • <strong className="text-black">Recht auf Löschung (Art. 17 DSGVO)</strong> – Sie können die Löschung Ihrer Daten verlangen, 
              sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.<br/>
              • <strong className="text-black">Recht auf Einschränkung (Art. 18 DSGVO)</strong> – Sie können die Einschränkung der 
              Verarbeitung verlangen.<br/>
              • <strong className="text-black">Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</strong> – Sie können verlangen, dass wir 
              Ihnen Ihre Daten in einem strukturierten Format übermitteln.<br/>
              • <strong className="text-black">Widerspruchsrecht (Art. 21 DSGVO)</strong> – Sie können der Verarbeitung Ihrer Daten 
              widersprechen.
            </Typography>
            <Typography variant="body" className="text-zinc-600">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: hello@norddorf.com
            </Typography>
          </section>

          <section>
            <Typography variant="h2" className="mb-4">8. Beschwerderecht bei der Aufsichtsbehörde</Typography>
            <Typography variant="body" className="text-zinc-600">
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer 
              personenbezogenen Daten zu beschweren. Für Beschwerden in Deutschland können Sie sich an die 
              zuständige Landesdatenschutzbehörde wenden.
            </Typography>
          </section>

          <section>
            <Typography variant="h2" className="mb-4">9. SSL/TLS-Verschlüsselung</Typography>
            <Typography variant="body" className="text-zinc-600">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, 
              wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. 
              Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" 
              auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </Typography>
          </section>

          <section>
            <Typography variant="h2" className="mb-4">10. Datenübermittlung in Drittländer</Typography>
            <Typography variant="body" className="mb-4 text-zinc-600">
              Unser Unternehmen hat seinen Sitz in Singapur. Singapur verfügt über einen Angemessenheitsbeschluss 
              der EU-Kommission, der ein angemessenes Datenschutzniveau bestätigt.
            </Typography>
            <Typography variant="body" className="text-zinc-600">
              Soweit wir Dienste von US-Anbietern nutzen (z.B. Render für Hosting), erfolgt dies auf Grundlage 
              von Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO) oder anderen geeigneten Garantien.
            </Typography>
          </section>

          <section>
            <Typography variant="h2" className="mb-4">11. Aktualität und Änderung dieser Datenschutzerklärung</Typography>
            <Typography variant="body" className="text-zinc-600">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Februar 2026. Durch die 
              Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher bzw. 
              behördlicher Vorgaben kann eine Anpassung dieser Datenschutzerklärung erforderlich werden.
            </Typography>
          </section>

        </div>
      </Container>
    </Section>
  );
};
