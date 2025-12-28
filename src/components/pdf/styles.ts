import { StyleSheet, Font } from '@react-pdf/renderer';

// Register fonts (Inter is standard, using standard fonts for reliability first)
// Ideally we would load custom font files, but for robustness we use Helvetica as a fallback proxy for "Neo-Swiss"
Font.register({
  family: 'Inter',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff' },
    { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hjp-Ek-_EeA.woff', fontWeight: 700 },
  ]
});

export const theme = {
  colors: {
    orange: '#FF5C00', // Sonic Orange
    black: '#000000',
    white: '#FFFFFF',
    zinc50: '#FAFAFA',
    zinc100: '#F4F4F5',
    zinc200: '#E4E4E7',
    zinc400: '#A1A1AA',
    zinc500: '#71717A',
    zinc800: '#27272A',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    mega: 64,
  },
  fontSize: {
    xs: 8,
    sm: 10,
    base: 12,
    lg: 14,
    xl: 18,
    xxl: 24,
    display: 48,
  }
};

export const pdfStyles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
    fontFamily: 'Helvetica', // Fallback to safe font if remote fails, mimics Swiss style well
    padding: 0,
  },
  // Layout Helpers
  container: {
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.xl,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  col: {
    flexDirection: 'column',
  },
  // Typography
  h1: {
    fontSize: theme.fontSize.display,
    fontWeight: 'bold',
    letterSpacing: -1,
    lineHeight: 1,
    marginBottom: theme.spacing.lg,
    color: theme.colors.black,
    textTransform: 'uppercase',
  },
  h2: {
    fontSize: theme.fontSize.xxl,
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
    color: theme.colors.black,
    letterSpacing: -0.5,
  },
  h3: {
    fontSize: theme.fontSize.xl,
    fontWeight: 'bold',
    marginBottom: theme.spacing.sm,
    color: theme.colors.black,
  },
  subtitle: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.zinc500,
    marginBottom: theme.spacing.xl,
    lineHeight: 1.5,
  },
  text: {
    fontSize: theme.fontSize.base,
    color: theme.colors.zinc800,
    lineHeight: 1.6,
    marginBottom: theme.spacing.sm,
  },
  small: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.zinc500,
  },
  // Components
  divider: {
    height: 1,
    backgroundColor: theme.colors.zinc200,
    marginVertical: theme.spacing.lg,
    width: '100%',
  },
  card: {
    backgroundColor: theme.colors.zinc50,
    padding: theme.spacing.lg,
    borderRadius: 8,
    marginBottom: theme.spacing.md,
    border: `1pt solid ${theme.colors.zinc200}`,
  },
  badge: {
    backgroundColor: theme.colors.orange,
    color: theme.colors.white,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: theme.fontSize.xs,
    alignSelf: 'flex-start',
    marginBottom: theme.spacing.sm,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});

