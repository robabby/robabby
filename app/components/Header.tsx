"use client";

import { NavigationMenu } from "radix-ui";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import "./NavigationMenu.css";

const Link = ({ href, ...props }) => {
	const pathname = usePathname();
	const isActive = href === pathname;

	return (
		<NavigationMenu.Link asChild active={isActive}>
			<NextLink href={href} className="NavigationMenuLink" {...props} />
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
          {link.label}
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

