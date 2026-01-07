"use client";

import { HomeIcon } from "@radix-ui/react-icons";
import { NavigationMenu } from "radix-ui";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import "./style.css";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = LINKS.map(link => link.href.replace('#', ''));

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderTabNavLinks = () => LINKS.map((link) => {
    const sectionId = link.href.replace('#', '');
    const isActive = activeSection === sectionId;

    return (
      <NavigationMenu.Item key={link.href} className="NavigationMenuItem">
        <NavigationMenu.Link asChild active={isActive}>
          <NextLink
            href={link.href}
            className={`NavigationMenuLink ${isActive ? 'NavigationMenuLink--active' : ''}`}
          >
            {link.label === "Home" ? <HomeIcon /> : link.label}
          </NextLink>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    );
  });

  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        {renderTabNavLinks()}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

