import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { theme, pdfStyles } from './styles';
import { CoverPage, Footer, Logo } from './SharedComponents';

export const MVPProtocolPDF: React.FC = () => (
  <Document>
    <CoverPage 
        title="The MVP Protocol" 
        subtitle="Don't burn budget on a bad MVP. A strict framework for shipping V1."
        targetAudience="App Founders & Technical Leads"
    />

    <Page size="A4" style={{...pdfStyles.page, padding: theme.spacing.xl}}>
        <View style={{ marginBottom: theme.spacing.xl }}>
            <Logo />
            <Text style={pdfStyles.h2}>Executive Summary</Text>
            <Text style={pdfStyles.text}>
                We do not deal in "best practices," which are often just the average of everyone else's mediocrity. We deal in proven patterns—data-backed methodologies derived from Y-Combinator successes and quantitative market analysis.
            </Text>
            <Text style={pdfStyles.text}>
                This document serves as the operating manual for App Founders who need to ship before they starve.
            </Text>
        </View>

        <View style={pdfStyles.divider} />

        <Text style={pdfStyles.h2}>1. The 72-Hour Feature Limit</Text>
        <Text style={pdfStyles.text}>
            In software engineering, complexity scales exponentially. To counteract the "Cone of Uncertainty," we impose a draconian constraint: The 72-Hour Rule.
        </Text>
        
        <View style={pdfStyles.card}>
            <Text style={{...pdfStyles.text, fontWeight: 'bold', color: theme.colors.orange}}>THE RULE</Text>
            <Text style={{...pdfStyles.text, fontStyle: 'italic'}}>
                "Any single feature requiring more than 72 hours (3 engineering days) to implement in its viable state is effectively 'vaporware' for V1. It must be cut, simplified, or deferred."
            </Text>
        </View>

        <Text style={pdfStyles.h3}>The Cut Classification Matrix</Text>
        
        {/* Table-like structure */}
        <View style={{ marginTop: theme.spacing.md }}>
            <CutItem 
                title="Authentication" 
                choice="Social Login vs. Custom" 
                verdict="CUT CUSTOM" 
                reason="Building robust auth takes weeks. Firebase/Auth0 takes <4 hours. Save >100h."
            />
            <CutItem 
                title="Payments" 
                choice="Stripe Checkout vs. Custom UI" 
                verdict="CUT CUSTOM" 
                reason="PCI compliance and state management are heavy. Stripe Page converts just as well for V1."
            />
             <CutItem 
                title="Admin Dashboard" 
                choice="Retool/SQL vs. Custom Panel" 
                verdict="CUT CUSTOM" 
                reason="Users never see the admin panel. Don't waste V1 engineering cycles on internal tools."
            />
        </View>
        
        <Footer currentPage={2} totalPages={3} />
    </Page>

    <Page size="A4" style={{...pdfStyles.page, padding: theme.spacing.xl}}>
        <View style={{ marginTop: theme.spacing.lg }}>
            <Text style={pdfStyles.h2}>2. Technical Debt vs. Velocity</Text>
            <Text style={pdfStyles.text}>
                Tech Debt is not a mistake; it is leverage. You take on debt to fuel velocity.
            </Text>

            <View style={{ flexDirection: 'row', gap: 10, marginTop: 10, marginBottom: 20 }}>
                <StageCard title="Prototype (Pre-PMF)" strategy="Quick & Dirty" desc="Speed is the only currency. Monolithic. Hardcoded." />
                <StageCard title="Scale (Post-PMF)" strategy="Robust" desc="Reliability is a feature. Microservices. Strict Types." />
            </View>

            <Text style={pdfStyles.h2}>3. The "Anti-Pitch" Deck</Text>
            <Text style={pdfStyles.text}>
                Investors spend ~3m 44s on a deck. Cut the fluff. Focus on these 5 slides.
            </Text>

            <View style={{ marginTop: 10 }}>
                <SlideItem num="01" title="The Problem (P.A.I.N.)" desc="Precise, Acute, Intense, Numerous. Quantify the friction ($)." />
                <SlideItem num="02" title="The Solution (Value Delta)" desc="The mathematical efficiency gain (e.g., 24x faster)." />
                <SlideItem num="03" title="Traction (Growth Vector)" desc="10% Week-over-Week growth. Rate of change > Absolute numbers." />
                <SlideItem num="04" title="The Market (Bottom-Up)" desc="TAM = Total Target Users * ACV. Reject top-down laziness." />
            </View>
        </View>

        <View style={{ marginTop: 'auto', marginBottom: 40 }}>
             <Text style={pdfStyles.small}>REFERENCES</Text>
             <Text style={{...pdfStyles.small, fontSize: 8, marginTop: 5}}>
                [2] iSyncEvolution - Feature Prioritization | [4] Lovable - MVP Guide | [17] Qubit Capital - Pitch Decks
             </Text>
        </View>

        <Footer currentPage={3} totalPages={3} />
    </Page>
  </Document>
);

const CutItem = ({ title, choice, verdict, reason }: any) => (
    <View style={{ marginBottom: 15, borderLeft: `2pt solid ${theme.colors.zinc200}`, paddingLeft: 10 }}>
        <Text style={{ fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase', color: theme.colors.zinc500 }}>{title}</Text>
        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{choice}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
            <Text style={{ fontSize: 10, fontWeight: 'bold', color: theme.colors.orange, backgroundColor: theme.colors.zinc100, padding: 2 }}>{verdict}</Text>
        </View>
        <Text style={{ fontSize: 10, color: theme.colors.zinc500 }}>{reason}</Text>
    </View>
);

const StageCard = ({ title, strategy, desc }: any) => (
    <View style={{ flex: 1, backgroundColor: theme.colors.zinc50, padding: 10, borderRadius: 4 }}>
        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{title}</Text>
        <Text style={{ fontSize: 12, fontWeight: 'bold', color: theme.colors.orange, marginVertical: 4 }}>{strategy}</Text>
        <Text style={{ fontSize: 9, color: theme.colors.zinc500 }}>{desc}</Text>
    </View>
);

const SlideItem = ({ num, title, desc }: any) => (
    <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: theme.colors.zinc200, marginRight: 10 }}>{num}</Text>
        <View>
            <Text style={{ fontSize: 11, fontWeight: 'bold' }}>{title}</Text>
            <Text style={{ fontSize: 10, color: theme.colors.zinc500 }}>{desc}</Text>
        </View>
    </View>
);

