---
title: Requirements
description: What you need to run jlabx.
---

## Python

jlabx requires **Python 3.10+**.

## uv

[uv](https://docs.astral.sh/uv/) is required to install and use jlabx:

```bash
# Install uv
curl -LsSf https://astral.sh/uv/install.sh | sh

# Install jlabx
uv tool install jlabx
```

jlabx uses `uv run` and `uvx` under the hood to launch JupyterLab with extensions.

## Pixi (optional)

If you use [Pixi](https://pixi.sh/) for environment management, jlabx detects Pixi projects and delegates to `pixi run`. Pixi must be installed separately.
