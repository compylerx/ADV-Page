export const siteConfig = {
  name: "Sidinei Lima - Advocacia",
  shortName: "Sidinei Lima",
  description:
    "Atendimento juridico estrategico, humanizado e transparente para pessoas e empresas.",
  address: "Av. Paulista, 1000 - Bela Vista, Sao Paulo - SP",
  phone: "(11) 3000-0000",
  whatsapp: "5511999999999",
  email: "contato@sidineilima.adv.br",
  instagram: "https://instagram.com/sidineilimaadv",
  linkedin: "https://linkedin.com/company/sidineilimaadv",
  whatsappMessage: "Ola, gostaria de agendar um atendimento juridico.",
};

export function getWhatsAppUrl(message = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
