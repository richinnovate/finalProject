import React from 'react'

class Card extends React.Component {

  render () {
    return <div className='sf-card'>
      <div className='sf-wrap'>
        <div className='sf-mdl-left'>
          <div className='content'>
            {this.props.back}
          </div>
        </div>
        <div className='sf-mdl-right'>
          <div className='content'>
            {this.props.back}
          </div>
        </div>

        <div className='sf-mdl-left-full'>
          <div className='content'>
            {this.props.face}
          </div>
        </div>
        <div className='sf-mdl-right-full'>
          <div className='content'>
            {this.props.face}
          </div>
        </div>
      </div>
    </div>
  }
}

export default Card
