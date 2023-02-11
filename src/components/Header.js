import React from "react";

import "./header.css"

function Header(){
    return(
        <header className="header-geral">
            <nav className="navbar navbar-dark navbar-expand-sm colo cor-azul text-light p-0">
                <div className="container ">
                    <div className="logo"><a className="navbar-brand text-light " href="./home">agendapp</a></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link  opcao" id="agendar-servico" href="../visaoCliente/agendarServico.html">Agendar
                        Serviço</a>
                        <a id="meus-agendamentos" className="nav-link text-light opcao " href="../visaoCliente/meusServicos.html">Meus
                        Agendamentos</a>
                        <a className="nav-link text-light opcao " id="sair">Sair</a>
                    </div>
                    </div>
                </div>
            </nav>
         </header>
    
    )
}

export default Header