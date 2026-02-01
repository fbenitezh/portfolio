"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-foreground/10 z-50">
      <nav className="max-w-5xl mx-auto px-6 py-1 flex items-center justify-between">
        <Link href="/" className="hover:opacity-70 transition-opacity">
          <Image
            src="icon.png"
            alt="Logo"
            width={100}
            height={40}
            className="rounded-full"
          />
        </Link>

        <div className="flex gap-8">
          <a
            href="#proyectos"
            className="text-sm hover:opacity-70 transition-opacity"
          >
            Proyectos
          </a>
          <a
            href="#experiencia"
            className="text-sm hover:opacity-70 transition-opacity"
          >
            Experiencia
          </a>
          <a
            href="#contacto"
            className="text-sm hover:opacity-70 transition-opacity"
          >
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
}
