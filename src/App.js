import React,{useEffect} from 'react';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserRoute from './components/UserRoute';
import {useDispatch} from 'react-redux';
import { auth } from './components/Firebase';
import {  onAuthStateChanged } from "firebase/auth";
import  { setUser } from './redux/action';

import Navbar from './navbar/Navbar';

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
onAuthStateChanged(auth,(authUser ) => {
  if(authUser){
    dispatch(setUser(authUser))
  } 
  else {
     dispatch(setUser(null))
  }
})
  },[dispatch]);

  return (
    <div className="App">
   
    <Router>
    
    <Switch>
    <UserRoute exact  path ="/" ><Home/></UserRoute>
    
    <Route path ="/login" ><Login/></Route>
    <Route  path ="/register" ><Register/></Route>
   
    
    </Switch>
    
    </Router>
     

    </div>
  );
}

export default App;
