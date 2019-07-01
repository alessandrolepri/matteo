import React from 'react'
import { withRouter } from 'react-router-dom'
import { Segment, Menu, Icon } from 'semantic-ui-react'


class Navbar extends React.Component{
  constructor(){
    super()

    this.state={
      activeItem: 'home'
    }
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick(e, { name }){
    this.setState({ activeItem: name })
    if(name === 'home')this.props.history.push('/')
  }


  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted id="nav">

        <Menu stackable inverted pointing secondary>
          <Menu.Item
            name='home'
            active={this.props.location.pathname === '/aboutme'}
            onClick={this.handleItemClick}
          > <Icon name='home' /> Home
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item
              name='about me'
              active={this.props.location.pathname === '/'}
              onClick={this.handleItemClick}
            > <Icon name='globe' /> About Me
            </Menu.Item>

            <Menu.Item
              name='service'
              active={this.props.location.pathname === '/'}
              onClick={this.handleItemClick}
            > <Icon name='th' /> Service
            </Menu.Item>

            <Menu.Item
              name='contact'
              active={this.props.location.pathname === '/'}
              onClick={this.handleItemClick}
            > <Icon name='envelope' /> Contact
            </Menu.Item>

          </Menu.Menu>
        </Menu>
      </Segment>

    )
  }
}

export default withRouter(Navbar)
