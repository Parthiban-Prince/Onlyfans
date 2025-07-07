import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import User from "./createUser";



export  default function Login(){

    let navigate = useNavigate()

    const [Email, setEmail]=useState("")
    const [Password,setPassword]=useState("")

    async function handleclick(){

        try {

            console.log("clicked")

            const response = await axios.post("http://localhost:3000/api/auth/SignIn",{
            Email,Password

            })

            console.log(response)

            if(response.status == 200){

                navigate('/dashboard')

            }

        }catch (error) {
            console.error("Error:", error);
        }
    }

    return {Email, setEmail,Password,setPassword,handleclick,navigate};
}