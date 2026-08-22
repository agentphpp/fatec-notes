export interface Subject {
  /**
   * Precisa bater com o slug que o Astro gera pra pasta em src/content/notes/.
   * IMPORTANTE: o Astro sempre transforma o nome da pasta em minúsculas ao
   * gerar a rota — então, mesmo que a pasta se chame "IBD015-banco-de-dados",
   * o slug aqui tem que ser "ibd015-banco-de-dados" (tudo minúsculo).
   */
  slug: string;
  sigla: string;
  nome: string;
  professor: string;
  /** cor de destaque do card (classe tailwind) — opcional, dá pra customizar por matéria */
  accent?: string;
}

export const subjects: Subject[] = [
  {
    slug: 'ibd015-banco-de-dados',
    sigla: 'IBD015',
    nome: 'Banco de Dados – Relacional',
    professor: 'Ronan Adriel Zenatti',
    accent: 'from-blue-500 to-blue-700',
  },
  {
    slug: 'ied005-estrutura-de-dados',
    sigla: 'IED005',
    nome: 'Estrutura de Dados',
    professor: 'Tiago Antônio da Silva',
    accent: 'from-emerald-500 to-emerald-700',
  },
  {
    slug: 'ies012-engenharia-de-software-2',
    sigla: 'IES012',
    nome: 'Engenharia de Software II',
    professor: 'Aparecida Maria Zem Lopes',
    accent: 'from-violet-500 to-violet-700',
  },
  {
    slug: 'ilp036-tecnicas-de-programacao-1',
    sigla: 'ILP036',
    nome: 'Técnicas de Programação I',
    professor: 'Vânia Somaio Teixeira',
    accent: 'from-amber-500 to-amber-700',
  },
  {
    slug: 'isw029-desenvolvimento-web-2',
    sigla: 'ISW029',
    nome: 'Desenvolvimento Web II',
    professor: 'Alex Paulo Lopes Batista',
    accent: 'from-rose-500 to-rose-700',
  },
  {
    slug: 'mat019-matematica-para-computacao',
    sigla: 'MAT019',
    nome: 'Matemática para Computação',
    professor: 'Lívia Paschoalino de Campos',
    accent: 'from-cyan-500 to-cyan-700',
  },
];

export function getSubjectBySlug(slug: string): Subject | undefined {
  return subjects.find((s) => s.slug === slug);
}
