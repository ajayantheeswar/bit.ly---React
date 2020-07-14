import React from 'react';
import './App.css';
import Homepage from './Homepage/Homepage';
import AuthPage from './Auth/AuthPage';
import Dashboard from './Dashboard/Dashboard';
import { Route, Switch, Redirect } from 'react-router';

import * as AuthActions from  './Store/Actions/Auth';

import { connect } from 'react-redux';

class App extends React.Component {

  render () {

    let Routes;

    if(this.props.isAuth){
      // Auth  user
      Routes = (
        <Switch>
          <Route path='/Dashboard' component={Dashboard} />  
          <Redirect to='/Dashboard' />
        </Switch>
      )
    }else{
      Routes = (
        <Switch>
          <Route path ='/signup' render={() =><AuthPage isSignup={true} />} />
          <Route path ='/signin' render={() => <AuthPage />} />
          <Route path='/' component={Homepage} />
        </Switch>
      )
    }

    return (
      Routes
    );
  }

  componentDidMount(){
    this.props.checkAuth()
  }
}

const mapPropsToState = state => {
  return {
    isAuth : state.auth.auth
  }
}

const mapPropsToDisPatch = dispatch => {
  return {
    checkAuth : () => dispatch(AuthActions.AuthCheckAsync())
  }
}

export default connect(mapPropsToState,mapPropsToDisPatch)(App);
