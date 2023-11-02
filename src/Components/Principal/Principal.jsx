import icono from '/images/categorias/new.svg'
import '../../Styles/Principal/principal.css'
import ProductContainer from './ProductContainer'
export default function Principal() {
  return (
    <div className="main">
        <div className="titulo-main">
          <h2>Novedades de BunnyShop</h2>
          <div className="icono">
            <img src={icono} alt="" />
          </div>
        </div>
        <ProductContainer/>
    </div>
  )
}