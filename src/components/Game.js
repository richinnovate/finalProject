import React, { PropTypes as T } from 'react'
import '../styles/screen.sass'
import Card from './Card'
import BlobButton from './BlobButton'

const SHOW_CARD = 2000

import API from '../api'

class Game extends React.Component {

  static propTypes = {
    params: T.object
  }

  constructor (props) {
    super(props)
    this.state = {
      cards: [],
      matched: [],
      turned: [],
      win: true,
      playerName: null
    }
  }

  componentDidMount () {
    this.setState({
      playerName: window.sessionStorage.getItem('player')
    }, () => this.createGame())

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
        cards: this.shuffle(cardSet)
      })
    })
  }

  createGame () {
    if (!this.state.gameId && this.state.playerName) {
      window.fetch(`${API.root}/games`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          playerName: this.state.playerName,
          cardSet: this.props.params.cardSet,
          totalCards: this.state.cards.length,
          progress: 0
        })
      }).then(res => res.json()).then((data) => {
        this.setState({ gameId: data.id })
      })
    }
  }

  updateProgress () {
    if (this.state.gameId) {
      window.fetch(`${API.root}/games/${this.state.gameId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${API.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          progress: this.state.matched.length,
          totalCards: this.state.cards.length
        })
      }).then(res => res.json()).then((data) => {
        console.log(data)
      })
    }
  }

  shuffle = (array) => {
    let currentIndex = array.length
    let temporaryValue
    let randomIndex

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
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
              this.updateProgress()
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

  get playerName () {
    return this.state.playerName
  }

  set playerName (name) {
    this.setState({ playerName: name }, () => this.createGame())
    window.sessionStorage.setItem('player', name)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.playerName = this.refs.playerName.value
  }

  render () {
    if (this.playerName) {
      if (!this.state.win) {
        const cards = this.state.cards.map((card, index) => {
          let up = !this.state.turned.includes(index) ? this.state.matched.includes(index) : this.state.turned.includes(index)
          return <div key={index}><Card flipCard={this.flipCard} value={card.value} up={up} index={index} /></div>
        })
        return <div>
          <h2>Hello, {this.playerName}</h2>
          <main className={`board count-${this.state.cards.length}`}>
            {cards}
          </main>
        </div>
      } else {
        return <div className='victory'>
          <h1>YOU WIN, {this.playerName}!</h1>
        </div>
      }
    } else {
      return <div>
        <main>
          <form onSubmit={this.handleSubmit}>
            <div className='group'>
              <input ref='playerName' type='text' /><span className='highlight' /><span className='bar' />
              <label>What's your name?</label>
            </div>
            <BlobButton children='Play!' onClick={this.handleSubmit} />
          </form>
        </main>
      </div>
    }
  }
}

export default Game
