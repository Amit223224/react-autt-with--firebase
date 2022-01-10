import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from '../redux/action'
import Navbar from '../navbar/Navbar';
const Home = () => {
    
const {currentUser} = useSelector((state)=>state.user);
const dispatch= useDispatch();
const handleAuth =()=> {

    if(currentUser){
        dispatch(logoutInitiate());
        
    }
}
    return (
        <div>
         
    <Navbar handleAuth={handleAuth}/>
 
        </div>
    )
}

export default Home;
