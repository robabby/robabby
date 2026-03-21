---
title: "Professional Narrative Audit — Gap Analysis Across All Surfaces"
date: 2026-03-21
category: heartbeat
trigger: "Priority #1 is cohesive professional narrative. This is the first heartbeat research cycle. Audited robabby.com source code, LinkedIn public profile, and resume framing against 2026 market expectations."
summary: "Rob's robabby.com has strong WavePoint coverage but zero mention of Sherpa (consulting) or Sherpa Studio (product). LinkedIn title says 'WavePoint' but has almost no visible detail. The site title still says 'Staff Frontend Engineer' — not 'Founder & Principal Engineer.' The founder-to-FTE transition has a known perception problem ('flight risk') that needs proactive framing. Six specific gaps identified with recommended fixes."
---

## Audit Scope

Reviewed the following surfaces:
1. **robabby.com** — full source code audit (page.tsx, Hero, About, Experience, FeaturedWork, Projects, CaseStudies, Skills, StatsBar)
2. **LinkedIn** — public profile (limited data; behind auth wall)
3. **Resume trends** — 2026 best practices research (ResumeAdapter, BeamJobs, Enhancv)
4. **Founder-to-FTE framing** — hiring manager perception research (Reddit r/ycombinator, r/resumes, r/Entrepreneur, academic research)

---

## Current State

### robabby.com

**What's there (good):**
- WavePoint is featured prominently with a 3-block deep dive (What/How/Why)
- Platform topology and agentic workflow SVG diagrams
- Stats bar: 450+ commits, 6 Apple apps, 111 primitives, 44 governance rules
- Experience section includes WavePoint as "Founder & Principal Engineer" at top
- Two detailed case studies (PartySlate venue page, Savo design system)
- Claude Skills project in Projects section
- "Available for opportunities" badge on homepage

**What's missing (critical gaps):**

1. **No mention of Sherpa anywhere.** Not in Experience, not in Projects, not in About. The consulting practice — with its foundation stone, values, principles — is invisible. This is supposed to be Rob's most recent position.

2. **No mention of Sherpa Studio anywhere.** The AI dev tooling product that differentiates Rob from "just uses Copilot" candidates is completely absent from the site.

3. **Site title says "Staff Frontend Engineer"** — This is the `<title>` tag and appears in the Hero subtitle. Rob's current role is Founder & Principal Engineer. The title should reflect current positioning, not previous role.

4. **Hero subtitle: "Staff Engineer & AI-Augmented Builder"** — This is decent but doesn't mention the founder/consulting angle. The tagline "From Design Systems to Intelligence-Native Products" is fine but generic.

5. **Stats bar only covers WavePoint.** No stats for Sherpa or Sherpa Studio. The bar could include: "2 companies founded" or "8 research streams running 24/7" or similar.

6. **About section says "450+ commits in 9 weeks"** — the competitive research identified 472+ PRs as the stronger number (PRs > commits for credibility with engineering audiences). Also the "9 weeks" figure appears inconsistent — the Experience section also says "9 weeks" but the PRIORITIES.md and earlier conversations reference "11 weeks."

7. **Projects section has Claude Skills but not Sherpa Studio.** Sherpa Studio is a much more significant project and a stronger differentiator.

8. **No blog or content section.** Content strategy research identified this as critical for inbound. The site has no way to publish articles.

### LinkedIn

**What's visible (public profile):**
- Title: "WavePoint" (just the company name, no role title visible)
- About: "I build products at the intersection of systems engineering and AI-augmented development…" (truncated)
- WavePoint listed as a project (Oct 2025)
- 996 followers
- MIT xPRO certification visible
- Scrum Alliance CSPO (expired 2018)

**What's missing:**
- Sherpa not visible as a position
- Sherpa Studio not mentioned
- No detailed experience visible without logging in
- The headline doesn't include a role title or positioning statement

### Resume (inferred from PDF download link)

- PDF available at `/robert-abby-resume.pdf` — can't read binary, but the Experience component data gives us the content
- WavePoint is listed as most recent
- **Sherpa and Sherpa Studio are not listed in the Experience data**
- VIMSIA (2025 contract IT Manager role) is between WavePoint and PartySlate

---

## Gap Analysis

### Gap 1: Sherpa Is Invisible
**Impact: Critical**

Sherpa (consulting) is supposed to be Rob's most recent position — Founder & Principal Engineer. It has a foundation stone, values, principles, a website, and represents the business entity. But it doesn't appear anywhere on the portfolio site, in the Experience data, or visibly on LinkedIn.

**Fix:** Add Sherpa as the top Experience entry. Position it as a consulting practice founded in early AI transformation wave. WavePoint becomes a project within/alongside Sherpa, not the other way around.

### Gap 2: Sherpa Studio Is Invisible
**Impact: Critical**

