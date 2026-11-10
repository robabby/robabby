"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";

export default function MobileNavigation({ children }: { children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 721px)");
    const dismissOnDesktop = () => {
      if (desktop.matches) dialog.current?.close();
    };
    desktop.addEventListener("change", dismissOnDesktop);
    return () => desktop.removeEventListener("change", dismissOnDesktop);
  }, []);

  return <>
    <button className="mobile-menu-button" type="button" aria-label="Open menu" aria-haspopup="dialog" aria-expanded={open} aria-controls="mobile-menu" onClick={() => {
      dialog.current?.showModal();
      setOpen(true);
    }}><HamburgerMenuIcon aria-hidden="true" /></button>
    <dialog ref={dialog} id="mobile-menu" className="mobile-menu" aria-labelledby="mobile-menu-title" onClose={() => setOpen(false)} onClick={(event) => {
      if (event.target === event.currentTarget || (event.target as Element).closest("a")) dialog.current?.close();
    }}>
      <div className="mobile-menu-content">
        <div className="mobile-menu-heading">
          <p id="mobile-menu-title">Menu</p>
          <form method="dialog"><button type="submit" aria-label="Close menu"><Cross2Icon aria-hidden="true" /></button></form>
        </div>
        {children}
      </div>
    </dialog>
  </>;
}
