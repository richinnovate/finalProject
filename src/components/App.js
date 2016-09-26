import React from 'react'
import { Link } from 'react-router'
import BurgerMenu from 'react-burger-menu'
import { BlobButton } from '.'

const Menu = BurgerMenu.bubble

class App extends React.Component {

  render () {
    //const { children } = this.props
    //const currentPath = children.props.location.pathname.charCodeAt(1)
    return <div className='app-container'>
      <Menu pageWrapId='app-main' outerContainerId='app-container'>
        <BlobButton>Play Game</BlobButton>
        <BlobButton>Sign In</BlobButton>
        <BlobButton>How It Works</BlobButton>
        <Link to='/create-team'><BlobButton>Create New Team</BlobButton></Link>
        <BlobButton>Home</BlobButton>
      </Menu>
      <div className='app-main'>
        {this.props.children}
      </div>
    </div>
  }
}
export default App
