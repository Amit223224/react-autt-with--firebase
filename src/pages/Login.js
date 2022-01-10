import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, Link} from 'react-router-dom';
import { loginInitiate } from '../redux/action'
import { googleSignInInitiate } from '../redux/action'
import { facebookSignInInitiate } from '../redux/action'

import "./login.css"

         const Login = () => {
             const [state, setState]=useState({
                  email :"",
                   password :"",
                      });

                     

    
   const {currentUser} = useSelector((state)=>state.user);
        const dispatch= useDispatch();
        const history = useHistory()
       
        //this is a reutrn funtio to use retun a value in the function 
       useEffect(()=>{
  if(currentUser){
      history.push("/")
  }
     },[currentUser,history]);
      const { email, password} = state;

       const handlefacebook=()=>{
         dispatch(facebookSignInInitiate())
       };
   
         const handlegoogle=()=>{
           dispatch(googleSignInInitiate())
         };

                 
// this is a form unwanted loading browser action control
const handlesubmit=(e)=>
        {
           e.preventDefault();
           if(!email || !password) {
             return ;
           }
           dispatch(loginInitiate(email, password ));
           setState({ email:"",  password:""});
            };
// this is a form value handle 
       const handle=(e)=>{
              let {name ,value} = e.target;
              setState({ ...state, [name]: value});

            }
   


          return (
                 <div  id="logreg-forms">
                     <form className=" form-signin" onSubmit={handlesubmit}>
                       <h1 className="h3 mb-3 font-weight-normal" style={{textAligin: "center"}}>Sign in </h1>
                         <div className="social-login">
                           <button className="btn google-btn social-btn" onClick={handlegoogle}> 
                         <span>
                      <i className="fab fa-google-plus-g"></i> signin with google
                   </span>
               </button>
            <button className="btn facebook-btn social-btn" onClick={handlefacebook}> 
        <span>
    <i className="fab fa-facebook-f"> </i> signin with facebook 
                </span>
                   </button>
                     </div>
                      <p style={{textAlign: "center"}}>OR</p>
                        <input type="email" id="inputemail" className="form-control" name="email" value={email} onChange={handle} />
<input type="password" id="inputpassword" className="form-control" name="password" value={password} onChange={handle} />
<button type="submit" className="btn btn-secondary btn-black" >
<i className="fas fa-user-plus"> </i>
Sign In
</button>
<hr></hr>
<p>Don't have an Account</p>
<Link to="/register">
<button type="submit" className="btn btn-primary btn-black">
<i className="fas fa-user-plus">Sign up New Account</i>
</button>
</Link>
          </form>  
        </div>
    )
}

export default Login;
