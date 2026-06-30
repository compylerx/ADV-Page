import Image from "next/image";
import { Button } from "@/components/Button/Button";
import { getWhatsAppUrl } from "@/data/site";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        alt="Escritório jurídico elegante com livros, documentos e detalhes dourados"
        className={styles.image}
        fill
        priority
        src="/images/hero-law-office.png"
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.eyebrow}>Sidinei Lima - Advocacia</p>
        <h1>Soluções Jurídicas Estratégicas para Pessoas e Empresas</h1>
        <p>
          Atendimento jurídico com seriedade, transparência e compromisso na defesa dos seus
          direitos.
        </p>
        <div className={styles.actions}>
          <Button href="/agendamento">Agendar atendimento</Button>
          <Button href={getWhatsAppUrl()} target="_blank" variant="secondary">
            Falar pelo WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
