import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



export  default function Login(){

    let navigate = useNavigate('')

    const [email, setEmail]=useState("")
    const [password,setPassword]=useState("")

    async function handleclick(){

        try {
            const response = await axios.get("http://localhost:3000/api/auth/login").then((res) =>{
                console.log(res.data);
                console.log(response)
            })

        }catch (error) {
            console.error("Error:", error);
        }
    }

    return {email, setEmail,password,setPassword,handleclick,navigate};
}