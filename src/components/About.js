import React from 'react'
import { Link } from 'react-router'

class About extends React.Component {
  render () {
    return (
      <div className='About'>
        <header>
          <h2>How It Works</h2>
          <p>Pop('syckle') is a fun way to help build and reinforce thoughts or ideas that you want to pass along.</p>
        </header>
        <main>
          <div className='CreateGame'>
            <h2><Link to='/create-team'>Create A Game</Link></h2>
            <p>Login to start a group and create a game.
              Generate a team name and password to pass along
              to whoever you want to access the game you created.</p>
          </div>
          <div className='ManageAccount'>
            <h2><Link to='/create-team'>Manage Account</Link></h2>
            <p>After creating an account, log back in to check in on who played your game.</p>
          </div>
          <div className='PlayGame'>
            <h2><Link to='/sign-in'>Play Game!</Link></h2>
            <p>Log in to play game!</p>
          </div>
        </main>
      </div>
    )
  }
}

export default About
