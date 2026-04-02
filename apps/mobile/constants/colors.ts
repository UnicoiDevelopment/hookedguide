export const Colors = {
  water: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#0F4C75',
    600: '#0C3D5E',
    700: '#092D47',
    800: '#061E30',
    900: '#0A1628',
  },
  copper: {
    50: '#FDF4E7',
    100: '#FAE5C8',
    200: '#F5CC91',
    300: '#E8A84D',
    400: '#D4903A',
    500: '#B87333',
    600: '#9A5F2A',
    700: '#7C4B21',
    800: '#5E3818',
    900: '#40250F',
  },
  sand: {
    50: '#FAF8F5',
    100: '#F5F0EB',
    200: '#EBE3D9',
    300: '#DDD2C3',
  },
  forest: {
    500: '#2D5F2D',
  },
  white: '#FFFFFF',
  black: '#000000',
};

export const LightTheme = {
  background: Colors.sand[100],
  surface: Colors.white,
  surfaceAlt: Colors.sand[50],
  text: Colors.water[800],
  textSecondary: Colors.water[600],
  textMuted: Colors.water[500],
  accent: Colors.copper[500],
  accentLight: Colors.copper[50],
  border: Colors.sand[200],
  tabBar: Colors.white,
  tabBarBorder: Colors.sand[200],
  card: Colors.white,
};

export const DarkTheme = {
  background: Colors.water[900],
  surface: Colors.water[800],
  surfaceAlt: Colors.water[700],
  text: Colors.sand[100],
  textSecondary: Colors.sand[200],
  textMuted: Colors.water[400],
  accent: Colors.copper[500],
  accentLight: Colors.copper[900],
  border: Colors.water[700],
  tabBar: Colors.water[900],
  tabBarBorder: Colors.water[700],
  card: Colors.water[800],
};

export type Theme = typeof LightTheme;
