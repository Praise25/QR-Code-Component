import qrCodeImg from "../assets/image-qr-code.png"
import classes from "./CardImage.module.css"

export default function CardImage() {
  return (
    <div className={classes.container}>
      <img className={classes.image} src={qrCodeImg} alt="A QR Code Image" />
    </div>
  )
}