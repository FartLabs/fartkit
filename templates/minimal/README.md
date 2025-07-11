# FartKit

Everything you need to build a modern web application, powered by **FartKit**.

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
deno -A jsr:@fartlabs/fartkit
```

## Developing

Once you've cloned the project, start a development server:

```bash
# start the development server
deno task dev

# or start the server with environment variables
deno task start
```

## Building

To create a production version of your app:

```bash
# run all pre-commit checks
deno task precommit
```

You can preview the production build by running the server in production mode.

## Deploying

To deploy your FartKit application, simply run:

```sh
deno -A jsr:@fartlabs/fartkit
```

This command will start an interactive setup and ask you a series of questions
to guide you through the deployment process.

### Creating a new project

To create a new FartKit project, use the `create` subcommand:

```sh
deno -A jsr:@fartlabs/fartkit create
```

This will launch an interactive prompt to help you scaffold a new project from
scratch.
