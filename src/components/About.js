import React from 'react'
import { Link } from 'react-router'

class About extends React.Component {
  render () {
    return (
      <div className='About'>
        <h2>How It Works</h2>
        <main>
          <div className='About'>
            <p>Oh, the joy of enjoying a sweet, cold , fruity treat. Euphoria washes over you as you enjoy the last few chunks of frozen goodness left on the stick. As you finish, your sadness turns to joy after looking at the stick and realizing it's a sentence  there that just made your day. Your body and your brain was just fed! All of a sudden out of joy, you get the feeling to share what you've just learned to the world via a stick!</p><p> Welcome to Pop('syckle'), a fun interactive way to teach using the memory game. Let's say that you want to teach or reinforce something to someone, simply choose the option to create a new game. After setting up the team name and password, create a game by generating several question and answers. When the board is made, a memory game will be created with your questions and answers on the bottom of the cards ready to play. </p>
            <p>You're not only limited to one-liners, Feel free to upload a few sentences and images. Give the team name and password to whoever you want to play the game!</p>
            <p>So go ahead! Pass your stick of knowledge to the world! Just, please wash your hands first!</p>
          </div>
          <div className='CreateGame'>
            <h2><Link to='/create-team'>Create A Game</Link></h2>
            <p>Login to start a group and create a game.
              Generate a team name and password. Use the generated url to pass along
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
