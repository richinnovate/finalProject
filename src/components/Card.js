import React from 'react'

class Card extends React.Component {
  handleClick = () => {
    this.props.flipCard(this.props.index)
  }

  render () {
    const direction = this.props.up ? 'up' : 'down'

    if (this.props.value.match(/^http/)) {
      // It's a URL, render images
      switch (direction) {
        case 'up':
          return <img src={this.props.value} className={`card ${direction}`} />
          break
        case 'down':
          return <img src='' onClick={this.handleClick} className={`card ${direction}`} />
          break
        default: return <img src='' onClick={this.handleClick} className={`card ${direction}`} />
      }
    } else {
      // otherwise, render the text
      switch (direction) {
        case 'up':
          return <span className={`card ${direction}`}>{this.props.value}</span>
          break
        case 'down':
          return <span onClick={this.handleClick} className={`card ${direction}`}>{this.props.value}</span>
          break
        default: return <span onClick={this.handleClick} className={`card ${direction}`}>{this.props.value}</span>
      }
    }
  }
}

export default Card
