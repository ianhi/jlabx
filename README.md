# jlabx

Launch JupyterLab with extensions — without touching your project's dependencies.

```bash
uv tool install jlabx
jlabx
```

## Why?

You're working in a repo with a `pyproject.toml`, but you want JupyterLab with vim bindings, LSP, collaboration, and other extensions. You can't (or don't want to) add them as project dependencies. jlabx manages extensions separately and injects them at launch time via `uv run --with`.

## Quick start

```bash
# Install
uv tool install jlabx

# Launch JupyterLab with default extensions
jlabx

# Manage extensions
jlabx list                  # Show configured extensions
jlabx add jupyterlab-vim    # Add an extension
jlabx remove jupyterlab-vim # Remove an extension

# Launch without user extensions
jlabx --no-extras
```

## Core extensions (always included)

- jupyterlab
- jupyter-collaboration
- jupyter-lsp
- python-lsp-server

## Environment detection

jlabx auto-detects your environment:

| Files in cwd | Mode | How it launches |
|---|---|---|
| `pixi.toml` / `pixi.lock` | Pixi | `pixi run jupyter-lab` |
| `pyproject.toml` | Python project | `uv run --with <extensions> jupyter-lab` |
| Neither | Standalone | `uvx --from jupyterlab --with <extensions> jupyter-lab` |

## Config

Extensions are stored in `~/.config/jlabx/config.toml` (or `$XDG_CONFIG_HOME/jlabx/config.toml`). Created automatically on first run.

## Documentation

**Full docs: https://ianhi.github.io/jlabx/**

## License

MIT
