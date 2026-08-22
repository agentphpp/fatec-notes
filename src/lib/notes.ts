import { getCollection, type CollectionEntry } from 'astro:content';

export type NoteEntry = CollectionEntry<'notes'>;

/** slug da matéria = primeiro segmento do id/slug do arquivo dentro de content/notes */
export function subjectSlugOf(entry: NoteEntry): string {
  return entry.slug.split('/')[0];
}

/** nome de arquivo sem extensão, ex: "aula-02" */
export function fileSlugOf(entry: NoteEntry): string {
  const parts = entry.slug.split('/');
  return parts[parts.length - 1];
}

/** título de exibição: usa o frontmatter se existir, senão deriva do nome do arquivo */
export function displayTitle(entry: NoteEntry): string {
  if (entry.data.title) return entry.data.title;
  const raw = fileSlugOf(entry).replace(/[-_]/g, ' ');
  return raw.charAt(0).toUpperCase() + raw.slice(1);
}

export async function getAllNotes(): Promise<NoteEntry[]> {
  const all = await getCollection('notes');
  return all.filter((n) => !n.data.draft);
}

export async function getNotesForSubject(subjectSlug: string): Promise<NoteEntry[]> {
  const all = await getAllNotes();
  return all
    .filter((n) => subjectSlugOf(n) === subjectSlug)
    .sort((a, b) => sortKey(b) - sortKey(a));
}

export async function getLatestNotes(limit = 5): Promise<NoteEntry[]> {
  const all = await getAllNotes();
  return all.sort((a, b) => sortKey(b) - sortKey(a)).slice(0, limit);
}

function sortKey(entry: NoteEntry): number {
  if (entry.data.date) return entry.data.date.getTime();
  return 0;
}

export function formatDate(date?: Date): string {
  if (!date) return '';
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).format(date);
}
