import { useState } from "react";



function useForgotPassword(){
 const [foremail,setForEmail]= useState("")

     function forgot(e){
        e.preventDefault()

        console.log(foremail)
        
    }
    return{foremail,setForEmail,forgot}

}

export default useForgotPassword;


