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

## Contact page configuration

`/contact` posts to `/api/contact`, which sends a plain-text transactional email
through Brevo. The recipient is fixed to Rob’s inbox; the visitor is the Reply-To.
There is no contact database or mailing-list enrollment. Set `BREVO_API_KEY` and
`CONTACT_FROM_EMAIL` as server-only environment variables. The sender must belong
to a domain authenticated in Brevo. Never prefix these values with `NEXT_PUBLIC_`.

The regional Apple map uses `MAPKIT_TEAM_ID`, `MAPKIT_KEY_ID`, and
`MAPKIT_PRIVATE_KEY` (base64-encoded `.p8`). `/api/maps/token` returns a short-lived,
origin-restricted browser token; the signing key stays on the server. Missing map
configuration leaves a location description and an Apple Maps link.

For local development, add these values to an ignored `.env.local` or
`.env.development.local`. Copy names from `.env.example`, not secret values into
source control. Local origins supported by the routes are `localhost:3000` and
`localhost:3098` (plus `127.0.0.1:3098`). Vercel’s current deployment URL and both
production domain variants are allowed in deployed environments.

Run `node --test tests/contact.test.mjs` for the email-handler checks. Before
release, verify a real submission reaches the inbox and that Reply-To addresses
the visitor. Also publish and validate the Vercel firewall rule for POST
`/api/contact`; its initial observation threshold is 10 requests per IP in 10
minutes. Observation mode logs excess requests and does **not** enforce a limit.
Enable enforcement after reviewing matching traffic. The honeypot, input limits,
and fixed recipient in the handler do not replace distributed rate limiting.
