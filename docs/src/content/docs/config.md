---
title: Configuration
description: Config file format and location.
---

## Config file location

jlabx stores its configuration at:

```
~/.config/jlabx/config.toml
```

If `$XDG_CONFIG_HOME` is set, it uses `$XDG_CONFIG_HOME/jlabx/config.toml` instead.

## File format

The config file is a simple TOML file with a single `extensions` array:

```toml
# jlabx configuration
#
# Extra packages to include when launching JupyterLab.
# Core extensions (jupyter-collaboration, jupyter-lsp, python-lsp-server)
# are always included and don't need to be listed here.
#
# To skip these extras temporarily, run: jlabx --no-extras

extensions = [
    "jupyterlab-vim",
    "jupyterlab-myst",
    "jupyterlab-git",
]
```

## Editing

You can edit the config file directly, or use the subcommands:

```bash
jlabx add <package>      # Append to extensions list
jlabx remove <package>   # Remove from extensions list
jlabx list               # Show current config
```

## First run

On first run, jlabx creates the config file with these default user extensions:

- `jupyterlab-vim`
- `jupyterlab-myst`
- `jupyterlab-git`

## What goes in the config

The `extensions` list should contain PyPI package names for JupyterLab extensions or other packages you want available in the JupyterLab environment. These are passed as `--with` arguments to `uv run`.

You don't need to list the core extensions — they're always included regardless of your config.
