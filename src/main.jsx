import Footer from './Components/Footer/Footer'
import HeaderCategory from './Components/HeaderCategory'
import HeaderContent from './Components/HeaderContent'
import Presentation from './Components/Presentation/Presentation'
import Principal from './Components/Principal/Principal'
import { categoryRoot } from './Routers/categoryRoot'
import './Styles/Main.css'
import ReactDOM from 'react-dom/client'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="container">
    <header className="header">
        <HeaderContent/>
        <div className="category">    
            {categoryRoot.map(root=>(
              <HeaderCategory
              key={root.name}
              name={root.name}
              urlImg={root.img}
              root={root.router}
              />
            ))}   
        </div>
    </header>
              <Presentation/>
              <Principal/>
              <Footer/>
  </div>
)
