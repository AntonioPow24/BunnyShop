import { products } from "../../Routers/products";
import Product from "./Product";
import '../../Styles/Principal/products.css'




export default function ProductContainer() {
  return (
    <div className="productContainer">
        {products.map(product=>(
          <Product
          key={product.id}
          name={product.name}
          img={product.img}
          price={product.price}
          root={product.root}
          />
        ))}
    </div>
  )
}