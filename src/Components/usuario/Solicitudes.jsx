import React from 'react'
import "../../css/Desafios.css";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

export default function Solicitudes() {
    const AceptarUsuario = () => {
        Swal.fire({
          text: "Se Aceptó con exito a tu compañero de ruta",
        });
      };
      const RechazarUsuario = () => {
        Swal.fire({
          text: "Se Rechazó con exito a tu compañero de ruta",
        });
      };
    return (
        <div>
            <h2 className="title">Solicitudes</h2>
            <div className="container-fluid">  
                <div className="cards">
                    <div>
                    <img className="img-solicitud" src="https://images.generated.photos/jxx5uWijySwUeAKa_Jes2FbXkZ2BxyW_-bPP7htTu_8/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1ODUxMzIuanBn.jpg" alt="A"/>
                    </div>
                    <div>
                        <h3>Ramiro Power</h3>
                        <p>Desafio en Bicicleta</p>
                        <p>15/10/2020</p>
                        <p>Calle 27#75-24 - Itagui</p>
                        <p>6:00am - 3192655589</p>
                        <div className="container-buttons">
                            <Button variant="success" onClick={AceptarUsuario}>Aceptar</Button>
                            &nbsp;
                            <Button variant="danger" onClick={RechazarUsuario}>Declinar</Button>
                     </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}