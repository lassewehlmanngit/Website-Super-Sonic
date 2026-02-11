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
        title={cmsData.seo?.title || cmsData.title || "Datenschutz & DSGVO | Norddorf Webdesign"}
        description={cmsData.seo?.description || "Datenschutzerklärung von Norddorf. Wir schützen Ihre Daten nach strengen DSGVO-Standards. Transparente Informationen zur Datenverarbeitung."}
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
        title="Datenschutz & DSGVO | Norddorf Webdesign"
        description="Datenschutzerklärung von Norddorf. Wir schützen Ihre Daten nach strengen DSGVO-Standards. Transparente Informationen zur Datenverarbeitung."
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
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </Typography>
            <Typography variant="body" className="mb-4 text-zinc-600">
              <strong className="text-black">{businessConfig.legalName}</strong><br/>
              {businessConfig.address.street}<br/>
              {businessConfig.address.building}<br/>
              {businessConfig.address.postalCode} {businessConfig.address.city}
            </Typography>
            <Typography variant="body" className="text-zinc-600">
              E-Mail: {businessConfig.contact.email}<br/>
              Website: {businessConfig.contact.website}
            </Typography>
          </section>

          <section>
            <Typography variant="h2" className="mb-4">3. Hosting & Content Delivery Networks (CDN)</Typography>
            <Typography variant="body" className="mb-4 text-zinc-600">
              Wir hosten unsere Website bei externen Dienstleistern (z.B. Render Services, Inc.). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
            </Typography>
            <Typography variant="body" className="text-zinc-600">
              Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </Typography>
          </section>

          <section>
            <Typography variant="h2" className="mb-4">4. Analyse & Tracking</Typography>
            <Typography variant="body" className="text-zinc-600">
              Wir nutzen auf dieser Website datenschutzfreundliche Analysetools (z.B. Umami Analytics). Diese verwenden in der Regel keine Cookies und speichern keine personenbezogenen Daten. Alle gesammelten Daten sind anonymisiert und lassen keine Rückschlüsse auf einzelne Besucher zu.
            </Typography>
            <Typography variant="body" className="mt-4 text-zinc-600">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse an der Optimierung des Webangebots).
            </Typography>
          </section>

          <section>
            <Typography variant="h2" className="mb-4">5. Kontaktformular & Anfragen</Typography>
            <Typography variant="body" className="mb-4 text-zinc-600">
              Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </Typography>
            <Typography variant="body" className="text-zinc-600">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
            </Typography>
          </section>

          <section>
            <Typography variant="h2" className="mb-4">6. Datenverarbeitung bei Vertragsabschluss</Typography>
            <Typography variant="body" className="mb-4 text-zinc-600">
              Bei Beauftragung unserer Dienstleistungen (Norddorf) verarbeiten wir folgende Daten zur Vertragserfüllung:
            </Typography>
            <Typography variant="body" className="mb-4 text-zinc-600">
              • Firmendaten (Name, Anschrift, Rechtsform)<br/>
              • Kontaktdaten des Ansprechpartners<br/>
              • Rechnungsdaten<br/>
              • Projektbezogene Kommunikation
            </Typography>
            <Typography variant="body" className="text-zinc-600">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung). Die Daten werden nach Ablauf der gesetzlichen Aufbewahrungsfristen gelöscht.
            </Typography>
          </section>

          <section>
            <Typography variant="h2" className="mb-4">7. Ihre Rechte</Typography>
            <Typography variant="body" className="text-zinc-600">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </Typography>
          </section>

          <section>
            <Typography variant="h2" className="mb-4">8. SSL- bzw. TLS-Verschlüsselung</Typography>
            <Typography variant="body" className="text-zinc-600">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung.
            </Typography>
          </section>

          <section>
            <Typography variant="h2" className="mb-4">9. Datenübermittlung in Drittländer</Typography>
            <Typography variant="body" className="mb-4 text-zinc-600">
              Unser Unternehmen hat seinen Sitz in Singapur. Singapur verfügt über einen Angemessenheitsbeschluss der EU-Kommission, der ein angemessenes Datenschutzniveau bestätigt.
            </Typography>
            <Typography variant="body" className="text-zinc-600">
              Soweit wir Dienste von anderen Anbietern in Drittländern nutzen, erfolgt dies auf Grundlage geeigneter Garantien (z.B. Standardvertragsklauseln).
            </Typography>
          </section>

          <section>
            <Typography variant="body" className="text-sm text-zinc-500">
              Stand: Februar 2026
            </Typography>
          </section>

        </div>
      </Container>
    </Section>
  );
};
