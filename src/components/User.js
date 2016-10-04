import React, {Component} from 'react'
import { Link } from 'react-router'

class User extends Component {

  render () {
    return <div className='SignIn'>
      <h2>Sign in to check Team Account</h2>
      <main>
        <form>
          <div className='group'>
            <input type='text' /><span className='highlight' /><span className='bar' />
            <label>Name</label>
          </div>
          <div className='group'>
            <input type='password' /><span className='highlight' /><span className='bar' />
            <label>Password</label>
          </div>
          <Link to='/view-results'><button type='button' className='button buttonBlue'>
            Login
            <div className='ripples buttonRipples'><span className='ripplesCircle' /></div>
          </button></Link>
        </form>
      </main>
    </div>
  }
}

export default User
