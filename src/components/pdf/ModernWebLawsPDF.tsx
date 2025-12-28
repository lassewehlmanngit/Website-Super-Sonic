import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { theme, pdfStyles } from './styles';
import { CoverPage, Footer, Logo } from './SharedComponents';

export const ModernWebLawsPDF: React.FC = () => (
  <Document>
    <CoverPage 
        title="Modern Web Laws" 
        subtitle="Your website has holes. We found 7 things modern sites use to win."
        targetAudience="General Leads / Growth Leaders"
    />

    <Page size="A4" style={{...pdfStyles.page, padding: theme.spacing.xl}}>
        <View style={{ marginBottom: theme.spacing.xl }}>
            <Logo />
            <Text style={pdfStyles.h2}>Executive Summary</Text>
            <Text style={pdfStyles.text}>
                The web has evolved. The algorithms that govern search (Google) and attention (Users) have become more sophisticated. To compete, you must adhere to the 7 Laws of Modern Web Development.
            </Text>
        </View>

        <View style={pdfStyles.divider} />

        {/* Laws List */}
        <View>
            <LawItem 
                num="01" 
                title="Smart Popups" 
                theory="In-your-face popups destroy trust." 
                protocol="Use Exit Intent. Track mouse velocity. Trigger only in the 'kill zone' (tab bar)." 
            />
            <LawItem 
                num="02" 
                title="Calculators" 
                theory="Static 'Contact Us' forms are friction." 
                protocol="Give the user an answer ('How much?') before asking for an email. Converts at 30-40%." 
            />
            <LawItem 
                num="03" 
                title="Service Tags (Schema)" 
                theory="Google is a robot. Speak its language." 
                protocol="Inject JSON-LD hidden code. Explicitly tell Google 'We sell X' for Rich Snippets." 
            />
             <LawItem 
                num="04" 
                title="Free Tools" 
                theory="Content is saturated. Utility wins." 
                protocol="Build a micro-tool (e.g., 'Free Meta Tag Generator'). Establish engineering authority." 
            />
             <LawItem 
                num="05" 
                title="Fast Speed (<1s)" 
                theory="Latency is lost revenue. 1s delay = -7% conversions." 
                protocol="Use Next.js/Astro (SSG) and WebP images. Target <100ms TTFB." 
            />
             <LawItem 
                num="06" 
                title="Visual Edits (Headless)" 
                theory="Monolithic CMS = Spaghetti code." 
                protocol="Decouple Content (Sanity) from Code (React). Marketing gets control, Eng gets security." 
            />
             <LawItem 
                num="07" 
                title="Ownership" 
                theory="Renting on Wix/Squarespace = Platform Risk." 
                protocol="Own the Repo (GitHub). Contract must assign IP. Code is the asset." 
            />
        </View>
        
        <Footer currentPage={2} totalPages={2} />
    </Page>
  </Document>
);

const LawItem = ({ num, title, theory, protocol }: any) => (
    <View style={{ marginBottom: 15, flexDirection: 'row' }}>
        <View style={{ width: 40, height: 40, backgroundColor: theme.colors.zinc100, alignItems: 'center', justifyContent: 'center', marginRight: 15, borderRadius: 20 }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: theme.colors.orange }}>{num}</Text>
        </View>
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 2 }}>{title}</Text>
            <Text style={{ fontSize: 10, color: theme.colors.zinc500, fontStyle: 'italic', marginBottom: 2 }}>{theory}</Text>
            <Text style={{ fontSize: 10, color: theme.colors.zinc800 }}>{protocol}</Text>
        </View>
    </View>
);

