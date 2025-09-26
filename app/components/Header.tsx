"use client";

import { HomeIcon } from "@radix-ui/react-icons";
import { NavigationMenu } from "radix-ui";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import "./NavigationMenu.css";

import type { LinkProps } from "next/link";
import type { ReactNode } from "react";

type CustomLinkProps = LinkProps & {
  children: ReactNode;
};

const Link = ({ href, children, ...props }: CustomLinkProps) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenu.Link asChild active={isActive}>
      <NextLink href={href} className="NavigationMenuLink" {...props}>
        {children}
      </NextLink>
    </NavigationMenu.Link>
  );
};

export default function Header() {
  const renderTabNavLinks = () => {
    const links = [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#skills", label: "Skills" },
      { href: "#experience", label: "Experience" },
      { href: "#projects", label: "Projects" },
    ];

    return links.map((link) => (
      <NavigationMenu.Item key={link.href} className="NavigationMenuItem">
        <Link href={link.href}>
          {link.label === "Home" ? <HomeIcon /> : link.label}
        </Link>
      </NavigationMenu.Item>
    ));
  };

  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        {renderTabNavLinks()}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

