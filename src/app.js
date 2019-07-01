import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'


import Home from './components/Home'
import Aboutme from './components/matte/Aboutme'
import NavBar from './components/common/NavBar'



class App extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <main>
            <NavBar />

            <Switch>
              <Route path="/aboutme" component={Aboutme} />
              <Route path="/" component={Home} />
            </Switch>
              
          </main>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
