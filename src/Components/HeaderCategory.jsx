
import '../Styles/HeaderCategory.css'




export default function HeaderCategory({name,urlImg,root}) {


  return (

        <div className="categoryX">
              <a href={root}>
                <div className="categoryImg">
                  <img src={urlImg} alt="" />
                </div>
                <p>{name}</p>
              </a>
        </div>

  )
}