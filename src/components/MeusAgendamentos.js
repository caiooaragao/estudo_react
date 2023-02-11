import React from "react"
import "./meusAgendamentos.css"
import PropTypes from "prop-types"



function MeusAgendamentos(){
    return(
        <main className="d-flex justify-content-center align-items-center">
            <div className="main-container d-flex flex-column gap-3 align-items-center" id="agendamento-pai">
            <h4 id="titulo-agendamento" className="card-title">Meus Agendamentos:</h4>
            <div className="alert alert-danger d-none text-center" id="nenhum-agendamento" role="alert">
                <h4 className="alert-heading">Você não possui nenhum agendamento.</h4>
                <p>por favor adicione algum agendamento</p>
            </div>
            </div>
      </main>
    )
}

function Item({marca, nome}){
    return(
        <>
        <li>{marca}, {nome}</li>
        </>
    )
}

Item.prototypes = {
    marca: PropTypes.string.isRequired,
    nome: PropTypes.number.isRequired
}

Item.defaultProps = {
    marca:"faltou a marca",
    nome: 0
}
 

export default MeusAgendamentos