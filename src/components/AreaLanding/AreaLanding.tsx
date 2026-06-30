import { Button } from "@/components/Button/Button";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import type { Service } from "@/data/services";
import { getWhatsAppUrl } from "@/data/site";
import styles from "@/styles/pages.module.css";

type AreaLandingProps = {
  service: Service;
};

export function AreaLanding({ service }: AreaLandingProps) {
  return (
    <>
      <section className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <p className={styles.eyebrow}>{service.title}</p>
          <h1>{service.hero}</h1>
          <p>{service.description}</p>
          <Button href={getWhatsAppUrl(`Olá, preciso de atendimento em ${service.title}.`)} target="_blank">
            Falar pelo WhatsApp
          </Button>
        </div>
      </section>

      <section className={styles.split}>
        <div>
          <h2>Como essa área pode ajudar</h2>
          <p>{service.overview}</p>
          <h2>Problemas comuns</h2>
          <ul className={styles.list}>
            {service.problems.map((problem) => (
              <li key={problem}>{problem}</li>
            ))}
          </ul>
        </div>
        <div className={styles.panel}>
          <h2>Como o escritório atua</h2>
          <ul className={styles.list}>
            {service.support.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <h2>Benefícios do atendimento</h2>
        <ul className={styles.list}>
          {service.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </section>

      <section className={styles.split}>
        <div>
          <h2>Envie sua mensagem</h2>
          <p>
            Compartilhe os principais pontos do seu caso para que o escritório possa orientar os
            próximos passos.
          </p>
        </div>
        <ContactForm source={service.slug} />
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <h2>Perguntas frequentes</h2>
        <div className={styles.faq}>
          {service.faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
