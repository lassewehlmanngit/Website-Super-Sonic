import React from 'react';
import { SEO } from '../components/SEO';

export const AGB: React.FC = () => {
  return (
    <div className="bg-paper min-h-screen pt-32 md:pt-40 pb-16 md:pb-20 relative overflow-hidden">
      <SEO
        title="AGB | Norddorf"
        description="Allgemeine Geschäftsbedingungen für Website-Entwicklung und digitale Dienstleistungen."
        lang="de"
        path="/de/agb"
      />

      <div className="container-responsive max-w-3xl mx-auto relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black mb-8 md:mb-12 tracking-tighter">
          Allgemeine Geschäftsbedingungen
        </h1>

        <div className="space-y-6 md:space-y-8 text-zinc-600 leading-relaxed text-base md:text-lg">

          <section>
            <h2 className="text-xl font-bold text-black mb-4">§ 1 Geltungsbereich</h2>
            <p className="mb-4">
              (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen Norddorf 
              (nachfolgend „Auftragnehmer") und dem Kunden (nachfolgend „Auftraggeber") 
              über die Erstellung von Websites, Webanwendungen und damit verbundenen digitalen Dienstleistungen.
            </p>
            <p className="mb-4">
              (2) Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Auftraggebers 
              werden nur dann und insoweit Vertragsbestandteil, als der Auftragnehmer ihrer Geltung ausdrücklich 
              schriftlich zugestimmt hat.
            </p>
            <p>
              (3) Diese AGB gelten ausschließlich gegenüber Unternehmern im Sinne von § 14 BGB. Der Auftragnehmer 
              erbringt keine Leistungen an Verbraucher.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">§ 2 Vertragsgegenstand</h2>
            <p className="mb-4">
              (1) Der Auftragnehmer erbringt Dienstleistungen im Bereich Webentwicklung, insbesondere:
            </p>
            <p className="mb-4">
              • Konzeption und Design von Websites<br/>
              • Technische Entwicklung und Programmierung<br/>
              • Integration von Content-Management-Systemen (CMS)<br/>
              • Suchmaschinenoptimierung (SEO)<br/>
              • Barrierefreiheit nach BFSG/WCAG<br/>
              • Übergabe des vollständigen Quellcodes
            </p>
            <p>
              (2) Der konkrete Leistungsumfang ergibt sich aus dem individuellen Angebot bzw. der Auftragsbestätigung.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">§ 3 Vertragsschluss</h2>
            <p className="mb-4">
              (1) Die Darstellung der Leistungen auf der Website stellt kein rechtlich bindendes Angebot dar, 
              sondern eine Aufforderung zur Abgabe eines Angebots.
            </p>
            <p className="mb-4">
              (2) Der Vertrag kommt durch die schriftliche Auftragsbestätigung des Auftragnehmers oder durch 
              Beginn der Leistungserbringung zustande.
            </p>
            <p>
              (3) Der kostenlose Design-Entwurf („Gratisentwurf") stellt kein bindendes Angebot dar und 
              verpflichtet den Auftraggeber nicht zur Beauftragung.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">§ 4 Preise und Zahlung</h2>
            <p className="mb-4">
              (1) Es gelten die im Angebot genannten Festpreise. Alle Preise verstehen sich netto zuzüglich 
              der gesetzlichen Umsatzsteuer, sofern anwendbar.
            </p>
            <p className="mb-4">
              (2) Für Kunden mit Sitz in Deutschland gilt das Reverse-Charge-Verfahren gemäß § 13b UStG. 
              Der Auftraggeber schuldet die Umsatzsteuer.
            </p>
            <p className="mb-4">
              (3) Die Zahlung erfolgt wie folgt:<br/>
              • 50% bei Auftragserteilung (Anzahlung)<br/>
              • 50% bei Projektabnahme
            </p>
            <p>
              (4) Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zahlbar.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">§ 5 Lieferzeit und Leistungserbringung</h2>
            <p className="mb-4">
              (1) Die Lieferzeit beträgt in der Regel 14 Werktage ab Auftragsbestätigung und Erhalt aller 
              erforderlichen Materialien vom Auftraggeber.
            </p>
            <p className="mb-4">
              (2) Die Lieferfrist verlängert sich angemessen bei:<br/>
              • Verzögerter Zulieferung von Inhalten durch den Auftraggeber<br/>
              • Umfangreichen Änderungswünschen während der Projektlaufzeit<br/>
              • Höherer Gewalt oder unvorhersehbaren Umständen
            </p>
            <p>
              (3) Der Auftragnehmer ist zu Teillieferungen berechtigt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">§ 6 Mitwirkungspflichten des Auftraggebers</h2>
            <p className="mb-4">
              (1) Der Auftraggeber ist verpflichtet, alle für die Durchführung des Projekts erforderlichen 
              Informationen, Materialien und Zugänge rechtzeitig und vollständig bereitzustellen, insbesondere:
            </p>
            <p className="mb-4">
              • Texte, Bilder und sonstige Inhalte<br/>
              • Logo und Corporate-Design-Vorgaben<br/>
              • Zugangsdaten zu bestehenden Systemen (falls erforderlich)<br/>
              • Domain- und Hosting-Zugänge für die Veröffentlichung<br/>
              • Zeitnahe Rückmeldungen und Freigaben
            </p>
            <p>
              (2) Der Auftraggeber stellt sicher, dass er über alle erforderlichen Rechte an den bereitgestellten 
              Materialien verfügt und diese frei von Rechten Dritter sind.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">§ 7 Abnahme und Änderungswünsche</h2>
            <p className="mb-4">
              (1) Nach Fertigstellung wird das Projekt dem Auftraggeber zur Abnahme vorgelegt. Die Abnahme 
              gilt als erfolgt, wenn der Auftraggeber nicht innerhalb von 14 Tagen nach Bereitstellung 
              schriftlich begründete Mängel rügt.
            </p>
            <p className="mb-4">
              (2) Der Auftraggeber hat nach der Abnahme einmalig die Möglichkeit, innerhalb von 14 Tagen 
              einen Änderungswunsch („Joker-Request") geltend zu machen. Dieser umfasst kleinere Anpassungen 
              wie Farbänderungen, Textanpassungen oder das Hinzufügen einzelner Funktionen (z.B. Blog).
            </p>
            <p>
              (3) Umfangreiche Änderungen oder Erweiterungen, die über den Joker-Request hinausgehen, werden 
              gesondert berechnet.
            </p>
          </section>

          <section className="bg-zinc-100 p-6 rounded-lg border-l-4 border-black">
            <h2 className="text-xl font-bold text-black mb-4">§ 8 Übergabe und Verantwortungsübergang</h2>
            <p className="mb-4">
              <strong>(1) Mit der Übergabe des Projekts (Quellcode, Zugangsdaten, Dokumentation) geht die 
              vollständige Verantwortung für die Website auf den Auftraggeber über.</strong>
            </p>
            <p className="mb-4">
              (2) Ab dem Zeitpunkt der Übergabe ist der Auftraggeber allein verantwortlich für:
            </p>
            <p className="mb-4">
              • <strong>Sicherheit:</strong> Absicherung der Website gegen unbefugte Zugriffe, Implementierung 
              von Sicherheitsupdates, Schutz vor Cyberangriffen<br/>
              • <strong>Konfiguration:</strong> Korrekte Einrichtung und Pflege von Hosting, Domain, SSL-Zertifikaten, 
              E-Mail-Diensten und sonstigen Drittanbieterdiensten<br/>
              • <strong>Wartung:</strong> Regelmäßige Updates von Abhängigkeiten, Backups und technische Instandhaltung<br/>
              • <strong>Rechtliche Compliance:</strong> Einhaltung von DSGVO, Impressumspflicht, Cookie-Richtlinien 
              und sonstigen rechtlichen Anforderungen<br/>
              • <strong>Inhalte:</strong> Rechtmäßigkeit und Aktualität aller veröffentlichten Inhalte
            </p>
            <p className="mb-4">
              (3) <strong>Der Auftraggeber ist verpflichtet, die übergebene Website vor dem Live-Gang eigenständig 
              zu prüfen</strong>, insbesondere hinsichtlich:
            </p>
            <p className="mb-4">
              • Funktionalität aller Features und Formulare<br/>
              • Korrektheit der dargestellten Inhalte<br/>
              • Kompatibilität mit der gewählten Hosting-Umgebung<br/>
              • Sicherheitskonfiguration<br/>
              • Einhaltung rechtlicher Anforderungen
            </p>
            <p>
              (4) Der Auftragnehmer haftet nicht für Schäden, die nach der Übergabe durch Fehlkonfiguration, 
              unterlassene Wartung, Sicherheitslücken durch Drittanbieter-Software oder unsachgemäße Handhabung 
              durch den Auftraggeber entstehen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">§ 9 Eigentum und Nutzungsrechte</h2>
            <p className="mb-4">
              (1) Mit vollständiger Bezahlung erhält der Auftraggeber das uneingeschränkte, zeitlich und 
              räumlich unbegrenzte Nutzungsrecht am erstellten Quellcode und allen Projektdateien.
            </p>
            <p className="mb-4">
              (2) Der Auftraggeber erhält das Recht, die Website zu nutzen, zu modifizieren, weiterzuentwickeln 
              und an Dritte zu übertragen.
            </p>
            <p className="mb-4">
              (3) Ausgenommen von der Rechteübertragung sind:<br/>
              • Lizenzen von Drittanbieter-Software (z.B. Open-Source-Bibliotheken), die ihren eigenen 
              Lizenzbedingungen unterliegen<br/>
              • Das zugrunde liegende Framework des Auftragnehmers („Norddorf-Framework"), das weiterhin für 
              andere Projekte genutzt werden darf
            </p>
            <p>
              (4) Der Auftragnehmer behält sich das Recht vor, das Projekt anonymisiert als Referenz zu nutzen, 
              sofern der Auftraggeber nicht ausdrücklich widerspricht.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">§ 10 Gewährleistung</h2>
            <p className="mb-4">
              (1) Der Auftragnehmer gewährleistet, dass die Website zum Zeitpunkt der Übergabe den vereinbarten 
              Spezifikationen entspricht und frei von wesentlichen Mängeln ist.
            </p>
            <p className="mb-4">
              (2) Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme.
            </p>
            <p className="mb-4">
              (3) Mängel sind unverzüglich nach Entdeckung schriftlich anzuzeigen. Der Auftragnehmer hat das 
              Recht zur Nachbesserung.
            </p>
            <p className="mb-4">
              (4) <strong>Von der Gewährleistung ausgeschlossen sind:</strong>
            </p>
            <p className="mb-4">
              • Mängel, die durch Änderungen des Auftraggebers oder Dritter verursacht wurden<br/>
              • Probleme durch inkompatible Hosting-Umgebungen oder Drittanbieter-Dienste<br/>
              • Fehler durch unsachgemäße Bedienung oder Konfiguration<br/>
              • Sicherheitslücken, die nach der Übergabe durch unterlassene Updates entstehen<br/>
              • Änderungen in externen APIs oder Diensten<br/>
              • Browser-Inkompatibilitäten, die nach Projektabschluss durch Browser-Updates entstehen
            </p>
            <p>
              (5) Die Gewährleistung erstreckt sich nicht auf die dauerhafte Funktionsfähigkeit von 
              Drittanbieter-Integrationen (z.B. Social-Media-Einbindungen, externe APIs).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">§ 11 Haftungsbeschränkung</h2>
            <p className="mb-4">
              (1) Der Auftragnehmer haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers 
              oder der Gesundheit sowie für Vorsatz und grobe Fahrlässigkeit.
            </p>
            <p className="mb-4">
              (2) Bei leichter Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung wesentlicher 
              Vertragspflichten (Kardinalpflichten). Die Haftung ist in diesem Fall auf den vorhersehbaren, 
              vertragstypischen Schaden begrenzt.
            </p>
            <p className="mb-4">
              (3) Die Haftung ist in jedem Fall auf die Höhe des Auftragswertes begrenzt.
            </p>
            <p className="mb-4">
              (4) <strong>Der Auftragnehmer haftet insbesondere nicht für:</strong>
            </p>
            <p className="mb-4">
              • Datenverlust beim Auftraggeber<br/>
              • Ausfälle oder Fehler von Hosting-Anbietern oder Drittdiensten<br/>
              • Schäden durch Cyberangriffe nach der Projektübergabe<br/>
              • Umsatzeinbußen oder entgangenen Gewinn<br/>
              • Schäden durch fehlerhafte Inhalte, die vom Auftraggeber bereitgestellt wurden<br/>
              • Rechtsverstöße durch vom Auftraggeber veröffentlichte Inhalte
            </p>
            <p>
              (5) Der Auftraggeber ist verpflichtet, regelmäßige Backups seiner Website anzufertigen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">§ 12 Vertraulichkeit</h2>
            <p className="mb-4">
              (1) Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erlangten vertraulichen 
              Informationen geheim zu halten und nicht an Dritte weiterzugeben.
            </p>
            <p>
              (2) Diese Verpflichtung gilt auch nach Beendigung des Vertragsverhältnisses fort.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">§ 13 Kündigung</h2>
            <p className="mb-4">
              (1) Der Auftraggeber kann den Vertrag jederzeit kündigen. In diesem Fall sind die bis zur 
              Kündigung erbrachten Leistungen zu vergüten.
            </p>
            <p className="mb-4">
              (2) Bei Kündigung nach Projektbeginn wird mindestens die Anzahlung (50%) einbehalten.
            </p>
            <p>
              (3) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">§ 14 Schlussbestimmungen</h2>
            <p className="mb-4">
              (1) Es gilt das Recht der Republik Singapur unter Ausschluss des UN-Kaufrechts.
            </p>
            <p className="mb-4">
              (2) Gerichtsstand für alle Streitigkeiten ist Singapur, sofern nicht zwingende gesetzliche 
              Vorschriften dem entgegenstehen.
            </p>
            <p className="mb-4">
              (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit 
              der übrigen Bestimmungen unberührt.
            </p>
            <p>
              (4) Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform.
            </p>
          </section>

          <section>
            <p className="text-sm text-zinc-500">
              Stand: Februar 2026<br/>
              Norddorf
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};
