import React from 'react'
import { Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


import Details from './Details'
import Info from './Info'

const AboutMe = () => (
  <div>
    <div className="goback">
      <Link to="/">
        <h6> Indietro </h6>
        <Icon name="arrow alternate circle left outline" />
      </Link>
    </div>

    <h1 > Contattami </h1>

    <Details />
    <div className="det">
    </div>
    <div className="photo">
      <Image src='images/foto.jpeg' size='large' circular />
      <Icon name="arrow down" size="large" />

    </div>

    <div className="me">
      <Info />
    </div>

    <div className="goback">
      <Link to="/">
        <h6> Indietro </h6>
        <Icon name="arrow alternate circle left outline" />
      </Link>
    </div>

    <footer>
      <div className="footer">
        <p>&copy; 2019 | Matteo Atti, Personal Trainer | Cento (FE), Italy</p>


        <p> Powered by Alessandro Lepri </p>

      </div>
    </footer>


  </div>

)

export default AboutMe
