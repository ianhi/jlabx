---
title: Requirements
description: What you need to run jlabx.
---

## Python

jlabx requires **Python 3.10+**.

## uv (preferred)

[uv](https://docs.astral.sh/uv/) is the recommended way to install and use jlabx:

```bash
# Install uv
curl -LsSf https://astral.sh/uv/install.sh | sh

# Install jlabx
uv tool install jlabx
```

jlabx uses `uv run` and `uvx` under the hood to launch JupyterLab with extensions.

## npx fallback

If `uv` is not found in your PATH, jlabx falls back to using `npx @manzt/uv` — a Node.js wrapper for uv. This requires [Node.js](https://nodejs.org/) and npx to be installed.

This fallback is a convenience for environments where uv isn't available but Node.js is. For best results, install uv directly.

## Pixi (optional)

If you use [Pixi](https://pixi.sh/) for environment management, jlabx detects Pixi projects and delegates to `pixi run`. Pixi must be installed separately.
