import React, {Component} from 'react'
import { Link } from 'react-router'
import { BlobButton } from '.'
import { Wallpaper } from '.'

import popsyckleLogo from '../images/popsyckle-02.svg'

class Home extends Component {
  render () {
    return (
      <div className='Home'>
        <main>
          <img src={popsyckleLogo} alt='Logo' />
          <div className='descrption'>
            <h2>A fun way to pass along that sweet knowledge!</h2>
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
