import React, { useEffect } from "react";
import Porta from "../../../components/Porta";
import { useState } from "react";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from '../../..//styles/Jogo.module.css'

export default function Jogo() {
    const router = useRouter()
    const [portas, setPortas] = useState([])
    const [valido, setValido] = useState(false)

    useEffect(() => {
      const portas = +router.query.portas
      const temPresente = +router.query.temPresente
      setPortas(criarPortas(portas, temPresente))
    }, [router?.query])

    useEffect(() => {
      const portas = +router.query.portas
      const temPresente = +router.query.temPresente

      const qtdPortasValidas = portas >= 3 && portas <= 100   
      const temPresenteValido = temPresente >= 1 && temPresente <= portas

      setValido(qtdPortasValidas && temPresenteValido)
    }, [portas])

    function renderizarPortas() {

        return valido && portas.map(porta => {
          return (
            <Porta value={porta} key={porta.numero} 
            onChange={novaPorta => {
              setPortas(atualizarPortas(portas, novaPorta))
            }} />
          )
        })
      }
    

    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {valido ? renderizarPortas() : <h2>Valores invalidos</h2>}
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}