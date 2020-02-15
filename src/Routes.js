import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AppliedRoute from './components/AppliedRoutes/AppliedRoutes'
import Home from './containers/Home/Home'
import Login from './containers/Auth/Login'
import Signup from './containers/Auth/Signup'
import AddNote from './containers/AddNote/AddNote'
import Notes from './containers/Notes/Notes'
import Settings from './containers/Settings/Settings'
import NotFound from './containers/NotFound/NotFound'

export default function Routes ({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path='/' exact component={Home} appProps={appProps} />
      <AppliedRoute path='/login' exact component={Login} appProps={appProps} />
      <AppliedRoute path='/signup' exact component={Signup} appProps={appProps} />
      <AppliedRoute path='/notes/new' exact component={AddNote} appProps={appProps} />
      <AppliedRoute path='/notes/:id' exact component={Notes} appProps={appProps} />
      <AppliedRoute path='/settings' exact component={Settings} appProps={appProps} />
      <Route component={NotFound} />
    </Switch>
  )
}
