import React from 'react';
import { Page, View, Text, Image, Link } from '@react-pdf/renderer';
import { theme, pdfStyles } from './styles';

interface FooterProps {
  currentPage: number;
  totalPages: number;
}

export const Footer: React.FC<FooterProps> = ({ currentPage, totalPages }) => (
  <View style={{
    position: 'absolute',
    bottom: theme.spacing.xl,
    left: theme.spacing.xl,
    right: theme.spacing.xl,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: `1pt solid ${theme.colors.zinc200}`,
    paddingTop: theme.spacing.sm,
  }}>
    <Text style={pdfStyles.small}>SuperSonic Engineering — Proven Patterns</Text>
    <Text style={pdfStyles.small}>Page {currentPage}</Text>
  </View>
);

export const Logo: React.FC = () => (
  <View style={{ marginBottom: theme.spacing.xxl }}>
      {/* Fallback Text Logo if Image fails or for simplicity */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ width: 12, height: 12, backgroundColor: theme.colors.orange, marginRight: 6 }} />
          <Text style={{ fontSize: 14, fontWeight: 'bold', letterSpacing: -0.5 }}>SUPERSONIC</Text>
      </View>
  </View>
);

interface CoverPageProps {
  title: string;
  subtitle: string;
  targetAudience: string;
}

export const CoverPage: React.FC<CoverPageProps> = ({ title, subtitle, targetAudience }) => (
  <Page size="A4" style={pdfStyles.page}>
    <View style={{ flex: 1, padding: theme.spacing.mega, justifyContent: 'space-between' }}>
      
      {/* Top */}
      <View>
        <Logo />
        <Text style={{ 
          fontSize: 10, 
          textTransform: 'uppercase', 
          letterSpacing: 2, 
          color: theme.colors.zinc500,
          marginBottom: theme.spacing.lg 
        }}>
          Engineering Protocol
        </Text>
        <Text style={pdfStyles.h1}>{title}</Text>
      </View>

      {/* Middle/Bottom */}
      <View>
        <View style={{ 
            borderLeft: `2pt solid ${theme.colors.orange}`, 
            paddingLeft: theme.spacing.lg,
            marginBottom: theme.spacing.mega 
        }}>
            <Text style={{ 
                fontSize: 20, 
                color: theme.colors.zinc800, 
                lineHeight: 1.4,
                fontWeight: 'medium'
            }}>
                {subtitle}
            </Text>
        </View>

        <View style={{ flexDirection: 'row', gap: 40 }}>
            <View>
                <Text style={pdfStyles.small}>TARGET AUDIENCE</Text>
                <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 4 }}>{targetAudience}</Text>
            </View>
            <View>
                <Text style={pdfStyles.small}>VERSION</Text>
                <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 4 }}>2025.1.0</Text>
            </View>
        </View>
      </View>

    </View>
  </Page>
);

