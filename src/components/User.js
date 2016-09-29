import React, {Component} from 'react'
import { Link } from 'react-router'

class User extends Component {
  render () {
    return (
      <div className='SignIn'>
        <header>Sign in to check Team Account</header>
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
            <Link to='/note'><button type='button' className='button buttonBlue'>
              Login
              <div className='ripples buttonRipples'><span className='ripplesCircle' /></div>
            </button></Link>
          </form>
        </main>
        <footer>
          <p>Create Account</p>
        </footer>
      </div>
          )
  }
      }
export default User
