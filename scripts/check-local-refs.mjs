#!/usr/bin/env node
// Fetches / from a running server, enumerates every local src/href in the HTML and every
// url() in the local stylesheets it links, and checks each returns 200.
// Usage: node scripts/check-local-refs.mjs http://127.0.0.1:8787
const base = process.argv[2];
if (!base) {
  console.error("usage: check-local-refs.mjs <base-url>");
  process.exit(2);
}

const isLocal = (ref) => ref && !/^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(ref);

const html = await (await fetch(new URL("/", base))).text();
const htmlRefs = [...html.matchAll(/\b(?:src|href)\s*=\s*["']([^"']+)["']/gi)]
  .map((m) => m[1])
  .filter(isLocal)
  .map((ref) => new URL(ref, new URL("/", base)).href);

const cssRefs = [];
for (const cssUrl of htmlRefs.filter((u) => new URL(u).pathname.endsWith(".css"))) {
  const css = await (await fetch(cssUrl)).text();
  for (const m of css.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/gi)) {
    if (isLocal(m[1])) cssRefs.push(new URL(m[1], cssUrl).href);
  }
}

// Query/fragment don't change which file is served; dedupe on pathname.
const paths = [...new Set([...htmlRefs, ...cssRefs].map((u) => new URL(u).pathname))].sort();
let failed = 0;
for (const path of paths) {
  const res = await fetch(new URL(path, base), { redirect: "manual" });
  await res.arrayBuffer();
  if (res.status !== 200) failed++;
  console.log(`${res.status} ${path}`);
}
console.log(`${paths.length} local refs, ${paths.length - failed} OK, ${failed} failed`);
process.exit(failed ? 1 : 0);
