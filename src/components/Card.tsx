import classes from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className={classes.container}>
      <div className={classes.card}>{children}</div>
    </div>
  );
}
