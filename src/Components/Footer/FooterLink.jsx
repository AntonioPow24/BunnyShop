
import paid from '/images/Pagos/pagos.jpg'
export default function FooterLink() {
  return (
    <div className="footer-link">
          <p>Copyright © 2023. Todo los derechos reservados.</p>
          <div className="pagos">
            <img src={paid} alt=""/>
          </div>
        </div>
  )
}