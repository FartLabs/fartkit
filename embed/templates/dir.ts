import {E} from "jsr:@nfnitloop/deno-embedder@1.6.1/embed.ts"

export default E({
  "minimal/.gitignore": () => import("./minimal/_.gitignore.ts"),
  "minimal/README.md": () => import("./minimal/_README.md.ts"),
  "minimal/deno.json": () => import("./minimal/_deno.json.ts"),
  "minimal/main.ts": () => import("./minimal/_main.ts.ts"),
  "minimal/src/app.tsx": () => import("./minimal/src/_app.tsx.ts"),
  "minimal/src/components/layout.tsx": () => import("./minimal/src/components/_layout.tsx.ts"),
  "minimal/src/components/redirect.tsx": () => import("./minimal/src/components/_redirect.tsx.ts"),
  "minimal/src/routes/index.tsx": () => import("./minimal/src/routes/_index.tsx.ts"),
})
