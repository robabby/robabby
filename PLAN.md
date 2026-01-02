# Bold Redesign: Sacred Geometry Portfolio

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the portfolio into a cohesive mystical/geometric aesthetic that extends the MetatronsCube hero element throughout the entire site.

**Architecture:** Leverage the existing Radix UI + Motion stack. Introduce custom CSS variables for the geometric theme, add Next.js Google Fonts for distinctive typography, extend Motion animations for scroll-triggered reveals, and create reusable geometric pattern components.

**Tech Stack:** Next.js 15, React 19, Radix UI Themes, Motion (Framer Motion), Next/Font (Google Fonts), CSS Variables

**Tracking:** [SG-94](https://linear.app/sherpagg/issue/SG-94/bold-redesign-sacred-geometry-portfolio)

---

## Phase 1: Typography Foundation — [SG-95](https://linear.app/sherpagg/issue/SG-95/phase-1-typography-foundation)

### Task 1.1: Add Distinctive Font Pairing

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

**Context:** Replace Inter with a geometric-friendly font pairing. Using **Outfit** (display/headings - geometric, modern) and **Crimson Pro** (body - elegant contrast with serifs for readability).

**Step 1: Update layout.tsx with new fonts**

Replace the Inter import and add both fonts:

```tsx
import { Outfit, Crimson_Pro } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
```

Update the body className:
```tsx
<body className={`${outfit.variable} ${crimsonPro.variable}`}>
```

**Step 2: Add CSS custom properties for fonts**

In `app/globals.css`, add:

```css
:root {
  --font-display: 'Outfit', sans-serif;
  --font-body: 'Crimson Pro', serif;
}

body {
  font-family: var(--font-body);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: -0.02em;
}
```

**Step 3: Verify fonts render correctly**

Run: `pnpm dev`
Check: Hero heading "Robert Abby" should display in Outfit (geometric sans), body text in Crimson Pro (elegant serif).

**Step 4: Commit**

```bash
git add app/layout.tsx app/globals.css
git commit -m "feat: replace Inter with Outfit/Crimson Pro font pairing"
```

---

### Task 1.2: Enhance Typographic Hierarchy

**Files:**
- Modify: `app/globals.css`

**Context:** Add distinctive styling to headings - subtle letter-spacing, proper weights, and size relationships that feel editorial/refined.

**Step 1: Add heading styles**

```css
/* Typographic hierarchy */
h1 {
  font-weight: 700;
  letter-spacing: -0.03em;
}

h2 {
  font-weight: 600;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  font-size: 0.875em;
  letter-spacing: 0.15em;
  opacity: 0.7;
}

/* Section titles - larger, more dramatic */
.section-title {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: 3rem;
  letter-spacing: -0.02em;
  position: relative;
}

/* Geometric accent line under section titles */
.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, var(--blue-9), transparent);
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
}
```

**Step 2: Verify and commit**

```bash
git add app/globals.css
git commit -m "feat: add typographic hierarchy with geometric accents"
```

---

## Phase 2: Navigation Redesign — [SG-96](https://linear.app/sherpagg/issue/SG-96/phase-2-navigation-redesign)

### Task 2.1: Create Glass-Morphism Dark Navigation

**Files:**
- Modify: `app/components/Header/style.css`

**Context:** Replace the jarring white nav with a translucent dark glass that integrates with the dark theme. Add subtle border glow that echoes the sacred geometry aesthetic.

**Step 1: Update navigation styles**

Replace `.NavigationMenuList` styles:

```css
.NavigationMenuList {
  display: flex;
  justify-content: center;
  background: rgba(15, 20, 30, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 6px 8px;
  border-radius: 999px;
  list-style: none;
  border: 1px solid rgba(100, 150, 255, 0.15);
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  margin: 0;
}
```

**Step 2: Update link styles for dark theme**

Replace `.NavigationMenuTrigger, .NavigationMenuLink` styles:

```css
.NavigationMenuTrigger,
.NavigationMenuLink {
  padding: 10px 16px;
  outline: none;
  user-select: none;
  font-family: var(--font-display);
  font-weight: 500;
  line-height: 1;
  border-radius: 999px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.2s ease;
}

.NavigationMenuTrigger:focus,
.NavigationMenuLink:focus {
  box-shadow: 0 0 0 2px rgba(100, 150, 255, 0.4);
}

.NavigationMenuTrigger:hover,
.NavigationMenuLink:hover {
  background: rgba(100, 150, 255, 0.15);
  color: rgba(255, 255, 255, 1);
}
```

**Step 3: Verify navigation blends with hero**

Run: `pnpm dev`
Check: Navigation should appear as floating dark glass pill that harmonizes with the blue hero.

**Step 4: Commit**

```bash
git add app/components/Header/style.css
git commit -m "feat: redesign nav with glass-morphism dark theme"
```

---

## Phase 3: Color System & Backgrounds — [SG-97](https://linear.app/sherpagg/issue/SG-97/phase-3-color-system-and-backgrounds)

### Task 3.1: Establish Sacred Geometry Color Palette

**Files:**
- Modify: `app/globals.css`

**Context:** Create CSS custom properties for a cohesive mystical color palette that extends beyond the current blue/gray.

**Step 1: Add color system**

```css
:root {
  /* Sacred geometry palette */
  --sg-void: #0a0c10;
  --sg-deep: #0f1318;
  --sg-surface: #161b22;
  --sg-elevated: #1c2128;

  /* Accent colors - ethereal blues and golds */
  --sg-primary: #4a9eff;
  --sg-primary-glow: rgba(74, 158, 255, 0.4);
  --sg-secondary: #c9a962;
  --sg-secondary-glow: rgba(201, 169, 98, 0.3);

  /* Text */
  --sg-text-primary: rgba(255, 255, 255, 0.92);
  --sg-text-secondary: rgba(255, 255, 255, 0.6);
  --sg-text-muted: rgba(255, 255, 255, 0.4);

  /* Gradients */
  --sg-gradient-hero: linear-gradient(135deg, #1a4a7a 0%, #0d2847 50%, #0a1628 100%);
  --sg-gradient-section: linear-gradient(180deg, var(--sg-deep) 0%, var(--sg-void) 100%);
  --sg-gradient-card: linear-gradient(145deg, var(--sg-elevated) 0%, var(--sg-surface) 100%);
}
```

**Step 2: Commit**

```bash
git add app/globals.css
git commit -m "feat: establish sacred geometry color palette"
```

---

### Task 3.2: Add Geometric Background Pattern Component

**Files:**
- Create: `app/components/GeometricPattern/index.tsx`
- Create: `app/components/GeometricPattern/style.css`

**Context:** Create a subtle, animated geometric pattern that can be used as section backgrounds. Uses SVG with CSS animations.

**Step 1: Create the component**

`app/components/GeometricPattern/index.tsx`:

```tsx
"use client";

import "./style.css";

type GeometricPatternProps = {
  variant?: "dots" | "lines" | "hexagons";
  opacity?: number;
};

export default function GeometricPattern({
  variant = "dots",
  opacity = 0.03
}: GeometricPatternProps) {
  return (
    <div
      className={`geometric-pattern geometric-pattern--${variant}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
```

**Step 2: Create the styles**

`app/components/GeometricPattern/style.css`:

```css
.geometric-pattern {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.geometric-pattern--dots {
  background-image: radial-gradient(circle, var(--sg-primary) 1px, transparent 1px);
  background-size: 40px 40px;
}

.geometric-pattern--lines {
  background-image:
    linear-gradient(90deg, var(--sg-primary) 1px, transparent 1px),
    linear-gradient(0deg, var(--sg-primary) 1px, transparent 1px);
  background-size: 60px 60px;
}

.geometric-pattern--hexagons {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%234a9eff' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
```

**Step 3: Commit**

```bash
git add app/components/GeometricPattern/
git commit -m "feat: add geometric pattern background component"
```

---

### Task 3.3: Update Section Backgrounds

**Files:**
- Modify: `app/components/About.tsx`
- Modify: `app/components/Skills.tsx`
- Modify: `app/components/Experience/index.tsx`
- Modify: `app/components/Projects.tsx`

**Context:** Apply the new color system and add geometric patterns to sections for visual depth and differentiation.

**Step 1: Update About section**

Add GeometricPattern import and apply new styling:

```tsx
import GeometricPattern from "./GeometricPattern";

// In the component, wrap content and add pattern:
<Box id="about" py="8" style={{
  background: "var(--sg-gradient-section)",
  position: "relative",
  overflow: "hidden"
}}>
  <GeometricPattern variant="dots" opacity={0.02} />
  {/* existing content */}
</Box>
```

**Step 2: Update remaining sections similarly**

- Skills: Use `variant="lines"`
- Experience: Use `variant="dots"`
- Projects: Use `variant="hexagons"`

Alternate between `--sg-void` and `--sg-deep` backgrounds for visual rhythm.

**Step 3: Verify visual differentiation**

Run: `pnpm dev`
Check: Each section should have subtle depth and pattern differentiation.

**Step 4: Commit**

```bash
git add app/components/About.tsx app/components/Skills.tsx app/components/Experience/index.tsx app/components/Projects.tsx
git commit -m "feat: apply sacred geometry backgrounds to all sections"
```

---

## Phase 4: Animation System — [SG-98](https://linear.app/sherpagg/issue/SG-98/phase-4-animation-system)

### Task 4.1: Create Scroll-Triggered Section Reveals

**Files:**
- Create: `app/components/AnimatedSection/index.tsx`

**Context:** Create a reusable wrapper component that fades in and slides up sections when they enter the viewport using Motion's `whileInView`.

**Step 1: Create AnimatedSection component**

```tsx
"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function AnimatedSection({
  children,
  className,
  delay = 0
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
}
```

**Step 2: Commit**

```bash
git add app/components/AnimatedSection/
git commit -m "feat: add scroll-triggered AnimatedSection component"
```

---

### Task 4.2: Create Staggered List Animation Component

**Files:**
- Create: `app/components/StaggeredList/index.tsx`

**Context:** Create a component that staggers the entrance of child elements (for skill badges, project cards, etc.)

**Step 1: Create StaggeredList component**

```tsx
"use client";

import { motion } from "motion/react";
import { ReactNode, Children } from "react";

type StaggeredListProps = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function StaggeredList({
  children,
  className,
}: StaggeredListProps) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {Children.map(children, (child) => (
        <motion.div variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
```

**Step 2: Commit**

```bash
git add app/components/StaggeredList/
git commit -m "feat: add StaggeredList component for badge animations"
```

---

### Task 4.3: Apply Animations to Skills Section

**Files:**
- Modify: `app/components/Skills.tsx`

**Context:** Wrap skill badges in StaggeredList for a polished entrance animation.

**Step 1: Import and apply components**

```tsx
import AnimatedSection from "./AnimatedSection";
import StaggeredList from "./StaggeredList";

// Wrap the entire section
<AnimatedSection>
  <Box id="skills" ...>
    {/* ... */}
    {Object.entries(SKILLS).map(([category, skills]) => (
      <Box key={category} ...>
        <Heading mb="4" size="5">{category}</Heading>
        <StaggeredList>
          <Flex direction="row" gap="2" wrap="wrap">
            {skills.map((skill, index) => (
              <Badge size="3" key={index}>{skill}</Badge>
            ))}
          </Flex>
        </StaggeredList>
      </Box>
    ))}
  </Box>
</AnimatedSection>
```

**Step 2: Verify animations**

Run: `pnpm dev`
Scroll to Skills section - badges should stagger in smoothly.

**Step 3: Commit**

```bash
git add app/components/Skills.tsx
git commit -m "feat: add staggered animations to skills badges"
```

---

### Task 4.4: Apply Animations to Remaining Sections

**Files:**
- Modify: `app/components/About.tsx`
- Modify: `app/components/Experience/index.tsx`
- Modify: `app/components/Projects.tsx`

**Context:** Wrap each section with AnimatedSection for cohesive scroll reveals.

**Step 1: Add AnimatedSection wrapper to each**

Each section gets wrapped:
```tsx
<AnimatedSection>
  {/* existing section content */}
</AnimatedSection>
```

For Experience and Projects, add incremental delays to cards:
```tsx
<AnimatedSection delay={index * 0.1}>
  <ExperienceItem ... />
</AnimatedSection>
```

**Step 2: Verify all sections animate on scroll**

**Step 3: Commit**

```bash
git add app/components/About.tsx app/components/Experience/index.tsx app/components/Projects.tsx
git commit -m "feat: add scroll animations to all content sections"
```

---

## Phase 5: Hero Enhancement — [SG-99](https://linear.app/sherpagg/issue/SG-99/phase-5-hero-enhancement)

### Task 5.1: Add Parallax Depth to Hero

**Files:**
- Modify: `app/components/Hero.tsx`
- Modify: `app/components/Hero.css`

**Context:** Add subtle parallax effect so MetatronsCube moves at different rate than text, creating depth.

**Step 1: Update Hero with scroll-based parallax**

```tsx
"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
// ... other imports

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const cubeY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <Section id="home" ref={ref} style={{ background: "var(--sg-gradient-hero)", position: "relative" }}>
      <Box py="9">
        <motion.div style={{ y: cubeY }}>
          <MetatronsCube />
        </motion.div>
        <Container py="8" size="3" style={{ position: "relative", zIndex: 1 }}>
          <motion.div style={{ y: textY, opacity }}>
            <Flex direction="column" gap="4" align="center">
              {/* existing content */}
            </Flex>
          </motion.div>
        </Container>
      </Box>
    </Section>
  );
}
```

**Step 2: Verify parallax effect**

Run: `pnpm dev`
Scroll down - MetatronsCube should move faster than text, creating depth.

**Step 3: Commit**

```bash
git add app/components/Hero.tsx app/components/Hero.css
git commit -m "feat: add parallax depth effect to hero section"
```

---

### Task 5.2: Add Ambient Particle Effect to Hero

**Files:**
- Create: `app/components/AmbientParticles/index.tsx`
- Modify: `app/components/Hero.tsx`

**Context:** Add subtle floating particles that echo the sacred geometry theme without overwhelming the MetatronsCube.

**Step 1: Create AmbientParticles component**

```tsx
"use client";

import { motion } from "motion/react";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 20 + 20,
  delay: Math.random() * 5,
}));

