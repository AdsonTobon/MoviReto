//Home de la aplicación
import React from 'react'
import ComoFunciona from './home/ComoFunciona'
import Home1 from './home/Home1'
import Recompensas from './home/Recompensas'

export default function Home() {
    return (
        <div>
            <div id="home">
            <Home1/>
            </div>
            
            <div id="comofunciona">
            <ComoFunciona/>
            </div>
            <div id="recompensas">
            <Recompensas />
            </div>

        </div>
    )
}