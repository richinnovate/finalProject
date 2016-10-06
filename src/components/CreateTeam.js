import React, {Component} from 'react'
import { browserHistory } from 'react-router'

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
          <button type='button' className='button buttonBlue' onClick={() => { browserHistory.push('/note') }}>
            Create Team Account
            <div className='ripples buttonRipples'><span className='ripplesCircle' /></div>
          </button>
        </form>
      </main>
    </div>
  }
}
export default CreateTeam
