import React from "react";
import PortaModel from "../model/porta";
import Porta from "../components/Porta";
import Presente from "../components/Presente";
import { useState } from "react";
import { atualizarPortas, criarPortas } from "../functions/portas";

export default function Home() {
  return (
    <div style={{display: 'flex'}}>
      <h1>Formulário do jogo!</h1>
    </div>
  )
}
