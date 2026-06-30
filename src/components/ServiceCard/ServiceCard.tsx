import { Button } from "@/components/Button/Button";
import type { Service } from "@/data/services";
import styles from "./ServiceCard.module.css";

type ServiceCardProps = {
  service: Pick<Service, "title" | "description" | "href">;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <span aria-hidden="true" className={styles.mark}>
        §
      </span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <Button href={service.href} variant="dark">
        Saiba mais
      </Button>
    </article>
  );
}
