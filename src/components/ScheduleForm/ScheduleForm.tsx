"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { serviceOptions } from "@/data/services";
import { type ScheduleInput, scheduleSchema } from "@/lib/validations";
import styles from "@/components/ContactForm/ContactForm.module.css";

export function ScheduleForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<ScheduleInput>({
    resolver: zodResolver(scheduleSchema),
  });

  async function onSubmit(data: ScheduleInput) {
    setStatus("idle");
    const response = await fetch("/api/agendamentos", {
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    setStatus("success");
    reset();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nome</label>
        <input id="name" placeholder="Seu nome completo" {...register("name")} />
        {errors.name ? <span>{errors.name.message}</span> : null}
      </div>
      <div className={styles.row}>
        <div>
          <label htmlFor="phone">Telefone</label>
          <input id="phone" placeholder="(00) 00000-0000" {...register("phone")} />
          {errors.phone ? <span>{errors.phone.message}</span> : null}
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input id="email" placeholder="voce@email.com" type="email" {...register("email")} />
          {errors.email ? <span>{errors.email.message}</span> : null}
        </div>
      </div>
      <div>
        <label htmlFor="area">Área de interesse</label>
        <select id="area" {...register("area")}>
          <option value="">Selecione uma área</option>
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.area ? <span>{errors.area.message}</span> : null}
      </div>
      <div className={styles.row}>
        <div>
          <label htmlFor="preferred_date">Melhor data</label>
          <input id="preferred_date" type="date" {...register("preferred_date")} />
          {errors.preferred_date ? <span>{errors.preferred_date.message}</span> : null}
        </div>
        <div>
          <label htmlFor="preferred_time">Melhor horário</label>
          <input id="preferred_time" type="time" {...register("preferred_time")} />
          {errors.preferred_time ? <span>{errors.preferred_time.message}</span> : null}
        </div>
      </div>
      <div>
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" placeholder="Inclua detalhes importantes para o atendimento" rows={5} {...register("message")} />
      </div>
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Enviando..." : "Solicitar agendamento"}
      </button>
      {status === "success" ? <p className={styles.success}>Solicitação enviada com sucesso.</p> : null}
      {status === "error" ? (
        <p className={styles.error}>Não foi possível solicitar o agendamento agora.</p>
      ) : null}
    </form>
  );
}
