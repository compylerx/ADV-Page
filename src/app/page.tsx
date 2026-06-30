import type { Metadata } from "next";
import { Button } from "@/components/Button/Button";
import { Hero } from "@/components/Hero/Hero";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard/ServiceCard";
import { services } from "@/data/services";
import { getWhatsAppUrl } from "@/data/site";
import styles from "@/styles/pages.module.css";

export const metadata: Metadata = {
  title: "Advocacia estratégica para pessoas e empresas",
  description:
    "Escritório de advocacia com atendimento humanizado em Direito Trabalhista, Previdenciário e Civil.",
};

const differentials = [
  "Atendimento humanizado",
  "Ética e transparência",
  "Atendimento presencial e online",
  "Soluções jurídicas estratégicas",
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className={styles.split}>
        <div>
          <p className={styles.eyebrow}>O escritório</p>
          <h2>Atuação técnica com linguagem clara e foco no seu objetivo.</h2>
          <p>
            Sidinei Lima - Advocacia oferece atendimento jurídico consultivo e contencioso
            para pessoas e empresas que buscam segurança, estratégia e transparência em cada
            decisão.
          </p>
        </div>
        <div className={styles.panel}>
          <h2>Compromisso</h2>
          <p>
            Cada caso é conduzido com escuta ativa, análise documental cuidadosa e orientação
            objetiva sobre riscos, alternativas e próximos passos.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <SectionTitle
          eyebrow="Áreas de atuação"
          title="Principais frentes de atendimento"
          description="Serviços jurídicos organizados para resolver demandas urgentes e prevenir novos riscos."
        />
      </section>
      <div className={styles.grid}>
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <SectionTitle eyebrow="Diferenciais" title="Uma advocacia próxima, objetiva e responsável" />
        <ul className={styles.list}>
          {differentials.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.cta}>
        <div>
          <h2>Precisa de orientação jurídica?</h2>
          <p>Solicite um atendimento e receba uma análise inicial do melhor caminho.</p>
        </div>
        <Button href={getWhatsAppUrl()} target="_blank">
          Falar agora
        </Button>
      </section>
    </>
  );
}
