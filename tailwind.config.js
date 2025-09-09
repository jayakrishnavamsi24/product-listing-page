module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',   
      md: '768px',    
      lg: '1024px',   
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        // Primary Colors
        primary: {
          background: "var(--bg-primary)",
          text: "var(--text-primary)",
          border: "var(--border-light)"
        },
        // Secondary Colors
        secondary: {
          background: "var(--bg-dark)",
          text: "var(--text-secondary)",
          border: "var(--border-dark)"
        },
        // Text Colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          light: "var(--text-light)",
          accent: "var(--text-accent)",
          white: "var(--text-white)"
        },
        // Background Colors
        background: {
          primary: "var(--bg-primary)",
          dark: "var(--bg-dark)",
          overlay: "var(--bg-overlay)",
          brand: "var(--bg-brand)",
          purple: "var(--bg-purple)"
        },
        // Border Colors
        border: {
          primary: "var(--border-light)",
          dark: "var(--border-dark)",
          pink: "var(--border-pink)",
          white: "var(--border-white)"
        },
        // Component-specific Colors
        header: {
          background: "var(--header-bg)"
        },
        footer: {
          background: "var(--footer-bg)"
        },
        button: {
          background: "var(--button-bg)",
          overlay: "var(--button-bg-overlay)"
        },
        input: {
          background: "var(--input-bg)"
        },
        card: {
          background: "var(--card-bg)"
        }
      },
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)'
      },
      fontWeight: {
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'bold': 'var(--font-weight-bold)',
        'extrabold': 'var(--font-weight-extrabold)'
      },
      lineHeight: {
        'tight': 'var(--line-height-tight)',
        'snug': 'var(--line-height-snug)',
        'normal': 'var(--line-height-normal)',
        'relaxed': 'var(--line-height-relaxed)',
        'loose': 'var(--line-height-loose)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)'
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)'
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)'
      },
      width: {
        'sidebar': 'var(--width-sidebar)',
        'main': 'var(--width-main)',
        'half': 'var(--width-half)'
      }
    }
  },
  plugins: []
};