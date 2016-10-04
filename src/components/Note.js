import React from 'react'
import { Link } from 'react-router'
import { Textarea, Button } from 'rebass'

import API from '../api'

class Note extends React.Component {

  static propTypes = {
    params: React.PropTypes.object
  }

  constructor () {
    super()
    this.state = {
      question: '',
      answer: '',
      cardPairs: []
    }
  }

  getQuestion = (event) => {
    console.log(this.state.question)
    this.setState({ question: event.target.value })
  }

  getAnswer = (event) => {
    console.log(this.state.answer)
    this.setState({ answer: event.target.value })
  }

  submit = () => {
    const cardPair = {
      set: this.props.params.cardSet,
      question: this.state.question,
      answer: this.state.answer
    }

    window.fetch(`${API.root}/cards`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cardPair)
    }).then(res => res.json()).then((data) => {
      this.setState({
        question: '',
        answer: '',
        cardPairs: this.state.cardPairs.concat(data)
      })
    })
  }

  removeItem = (id) => {
    window.fetch(`${API.root}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${API.token}`,
        'Content-Type': 'application/json'
      }
    }).then((data) => {
      // Remove the card pair that had this ID
      this.setState({
        cardPairs: this.state.cardPairs.filter((pair) => {
          return pair.id !== id
        })
      })
    })
  }

  componentDidMount () {
    window.fetch(`${API.root}/cards`, {
      headers: {
        'Authorization': `Bearer ${API.token}`,
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then((data) => {
      this.setState({
        cardPairs: data.filter((pair) => {
          return pair.set === this.props.params.cardSet
        })
      })
    })
  }

  get shareUrl () {
    return window.location.href.replace('/note', '/game')
  }

  render () {
    return (
      <div className='Note'>
        <h2>Setup Your Game</h2>
        <main>
          <table className='cardSets'>
            <tbody>
              {this.state.cardPairs.map((pair, index) => {
                return <CardPair value={pair} key={index} removeItem={this.removeItem} />
              })}
            </tbody>
          </table>
          <form>
            <Textarea placeholder='Question' label='question' hideLabel name='question' onChange={this.getQuestion} value={this.state.question} />
            <Textarea placeholder='Answer' label='answer' hideLabel name='answer' onChange={this.getAnswer} value={this.state.answer} />
            <button type='button' className='button buttonBlue' onClick={this.submit}>
              Submit
            </button>
          </form>
          <div className='shareUrl'>
            <Link to={`/game/${this.props.params.cardSet}`}>{this.shareUrl}</Link>
          </div>
        </main>
      </div>
    )
  }
}

class CardPair extends React.Component {

  removeItem = () => {
    this.props.removeItem(this.props.value.id)
  }

  contentFor (value) {
    if (typeof value === 'string' && value.match(/^http/)) {
      return <img src={value} width='50' />
    } else {
      return value
    }
  }

  render () {
    const pair = this.props.value
    return <tr className='cardPair'>
      <td className='question'>{this.contentFor(pair.question)}</td>
      <td className='answer'>{this.contentFor(pair.answer)}</td>
      <td className='remove' onClick={this.removeItem} ><a>&times;</a></td>
    </tr>
  }
}

export default Note
