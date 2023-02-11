import React from "react";
import { useState } from "react";

function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("cadastrou o usuario")
        console.log(name)
        console.log(senha)

    }

    const [name, setName] = useState()
    const [senha, setSenha] = useState()


    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}> 
                <div>
                    <label htmlFor="name"></label>
                    <input type="text" id="name" name="name" placeholder="digite o seu nome"  onChange={(e) => setName(e.target.value)} ></input>
                </div>
                <div>
                    <label htmlFor="senha"></label>
                    <input type="password" id="senha" name="senha" onChange={(e) => setSenha(e.target.value)}></input>
                </div>
                <div>
                    <input type="submit" value="cadastrar"></input>
                </div>
                
            </form>
        </div>
    )
} 

export default Form