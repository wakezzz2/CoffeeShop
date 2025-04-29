export const theme = {
  colors: {
    primary: {
      50: '#2A1A12',  // Darkest roast
      100: '#3D2316',
      200: '#4F2C1A',
      300: '#61351E',
      400: '#733E22',
      500: '#854726',  // Base coffee color
      600: '#97502A',
      700: '#A9592E',
      800: '#BB6232',
      900: '#CD6B36',  // Lightest roast
    },
    secondary: {
      50: '#1A120A',
      100: '#2D1F0E',
      200: '#402C12',
      300: '#533916',
      400: '#66461A',
      500: '#79531E',  // Base caramel
      600: '#8C6022',
      700: '#9F6D26',
      800: '#B27A2A',
      900: '#C5872E',
    },
    accent: {
      50: '#1A0F00',
      100: '#2D1A00',
      200: '#402500',
      300: '#533000',
      400: '#663B00',
      500: '#794600',  // Base amber
      600: '#8C5100',
      700: '#9F5C00',
      800: '#B26700',
      900: '#C57200',
    },
    neutral: {
      50: '#0A0A0A',  // Almost black
      100: '#1A1A1A',
      200: '#2A2A2A',
      300: '#3A3A3A',
      400: '#4A4A4A',
      500: '#5A5A5A',  // Base gray
      600: '#6A6A6A',
      700: '#7A7A7A',
      800: '#8A8A8A',
      900: '#9A9A9A',  // Light gray
    },
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },
  },
  typography: {
    fontFamily: {
      sans: ['Inter var', 'system-ui', 'sans-serif'],
      display: ['Playfair Display', 'serif'],
      mono: ['JetBrains Mono', 'monospace']
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem'
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2'
    }
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem'
  },
  borderRadius: {
    none: '0',
    sm: '0.25rem',
    DEFAULT: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '2rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px'
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.2)',
    md: '0 4px 6px rgba(0, 0, 0, 0.3)',
    lg: '0 8px 12px rgba(0, 0, 0, 0.4)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none'
  },
  animations: {
    duration: {
      '75': '75ms',
      '100': '100ms',
      '150': '150ms',
      '200': '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '1000': '1000ms'
    },
    timing: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  fonts: {
    display: 'var(--font-display)',
    sans: 'var(--font-sans)',
  },
}; 