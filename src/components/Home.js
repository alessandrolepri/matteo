import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="home">

      <div className="image1">
        <img id="home-logo" src="images/matteo.jpeg" />
        <h1> Personal Trainer <br/> Matteo Atti
        </h1>
        <ul>
          <li> Dimagrimento </li>
          <li> Tonificazione </li>
          <li> Muscolazione </li>
        </ul>
        <Link to="/aboutme">
          <button>ESPLORA</button>
        </Link>
      </div>

      <div className="image1">
        <img id="home-logo-rx" src="images/foto.jpeg" height="750px" />
      </div>

    </section>
  )
}

export default Home
