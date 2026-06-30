import type { Metadata } from "next";
import { Button } from "@/components/Button/Button";
import styles from "@/styles/pages.module.css";

export const metadata: Metadata = {
  title: "Sobre o Escritório",
  description:
    "Conheça a proposta institucional da Sidinei Lima - Advocacia: confiança, ética e atendimento personalizado.",
};

export default function SobrePage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <p className={styles.eyebrow}>Sobre</p>
          <h1>Confiança, ética e atendimento personalizado.</h1>
          <p>
            Um escritório preparado para orientar pessoas e empresas com seriedade em momentos
            decisivos.
          </p>
        </div>
      </section>

      <section className={styles.split}>
        <div>
          <h2>Sidinei Lima - Advocacia</h2>
          <p>
            O escritório atua com foco em soluções jurídicas estratégicas, combinando técnica,
            escuta qualificada e comunicação transparente. A proposta é oferecer orientação
            acessível, sem perder a profundidade necessária para proteger direitos e reduzir riscos.
          </p>
          <p>
            Cada atendimento considera o contexto do cliente, os documentos disponíveis, os prazos
            envolvidos e as alternativas possíveis antes de qualquer medida.
          </p>
        </div>
        <div className={styles.panel}>
          <h2>Essência</h2>
          <p>
            Advocacia feita com responsabilidade, clareza e compromisso com decisões bem
            fundamentadas.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.grid}>
          {[
            ["Missão", "Defender direitos e orientar decisões jurídicas com seriedade e proximidade."],
            ["Visão", "Ser referência em atendimento jurídico estratégico, humano e transparente."],
            ["Valores", "Ética, responsabilidade, clareza, respeito e compromisso com o cliente."],
          ].map(([title, text]) => (
            <article className={styles.panel} key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div>
          <h2>Agende um atendimento</h2>
          <p>Converse com o escritório e entenda as possibilidades para o seu caso.</p>
        </div>
        <Button href="/agendamento">Solicitar agendamento</Button>
      </section>
    </>
  );
}
