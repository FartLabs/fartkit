import { Get, Router } from "@fartlabs/rtx";
import { A, H1, P } from "@fartlabs/htx";
import { Layout } from "#/components/layout.tsx";
import { RedirectRoute } from "#/components/redirect.tsx";

export function IndexPage() {
  return (
    <Router>
      <Get
        pattern="/"
        handler={(_ctx) => {
          return new Response(
            <Layout>
              <H1>FartKit</H1>

              <P>
                Learn more about{" "}
                <A href="https://github.com/FartLabs/fartkit">FartKit</A>.
              </P>
            </Layout>,
            { headers: { "Content-Type": "text/html" } },
          );
        }}
      />

      <RedirectRoute pattern="(/)*" redirectUrl="/" />
    </Router>
  );
}
