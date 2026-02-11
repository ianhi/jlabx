---
title: Usage
description: Subcommands, flags, and examples.
---

## Launch

```bash
# Launch JupyterLab with all extensions
jlabx

# Launch without user extensions (core only)
jlabx --no-extras

# Pass arguments through to jupyter-lab
jlabx --port 9999 --no-browser
```

Any arguments not recognized by jlabx are passed through to `jupyter-lab`.

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
