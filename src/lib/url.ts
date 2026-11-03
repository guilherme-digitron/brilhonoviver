/**
 * Monta um caminho respeitando o `base` do GitHub Pages (ex.: /meu-repo/).
 * Use sempre que criar links internos: href={url('/sobre')}
 */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
