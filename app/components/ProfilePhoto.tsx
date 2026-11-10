"use client";

import Image from "next/image";
import { useRef } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";

export default function ProfilePhoto() {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <a
        className="portrait"
        href="/profile.jpeg"
        aria-label="Enlarge photo of Rob Abby"
        aria-haspopup="dialog"
        onClick={(event) => {
          event.preventDefault();
          dialog.current?.showModal();
        }}
      >
        <Image src="/profile.jpeg" alt="Rob Abby outdoors by the water" width={640} height={640} sizes="(max-width: 360px) 72px, (max-width: 720px) 84px, 192px" priority />
      </a>
      <dialog
        className="portrait-dialog"
        ref={dialog}
        aria-label="Photo of Rob Abby"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <div className="portrait-dialog-content">
          <form method="dialog">
            <button type="submit">Close <Cross2Icon aria-hidden="true" /></button>
          </form>
          <Image src="/profile.jpeg" alt="Rob Abby outdoors by the water" width={640} height={640} sizes="(max-width: 672px) calc(100vw - 32px), 640px" />
        </div>
      </dialog>
    </>
  );
}
