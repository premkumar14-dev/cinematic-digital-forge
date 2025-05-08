
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
					foreground: 'hsl(var(--primary-foreground))'
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Modern enterprise theme colors - updated with more modern colors
				enterprise: {
					'blue': '#4A5AEF',         // Modern indigo blue
					'teal': '#41B3A3',         // Soft modern teal
					'purple': '#8C52FF',       // Modern purple
					'light-blue': '#56CCF2',   // Lighter accent blue
					'dark-blue': '#2F3676',    // Deep indigo
					'dark-purple': '#5C3FC5',  // Deep purple
					'gradient-start': '#4A5AEF', // For gradients
					'gradient-end': '#8C52FF',   // For gradients
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0", opacity: "0" },
					to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
					to: { height: "0", opacity: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"fade-out": {
					"0%": { opacity: "1", transform: "translateY(0)" },
					"100%": { opacity: "0", transform: "translateY(10px)" },
				},
				"scale-in": {
					"0%": { transform: "scale(0.95)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" },
				},
				"slide-in-right": {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0)" },
				},
				"pulse-subtle": {
					"0%, 100%": { transform: "scale(1)" },
					"50%": { transform: "scale(1.05)" },
				},
				"gradient-flow": {
					"0%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
					"100%": { backgroundPosition: "0% 50%" },
				},
				"border-glow": {
					"0%": { boxShadow: "0 0 0 0 rgba(138, 82, 255, 0.4)" },
					"50%": { boxShadow: "0 0 0 4px rgba(138, 82, 255, 0.4)" },
					"100%": { boxShadow: "0 0 0 0 rgba(138, 82, 255, 0.4)" },
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out",
				"scale-in": "scale-in 0.4s ease-out",
				"slide-in-right": "slide-in-right 0.3s ease-out",
				"pulse-subtle": "pulse-subtle 4s ease-in-out infinite",
				"gradient-flow": "gradient-flow 6s ease infinite",
				"border-glow": "border-glow 2s ease-in-out infinite",
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-enterprise': 'linear-gradient(to right, #4A5AEF, #8C52FF)',
				'gradient-modern': 'linear-gradient(135deg, #4A5AEF 0%, #8C52FF 100%)',
				'gradient-button': 'linear-gradient(135deg, #4A5AEF 0%, #8C52FF 80%)',
				'gradient-dark': 'linear-gradient(135deg, #2F3676 0%, #5C3FC5 100%)',
			},
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
