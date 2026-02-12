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

# Use a specific Python version (uv/standalone modes)
jlabx --python 3.11

# Pass arguments through to jupyter-lab
jlabx --port 9999 --no-browser
```

Any arguments not recognized by jlabx are passed through to `jupyter-lab`.

### Notebook mode

When you pass a `.ipynb` file, jlabx delegates to [juv](https://github.com/manzt/juv) — a tool for reproducible notebooks with [PEP 723](https://packaging.python.org/en/latest/specifications/inline-script-metadata/) inline script metadata. juv handles the notebook's own dependencies while jlabx injects your configured UI extensions (collaboration, LSP, vim, etc.) via `--with`.

```bash
# Launch a notebook with its own deps + your jlabx extensions
jlabx analysis.ipynb

# Start a new notebook from scratch
jlabx new-experiment.ipynb

# Same, but skip user extensions
jlabx analysis.ipynb --no-extras
```

If the `.ipynb` file doesn't exist, jlabx creates an empty notebook and launches it.

juv is fetched automatically via `uvx` — no separate install needed.

#### Auto-detected imports

If the notebook has no PEP 723 metadata, jlabx scans the code cells for `import` statements, maps them to PyPI package names, and passes them as `--with` args to juv — without modifying the notebook file.

```bash
# Notebook has `import numpy`, `import pandas` but no PEP 723 block:
jlabx analysis.ipynb
# → juv run --with numpy --with pandas --with jupyter-collaboration ... analysis.ipynb
```

Common import-to-package mismatches are handled automatically (e.g. `import cv2` → `opencv-python`, `import PIL` → `Pillow`, `import sklearn` → `scikit-learn`).

#### Persisting deps with `--init-deps`

To write the detected dependencies into the notebook as a PEP 723 metadata cell (so juv manages them going forward):

```bash
jlabx analysis.ipynb --init-deps
```

This runs `uvx juv init` + `uvx juv add` with the detected packages, then launches. Subsequent runs of `jlabx analysis.ipynb` will use the persisted metadata instead of re-detecting imports.

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

## Known issues

### Ctrl+C shutdown hangs with jupyter-collaboration

The `jupyter-collaboration` extension (included by default) can prevent JupyterLab from exiting cleanly on Ctrl+C due to lingering async tasks. See [jupyter-collaboration#161](https://github.com/jupyterlab/jupyter-collaboration/issues/161) for details.

jlabx works around this by sending SIGTERM, waiting 3 seconds, then force-killing the process if it hasn't exited. You may see a brief delay before the "Force killing hung process..." message appears — this is expected.
