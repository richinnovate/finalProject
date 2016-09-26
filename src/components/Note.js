import React from 'react'
import { Link } from 'react-router'
import { Textarea, Button } from 'rebass'

class Note extends React.Component {
   constructor () {
     super()
     this.state = {
       question: '',
       answer: ''
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
      //pop up a modal that says thanks for question
   }
  render () {
    return (
      <div className='Note'>
        <Textarea placeholder='Question'
          label='question'
          name='question' onChange={this.getQuestion} />
        <Textarea placeholder='Answer'
          label='answer'
          name='answer' onChange={this.getAnswer} />
        <Button children='Submit' onClick={this.submit}/>
      </div>
    )
  }
}

export default Note
