import React, {Component} from 'react'
import { Link } from 'react-router'

class CreateTeam extends Component {

  render () {
    return <div className='SignIn'>
      <h2>Create Team</h2>
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
          <div className='group'>
            <input type='text' /><span className='highlight' /><span className='bar' />
            <label>Team Name</label>
          </div>
          <div className='group'>
            <input type='text' /><span className='highlight' /><span className='bar' />
            <label>Team Password</label>
          </div>
          <div className='group'>
            <input type='text' /><span className='highlight' /><span className='bar' />
            <label>email address</label>
          </div>
          <Link to='/note'><button type='button' className='button buttonBlue'>
            Create Team Account
            <div className='ripples buttonRipples'><span className='ripplesCircle' /></div>
          </button></Link>
        </form>
      </main>
    </div>
  }
}
export default CreateTeam
