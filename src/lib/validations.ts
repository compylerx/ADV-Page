import { z } from "zod";

const requiredText = (field: string, min = 2) =>
  z.string().trim().min(min, `${field} e obrigatorio.`);

export const leadSchema = z.object({
  name: requiredText("Nome"),
  phone: requiredText("Telefone", 8),
  email: z.string().trim().email("Informe um e-mail valido."),
  area: requiredText("Area de interesse"),
  message: requiredText("Mensagem", 10),
  source: z.string().trim().default("site"),
});

export const scheduleSchema = z.object({
  name: requiredText("Nome"),
  phone: requiredText("Telefone", 8),
  email: z.string().trim().email("Informe um e-mail valido."),
  area: requiredText("Area de interesse"),
  preferred_date: requiredText("Melhor data"),
  preferred_time: requiredText("Melhor horario"),
  message: z.string().trim().optional(),
});

export type LeadInput = z.input<typeof leadSchema>;
export type ScheduleInput = z.input<typeof scheduleSchema>;
