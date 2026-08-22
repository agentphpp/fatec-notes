import { defineCollection, z } from 'astro:content';

// Os arquivos do Coconote raramente têm frontmatter (título, data, tags).
// Por isso TODOS os campos são opcionais: se não vierem no .md,
// a gente calcula um fallback (nome do arquivo, data de modificação, etc.)
// na hora de renderizar a página.
const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    date: z.coerce.date().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    // permite esconder um resumo específico do site sem apagar o arquivo
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { notes };
