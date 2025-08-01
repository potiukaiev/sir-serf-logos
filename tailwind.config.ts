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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// CS2 Gaming Colors
				gaming: {
					cyan: 'hsl(var(--gaming-cyan))',
					purple: 'hsl(var(--gaming-purple))',
					magenta: 'hsl(var(--gaming-magenta))',
					orange: 'hsl(var(--gaming-orange))',
					green: 'hsl(var(--gaming-green))',
					dark: 'hsl(var(--gaming-dark))',
					darker: 'hsl(var(--gaming-darker))'
				},
				// CS2 Skin Rarity Colors
				rarity: {
					consumer: 'hsl(var(--rarity-consumer))',
					industrial: 'hsl(var(--rarity-industrial))',
					milspec: 'hsl(var(--rarity-milspec))',
					restricted: 'hsl(var(--rarity-restricted))',
					classified: 'hsl(var(--rarity-classified))',
					covert: 'hsl(var(--rarity-covert))',
					knife: 'hsl(var(--rarity-knife))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
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
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
				'slide-up': 'slide-up 0.5s ease-out'
			},
			keyframes: {
				...{
					'accordion-down': {
						from: { height: '0' },
						to: { height: 'var(--radix-accordion-content-height)' }
					},
					'accordion-up': {
						from: { height: 'var(--radix-accordion-content-height)' },
						to: { height: '0' }
					}
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' },
					'100%': { boxShadow: '0 0 40px hsl(var(--primary) / 0.6)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-gaming': 'var(--gradient-gaming)',
				'gradient-rarity': 'var(--gradient-rarity)',
				'gradient-background': 'var(--gradient-background)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-cta': 'var(--gradient-cta)'
			},
			boxShadow: {
				'neon': 'var(--shadow-neon)',
				'purple': 'var(--shadow-purple)',
				'gaming': 'var(--shadow-gaming)',
				'card': 'var(--shadow-card)',
				'elevated': 'var(--shadow-elevated)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
