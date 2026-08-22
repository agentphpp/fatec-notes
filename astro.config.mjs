import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://SEU-SITE.netlify.app', // troque pela URL do Netlify depois do deploy
  integrations: [
    tailwind({
      applyBaseStyles: false, // vamos importar o global.css manualmente
    }),
  ],
});
