# Rob Abby

I’m the founder and operator of [WavePoint](https://wavepoint.space/), a personal astrology business. I lead its product, design, engineering, and day-to-day operation.

I also work with small business owners on select projects: clearer websites, useful software, and practical ways to use AI. Based in Bellingham, Washington; working locally and remotely.

Building WavePoint has shaped how I work with AI, from questions and prototypes through development, release, and ongoing improvement. [Visit WavePoint](https://wavepoint.space/) or [explore ways to work together](https://www.robabby.com/work-with-me).

Previously building web products at PartySlate, project44, and SAVO.

[Discuss a project](mailto:robabby23@gmail.com) · [Website](https://www.robabby.com/) · [LinkedIn](https://linkedin.com/in/robabby)

---

## About this repo

The source of [robabby.com](https://www.robabby.com/): Next.js App Router, React, TypeScript, and custom CSS, deployed on Vercel. The core pages are Home, Work with me, and the SAVO case study, with a separate privacy page. The homepage features WavePoint through a manual website/iPhone gallery and a link to its website.

The Ink + Ultramarine theme uses Newsreader and Instrument Sans in light and dark appearances. Page content is server-rendered; small client components handle theme choice and gallery controls. Content remains usable without JavaScript.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm lint
pnpm build
pnpm start
pnpm shots http://localhost:3000
```

`pnpm shots` checks public pages, navigation, metadata, themes, gallery interaction, no-JavaScript rendering, and reduced motion. It writes browser screenshots and a verification report to the ignored `screenshots/` directory. Run it against a local production build before release.

See [the design system](docs/ux/design-system.md) for visual conventions and [CLAUDE.md](CLAUDE.md) for repository workflows. Active images in `public/images/wavepoint/` show WavePoint’s November 2026 website and iPhone development previews with fictional sample content. The app is in TestFlight; these captures do not establish which screens are distributed there. See the [image provenance notes](public/images/wavepoint/README.md) for capture details and retained historical assets. Original employer wordmarks and their sources are documented in [the logo notes](docs/ux/company-logos.md).
