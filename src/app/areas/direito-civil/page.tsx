import type { Metadata } from "next";
import { AreaLanding } from "@/components/AreaLanding/AreaLanding";
import { getService } from "@/data/services";

const service = getService("direito-civil");

export const metadata: Metadata = {
  title: "Direito Civil",
  description:
    "Atendimento em Direito Civil para contratos, indenizações, responsabilidade civil e conflitos privados.",
};

export default function DireitoCivilPage() {
  if (!service) return null;
  return <AreaLanding service={service} />;
}
