import { Router } from "@fartlabs/rtx";
import { IndexPage } from "./routes/index.tsx";

export function App() {
  return (
    <Router>
      <IndexPage />
    </Router>
  );
}

const app = <App />;

export default {
  fetch: (request) => {
    return app.fetch(request);
  },
} satisfies Deno.ServeDefaultExport;
