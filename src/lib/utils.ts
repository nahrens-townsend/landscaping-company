export function cn(...classes: (string | undefined | null | false | 0)[]) {
  return classes.filter(Boolean).join(' ')
}

export function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function slugToLabel(slug: string) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}
