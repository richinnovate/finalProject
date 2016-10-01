import React from 'react'
import { Link } from 'react-router'

class About extends React.Component {
  render () {
    return (
      <div className='About'>
        <header>
          <h2>How It Works</h2>
        </header>
        <main>
          <div className='About'>
            <p>Welcome to Pop('syckle'), a fun interactive way to teach through the memory game. Let's say that you want to teach or reinforce something to someone, simply create choose the option to create a new game. After setting up the team name and password, create a game by generating up to 25 question and answers. When the board is made, a memory game will be created with your questions and answers ready to play. </p>
            <p>You're not only limited to one-liners, Feel free to upload whole paragraphs and images. Give the team name and password to whoever you want to play the game!</p>
          </div>
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
            <h2><Link to='/sign-in'>Play A Game!</Link></h2>
            <p>Enter your team name and team password to play the game!</p>
          </div>
        </main>
      </div>
    )
  }
}

export default About
