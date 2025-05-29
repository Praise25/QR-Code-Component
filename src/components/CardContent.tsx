import classes from "./CardContent.module.css";

export default function CardContent() {
  return (
    <div>
      <p className={classes["sub-heading"]}>
        Improve your front-end <br /> skills by building projects
      </p>
      <p className={classes.description}>
        Scan the QR code to visit Frontend
        <br /> Mentor and take your coding skills to <br />
        the next level
      </p>
    </div>
  );
}
