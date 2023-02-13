import { useState } from "react";
import React from "react";

function Condicional(){
    function enviarEmail(e){
        e.preventDefault()
        console.log("email enviado")

    }
    const [email, setEmail] = useState()
    const [userEmail, setUsermail] = useState()
    return(
        
        <div>
            <h2>cadastre seu email:</h2>
            <form>
                <input type="email" placeholder="digite aqui seu email"
                 onChange={(e) => setUsermail(e.target.value)}></input>
                <button type="submit" onClick={enviarEmail}>cadastrar</button>
                {userEmail && (
                    <div>
                        <p>o emaul é {userEmail}</p>
                    </div>
                )}
            </form>
         
            
        </div>
    )
}

export default Condicional


/*

// Declare a constant variable named "role" and assign it the value "admin".
const role = "admin";

// Use a ternary operator to conditionally render either the "AdminDashboard" component or the "UserDashboard" component.
{role === "admin" ? (
  // If the value of "role" is equal to "admin", render the "AdminDashboard" component.
  <AdminDashboard />
) : (
  // If the value of "role" is not equal to "admin", render the "UserDashboard" component.
  <UserDashboard />
)}


*/