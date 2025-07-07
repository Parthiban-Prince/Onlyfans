import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import api from "../api/apiConfig"; // Importing the api configuration


function User(){

    const navigate = useNavigate();
    
    const[name,setName]= useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");

   async function createUser() {



        try {
            const response = await api.post("/auth/SignUp", { email, name, password });
       

            if (response.status === 200) {
                localStorage.setItem("token",response.token)
                navigate("/dashboard");
            } else {
                console.log("Signup failed");
            }
        } catch (error) {
            console.log("Error during signup", error);
        }
    }

   return {name,setName,createUser,password,setpassword,email,setemail,User}
}

export default User;