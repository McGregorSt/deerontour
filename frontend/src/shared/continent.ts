export const normalizeContinent = (continent: string): string => {
  const normalized = continent
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')

  return normalized === 'australia' ? 'oceania' : normalized
}
