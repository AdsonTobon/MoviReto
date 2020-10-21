import React from 'react'
import {Link} from "react-scroll";

export default function ComoFunciona() {
    return (
        
        <main className="comofunciona">
         <div className="row mt-5 h-100 mx-0">
        <div className="row row-cols-1 align-items-center align-self-center">
            <div className="col">
            <h2 className="text-left">¿Cómo funciona?</h2>
            </div>
        </div>
        </div>
            <div className="mt-5 row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2">
            <div className="col"><h2>Para cumplir un MoviReto...</h2>
            <p>Durante siete días, deberás realizar nuestros cuatro desafíos de movilidad sostenible que consisten en:</p>
            <ul>
                <li>Usar servicio público</li>
                <li>Usar carro compartido</li>
                <li>Usar bicicleta</li>
                <li>Usar tus pies</li>            
            </ul>
            <p>Cada MoviReto te dará 100 puntos que podrás redimir en recompensas</p>
            </div>
            <div className="col">
            <h2>¡Validar tus desafíos es muy fácil!</h2>
            <p>Al momento de iniciarlo, sube una foto en el punto de partida usando el transporte-desafío que quieres validar.</p>
            <p> Una vez estés en el punto de llegada, haz los mismo. Asegúrate de que en la imagen quede el transporte que usaste</p>
            <Link
            to="recompensas"
            spy={true}
            smooth={true}
            duration={500}
            >
                <button type="button" className="mt-5 btn btn-success text-center">
                    Conoce las recompensas
                </button>

            </Link>

            </div>
            </div>
        
        </main>
    )
}
