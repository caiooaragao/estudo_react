import React from "react";
import AgendarServico from "./components/AgendarServico";
import Eventos from "./components/Eventos";
import Footer from "./components/Footer";

import Form from "./components/Form";
import Header from "./components/Header";
import MeusAgendamentos from "./components/MeusAgendamentos";
import Button from "./components/evento/Button";
import Condicional from "./components/Condicional"

 function App(){
  

  return(
    <>
      <Form/>
      <Eventos/>
      <Condicional/>
      
    </>
  )
} 

export default App