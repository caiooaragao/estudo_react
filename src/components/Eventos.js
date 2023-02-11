import React from "react";

import Button from "./evento/Button";
function Eventos(){

    function meuEvento(){
        console.log("fui ativado")
    }
    function segundoEvento(){
        console.log("segundo evento")
    }


    return(

        <>
             <p>clique para disparar um evento</p>
             <Button event={meuEvento} text="meu evento"/>
             <Button event={segundoEvento} text="segundo evento"/>
             <button onClick={meuEvento}>ativar!</button>
            
        </>
       
    )
}

export default Eventos