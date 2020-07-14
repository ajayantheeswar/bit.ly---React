import React , {Component} from 'react';
import classes from './AuthPage.module.css';

import {logo ,google_cta, login_icons,show} from '../Assets/images/images';
import { NavLink } from 'react-router-dom';

import * as AuthActions from '../Store/Actions/Auth';

import { connect } from 'react-redux'

class AuthPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            auth : {
                username : {
                    value : '',
                    valid : true,
                    error : null
                },
                email : {
                    value : '',
                    valid : true,
                    error : null
                },
                password : {
                    value : '',
                    valid : true,
                    error : null,
                    isShow : false
                }
            }
        }
    }

    togglePasswordShow  = () => {
        this.setState( (prevState) => {
            return {
                ...prevState,
                auth: {
                    ...prevState.auth,
                    password:{
                        ...prevState.auth.password,
                        isShow : !prevState.auth.password.isShow
                    }
                }
            }
        })
    }

    onValueChange = (event,id) => {
        const presentValues = {...this.state.auth[id]};
        presentValues.value = event.target.value;
        this.setState( (prev) => {
            return {
                ...prev,
                auth : {
                    ...prev.auth,
                    [id] : presentValues
                }
            }
        } )
    }

    onSignUpClick = () => {
        const credientials = {
            name : this.state.auth.username.value,
            email : this.state.auth.email.value,
            password : this.state.auth.password.value
        }

        this.props.signUp(credientials);
    }

    onLoginClick = () => {
        const credientials = {
            email : this.state.auth.email.value,
            password : this.state.auth.password.value
        }

        this.props.signIn(credientials);
    }

    render () {
       
        const login_brand_icns = [{
            img : login_icons.google_login,
            text : 'Google'
        },{
            img : login_icons.facebook_login,
            text : 'Facebook'
        },{
            img : login_icons.twitter_login,
            text : 'Twitter'
        }];

        return (
            <React.Fragment>
                <div className={classes['auth-head']} >
                    <img src={logo} alt="logo"/>
                    <hr/>
                </div>
                <div className={classes['auth-tagline']}>
                    <h3>{this.props.isSignup ? 'Sign up and start shortening' : 'Log in and start sharing'}</h3>
                    {this.props.isSignup ? <p>Already have an account  ? <span> <NavLink to='/signin'>Sign In</NavLink> </span></p> : <p>Don't have an account? <span><NavLink to='/signup'>Sign Up</NavLink></span></p>}
                </div>
                <div className={classes['auth-content']} >
                    {
                        this.props.isSignup ? (
                            <div className={classes['google-cta']}>
                                <img src={google_cta} alt={'google-cta'}/>
                                <span>{'Sign up with Google'}</span>
                            </div>
                        ) : (
                            <div className={classes['oauth-login']}>
                                <h1>Login With</h1>
                                <div className={classes['login-cta-options']}>
                                    {login_brand_icns.map(item => (
                                        <div className={classes['brand-cta']}>
                                            <img src={item.img} alt={item.text}/>
                                            <span>{item.text}</span>
                                        </div>
                                    ))}  
                                </div>
                            </div>
                        )
                    }
                    <div className={classes['or-pan']} >
                        <hr/>
                        <p>OR</p>
                        <hr/>
                    </div>
                    <div className={classes['credientials-form']}>
                        {this.props.isSignup ? <div className={classes['cred__item']}>
                            <label for='Username'>Username</label>
                            <input 
                            onChange={(event) => this.onValueChange(event,'username')}
                            type='text' value={this.state.auth.username.value} placeholder='Username' />
                        </div> :  null}
                        <div className={classes['cred__item']}>
                            <label for='email'>Email</label>
                            <input 
                            onChange={(event) => this.onValueChange(event,'email')}
                            type='text' value={this.state.auth.email.value} placeholder='Email' />
                        </div>
                        <div className={[classes['cred__item'],classes['password']].join(' ')} >
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <label for='password' placeholder='password'>Password</label>
                                <div className={classes['show-password']} onClick={this.togglePasswordShow}>
                                    <img src={show} alt='show' />
                                    <p>{!this.state.auth.password.isShow ? 'Show' : 'Hide'}</p>
                                </div>
                            </div>
                            <input
                                onChange={(event) => this.onValueChange(event,'password')}
                                value={this.state.auth.password.value}
                                type={this.state.auth.password.isShow ? 'text' : 'password'}
                                placeholder='Password' />
                        </div>
                        {!this.props.isSignup ? <p className={classes['forget']}>Forget ?</p> : null}
                        {this.props.error ? <p className={classes['auth-error']}>{this.props.error}</p> : null}
                    </div>
                <button
                 onClick={this.props.isSignup ? this.onSignUpClick : this.onLoginClick}
                 className={classes['auth-main-action']}>{this.props.isSignup ? 'Sign Up with Email' : 'Login'}</button>  
                </div>
                                
            </React.Fragment>
            
        )
    }

}

const mapPropsToState = state => {
    return {
      isAuth : state.auth.isAuth,
      error : state.auth.error
    }
  }
  
  const mapPropsToDisPatch = dispatch => {
    return {
      signIn : (credientials) => dispatch(AuthActions.AuthStartAsync(false,credientials)),
      signUp : (credientials) => dispatch(AuthActions.AuthStartAsync(true,credientials)),
    }
  }

export default connect(mapPropsToState,mapPropsToDisPatch)(AuthPage);