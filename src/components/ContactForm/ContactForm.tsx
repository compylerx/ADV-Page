"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { serviceOptions } from "@/data/services";
import { type LeadInput, leadSchema } from "@/lib/validations";
import styles from "./ContactForm.module.css";

export function ContactForm({ source = "site" }: { source?: string }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: { source },
  });

  async function onSubmit(data: LeadInput) {
    setStatus("idle");
    const response = await fetch("/api/leads", {
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    setStatus("success");
    reset({ name: "", phone: "", email: "", area: "", message: "", source });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("source")} />
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
      <div>
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" placeholder="Conte brevemente como podemos ajudar" rows={5} {...register("message")} />
        {errors.message ? <span>{errors.message.message}</span> : null}
      </div>
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Enviando..." : "Enviar mensagem"}
      </button>
      {status === "success" ? <p className={styles.success}>Mensagem enviada com sucesso.</p> : null}
      {status === "error" ? (
        <p className={styles.error}>Não foi possível enviar agora. Tente novamente em instantes.</p>
      ) : null}
    </form>
  );
}
