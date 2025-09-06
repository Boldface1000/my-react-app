import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				display: ['Playfair Display', 'serif'],
				body: ['Inter', 'sans-serif'],
			},
			colors: {
				border: {
					DEFAULT: 'hsl(var(--border-primary))',
					secondary: 'hsl(var(--border-secondary))',
					subtle: 'hsl(var(--border-subtle))',
				},
				input: 'hsl(var(--border-primary))',
				ring: 'hsl(var(--brand))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				surface: {
					DEFAULT: 'hsl(var(--surface))',
					elevated: 'hsl(var(--surface-elevated))',
				},
				content: {
					primary: 'hsl(var(--content-primary))',
					secondary: 'hsl(var(--content-secondary))',
					tertiary: 'hsl(var(--content-tertiary))',
					inverse: 'hsl(var(--content-inverse))',
				},
				brand: {
					DEFAULT: 'hsl(var(--brand))',
					hover: 'hsl(var(--brand-hover))',
					subtle: 'hsl(var(--brand-subtle))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					hover: 'hsl(var(--accent-hover))',
					subtle: 'hsl(var(--accent-subtle))',
				},
				interactive: {
					DEFAULT: 'hsl(var(--interactive))',
					hover: 'hsl(var(--interactive-hover))',
					subtle: 'hsl(var(--interactive-subtle))',
				},
				success: 'hsl(var(--success))',
				warning: 'hsl(var(--warning))',
				error: 'hsl(var(--error))',
				// Legacy shadcn compatibility
				primary: {
					DEFAULT: 'hsl(var(--brand))',
					foreground: 'hsl(var(--content-inverse))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--brand-subtle))',
					foreground: 'hsl(var(--brand))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--error))',
					foreground: 'hsl(var(--content-inverse))'
				},
				muted: {
					DEFAULT: 'hsl(var(--surface))',
					foreground: 'hsl(var(--content-secondary))'
				},
				popover: {
					DEFAULT: 'hsl(var(--surface-elevated))',
					foreground: 'hsl(var(--content-primary))'
				},
				card: {
					DEFAULT: 'hsl(var(--surface-elevated))',
					foreground: 'hsl(var(--content-primary))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--surface))',
					foreground: 'hsl(var(--content-primary))',
					primary: 'hsl(var(--brand))',
					'primary-foreground': 'hsl(var(--content-inverse))',
					accent: 'hsl(var(--brand-subtle))',
					'accent-foreground': 'hsl(var(--brand))',
					border: 'hsl(var(--border-primary))',
					ring: 'hsl(var(--brand))'
				}
			},
			boxShadow: {
				sm: 'var(--shadow-sm)',
				DEFAULT: 'var(--shadow-md)',
				md: 'var(--shadow-md)',
				lg: 'var(--shadow-lg)',
				xl: 'var(--shadow-xl)',
			},
			backgroundImage: {
				'gradient-brand': 'var(--gradient-brand)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-accent': 'var(--gradient-accent)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
	],
} satisfies Config;
