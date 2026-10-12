#!/usr/bin/env bash
# Post-deploy smoke: every local ref on the deployed site returns 200.
# Retries because a fresh deploy can take seconds to reach every edge, and a single
# transient non-200 was observed against workers.dev while building this.
# Usage: scripts/smoke-deployed.sh <base-url> [attempts] [delay-seconds]
set -euo pipefail

base=${1:?usage: smoke-deployed.sh <base-url> [attempts] [delay-seconds]}
attempts=${2:-3}
delay=${3:-10}
here=$(cd "$(dirname "$0")" && pwd)

for ((i = 1; i <= attempts; i++)); do
  echo "smoke attempt $i/$attempts against $base"
  if node "$here/check-local-refs.mjs" "$base"; then
    exit 0
  fi
  if ((i < attempts)); then
    sleep "$delay"
  fi
done
echo "smoke check failed after $attempts attempts" >&2
exit 1
