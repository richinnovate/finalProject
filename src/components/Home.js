import React, {Component} from 'react'
import { Link } from 'react-router'
import { BlobButton } from '.'
import { Wallpaper } from '.'

import popsyckleLogo from '../images/popsyckle-02.svg'

class Home extends Component {
  render () {
    return (
      <div className='Home'>
        <header>
          <h1>pop('syckle')</h1>
        </header>
        <main>
          <img src={popsyckleLogo} alt='Logo' />
          <div className='descrption'>
            <h2>Pop('syckle') is a fun way to help build and reinforce thoughts or ideas that you want to pass along.</h2>
          </div>
          {/* <button>contact</button>
          <button>signup</button>
          <button>about</button> */}
        </main>
      </div>
    )
  }
}

export default Home
