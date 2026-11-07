import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

type Props = { home?: boolean };

export default function SiteHeader({ home = false }: Props) {
  return (
    <>
      <a className="skip" href="#main-content">
        Skip to content
      </a>
      <header className="wrap site-header">
        {home ? (
          <p className="site-description">Product, design and engineering</p>
        ) : (
          <Link className="home-link" href="/">
            Rob Abby
          </Link>
        )}
        <div className="header-right">
          <nav className="nav" aria-label="Main navigation">
            <Link href="/#work">Work</Link>
            <Link href="/#about">About</Link>
            <a href={home ? "#contact" : "/#contact"}>Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>
    </>
  );
}
