---
title: Getting Started
description: Install jlabx and launch JupyterLab with extensions in any uv or pixi project.
---

## Install

The recommended way to install jlabx is as a uv tool:

```bash
uv tool install jlabx
```

This gives you the `jlabx` command globally without affecting any project environments.

## Launch

Run `jlabx` in any directory:

```bash
jlabx
```

On first run, jlabx creates a config file at `~/.config/jlabx/config.toml` with default extensions. It auto-detects whether you're in a **pixi** or **uv** project and launches JupyterLab with all core and user extensions.

## What gets installed

Every launch includes these **core extensions** (you can't remove them):

| Package | Purpose |
|---|---|
| `jupyterlab` | JupyterLab itself |
| `jupyter-collaboration` | Real-time collaboration |
| `jupyter-lsp` | Language Server Protocol support |
| `python-lsp-server` | Python language server |

Plus your **user extensions** from the config file. The defaults are:

- `jupyterlab-vim` — vim keybindings
- `jupyterlab-myst` — MyST markdown support
- `jupyterlab-git` — git integration

## Next steps

- [Usage](/jlabx/usage/) — subcommands and flags
- [Configuration](/jlabx/config/) — config file format and location
- [Environments](/jlabx/environments/) — how jlabx detects your project type
