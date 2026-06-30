import Link from "next/link";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <h2>{siteConfig.name}</h2>
          <p>{siteConfig.description}</p>
        </div>
        <div>
          <h3>Navegação</h3>
          <Link href="/sobre">Sobre</Link>
          <Link href="/areas">Áreas de atuação</Link>
          <Link href="/contato">Contato</Link>
          <Link href="/agendamento">Agendamento</Link>
        </div>
        <div>
          <h3>Áreas</h3>
          {services.map((service) => (
            <Link href={service.href} key={service.slug}>
              {service.title}
            </Link>
          ))}
        </div>
        <div>
          <h3>Contato</h3>
          <p>{siteConfig.address}</p>
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
        </div>
      </div>
      <p className={styles.copy}>
        © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
