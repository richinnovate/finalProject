import React from 'react'
import cx from 'classnames'

class Card2 extends React.Component {

  static propTypes = {
    flipCard: React.PropTypes.func,
    index: React.PropTypes.number,
    up: React.PropTypes.bool,
    value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element])
  }

  _handleClick = (event) => {
    if (this.props.flipCard) {
      this.props.flipCard(this.props.index)
    }
  }

  render () {
    let value
    if (typeof this.props.value === 'string' && this.props.value.match(/^http/)) {
      value = <img src={this.props.value} />
    } else {
      value = this.props.value
    }

    return <div className='sf-card' onClick={this._handleClick}>
      <div className={cx('sf-wrap', { active: this.props.up })}>
        <div className='sf-mdl-left'>
          <div className='content back' />
        </div>
        <div className='sf-mdl-right'>
          <div className='content back' />
        </div>
        <div className='sf-mdl-left-full'>
          <div className='content face'>
            {value}
          </div>
        </div>
        <div className='sf-mdl-right-full'>
          <div className='content face'>
            {value}
          </div>
        </div>
      </div>
    </div>
  }
}

export default Card2
