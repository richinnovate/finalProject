import React from 'react'
import '../styles/screen.sass'
import Card from './Card2'
const SHOW_CARD = 2000

import API from '../api'

import cardData from '../cardData.json'

class Game extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      cards: [],
      matched: [],
      turned: [],
      win: false
    }
  }

  componentDidMount () {
    window.fetch(`${API.root}/cards`, {
      headers: {
        'Authorization': `Bearer ${API.token}`,
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then((data) => {
      const cardSet = data.filter((pair) => {
        return pair.set === this.props.params.cardSet
      }).reduce((set, pair) => {
        return set.concat({
          key: pair.id,
          value: pair.question
        }, {
          key: pair.id,
          value: pair.answer
        })
      }, [])
      this.setState({
        cards: cardSet
      })
    })
  }

  flipCard = (index) => {
    const {turned, cards} = this.state
    if (turned.length < 2) {
      this.setState({
        turned: turned.concat(index)
      }, () => {
        if (this.state.turned.length === 2) {
          if (cards[this.state.turned[0]].key === cards[this.state.turned[1]].key) {
            this.setState({
              matched: this.state.matched.concat(...this.state.turned),
              turned: []
            }, () => {
              if (this.state.matched.length === cards.length) {
                setTimeout(() => {
                  this.setState({ win: true })
                }, SHOW_CARD / 2)
              }
            })
          } else {
            setTimeout(() => {
              this.setState({ turned: [] })
            }, SHOW_CARD)
          }
        }
      })
    }
  }

  render () {
    if (!this.state.win) {
      const cards = this.state.cards.map((card, index) => {
        let up = !this.state.turned.includes(index) ? this.state.matched.includes(index) : this.state.turned.includes(index)
        return <Card flipCard={this.flipCard} value={card.value} up={up} index={index} key={index} />
      })
      return <div>
        <h1>'pop(scyckle)'</h1>
        <main>
          {cards}
        </main>
      </div>
    } else {
      return <div>
        <h1> YOU WIN!!! </h1>
      </div>
    }
  }
}

export default Game
