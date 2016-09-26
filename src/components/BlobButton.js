import React from 'react'
import { Link } from 'react-router'

class BlobButton extends React.Component {

  static propTypes = {
    children: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element]),
    linkTo: React.PropTypes.string,
    onClick: React.PropTypes.func
  }

  render () {
    const button = <button className='blob-btn' onClick={this.props.onClick}>
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

    if (this.props.linkTo) {
      return <Link to={this.props.linkTo}>{button}</Link>
    } else {
      return button
    }
  }
}

export default BlobButton
