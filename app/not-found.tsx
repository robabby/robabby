import Link from "next/link";
import SiteHeader from "./components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="wrap legal" id="main-content" tabIndex={-1}>
        <p className="eyebrow">Page not found</p>
        <h1>That page isn’t here.</h1>
        <p>
          The address may have changed. You can return home or explore ways to
          work together.
        </p>
        <div className="hero-actions">
          <Link className="button" href="/">
            Back to home
          </Link>
          <Link className="text-link" href="/work-with-me">
            Work with me
          </Link>
        </div>
      </main>
    </>
  );
}
