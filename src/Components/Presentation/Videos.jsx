

import '../../Styles/Presentation/Videos.css'
export default function Videos({link}) {
  return (
    <video autoPlay muted loop src={link}></video>
  )
}