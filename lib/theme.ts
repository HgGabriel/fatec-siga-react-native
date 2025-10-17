import { DarkTheme, DefaultTheme, type Theme } from '@react-navigation/native';

// Cores base da identidade visual de São Paulo
const spRed = 'hsl(2 69% 52%)'; // #d93732
const spBlack = 'hsl(0 0% 3.9%)'; // Quase preto, melhor para texto
const spWhite = 'hsl(0 0% 100%)';

export const THEME = {
  light: {
    background: spWhite,
    foreground: spBlack,
    card: spWhite,
    cardForeground: spBlack,
    popover: spWhite,
    popoverForeground: spBlack,
    
    // O Vermelho SP como cor primária para botões, links e destaques
    primary: spRed,
    primaryForeground: spWhite, // Branco para texto sobre o vermelho

    // Tons de cinza neutros para elementos secundários
    secondary: 'hsl(0 0% 96.1%)', // Cinza claro para fundos sutis
    secondaryForeground: spBlack,
    
    muted: 'hsl(0 0% 96.1%)',
    mutedForeground: 'hsl(0 0% 45.1%)', // Cinza médio para texto menos importante
    
    accent: 'hsl(0 0% 96.1%)', // Usado para hovers e estados pressionados
    accentForeground: spBlack,
    
    // O Vermelho SP também funciona como cor destrutiva
    destructive: spRed,
    
    border: 'hsl(0 0% 89.8%)', // Borda cinza clara
    input: 'hsl(0 0% 89.8%)',
    
    // O Vermelho SP para anéis de foco, melhorando a acessibilidade
    ring: spRed,

    radius: '0.125rem',
    chart1: 'hsl(12 76% 61%)',
    chart2: 'hsl(173 58% 39%)',
    chart3: 'hsl(197 37% 24%)',
    chart4: 'hsl(43 74% 66%)',
    chart5: 'hsl(27 87% 67%)',
  },
  dark: {
    // Fundo de carvão escuro, mais suave que o preto puro
    background: 'hsl(0 0% 5%)',
    foreground: 'hsl(0 0% 98%)', // Texto quase branco para conforto visual
    
    card: 'hsl(0 0% 7%)', // Card um pouco mais claro que o fundo para criar profundidade
    cardForeground: 'hsl(0 0% 98%)',

    popover: 'hsl(0 0% 5%)',
    popoverForeground: 'hsl(0 0% 98%)',
    
    // O Vermelho SP se destaca lindamente no tema escuro
    primary: spRed,
    primaryForeground: spWhite, // Branco também funciona bem aqui
    
    // Tons de cinza escuros
    secondary: 'hsl(0 0% 14.9%)',
    secondaryForeground: 'hsl(0 0% 98%)',
    
    muted: 'hsl(0 0% 14.9%)',
    mutedForeground: 'hsl(0 0% 63.9%)',
    
    accent: 'hsl(0 0% 14.9%)',
    accentForeground: 'hsl(0 0% 98%)',
    
    // O Vermelho SP como cor destrutiva
    destructive: spRed,
    
    border: 'hsl(0 0% 20%)', // Borda um pouco mais visível
    input: 'hsl(0 0% 14.9%)',

    // O Vermelho SP para anéis de foco
    ring: spRed,
    
    radius: '0.625rem',
    chart1: 'hsl(220 70% 50%)',
    chart2: 'hsl(160 60% 45%)',
    chart3: 'hsl(30 80% 55%)',
    chart4: 'hsl(280 65% 60%)',
    chart5: 'hsl(340 75% 55%)',
  },
};

export const NAV_THEME: Record<'light' | 'dark', Theme> = {
  light: {
    ...DefaultTheme,
    colors: {
      background: THEME.light.background,
      border: THEME.light.border,
      card: THEME.light.card,
      notification: THEME.light.destructive,
      primary: THEME.light.primary,
      text: THEME.light.foreground,
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      background: THEME.dark.background,
      border: THEME.dark.border,
      card: THEME.dark.card,
      notification: THEME.dark.destructive,
      primary: THEME.dark.primary,
      text: THEME.dark.foreground,
    },
  },
};