import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

type Props = { home?: boolean; currentPage?: "services" | "ai"; localContact?: boolean };

export default function SiteHeader({ home = false, currentPage, localContact = false }: Props) {
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
            <Link href="/how-i-work-with-ai" aria-current={currentPage === "ai" ? "page" : undefined}>AI workflow</Link>
            <Link href="/work-with-me" aria-current={currentPage === "services" ? "page" : undefined}>Work with me</Link>
            <Link href="/#about">About</Link>
            <a href={home || localContact ? "#contact" : "/#contact"}>Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>
    </>
  );
}
