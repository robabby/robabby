# Rob Abby

I’m Rob. I design and build software. My background is in frontend engineering, though over the years I’ve found myself getting involved in more of what goes into making a product. I enjoy figuring out what it needs, working through the design, and building it with the team and the people who use it.

I’ve led frontend engineering at PartySlate, worked at project44, and helped establish the UI/UX team at SAVO. Design, shared components, and helping other engineers with their frontend work have been recurring parts of that experience.

These days, I am working on [WavePoint](https://wavepoint.space/), an astrology app for iPhone. It brings together charts, readings, and a place to record experiences and revisit them over time. I look after the product, design, engineering, and day-to-day business, collaborating with my wife, Shayna. The app is currently in TestFlight.

AI has become a substantial part of how I work. I use it throughout development, and I’m continuing to learn where it helps and what needs more attention from me.

I’m based in Bellingham, Washington, and work locally and remotely. If you see an opportunity for us to work together—a role, a project, or simply getting to know each other—I’d love to hear from you.

[Get in touch](mailto:robabby23@gmail.com) · [Website](https://www.robabby.com/) · [LinkedIn](https://linkedin.com/in/robabby)

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
