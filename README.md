# FartKit

[![JSR](https://jsr.io/badges/@fartlabs/fartkit)](https://jsr.io/@fartlabs/fartkit)
[![JSR score](https://jsr.io/badges/@fartlabs/fartkit/score)](https://jsr.io/@fartlabs/fartkit/score)
[![GitHub Actions](https://github.com/FartLabs/fartkit/actions/workflows/publish.yaml/badge.svg)](https://github.com/FartLabs/fartkit/actions/workflows/publish.yaml)

FartKit is a batteries‑included starter and scaffolder for building modern web
applications with Deno. It focuses on developer experience and sensible
defaults, providing a ready‑to‑go project with routing, components, environment
handling, formatting/linting, and scripts for local development, testing, and
deployment.

## Getting Started

Install [Deno](https://deno.land).

### Creating a project

To scaffold a new FartKit project, run:

```sh
deno -A jsr:@fartlabs/fartkit
```

This will launch an interactive prompt to help you scaffold a new project from
scratch.

## Documentation

- API and package docs on JSR:
  [FartKit on JSR](https://jsr.io/@fartlabs/fartkit)

## Examples

After scaffolding, a typical FartKit app provides:

- Routing with a conventional `routes/` directory
- Reusable UI in `components/`
- Environment variable support for local dev and deployment
- JSX via `@fartlabs/jsonx` (configured in `deno.json`)

Example project structure (generated):

```text
my-app/
├─ deno.json
├─ main.ts
└─ src/
   ├─ app.tsx
   ├─ routes/
   │  └─ index.tsx
   └─ components/
      ├─ layout.tsx
      └─ redirect.tsx
```

Example route (`src/routes/index.tsx`):

```tsx
import { Get, Router } from "@fartlabs/rtx";
import { A, H1, P } from "@fartlabs/htx";
import { Layout } from "#/components/layout.tsx";
import { RedirectRoute } from "#/components/redirect.tsx";

export function IndexPage() {
  return (
    <Router>
      <Get
        pattern="/"
        handler={(_ctx) =>
          new Response(
            <Layout>
              <H1>FartKit</H1>
              <P>
                Learn more about{" "}
                <A href="https://github.com/FartLabs/fartkit">FartKit</A>.
              </P>
            </Layout>,
            { headers: { "Content-Type": "text/html" } },
          )}
      />
      <RedirectRoute pattern="(/)*" redirectUrl="/" />
    </Router>
  );
}
```

## Developing

Inside a generated project, start the development server:

```bash
# start the development server
deno task dev

# or start the server with environment variables
deno task start
```

### Pre-commit tasks

Generated projects include an opinionated pre-commit script to keep code
healthy. It typically runs formatting, linting, and type checks via task
composition.

```bash
deno task precommit
```

Note: The exact commands are defined in the generated project's `deno.json`. In
the minimal template, `precommit` depends on `fmt`, `lint`, and `check`.

Additional notes:

- `main.ts` re-exports the app from `#/app.tsx` and is served by `deno serve`.
- Path alias `#/` maps to `./src/` via `imports` in `deno.json`.
- JSX settings use `"jsx": "react-jsx"` with
  `"jsxImportSource": "@fartlabs/jsonx"`.

### Testing

If your generated project includes tests, run them with:

```bash
deno test
```

## Project Structure

FartKit scaffolds a conventional layout aimed at clarity and scalability:

- `routes/`: File‑system routes for pages
- `components/`: Shared UI components
- `static/`: Public static assets
- `main.ts`: App entry point and server bootstrap
- `deno.json`: Tasks, lint/format configuration

## Deploying

To deploy your FartKit application, see
[Deno Deploy](https://docs.deno.com/deploy/manual/).

## License

This project is open source. See the [`LICENSE`](./LICENSE) file for details.

---

Created with 🧪 [**@FartLabs**](https://github.com/FartLabs)
