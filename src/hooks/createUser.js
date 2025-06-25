import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import api from "../api/apiConfig"; // Importing the api configuration


function User(){

    const navigate = useNavigate();
    
    const[name,setName]= useState();
    const[email,setemail]=useState();
    const[password,setpassword]=useState();

   async function createUser() {

            navigate("/dashboard")
        
    }

   return {name,setName,createUser,password,setpassword,email,setemail,User}
}

export default User;
