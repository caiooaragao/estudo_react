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