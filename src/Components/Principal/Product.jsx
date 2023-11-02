





export default function Product({root,img,name,price}) {
  return (
    <div className="productox">
      <a className="productImage" href={root}>
        <img src={img} alt="" />
      </a>
      <h4>{name}</h4>
      <span>{price}</span>
      <div className="cantidad">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
            <a href="#"><i className="bx bx-cart"></i>Añadir al carrito</a>
    </div>
  )
}