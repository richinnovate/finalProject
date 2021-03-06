import React, {Component} from 'react'
import { browserHistory } from 'react-router'
import { BlobButton, Wallpaper } from '.'

class SignIn extends Component {

  render () {
    return <div className='SignIn'>
      <h2>Sign in to start game</h2>
      <main>
        <form>
          <div className='group'>
            <input type='text' /><span className='highlight' /><span className='bar' />
            <label>Team Name</label>
          </div>
          <div className='group'>
            <input type='password' /><span className='highlight' /><span className='bar' />
            <label>Team Password</label>
          </div>
          <button type='button' className='button buttonBlue' onClick={() => { browserHistory.push('/note') }}>
            Login
            <div className='ripples buttonRipples'><span className='ripplesCircle' /></div>
          </button>
        </form>
      </main>
    </div>
  }
}

export default SignIn
