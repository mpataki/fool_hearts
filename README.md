# foolhearts.com

This is a simple static website Fool Hearts - a Toronto cover band.

## Run locally

Requires Node 22. Serves `public/` with Workers Static Assets, no Cloudflare login needed:

```bash
npm ci
npx wrangler dev   # http://localhost:8787
```

## Deploy

Hosting is a Cloudflare Worker (`foolhearts-site`, static assets only). Zone, DNS and the
`www` redirect live in `mp-infra/foolhearts-cloudflare/`, not here.

- **Local:** `task deploy` — `wrangler deploy` with credentials injected by `op run` from
  the 1Password references in `.env.op` (no secret values in the repo), then a smoke check.
- **CI:** `.github/workflows/deploy.yml`. Pull requests always run `wrangler deploy --dry-run`.
  The push-to-`master` deploy job is **off until** the repo variable `CF_CI_DEPLOY` is `true`;
  turning it on also requires the secrets `CLOUDFLARE_API_TOKEN` (a deploy-only token,
  Workers Scripts: Edit) and `CLOUDFLARE_ACCOUNT_ID` in the `production` environment.
