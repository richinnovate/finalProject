import React from 'react'
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
    if (this.state.cardSet.length > 0) {
      browserHistory.push('/note/' + this.state.cardSet)
    }
  }

  render () {
    return (
      <div className='NewCardSet'>
        <h2>New Game</h2>
        <main>
          <form onSubmit={this.submit}>
            <div className='group'>
              <input type='text' onChange={this.setCardSet} /><span className='highlight' /><span className='bar' />
              <label>Name of Game</label>
            </div>
            <button type='button' className='button buttonBlue' onClick={this.submit}>
              Create
            </button>
          </form>
        </main>
      </div>
    )
  }
}

export default NewCardSet
