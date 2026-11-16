// dd.mm.yyyy
export function formatDate(d: Date): string {
  return `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${d.getFullYear()}`;
}

// The time label for a content entry: its `year` field when set, otherwise its date.
export function entryPeriod(data: { year?: string; date: Date }): string {
  return data.year ?? formatDate(data.date);
}

// Small label above the page title, from the entry type.
export function entryLabel(type: string): string {
  const labels: Record<string, string> = {
    post: 'Essay',
    'work/career': 'Career',
    'work/freelance': 'Freelance',
  };
  return labels[type] ?? 'Entry';
}
