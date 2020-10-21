import React from 'react'
import Imagenprincipal from '../../images/imagenhome.png';
import {Link} from "react-scroll";

export default function Home1() {
    return (
        <main className="home1 pt-4">
         <div className="row h-100 mx-0">
        <div className="my-auto mr-0 ml-0 row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 align-items-center align-self-center">
            <div className="col img-home">
                <img className="img-fluid" src={Imagenprincipal} alt="movireto"/>
            </div>     
            <div className="col text-center ">
                <h1 className="text-center">¡Vive una aventura urbana!</h1>
                <p className="text-center">Descubre nuevas formas de moverte en la ciudad mientras conoces compañeros de ruta y aportas a la solución de la problemática ambiental.
                </p>
                <Link
            to="comofunciona"
            spy={true}
            smooth={true}
            duration={500}
            >
            <button className=" btn btn-warning rounded">¿Cómo funciona?</button>
            </Link>
            </div>
        </div>
        </div>
        </main>
    )
}
