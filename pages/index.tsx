import React, { useState } from "react";
import Cartao from "../components/Cartao";
import styles from '../styles/Formulario.module.css'
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";

export default function Form() {

  const [qtdPortas, setQtdPortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica value={qtdPortas} text="Qtd portas?" onChange={novaQtd => setQtdPortas(novaQtd)}/>
        </Cartao>
      </div>
      
      <div>
        <Cartao>
        <EntradaNumerica value={comPresente} text="Porta Com presente?" onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}/>
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${qtdPortas}/${comPresente}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
      
    </div>
  )
}
