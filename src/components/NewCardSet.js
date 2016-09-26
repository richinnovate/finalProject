import React from 'react'
import { Input, Button } from 'rebass'
import { browserHistory } from 'react-router'

class NewCardSet extends React.Component {

  constructor () {
    super()
    this.state = { cardSet: '' }
  }

  setCardSet = (event) => {
    this.setState({ cardSet: event.target.value })
  }

  submit = () => {
    browserHistory.push('/note/' + this.state.cardSet)
  }

  render () {
    return (
      <div className='NewCardSet'>
        <div className='form'>
          <Input placeholder='Title' label='Create a new set of cards' name='cardSet' onChange={this.setCardSet} />
          <Button children='Submit' onClick={this.submit} />
        </div>
      </div>
    )
  }
}

export default NewCardSet
