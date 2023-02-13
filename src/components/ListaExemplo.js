import React from "react";

function ListaExemplo(){
    const listaTeste = ["pao", "ovo", "batata"]

    return(
        <>
            {listaTeste.length ? (
                <ul>
                    {listaTeste.map(item => (<li key={item}>{item}</li>))}
                   
                </ul>
            )
        : (
            <p>no item found</p>
        )}
        </>
        
    )
}

export default ListaExemplo