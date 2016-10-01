import React from 'react'
import { Link } from 'react-router'
import BurgerMenu from 'react-burger-menu'
import { BlobButton, Wallpaper } from '.'

const Menu = BurgerMenu.bubble

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
  }

  closeMenu = () => {
    this.setState({ isOpen: false })
  }

  render () {
    return <div id='app-container'>
      <Menu
        isOpen={this.state.isOpen}
        pageWrapId='app-main'
        outerContainerId='app-container'
        customCrossIcon={false}>
        <BlobButton onClick={this.closeMenu} linkTo='/sign-in'>Play Game</BlobButton>
        <BlobButton onClick={this.closeMenu} linkTo='/user'>Sign In</BlobButton>
        <BlobButton onClick={this.closeMenu} linkTo='/about'>About</BlobButton>
        <BlobButton onClick={this.closeMenu} linkTo='/create-team'>New Team</BlobButton>
        <BlobButton onClick={this.closeMenu} linkTo='/'>Home</BlobButton>
      </Menu>
      <div id='app-main'>
        {this.props.children}
      </div>
      <Wallpaper />
    </div>
  }
}
export default App
