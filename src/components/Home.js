import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="home">

      <div className="image1">
        <img id="home-logo" src="https://previews.123rf.com/images/angkritth/angkritth1807/angkritth180700055/104196493-fitness-personal-trainer-logo-design-fitness-coach-logotype-vector-illustration.jpg" width="400px" height="400px"/>
        <h1> Matteo Atti | Personal Trainer  </h1>
        <p> Aiutando grandi persone a diventare migliori</p>
        <Link to="/aboutme">
          <button>ESPLORA</button>
        </Link>
      </div>

      <div className="image1">
        <img id="home-logo" src="images/foto.jpeg" height="750px" />
      </div>

    </section>
  )
}

export default Home
