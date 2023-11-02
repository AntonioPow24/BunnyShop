

import '../../Styles/Presentation/sidebar.css'

export default function SideBar({name,urlImg,root}) {
  return (
    <div className="item">
        <a href={root}>
            <div className="item-categoria">
                <img src={urlImg} alt="" />
            </div>
            <p>{name}</p>
        </a>
    </div>
  )
}