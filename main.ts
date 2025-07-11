import { parseArgs } from "@std/cli";
import { dirname, join } from "@std/path";
import templates from "./embed/templates/dir.ts";
import vscode from "./embed/.vscode/dir.ts";

function showHelp() {
  console.log(
    `FartKit - The world's most ✨fart-tastic✨ Web development framework

USAGE:
  deno -A jsr:@fartlabs/fartkit [OPTIONS] -- [DIRECTORY]

OPTIONS:
  --template <name>    Template to use (default: minimal)
  --vscode            Include VS Code settings (default: true)
  --no-vscode         Exclude VS Code settings
  -h, --help          Show this help message

EXAMPLES:
  # Create a new project in current directory
  deno -A jsr:@fartlabs/fartkit

  # Create a new project in a specific directory
  deno -A jsr:@fartlabs/fartkit -- my-app

  # Use a specific template
  deno -A jsr:@fartlabs/fartkit --template=full -- my-app

  # Create without VS Code settings
  deno -A jsr:@fartlabs/fartkit --no-vscode -- my-app

TEMPLATES:
  minimal    Basic project structure (default)`
  );
}

if (import.meta.main) {
  const parsedArgs = parseArgs(Deno.args, {
    "--": true,
    string: ["template"],
    boolean: ["vscode", "help"],
    default: {
      template: "minimal",
      vscode: true,
    },
    alias: {
      h: "help",
      t: "template",
    },
  });

  if (parsedArgs.help) {
    showHelp();
    Deno.exit(0);
  }

  // Determine the parent directory.
  const parentDirectory = parsedArgs["--"].at(0) ?? ".";

  // Restore the template.
  for (const source of templates.list()) {
    if (!source.startsWith(`${parsedArgs.template}/`)) {
      continue;
    }

    const destination = join(
      Deno.cwd(),
      parentDirectory,
      source.replace(new RegExp(`^${parsedArgs.template}/`), "")
    );

    // Ensure the file's directory exists.
    const fileDirectory = dirname(destination);
    await Deno.mkdir(fileDirectory, { recursive: true });

    // Copy the file.
    const file = await templates.load(source);
    await Deno.writeFile(destination, await file.bytes());
  }

  // Restore VS Code settings.
  if (parsedArgs.vscode && !parsedArgs["no-vscode"]) {
    const vscodeSettingsDir = join(Deno.cwd(), parentDirectory, ".vscode");
    await Deno.mkdir(vscodeSettingsDir, { recursive: true });
    for (const source of vscode.list()) {
      const destination = join(vscodeSettingsDir, source);
      const file = await vscode.load(source);
      await Deno.writeFile(destination, await file.bytes());
    }
  }
}
