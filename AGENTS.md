# AGENTS.md

Guidance for coding agents working in this repository. `CLAUDE.md` points here.

## What this is

Static website for Fool Hearts, a Toronto cover band, served at `foolhearts.com` as a
Cloudflare Worker with static assets only (no Worker script). Single page, no build step.

## Layout

- `public/` — everything that ships: `index.html`, `js/index.js`, `styles/styles.css`,
  `images/`, `favicon.ico`, `robots.txt`, and the committed `bower_components/` the page
  references (jQuery for Slick only, Slick Carousel, ScrollReveal, Skeleton CSS).
  Nothing outside `public/` is ever served.
- `wrangler.jsonc` — Worker `foolhearts-site`: `assets.directory = ./public`,
  `not_found_handling: none`, `html_handling: auto-trailing-slash`.
- `package.json` — `wrangler` pinned exactly; no global installs. Node 22.
- `Taskfile.yml` — `task dev`, `task check [URL=…]`, `task deploy`.
- `scripts/check-local-refs.mjs` — fetches a running site, asserts every local `src`/`href`
  and CSS `url()` returns 200. `scripts/smoke-deployed.sh` retries it after a deploy.
- `.github/workflows/deploy.yml` — PRs run `wrangler deploy --dry-run`. The push-to-master
  deploy job is inert until repo variable `CF_CI_DEPLOY` is `true`; local deploys are the
  chosen path, so expect it to stay off.
- `bower.json` — legacy; `bower install` would write to the repo root, not `public/`.
  Leave it alone.

## Run, verify, deploy

```bash
npm ci
task dev                                   # http://localhost:8787, no Cloudflare login
task check URL=http://127.0.0.1:8787       # every local ref must be 200
task deploy                                # wrangler deploy via `op run`, then smoke check
```

Credentials for `task deploy` come from the 1Password Environment `foolhearts-deploy`,
mounted by the 1Password app at `./.env` (a pipe the app serves; gitignored). In it,
`CLOUDFLARE_API_TOKEN` is an `op://` reference, not a value; the deploy runs under
`op run --env-file=.env`, which resolves it inside that process only. Never put a token
value in the repo, a shell history, or an agent transcript; if `.env` is absent, ask Mat
to mount it rather than working around it.

## Infra lives elsewhere

Zone, DNS records, the `www` → apex redirect, and the Worker's custom domain are Terraform
in `mp-infra/foolhearts-cloudflare/` (github `mpataki/mp-infra`). Do not add `routes` or
custom domains to `wrangler.jsonc`; change them there.

## Conventions

- Conventional Commits, small and reviewable. Add files by name, never `git add -A`.
- Verify by command output, not belief: after any change to `public/`, run `task dev` and
  `task check`, and compare `md5 -q public/index.html` with the deployed `/`.
- Branch `master` is live. `production`, `staging`, and other old branches are stale
  remnants of the S3/CircleCI era; never deploy from them.

## Page behaviour (for edits to the site itself)

- Sections: hero, About (testimonials carousel), Videos (YouTube embeds), Clients, Example
  Sets, Footer (contact + socials).
- `js/index.js`: title floats over the hero then pins on scroll; fixed footer reveals on
  scroll; Slick carousels (jQuery); ScrollReveal on `.reveal`.
- Styling: Skeleton grid, heavy fixed positioning, purple/black palette (#402651, #6f5282).
