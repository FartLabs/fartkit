import {E} from "jsr:@nfnitloop/deno-embedder@1.6.1/embed.ts"

export default E({
  "extensions.json": () => import("./_extensions.json.ts"),
  "settings.json": () => import("./_settings.json.ts"),
})
