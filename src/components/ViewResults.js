import React, {Component} from 'react'
import { Link } from 'react-router'

import API from '../api'

class ViewResults extends Component {

  constructor () {
    super()
    this.state = {
      results: []
    }
  }

  componentDidMount () {
    window.fetch(`${API.root}/games`, {
      headers: {
        'Authorization': `Bearer ${API.token}`,
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then((data) => {
      this.setState({ results: data })
    })
  }

  render () {
    const results = this.state.results.map((result, i) => {
      return <tr key={i}>
        <td>{result.playerName}</td>
        <td><Link to={`/note/adventure-time`}>{result.cardSet}</Link></td>
        <td>{result.progress}/{result.totalCards}</td>
      </tr>
    })
    return (
      <div className='Results'>
        <h2>View Results</h2>
        <main>
          <div className='results'>
            <table>
              <tbody>
                {results}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    )
  }
}

export default ViewResults
