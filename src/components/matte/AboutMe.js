import React from 'react'
import { Image } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'

// import Details from './Details'
// import Info from './Info'

const AboutMe = () => (

  <div className="det">

    <div className="photo">
      <Image src='images/foto.jpeg' circular />
    </div>

    <div className="paragraph">
      <h3 id="info-me">Matteo Atti, Personal Trainer & Precision Nutrition </h3>
      <div className="line"></div>
    </div>

    <div className="story">
      <h1 id="approccio"> Il mio approccio con il cliente </h1>
      <h2 id="me"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </h2>
    </div>

  </div>

)

export default AboutMe