The competitive research repeatedly identified "I built AI dev tooling, not just used it" as Rob's strongest differentiator. Sherpa Studio — an Agentic Engineering workflow suite — is the proof of that. It doesn't appear anywhere.

**Fix:** Add Sherpa Studio to Projects (featured, top of list) and reference it in the Sherpa Experience entry. Include what it does: workforce management, skill management, workflow orchestration, session management, conventions enforcement.

### Gap 3: Site Title & Hero Don't Reflect Current Positioning
**Impact: High**

"Rob Abby - Staff Frontend Engineer" as the `<title>` tag means that's what appears in Google results, browser tabs, and social previews. It should match the narrative.

**Fix:** Title → "Rob Abby — Founder & Engineer" or "Rob Abby — AI-Native Engineer." Hero subtitle → something that includes the founder/consulting identity.

### Gap 4: Founder → FTE Perception Problem
**Impact: High (hidden risk)**

Research surfaced a well-documented pattern: hiring managers perceive founders as flight risks. One Reddit commenter: "I got 2-3X more interviews once I removed 'Founder' from my resume." An academic paper in Organization Science confirms founders face hiring friction.

**However**, Rob's situation has key mitigations:
- He has 13 years of traditional employment history (2011-2024), including 6 years at one company (PartySlate) — demonstrating loyalty and stability
- The founder period is recent and short, which reads as "career exploration" not "serial entrepreneur"
- AI-native startups and developer tooling companies actively *seek* founder-type engineers
- The VIMSIA contract fills what would otherwise be a gap

**Recommended framing:** Don't hide "Founder" — own it, but pair it with language that signals willingness to go deep inside an organization. Something like: "Built from scratch as a solo founder — now looking to bring that velocity and system-design thinking to a team." Address the flight risk objection before it forms.

### Gap 5: Inconsistent Numbers
**Impact: Medium**

- "450+ commits" (StatsBar, About) vs. "472+ PRs" (priorities/conversations)
- "9 weeks" (multiple places) vs. "11 weeks" (priorities/conversations)
- These should be reconciled and the most impressive accurate number used consistently

### Gap 6: No Content/Blog Infrastructure
**Impact: Medium (grows over time)**

The content strategy research identified that Rob's first published piece could significantly boost inbound visibility. The site has no blog route, no content infrastructure. This isn't urgent today but blocks the content strategy.

---

## Recommended Priority Actions

### Immediate (this weekend)
1. Add Sherpa to Experience section (top entry, above WavePoint)
2. Add Sherpa Studio to Projects section (featured)
3. Update `<title>` tag and Hero to reflect current positioning
4. Reconcile commit/PR counts and week numbers across all components

### This week
5. Update LinkedIn headline, about section, and add Sherpa as a position
6. Update resume PDF with Sherpa and Sherpa Studio
7. Review Hero tagline for narrative coherence

### Soon
8. Add a blog/writing route to robabby.com
9. Write first article (per content strategy research)
10. Address founder-to-FTE framing in About section or a dedicated "narrative" section

---

## Narrative Arc (Proposed)

The story, told across all surfaces:

> **13 years building frontend infrastructure at scale** (Web2Carz → Savo → project44 → PartySlate) → **saw the AI transformation coming** → **founded Sherpa**, an AI consulting practice built on honesty, craftsmanship, and empowerment → **built WavePoint** as proof of concept (full product, solo, 11 weeks, team-scale output) → **built Sherpa Studio**, an Agentic Engineering workflow suite, because the tooling layer is what makes AI dev reliable → **now seeking a role** where this velocity, system-design thinking, and AI infrastructure expertise can compound inside a team.

That's the arc. Every surface should tell a piece of it, and they should all point to each other.

---

## Sources

1. robabby.com source code audit (local filesystem)
2. LinkedIn public profile: linkedin.com/in/robabby
3. ResumeAdapter — "Resume Trends 2026": https://www.resumeadapter.com/blog/resume-trends-2026
4. Reddit r/ycombinator — "Do founders get dinged in traditional hiring?": https://www.reddit.com/r/ycombinator/comments/1grertm/
5. Reddit r/resumes — "Is putting co-founder hurting me?": https://www.reddit.com/r/resumes/comments/1dkthlh/
6. Reddit r/Entrepreneur — "What do you put on your resume after you failed as a co-founder": https://www.reddit.com/r/Entrepreneur/comments/16rfkrd/
7. Organization Science — "The Evaluation of Founder Failure and Success by Hiring Firms": https://pubsonline.informs.org/doi/10.1287/orsc.2022.1592
8. LinkedIn — "4 Ways to Position Your Failed Startup Experience": https://www.linkedin.com/pulse/4-ways-position-your-failed-startup-experience-resume-virginia
