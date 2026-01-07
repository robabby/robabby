"use client";

import { NavigationMenu } from "radix-ui";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import "./style.css";

const LINKS = [
  { href: "#home", label: "Home", isBrand: true },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

// Brand mark component with sacred geometry hexagon
const BrandMark = () => (
  <div className="brand-mark">
    <svg className="brand-geometry" viewBox="0 0 40 40" aria-hidden="true">
      <polygon
        points="20,2 37,11 37,29 20,38 3,29 3,11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
    <span className="brand-initials">RA</span>
  </div>
);

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      // Scroll state for header transformation
      setIsScrolled(window.scrollY > 50);

      // Active section detection
      const sections = LINKS.map((link) => link.href.replace("#", ""));

      // Check sections from bottom to top to find the current one
      for (const sectionId of [...sections].reverse()) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation config
  const duration = prefersReducedMotion ? 0 : 0.5;
  const itemDuration = prefersReducedMotion ? 0 : 0.4;
  const staggerDelay = prefersReducedMotion ? 0 : 0.06;
  const initialDelay = prefersReducedMotion ? 0 : 0.1;

  return (
    <motion.header
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, ease: "easeOut" }}
    >
      <NavigationMenu.Root className="NavigationMenuRoot">
        <NavigationMenu.List
          className={`NavigationMenuList ${isScrolled ? "NavigationMenuList--scrolled" : ""}`}
        >
          {LINKS.map((link, index) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <NavigationMenu.Item key={link.href} className="NavigationMenuItem">
                <motion.div
                  className="NavigationMenuItemWrapper"
                  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: itemDuration,
                    ease: "easeOut",
                    delay: initialDelay + index * staggerDelay,
                  }}
                >
                  <NavigationMenu.Link asChild active={isActive}>
                    <NextLink
                      href={link.href}
                      className={`NavigationMenuLink ${isActive ? "NavigationMenuLink--active" : ""}`}
                    >
                      {/* Sliding active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="active-indicator"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}

                      {/* Content */}
                      <span className="NavigationMenuLinkContent">
                        {link.isBrand ? <BrandMark /> : link.label}
                      </span>
                    </NextLink>
                  </NavigationMenu.Link>
                </motion.div>
              </NavigationMenu.Item>
            );
          })}
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </motion.header>
  );
}
