import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="wrap site-footer">
      <p>© {new Date().getFullYear()} Rob Abby · Bellingham, Washington</p>
      <nav aria-label="Footer">
        <Link href="/ai">How I work with AI</Link>
        <Link href="/work-with-me">Work with me</Link>
        <a href="/resume.pdf">Résumé (PDF)</a>
        <a
          href="https://linkedin.com/in/robabby"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn<span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a
          href="https://github.com/robabby"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub<span className="sr-only"> (opens in a new tab)</span>
        </a>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy">Privacy</Link>
      </nav>
    </footer>
  );
}
