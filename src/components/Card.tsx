import classes from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return <div className={classes.card}>{children}</div>;
}
