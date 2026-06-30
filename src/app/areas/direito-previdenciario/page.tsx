import type { Metadata } from "next";
import { AreaLanding } from "@/components/AreaLanding/AreaLanding";
import { getService } from "@/data/services";

const service = getService("direito-previdenciario");

export const metadata: Metadata = {
  title: "Direito Previdenciário",
  description:
    "Planejamento e pedidos previdenciários para aposentadorias, benefícios por incapacidade, pensões e revisões.",
};

export default function DireitoPrevidenciarioPage() {
  if (!service) return null;
  return <AreaLanding service={service} />;
}
