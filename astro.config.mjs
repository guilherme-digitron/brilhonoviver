// @ts-check
import { defineConfig } from 'astro/config';

// No GitHub Actions, `site` e `base` são derivados do repositório:
//   usuario/meu-repo         -> https://usuario.github.io/meu-repo/
//   usuario/usuario.github.io -> https://usuario.github.io/
// Localmente (npm run dev) fica tudo na raiz.
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserSite = repo?.toLowerCase() === `${owner?.toLowerCase()}.github.io`;

export default defineConfig(
  process.env.GITHUB_ACTIONS && owner && repo
    ? {
        site: `https://${owner}.github.io`,
        base: isUserSite ? '/' : `/${repo}`,
      }
    : {},
);
