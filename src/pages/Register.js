
import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, Link} from "react-router-dom";
import { registerInitiate } from '../redux/action'
import './Register.css';


const  Register = () => {
    const [state, setState]=useState({
displayName:"",
email :"",
password:"",
passwordConfirm :"",

    });

const {currentUser} = useSelector((state)=>state.user);
const dispatch= useDispatch();
const history = useHistory()

     
     useEffect(()=>{
  if(currentUser){
      history.push("/")
  }
     },[currentUser,history]);

    const { email, password, displayName, passwordConfirm} = state;
    
   

const handlesubmit=(e)=>{
           e.preventDefault();
           if(password !==passwordConfirm){
               return ;
           }
           dispatch(registerInitiate(email, password,displayName));
           setState({ email:"", displayName:"", password:"", passwordConfirm:""})
            }

          const handle=(e)=>{
              let {name ,value} = e.target;
              setState({ ...state, [name]: value});

            }


    return (
        <div  id="register-form">
           <form className=" form-signup" onSubmit={handlesubmit}>
                  <h1 className="h3 mb-3 font-weight-normal" style={{textAligin: "center"}}>Sign Up </h1>
                       <input type="text" id="displayName" className="form-control" name="displayName" value={displayName} onChange={handle} />
                        <input type="email" id="user-email" className="form-control" name="email" value={email} onChange={handle} />
                     < input type="password" id="inputRePassword" className="form-control" name="password" value={password} onChange={handle} />
                     < input type="password" id="passwordConfirm" className="form-control" name="passwordConfirm" value={passwordConfirm} onChange={handle} />
                 <button type="submit" className="btn btn-secondary btn-black" >
              <i className="fas fa-user-plus"> </i>
           Sign Up
     </button>
    <hr></hr>
       <Link to="/login">
       <i className="fas fa-angle-left"></i> Back
       </Link>
     </form>  
   </div>
    )
}

export default  Register;
