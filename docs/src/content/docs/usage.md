---
title: Usage
description: Subcommands, flags, and examples.
---

## Launch

```bash
# Launch JupyterLab with all extensions
jlabx

# Launch a single notebook (uses juv)
jlabx notebook.ipynb

# Launch without user extensions (core only)
jlabx --no-extras

# Force uv even in a pixi project
jlabx --uv

# Pass arguments through to jupyter-lab
jlabx --port 9999 --no-browser
```

Any arguments not recognized by jlabx are passed through to `jupyter-lab`.

### Notebook mode

When you pass a `.ipynb` file, jlabx delegates to [juv](https://github.com/manzt/juv) — a tool for reproducible notebooks with [PEP 723](https://peps.python.org/pep-0723/) inline script metadata. juv handles the notebook's own dependencies while jlabx injects your configured UI extensions (collaboration, LSP, vim, etc.) via `--with`.

```bash
# Launch a notebook with its own deps + your jlabx extensions
jlabx analysis.ipynb

# Same, but skip user extensions
jlabx analysis.ipynb --no-extras
```

juv is fetched automatically via `uvx` — no separate install needed. If the notebook has a PEP 723 metadata cell (created with `juv init` / `juv add`), those dependencies are resolved alongside your jlabx extensions.

### Port

By default, jlabx launches on port 8888. Override with:

```bash
jlabx --port 9999
```

Or set the `JUPYTER_PORT` environment variable:

```bash
JUPYTER_PORT=9999 jlabx
```

## Manage extensions

### List

Show all configured extensions:

```bash
jlabx list
```

Output:

```
Core extensions (always included):
  - jupyterlab
  - jupyter-collaboration
  - jupyter-lsp
  - python-lsp-server

User extensions (from /home/user/.config/jlabx/config.toml):
  + jupyterlab-vim
  + jupyterlab-myst
  + jupyterlab-git
```

### Add

Add one or more packages to your user extensions:

```bash
jlabx add jupyterlab-vim
jlabx add package-one package-two
```

### Remove

Remove packages from your user extensions:

```bash
jlabx remove jupyterlab-git
jlabx remove package-one package-two
```

## Other commands

```bash
jlabx --help      # Show help
jlabx --version   # Show version
```
