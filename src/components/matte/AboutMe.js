import React from 'react'
import { Image } from 'semantic-ui-react'


import Details from './Details'

const AboutMe = () => (
  <div>
    <h1 > Contattami </h1>
    <div className="det">
    </div>
    <div className="photo">
      <Image src='images/foto.jpeg' size='small' circular />
      <Details />
    </div>
  </div>

)

export default AboutMe
