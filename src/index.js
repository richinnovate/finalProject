import React from 'react'
import ReactDOM from 'react-dom'
// import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import {
  App,
  Card,
  CardDemo,
  Game,
  Home,
  About,
  Admin,
  Contact,
  CreateTeam,
  SignIn,
  InputPage,
  Success,
  User,
  ViewResults,
  Note,
  NewCardSet
} from './components'
import './styles/screen.sass'

const router =
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={Home} />
      <Route path='/card' component={Card} />
      <Route path='/game/:cardSet' component={Game} />
      <Route path='/user' component={User} />
      <Route path='/about' component={About} />
      <Route path='/admin' component={Admin} />
      {/* <Route path='/contact' component={Contact} /> */}
      <Route path='/create-team' component={CreateTeam} />
      <Route path='/input-page' component={InputPage} />
      <Route path='/sign-in' component={SignIn} />
      <Route path='/success' component={Success} />
      {/* <Route path='/view-results' component={ViewResults} /> */}
      <Route path='/card2' component={CardDemo} />
      <Route path='/note' component={NewCardSet} />
      <Route path='/note/:cardSet' component={Note} />
    </Route>
  </Router>

ReactDOM.render(router, document.getElementById('root'))
