import React from "react";

import "./footer.css"
import consensoImg from "../img/Consenso_Marca_7.png"

function Footer(){
    return(
        <footer className=" footer-item">
            <div>
            <img src={consensoImg} alt="smth" className="img-footer"></img> 
            </div>
            <div>
            <p className="texto-footer">Projeto Consenso 2023
            </p>
            <p className="texto-footer">Agendapp &copy Treina Recife</p>
            </div>
    </footer>
    )
}

export default Footer