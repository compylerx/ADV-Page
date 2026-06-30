import { getWhatsAppUrl } from "@/data/site";
import styles from "./WhatsAppButton.module.css";

export function WhatsAppButton() {
  return (
    <a
      aria-label="Falar com o escritório pelo WhatsApp"
      className={styles.button}
      href={getWhatsAppUrl()}
      rel="noreferrer"
      target="_blank"
    >
      <span aria-hidden="true">WA</span>
    </a>
  );
}
