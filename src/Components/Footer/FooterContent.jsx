
import img from '/images/BSLogoHeader.png'

export default function FooterContent() {
  return (
    <div className="footer-content">
        <div className="content-1">
            <div className="imagen-content">
            <img  src={img} alt=""/>
            </div>
            <p>Tienda online de productos japoneses, coreanos y otros paises. Dulces, Bebidas, Mochis, Ramen , Snacks , Salsas, Cajas Sorpresa</p>
          </div>
          

          <div className="content-2">
            <h3>Categorías</h3>
            <ul>
              <li><a href="#"><span>Bebidas</span></a></li>
              <li><a href="#"><span>Dulces</span></a></li>
              <li><a href="#"><span>Mochis</span></a></li>
              <li><a href="#"><span>Bebidas</span></a></li>
              <li><a href="#"><span>Ramen Japonés</span></a></li>
              <li><a href="#"><span>Snacks</span></a></li>
              <li><a href="#"><span>Salsas y Especias</span></a></li>
              <li><a href="#"><span>Cajas Sorpresa</span></a></li>
              <li><a href="#"><span>Animes</span></a></li>
            </ul>
          </div>

          <div className="content-2">
            <h3>Políticas</h3>
            <ul>
              <li><a href="#"><span>Política de Privacidad</span></a></li>
              <li><a href="#"><span>Política de cookies</span></a></li>
              <li><a href="#"><span>Política de Devoluciones y Reembolsos</span></a></li>
              <li><a href="#"><span>Condiciones de venta</span></a></li>
              <li><a href="#"><span>Preguntas Frecuentes</span></a></li>
            </ul>
          </div>

          <div className="content-2">
            <h3>Contacto | Redes Sociales</h3>
            <ul>
              <li><a href="#"><span><i className='bx bx-group'></i>Nosotros</span> </a></li>
              <li><a href="#"> <span><i className='bx bx-headphone'></i>Contacto</span></a></li>
              <li><a href="#"> <span><i className='bx bx-phone'></i>928517790</span></a></li>
              <li><a href="#"> <span><i className='bx bx-envelope'></i>Atención al cliente</span></a></li>
              <li><a href="#"> <span>
                <i className='bx bxl-facebook'></i>Facebook
              </span></a></li>
              <li><a href="#"> <span><i className='bx bxl-instagram'></i>Instagram</span></a></li>
              <li><a href="#"> <span>
                <i className='bx bxl-twitter'></i>Twitter
              </span></a></li>
              <li><a href="#">
                <span>
                  <i className='bx bxl-tiktok'></i>Tik Tok
                </span></a></li>
              
            </ul>
          </div>


          <div className="content-2">
            <h3>Centro de Ayuda</h3>
            <ul>
              <li>Tiendas Automáticas Perú</li>
              <li>Market 24h S.L.</li>
              <li>Av. Pardo 1157</li>
            </ul>
          </div>
    </div>
  )
}