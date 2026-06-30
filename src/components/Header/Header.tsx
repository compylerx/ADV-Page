"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import styles from "./Header.module.css";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/areas", label: "Áreas" },
  { href: "/contato", label: "Contato" },
  { href: "/agendamento", label: "Agendamento" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/" onClick={() => setIsOpen(false)}>
          <span>{siteConfig.shortName}</span>
          <small>Advocacia</small>
        </Link>

        <button
          aria-expanded={isOpen}
          aria-label="Abrir menu de navegação"
          className={styles.menuButton}
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`} aria-label="Principal">
          {links.map((link) => (
            <Link
              className={pathname === link.href ? styles.active : undefined}
              href={link.href}
              key={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
