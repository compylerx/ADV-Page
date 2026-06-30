import type { Metadata } from "next";
import { AreaLanding } from "@/components/AreaLanding/AreaLanding";
import { getService } from "@/data/services";

const service = getService("direito-trabalhista");

export const metadata: Metadata = {
  title: "Direito Trabalhista",
  description:
    "Atendimento em Direito Trabalhista para verbas rescisórias, horas extras, vínculos e defesa de direitos.",
};

export default function DireitoTrabalhistaPage() {
  if (!service) return null;
  return <AreaLanding service={service} />;
}
