import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { theme, pdfStyles } from './styles';
import { CoverPage, Footer, Logo } from './SharedComponents';

export const PricingGuidePDF: React.FC = () => (
  <Document>
    <CoverPage 
        title="Pricing & ROI Guide" 
        subtitle="High-performance design is an asset, not a cost. See the math behind the pricing."
        targetAudience="Business Owners"
    />

    <Page size="A4" style={{...pdfStyles.page, padding: theme.spacing.xl}}>
        <View style={{ marginBottom: theme.spacing.xl }}>
            <Logo />
            <Text style={pdfStyles.h2}>Executive Summary</Text>
            <Text style={pdfStyles.text}>
                A website is not a digital brochure. It is a capital asset—a machine designed to process traffic and output revenue. The "cheapest" website is often the most expensive liability a business can own.
            </Text>
        </View>

        <View style={pdfStyles.divider} />

        <Text style={pdfStyles.h2}>1. The "Hidden Cost" Equation</Text>
        <Text style={pdfStyles.text}>
            Business owners fixate on Principal Cost (P) but ignore Lost Revenue (L).
        </Text>
        
        <View style={{ backgroundColor: theme.colors.zinc50, padding: 15, borderRadius: 8, marginVertical: 10 }}>
            <Text style={{ fontSize: 14, fontFamily: 'Helvetica-Bold', textAlign: 'center' }}>
                True Cost = Principal + (OpEx * Time) + Lost Revenue
            </Text>
        </View>

        <Text style={pdfStyles.h3}>The Calculation of Loss</Text>
        <Text style={pdfStyles.text}>Model: Business with 10k visitors/mo and $100 LTV.</Text>

        <View style={{ flexDirection: 'row', gap: 15, marginTop: 10 }}>
            <View style={{ flex: 1, border: `1pt solid ${theme.colors.zinc200}`, padding: 10, borderRadius: 4 }}>
                <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 5 }}>Scenario A: DIY Site</Text>
                <Text style={pdfStyles.small}>Cost: $500</Text>
                <Text style={pdfStyles.small}>Load Time: 5s</Text>
                <Text style={{ fontSize: 10, marginTop: 5, color: theme.colors.orange }}>Conv. Rate: ~1.0%</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>$120k / yr</Text>
            </View>

             <View style={{ flex: 1, backgroundColor: theme.colors.zinc800, padding: 10, borderRadius: 4 }}>
                <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 5, color: theme.colors.white }}>Scenario B: SuperSonic</Text>
                <Text style={{...pdfStyles.small, color: theme.colors.zinc400}}>Cost: $10,000</Text>
                <Text style={{...pdfStyles.small, color: theme.colors.zinc400}}>Load Time: 0.8s</Text>
                <Text style={{ fontSize: 10, marginTop: 5, color: theme.colors.orange }}>Conv. Rate: ~3.0%</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10, color: theme.colors.white }}>$360k / yr</Text>
            </View>
        </View>

        <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: theme.colors.orange }}>RESULT:</Text>
            <Text style={pdfStyles.text}>
                The "cheap" site costs you <Text style={{ fontWeight: 'bold' }}>$240,000 per year</Text> in lost revenue. The $10k investment pays for itself in 15 days.
            </Text>
        </View>

        <Footer currentPage={2} totalPages={3} />
    </Page>

    <Page size="A4" style={{...pdfStyles.page, padding: theme.spacing.xl}}>
        <View style={{ marginTop: theme.spacing.lg }}>
            <Text style={pdfStyles.h2}>2. Sourcing Matrix</Text>
            <Text style={pdfStyles.text}>
                Who should build your digital asset?
            </Text>

            <View style={{ marginTop: 10 }}>
                <SourcingItem 
                    title="Freelancer" 
                    cost="Low ($50-$100/h)" 
                    risk="Critical (Bus Factor 1)" 
                    verdict="Good for small tasks (<$5k). Dangerous for core assets." 
                />
                 <SourcingItem 
                    title="Agency (SuperSonic)" 
                    cost="Medium ($100-$200/h)" 
                    risk="Low (Redundancy)" 
                    verdict="Best for mission-critical builds and scaling." 
                />
                 <SourcingItem 
                    title="In-House Team" 
                    cost="High (Salary + Overhead)" 
                    risk="Medium (Turnover)" 
                    verdict="Only viable for SaaS products." 
                />
            </View>
        </View>

         <View style={{ marginTop: 30 }}>
            <Text style={pdfStyles.h2}>3. Investment Tiers (2025)</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottom: `1pt solid ${theme.colors.zinc200}`, paddingBottom: 5, marginBottom: 5 }}>
                 <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Budget</Text>
                 <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Architecture</Text>
                 <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Ideal For</Text>
            </View>
             <TierRow budget="$5k" arch="Static / Template" ideal="Local Business" />
             <TierRow budget="$15k" arch="Headless / Custom" ideal="Startups / B2B" />
             <TierRow budget="$50k+" arch="Web App / Platform" ideal="SaaS / FinTech" />
        </View>

        <Footer currentPage={3} totalPages={3} />
    </Page>
  </Document>
);

const SourcingItem = ({ title, cost, risk, verdict }: any) => (
    <View style={{ marginBottom: 15 }}>
        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{title}</Text>
        <View style={{ flexDirection: 'row', gap: 20, marginVertical: 4 }}>
            <Text style={{ fontSize: 10, color: theme.colors.zinc500 }}>Cost: {cost}</Text>
            <Text style={{ fontSize: 10, color: theme.colors.zinc500 }}>Risk: {risk}</Text>
        </View>
        <Text style={{ fontSize: 10, fontStyle: 'italic' }}>{verdict}</Text>
    </View>
);

const TierRow = ({ budget, arch, ideal }: any) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottom: `1pt solid ${theme.colors.zinc100}` }}>
         <Text style={{ fontSize: 10, width: '20%' }}>{budget}</Text>
         <Text style={{ fontSize: 10, width: '40%' }}>{arch}</Text>
         <Text style={{ fontSize: 10, width: '40%', textAlign: 'right' }}>{ideal}</Text>
    </View>
);

