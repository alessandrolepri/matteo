import React from 'react'
import { Image } from 'semantic-ui-react'


import Details from './Details'

const AboutMe = () => (
  <div>

    <h1 > Contattami </h1>

    <Details />
    <div className="det">
    </div>
    <div className="photo">
      <Image src='images/foto.jpeg' size='large' circular />
    </div>
  </div>

)

export default AboutMe
