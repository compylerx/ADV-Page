import type { Metadata } from "next";
import { ScheduleForm } from "@/components/ScheduleForm/ScheduleForm";
import styles from "@/styles/pages.module.css";

export const metadata: Metadata = {
  title: "Agendamento",
  description:
    "Solicite um atendimento jurídico com Sidinei Lima - Advocacia informando área de interesse, data e horário.",
};

export default function AgendamentoPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <p className={styles.eyebrow}>Agendamento</p>
          <h1>Solicite seu atendimento jurídico.</h1>
          <p>
            Preencha o formulário com seus dados e a equipe retornará para confirmar a melhor data
            e horário.
          </p>
        </div>
      </section>

      <section className={styles.split}>
        <div>
          <h2>Atendimento presencial e online</h2>
          <p>
            O formulário registra sua solicitação no Supabase pela API do próprio Next.js. Após o
            envio, o escritório poderá retornar por telefone, e-mail ou WhatsApp.
          </p>
        </div>
        <ScheduleForm />
      </section>
    </>
  );
}
