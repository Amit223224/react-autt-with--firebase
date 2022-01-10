
import * as types from './action-type';
import { auth } from '../components/Firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,signInWithPopup } from 'firebase/auth'
import {googleProvider} from '../components/Firebase';
import {facebookProvider} from '../components/Firebase';

//this is register create email ation
const registerStart=()=>({
    type: types.REGISTER_START,
});

const registerSuccess=(user)=>({
    type: types.REGISTER_SUCCESS,
    payload: user
});
const registerFail=(error)=>({
    type: types.REGISTER_FAIL,
    payload: error
});

//this is login action
const loginStart=()=>({
    type: types.LOGIN_START,
});

const loginSuccess=(user)=>({
    type: types.LOGIN_SUCCESS,
    payload: user
});
const loginFail=(error)=>({
    type: types.LOGIN_FAIL,
    payload: error
});

 //this is logout types of action
 const logoutStart=()=>({
    type: types.LOGOUT_START,
});

const logoutSuccess=(user)=>({
    type: types.LOGOUT_SUCCESS,
    payload: user
});
const logoutFail=(error)=>({
    type: types.LOGOUT_FAIL,
    payload: error
});


// this a set for user
 export const setUser =(user)=>({
    type: types.SET_USER,
    payload: user,
});


// this is a google sigin methodaction define

const googleSignInStart=()=>({
    type: types.GOOGLE_SIGN_IN_START,
});

const googleSignInSuccess=(user)=>({
    type: types.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
});
const googleSignInFail=(error)=>({
    type: types.GOOGLE_SIGN_IN_FAIL,
    payload: error
});

// this is a facebook mesthod to assign in applicatio

const facebookSignInStart=()=>({
    type: types.FACEBOOK_SIGN_IN_START,
});

const facebookSignInSuccess=(user)=>({
    type: types.FACEBOOK_SIGN_IN_SUCCESS,
    payload: user
});
const facebookSignInFail=(error)=>({
    type: types.FACEBOOK_SIGN_IN_FAIL,
    payload: error
});

//this is a register action and dispatch
export const registerInitiate = (email, password, displayName)=>{
    return function(dispatch){
        dispatch(registerStart());
       createUserWithEmailAndPassword( auth,email, password)
       .then((user) => {
    
     user.updateProfile({
       displayName
     })
dispatch(registerSuccess(user))
  })
  .catch((error => {
    dispatch(registerFail(error.message)) 
    

  })); 
    } 
}


// this is a login action

export const loginInitiate = (email, password)=>{
    return function(dispatch)
    {
        dispatch(loginStart());
       signInWithEmailAndPassword( auth,email, password)
       .then((user) => {
    
    
dispatch(loginSuccess(user))
  })
  .catch((error => {
    dispatch(loginFail(error.message)) 
    

  })); 
    } 
}


 // this is a logout section
 
export const logoutInitiate = ()=>{
    return function(dispatch)
    {
        dispatch(logoutStart());
       signOut( auth)
       .then(() => {
    
    
dispatch(logoutSuccess());
  })
  .catch((error => {
    dispatch(logoutFail(error.message)) 
    

  })); 
    } 
}


//this is google method to assign in your application 

export const googleSignInInitiate = (email, password)=>{
    return function(dispatch)
    {
        dispatch(googleSignInStart());
       signInWithPopup( auth,googleProvider)
       .then((user) => {
    
    
dispatch(googleSignInSuccess(user))
  })
  .catch((error => {
    dispatch(googleSignInFail(error.message)) 
    

  })); 
    } 
}


// this is facebook method to assign in your application
 

export const facebookSignInInitiate = (email, password)=>{
    return function(dispatch)
    {
        dispatch(facebookSignInStart());
       signInWithPopup( auth,facebookProvider)
       .then((user) => {
    
    
dispatch(facebookSignInSuccess(user))
  })
  .catch((error => {
    dispatch(facebookSignInFail(error.message)) 
    

  })); 
    } 
}
