# foolhearts.com

This is a simple static website Fool Hearts - a Toronto cover band.

## Run locally

Requires Node 22. Serves `public/` with Workers Static Assets, no Cloudflare login needed:

```bash
npm ci
npx wrangler dev   # http://localhost:8787
```

## Deploy

Hosting is a Cloudflare Worker (`foolhearts-site`, static assets only). Pushes to `master`
deploy it via `.github/workflows/deploy.yml`; pull requests run `wrangler deploy --dry-run`.
Zone, DNS and the `www` redirect live in `mp-infra/foolhearts-cloudflare/`, not here.
