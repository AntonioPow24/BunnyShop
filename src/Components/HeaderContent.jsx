
import '../Styles/HeaderContent.css'


export default function HeaderContent() {
  return (
    <div className="header-content">
        <img  src="./images/BSLogoHeader.png" alt="" />
    
    <div className="buscar">
      <input type="search" placeholder="Buscar en BunnyShop" />
      <button className="search-btn" type="submit">
        <i className="bx bx-search"></i>
      </button>
    </div>

    <div className="acceso">
      <i className="bx bx-user-circle"></i>
      <i className="bx bx-cart"></i>
      <p>S/. 00.00</p>
    </div>
    </div>
  )
}