import { useRef } from "react";






export default function  AuthHandlers(){

    const email = useRef()
    const password = useRef()
    const name = useRef()
 async function Login() {
    console.log("Login", {
      email: email.current.value,
      password: password.current.value,
    });
  }

  async function Signup() {
    console.log("Signup", {
      email: email.current.value,
      password: password.current.value,
      name: name.current.value,
    });

    return(Login)

}}