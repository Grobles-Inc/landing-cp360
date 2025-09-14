// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://cp360-landing.abccostos.com/',
	integrations: [
		mdx(), 
		sitemap({
			changefreq: 'weekly',
			priority: 0.7,
			lastmod: new Date(),
			customPages: [
				'https://cp360-landing.abccostos.com/',
				'https://cp360-landing.abccostos.com/caracteristicas',
				'https://cp360-landing.abccostos.com/solution',
				'https://cp360-landing.abccostos.com/paquetes-integrales',
				'https://cp360-landing.abccostos.com/paquetes-sistema',
				'https://cp360-landing.abccostos.com/aliados/planner'
			],
		})
	],
	vite: {
		plugins: [
			tailwindcss(),
		],
	}
});
