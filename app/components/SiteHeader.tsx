import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

type Props = { home?: boolean; active?: "services" | "wavepoint" };

export default function SiteHeader({ home = false, active }: Props) {
  return (
    <>
      <a className="skip" href={home ? "#hero-title" : "#main-content"}>
        Skip to content
      </a>
      <header className={home ? "wrap home-header" : "wrap sub-header"}>
        {home ? (
          <p className="eyebrow">Product, design &amp; engineering</p>
        ) : (
          <Link className="home-link" href="/">
            Rob Abby
          </Link>
        )}
        <div className="header-right">
          <nav className="nav" aria-label="Main navigation">
            <Link
              href="/work/wavepoint"
              aria-current={active === "wavepoint" ? "page" : undefined}
            >
              WavePoint
            </Link>
            <Link
              href="/work-with-me"
              aria-current={active === "services" ? "page" : undefined}
            >
              Work with me
            </Link>
            <Link href="/#about">About</Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>
    </>
  );
}
