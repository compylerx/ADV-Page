import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { siteConfig } from "@/data/site";
import styles from "@/styles/pages.module.css";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com Sidinei Lima - Advocacia para atendimento jurídico presencial ou online.",
};

export default function ContatoPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <p className={styles.eyebrow}>Contato</p>
          <h1>Fale com o escritório.</h1>
          <p>Envie sua mensagem ou utilize os canais de contato para solicitar atendimento.</p>
        </div>
      </section>

      <section className={styles.split}>
        <div>
          <h2>Informações de contato</h2>
          <div className={styles.contactInfo}>
            <p>
              <strong>Endereço</strong>
              {siteConfig.address}
            </p>
            <p>
              <strong>Telefone</strong>
              {siteConfig.phone}
            </p>
            <p>
              <strong>WhatsApp</strong>
              {siteConfig.whatsapp}
            </p>
            <p>
              <strong>E-mail</strong>
              {siteConfig.email}
            </p>
            <p>
              <strong>Redes sociais</strong>
              <a href={siteConfig.instagram} rel="noreferrer" target="_blank">
                Instagram
              </a>{" "}
              ·{" "}
              <a href={siteConfig.linkedin} rel="noreferrer" target="_blank">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <ContactForm source="contato" />
      </section>
    </>
  );
}
