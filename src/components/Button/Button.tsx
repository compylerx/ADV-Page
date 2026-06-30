import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  target?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  target,
}: ButtonProps) {
  const rel = target === "_blank" ? "noreferrer" : undefined;

  return (
    <Link className={`${styles.button} ${styles[variant]}`} href={href} target={target} rel={rel}>
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </Link>
  );
}
