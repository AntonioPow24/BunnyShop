
import { animeLogos } from '../../Routers/animeLogos'
import { categoryRoot } from '../../Routers/categoryRoot'
import { sliderImg } from '../../Routers/sliderImg'
import { videos } from '../../Routers/videos'
import '../../Styles/Presentation/presentation.css'
import AnimeLogo from './AnimeLogo'
import SideBar from './SideBar'
import Slider from './Slider'
import Videos from './Videos'

export default function Presentation() {

  return (
    <section className='presentacion'>
        <div className="sidebar">
        {categoryRoot.map(root=>(
              <SideBar
              key={root.name}
              name={root.name}
              urlImg={root.img}
              root={root.router}
              />
            ))} 
        </div>

        <div className="slider">
          <ul>
            {sliderImg.map(slide =>(
              <Slider 
              key={slide.name}
              url={slide.url}
              />
            ))}
            
          </ul>
        </div>

        <div className="videosHeader">
              {videos.map(video=>(
                <Videos
                key={video.link}
                link={video.link}
                />
              ))}
        </div>


        <div className="anime-logos">
          <div className="logos-container">
                {animeLogos.map(logo=>(
                  <AnimeLogo
                  key={logo.link}
                  link={logo.link}
                  />
                ))}
          </div>
        </div>
    </section>
  )
}