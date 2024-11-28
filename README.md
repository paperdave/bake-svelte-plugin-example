# how to use

hello framework authors and early adopters. this is a demonstration repo for
using plugins in Bun DevServer. as of writing, you must be on https://github.com/oven-sh/bun/pull/15467

it uses a custom plugin to compile `.svelte` files

start the dev server with

```sh
bun .
```

to demo the static site generator

```
bun build --app --static --debug-dump-server-files
bunx serve dist
```

> **Note**: `--debug-dump-server-files` is needed to dump the `runtime.js` which
> is currently incorrectly shared by the server and the client.
