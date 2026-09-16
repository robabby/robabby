# Rob Abby

I’m the founder and operator of [WavePoint](https://wavepoint.space/), a personal astrology business. I lead its product, design, engineering, and day-to-day operation.

I also work with small business owners on select projects: clearer websites, useful software, and practical ways to use AI. Based in Bellingham, Washington; working locally and remotely.

Building WavePoint has shaped how I work with AI, from questions and prototypes through development, release, and ongoing improvement. Read the [WavePoint case study](https://www.robabby.com/work/wavepoint) or [explore ways to work together](https://www.robabby.com/work-with-me).

Previously building web products at PartySlate, project44, and SAVO.

[Discuss a project](mailto:robabby23@gmail.com) · [Website](https://www.robabby.com/) · [LinkedIn](https://linkedin.com/in/robabby)

---

## About this repo

The source of [robabby.com](https://www.robabby.com/): Next.js App Router, React, TypeScript, and custom CSS, deployed on Vercel. The core pages are Home, Work with me, and the WavePoint case study, with a separate privacy page.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm lint
pnpm build
pnpm start
pnpm shots http://localhost:3000
```

`pnpm shots` checks the public pages, navigation, metadata, themes, and no-JavaScript rendering, and writes browser screenshots to the ignored `screenshots/` directory. Run it against a local production build before release.

See [the design system](docs/ux/design-system.md) for the visual conventions and [CLAUDE.md](CLAUDE.md) for repository workflows. Images in `public/images/wavepoint/` show WavePoint’s public example chart and a published Moon Calendar sample; they contain no private chart data.
