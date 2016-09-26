import React from 'react'
import Card2 from './Card2'

// Ignore this stuff, it's just a demo for testing the new cards.

class CardDemo extends React.Component {

  constructor () {
    super()
    this.state = {
      turned: []
    }
  }

  flipCard = (index) => {
    this.setState({
      turned: this.state.turned.concat(index)
    })
    setTimeout(() => {
      this.setState({ turned: [] })
    }, 2000)
  }

  render () {
    return <div className='cardDemo' style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      minHeight: '100vh'
    }}>
      <Card2 value='One' flipCard={this.flipCard} up={this.state.turned.includes(0)} index={0} />
      <Card2 value='http://i.imgur.com/CgAPVsm.png' flipCard={this.flipCard} up={this.state.turned.includes(1)} index={1} />
      <Card2 value='One' flipCard={this.flipCard} up={this.state.turned.includes(2)} index={2} />
      <Card2 value='http://i.imgur.com/CgAPVsm.png' flipCard={this.flipCard} up={this.state.turned.includes(3)} index={3} />
    </div>
  }
}
export default CardDemo