export default function AmbientParticles() {
  return (
    <div style={{
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      pointerEvents: "none",
      zIndex: 0
    }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: "absolute",
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            borderRadius: "50%",
            background: "var(--sg-primary)",
            opacity: 0.3,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
```

**Step 2: Add to Hero**

Import and place above MetatronsCube:
```tsx
<AmbientParticles />
<motion.div style={{ y: cubeY }}>
  <MetatronsCube />
</motion.div>
```

**Step 3: Commit**

```bash
git add app/components/AmbientParticles/ app/components/Hero.tsx
git commit -m "feat: add ambient particle effect to hero"
```

---

## Phase 6: Card & Component Styling — [SG-100](https://linear.app/sherpagg/issue/SG-100/phase-6-card-and-component-styling)

### Task 6.1: Enhance Card Aesthetics

**Files:**
- Modify: `app/globals.css`

**Context:** Create card styles that match the sacred geometry theme with subtle borders, gradients, and hover effects.

**Step 1: Add card styles**

```css
/* Sacred geometry cards */
.sg-card {
  background: var(--sg-gradient-card);
  border: 1px solid rgba(100, 150, 255, 0.1);
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.sg-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(74, 158, 255, 0.05) 0%,
    transparent 50%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.sg-card:hover {
  border-color: rgba(100, 150, 255, 0.25);
  transform: translateY(-2px);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(74, 158, 255, 0.1);
}

.sg-card:hover::before {
  opacity: 1;
}

/* Badge enhancements */
.sg-badge {
  background: rgba(74, 158, 255, 0.1);
  border: 1px solid rgba(74, 158, 255, 0.2);
  color: var(--sg-text-primary);
  font-family: var(--font-display);
  font-size: 0.75rem;
  letter-spacing: 0.02em;
  transition: all 0.2s ease;
}

.sg-badge:hover {
  background: rgba(74, 158, 255, 0.2);
  border-color: rgba(74, 158, 255, 0.4);
}
```

**Step 2: Commit**

```bash
git add app/globals.css
git commit -m "feat: add sacred geometry card and badge styles"
```

---

### Task 6.2: Apply Card Styles to Components

**Files:**
- Modify: `app/components/About.tsx`
- Modify: `app/components/Skills.tsx`
- Modify: `app/components/Experience/components/ExperienceItem/index.tsx`
- Modify: `app/components/Projects.tsx`

**Context:** Replace inline styles with the new sg-card class for consistent aesthetics.

**Step 1: Update each component**

Replace `style={{ background: "var(--gray-a3)", borderRadius: "var(--radius-3)" }}` with `className="sg-card"`.

**Step 2: Verify visual consistency**

**Step 3: Commit**

```bash
git add app/components/About.tsx app/components/Skills.tsx app/components/Experience/components/ExperienceItem/index.tsx app/components/Projects.tsx
git commit -m "feat: apply sacred geometry card styles throughout"
```

---

## Phase 7: Footer & Final Polish — [SG-101](https://linear.app/sherpagg/issue/SG-101/phase-7-footer-and-final-polish)

### Task 7.1: Enhance Footer with Geometric Elements

**Files:**
- Modify: `app/components/Footer.tsx`

**Context:** Add a subtle geometric divider and improve footer styling to match the theme.

**Step 1: Update Footer**

```tsx
import { Box, Container, Flex, Link, Text } from "@radix-ui/themes";
import { LinkedInLogoIcon, GitHubLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <Box style={{ background: "var(--sg-void)", borderTop: "1px solid rgba(74, 158, 255, 0.1)" }}>
      {/* Geometric divider */}
      <Box style={{
        height: "1px",
        background: "linear-gradient(90deg, transparent, var(--sg-primary), transparent)",
        opacity: 0.3
      }} />

      <Container px="6" py="8">
        <Flex direction="column" justify="between" align="center" gap="4">
          <Flex direction="row" align="center" gap="4">
            <Link
              href="https://linkedin.com/in/robabby"
              target="_blank"
              style={{ color: "var(--sg-text-secondary)", transition: "color 0.2s" }}
            >
              <Flex align="center" gap="1">
                <LinkedInLogoIcon />
                <Text size="2">LinkedIn</Text>
              </Flex>
            </Link>
            {/* ... other links with same styling */}
          </Flex>
          <Text size="1" style={{ color: "var(--sg-text-muted)" }}>
            &copy; {new Date().getFullYear()} Rob Abby. All rights reserved.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
```

**Step 2: Commit**

```bash
git add app/components/Footer.tsx
git commit -m "feat: enhance footer with geometric styling"
```

---

### Task 7.2: Final Visual QA Pass

**Files:** All modified files

**Context:** Review the complete site, check for visual inconsistencies, and make final adjustments.

**Step 1: Full site scroll test**

Run: `pnpm dev`
Check:
- [ ] Fonts render correctly throughout
- [ ] Navigation is visible and functional
- [ ] All scroll animations trigger properly
- [ ] Parallax effect works smoothly
- [ ] Cards have consistent styling
- [ ] Color palette is cohesive
- [ ] No jarring visual transitions between sections

**Step 2: Responsive check**

Test at common breakpoints:
- [ ] Mobile (375px)
- [ ] Tablet (768px)
- [ ] Desktop (1440px)

**Step 3: Performance check**

Run: `pnpm build`
Ensure no build errors and reasonable bundle size.

**Step 4: Final commit**

```bash
git add .
git commit -m "chore: final visual QA adjustments"
```

---

## Summary

| Phase | Issue | Tasks | Focus |
|-------|-------|-------|-------|
| 1 | [SG-95](https://linear.app/sherpagg/issue/SG-95) | 1.1-1.2 | Typography foundation |
| 2 | [SG-96](https://linear.app/sherpagg/issue/SG-96) | 2.1 | Navigation redesign |
| 3 | [SG-97](https://linear.app/sherpagg/issue/SG-97) | 3.1-3.3 | Color system & backgrounds |
| 4 | [SG-98](https://linear.app/sherpagg/issue/SG-98) | 4.1-4.4 | Animation system |
| 5 | [SG-99](https://linear.app/sherpagg/issue/SG-99) | 5.1-5.2 | Hero enhancement |
| 6 | [SG-100](https://linear.app/sherpagg/issue/SG-100) | 6.1-6.2 | Card & component styling |
| 7 | [SG-101](https://linear.app/sherpagg/issue/SG-101) | 7.1-7.2 | Footer & final polish |

**Total Tasks:** 14
**Estimated Commits:** 14

---

## Execution Approach

**Method:** Subagent-Driven Development

- Fresh subagent dispatched per task
- Code review between tasks
- Fast iteration with human oversight
- Uses `superpowers:subagent-driven-development` skill

**Tracking:** [SG-94](https://linear.app/sherpagg/issue/SG-94/bold-redesign-sacred-geometry-portfolio) (parent issue)
