import React from 'react'
import { browserHistory } from 'react-router'

class BlobButton extends React.Component {

  static propTypes = {
    children: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element]),
    linkTo: React.PropTypes.string,
    onClick: React.PropTypes.func
  }

  handleClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event)
    }
    if (this.props.linkTo) {
      browserHistory.push(this.props.linkTo)
    }
  }

  render () {
    return <button className='blob-btn' onClick={this.handleClick}>
      {this.props.children}
      <span className='blob-btn__inner'>
        <span className='blob-btn__blobs'>
          <span className='blob-btn__blob' />
          <span className='blob-btn__blob' />
          <span className='blob-btn__blob' />
          <span className='blob-btn__blob' />
        </span>
      </span>
    </button>
  }
}

export default BlobButton
