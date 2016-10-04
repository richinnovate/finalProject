import React from 'react'
import { Link } from 'react-router'
import BurgerMenu from 'react-burger-menu'
import { BlobButton, Wallpaper } from '.'

import popsyckleLogo from '../images/popsyckle-03.svg'


const Menu = BurgerMenu.bubble

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      isOpen: false,
      signedIn: false
    }
  }

  closeMenu = () => {
    this.setState({ isOpen: false })
  }

  signIn = () => {
    this.setState({ signedIn: true, isOpen: false })
  }

  render () {
    let buttons = []
    if (this.state.signedIn) {
      buttons.push(
        <BlobButton onClick={this.closeMenu} linkTo='/view-results' key={0}>View Results</BlobButton>,
        <BlobButton onClick={this.closeMenu} linkTo='/note' key={1}>Create Game</BlobButton>
      )
    } else {
      buttons.push(
        <BlobButton onClick={this.signIn} linkTo='/user' key={0}>Sign In</BlobButton>,
        <BlobButton onClick={this.signIn} linkTo='/create-team' key={1}>Sign Up</BlobButton>
      )
    }
    return <div id='app-container'>
      <Menu
        isOpen={this.state.isOpen}
        pageWrapId='app-main'
        outerContainerId='app-container'
        customCrossIcon={false}>
        {/* <BlobButton onClick={this.closeMenu} linkTo='/sign-in'>Play Game</BlobButton> */}
        {buttons}
        <BlobButton onClick={this.closeMenu} linkTo='/about'>About</BlobButton>
      </Menu>
      <div id='app-main'>
        <header>
          <h1><Link to='/'>pop('syckle')</Link></h1>
        </header>
        {this.props.children}
      </div>
      <Wallpaper />
      <footer>
        <p className='copyright'>&copy; 2016 lloyd rich</p>
        <img src={popsyckleLogo} alt='Logo' />
      </footer>
    </div>

  }
}
export default App
