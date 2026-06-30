import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard/ServiceCard";
import { services } from "@/data/services";
import styles from "@/styles/pages.module.css";

export const metadata: Metadata = {
  title: "Áreas de Atuação",
  description:
    "Atendimento jurídico em Direito Trabalhista, Direito Previdenciário e Direito Civil.",
};

export default function AreasPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <p className={styles.eyebrow}>Áreas de atuação</p>
          <h1>Atendimento jurídico com foco, método e estratégia.</h1>
          <p>
            Conheça as principais áreas atendidas pelo escritório e escolha o caminho mais adequado
            para o seu caso.
          </p>
        </div>
      </section>
      <div className={styles.grid}>
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </>
  );
}
