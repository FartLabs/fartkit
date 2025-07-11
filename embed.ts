import * as embedder from "@nfnitloop/deno-embedder";

if (import.meta.main) {
  // Delete existing files.
  await Deno.remove("./embed", { recursive: true });

  // Copy README.md across templates.
  for await (const directory of Deno.readDir("./templates")) {
    await Deno.copyFile(
      "./README.md",
      `./templates/${directory.name}/README.md`,
    );
  }

  // Embed files.
  await embedder.main({
    args: Deno.args,
    options: {
      importMeta: import.meta,
      mappings: [
        {
          sourceDir: "./templates",
          destDir: "./embed/templates",
        },
        {
          sourceDir: "./.vscode",
          destDir: "./embed/.vscode",
        },
      ],
    },
  });
}
