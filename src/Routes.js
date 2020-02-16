import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AuthenticatedRoute from './components/AuthRoutes/AuthenticatedRoute'
import UnauthenticatedRoute from './components/AuthRoutes/UnauthenticatedRoute'
import AppliedRoutes from './components/AppliedRoutes/AppliedRoutes'
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
      <AppliedRoutes path='/' exact component={Home} appProps={appProps} />
      <UnauthenticatedRoute path='/login' exact component={Login} appProps={appProps} />
      <UnauthenticatedRoute path='/signup' exact component={Signup} appProps={appProps} />
      <AuthenticatedRoute path='/notes/new' exact component={AddNote} appProps={appProps} />
      <AuthenticatedRoute path='/notes/:id' exact component={Notes} appProps={appProps} />
      <AuthenticatedRoute path='/settings' exact component={Settings} appProps={appProps} />
      <Route component={NotFound} />
    </Switch>
  )
}
