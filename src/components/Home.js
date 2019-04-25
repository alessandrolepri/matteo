import React from 'react'
import { Link } from 'react-router-dom'

// import images from './images'


const Home = () => {
  return (
    <section className="section">

      <div className="container">
        <div className="images">
          <img src="images/matteo.jpeg" />
        </div>
        <h1 className="personal">Personal </h1>
        <h1 className="trainer">Trainer </h1>

        <div className="wrapper">
          <Link to="/aboutme"><div className="ui bottom attached button">Scopri di piu</div>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Home
