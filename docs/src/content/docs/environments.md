---
title: Environments
description: How jlabx detects and adapts to your project environment.
---

jlabx detects your project type by looking at files in the current working directory and adjusts how it launches JupyterLab accordingly.

## Pixi project

**Detected by:** `pixi.toml` or `pixi.lock` in cwd

**Command:** `pixi run jupyter-lab`

When a Pixi project is detected, jlabx delegates to Pixi and prints a reminder to add extensions to your `pixi.toml` directly. In this mode, user extensions from the config file are not injected — Pixi manages the environment.

## Python project

**Detected by:** `pyproject.toml` in cwd (and no Pixi files)

**Command:** `uv run --with <extensions> jupyter-lab`

This is the primary use case. jlabx uses `uv run` which:

1. Creates a temporary virtual environment based on your project
2. Installs your project's dependencies
3. Adds JupyterLab + extensions via `--with` flags
4. Launches `jupyter-lab`

Your project's `pyproject.toml` stays untouched — the extensions are ephemeral.

## Standalone

**Detected by:** No `pyproject.toml`, `pixi.toml`, or `pixi.lock` in cwd

**Command:** `uvx --from jupyterlab --with <extensions> jupyter-lab`

When there's no project file, jlabx uses `uvx` to run JupyterLab in an isolated environment with all extensions.

## Detection order

jlabx checks in this order:

1. Pixi (`pixi.toml` or `pixi.lock`)
2. Python project (`pyproject.toml`)
3. Standalone (fallback)

The first match wins. If you have both `pixi.toml` and `pyproject.toml`, Pixi takes priority.

Use `jlabx --uv` to skip Pixi detection and force the uv code path instead.
