import FooterContent from "./FooterContent";
import FooterLink from "./FooterLink";
import '../../Styles/Footer/footer.css'
export default function Footer() {
  return (
    <div className="footer">
        <FooterContent/>
        <FooterLink/>
    </div>
  )
}