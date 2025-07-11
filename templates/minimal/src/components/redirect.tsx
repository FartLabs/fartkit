import { Get } from "@fartlabs/rtx";
import { HEAD, HTML, META } from "@fartlabs/htx";

/**
 * RedirectRoute redirects the user to the given URL.
 */
export function RedirectRoute(
  props: { pattern: string; redirectUrl: string },
) {
  return (
    <Get
      pattern={props.pattern}
      handler={() =>
        new Response(
          <RedirectPage redirectUrl={props.redirectUrl} />,
          { headers: { "Content-Type": "text/html" } },
        )}
    />
  );
}

/**
 * RedirectPage redirects the user to the given URL.
 */
export function RedirectPage(props: { redirectUrl: string }) {
  const html = (
    <HTML>
      <HEAD>
        <META http-equiv="refresh" content={`0; url=${props.redirectUrl}`} />
      </HEAD>
    </HTML>
  );

  return "<!DOCTYPE html>" + html;
}
