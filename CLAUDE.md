# jlabx

Zero-dependency Python CLI that launches JupyterLab with configurable extensions. Works with both uv and pixi projects.

## Problem

You want JupyterLab with specific extensions (vim, collaboration, LSP, etc.) in a repo that already has a `pyproject.toml` or `pixi.toml` — but you can't add jupyterlab to the project's dependencies. jlabx solves this by managing extensions separately, auto-detecting your environment (pixi or uv), and injecting them at launch time.

## Project structure

```
src/jlabx/__init__.py   # Entire application — single module, no dependencies
pyproject.toml           # Package config (hatchling build, entry point: jlabx:main)
docs/                    # Starlight (Astro) docs site
.github/workflows/       # GitHub Pages deployment
```

## Key design decisions

- **Zero dependencies**: Only uses Python stdlib. TOML config is parsed manually to avoid requiring `tomllib` (3.11+) or `tomli`.
- **Single file**: Everything lives in `src/jlabx/__init__.py`. Keep it that way unless complexity genuinely demands splitting.
- **Three launch modes**: Pixi project (delegates to `pixi run`), Python project (`uv run --with`), standalone (`uvx --from`). Detection is based on file presence in cwd.
- **Config location**: `$XDG_CONFIG_HOME/jlabx/config.toml` (defaults to `~/.config/jlabx/config.toml`).
- **Requires uv**: Uses `uv run` / `uvx` to launch JupyterLab. Since jlabx is installed via `uv tool install`, uv is always available.

## Development

```bash
# Install in development mode
uv pip install -e .

# Run directly
uv run jlabx --help

# Install as a tool (like users would)
uv tool install -e .
```

## Testing

No test suite yet. Manual testing:

```bash
# In a directory with pyproject.toml
jlabx              # Should detect Python project, use uv run --with
jlabx --no-extras  # Should skip user extensions
jlabx list         # Should show core + user extensions
jlabx add foo      # Should add to config
jlabx remove foo   # Should remove from config
```

## Docs

The docs site uses Starlight (Astro) in `docs/`. To develop locally:

```bash
cd docs && npm install && npm run dev
```

Deployed to GitHub Pages via `.github/workflows/docs.yml` on push to main.
