import React from "react";
// import { Button } from "react-bootstrap";
import Cookies from "universal-cookie/es6";
import "../../css/Desafios.css";

export default function Perfil() {
  let cookies = new Cookies();

  const CerrarSesion=()=>{
      cookies.remove("avatarUsuario",{path:"/"});
      cookies.remove("nombreUsuario",{path:"/"});
      cookies.remove("apellidoUsuario",{path:"/"});
      cookies.remove("estado",{path:"/"});
      cookies.remove("pasatiempos",{path:"/"});
      cookies.remove("emailUsuario",{path:"/"});
      cookies.remove("celUsuario",{path:"/"});
      window.location.href="/#home"
  }
  
  return (
    <div className="perfil">
      <div className="acercaDeMi">
        <div>
            <img className="img-avatar" src={cookies.get("avatarUsuario")} alt="Avatar Usuario"/>
        </div>
        <div>
          <h2 className="title">{cookies.get("nombreUsuario")} {cookies.get("apellidoUsuario")}</h2>
        </div>
        
        <div className="user-card">
          <p>{cookies.get("estado")}</p>
        </div>
        <div>
          <h2 className="title">Pasatiempos</h2>
          <p className="text-white">{cookies.get("pasatiempos")}</p>
        </div>
        <div>
          <button className="btn btn-info mb-3 "> Contacto</button>
        </div>
        <button onClick={CerrarSesion} className="btn btn-warning mb-3">Cerrar sesion</button>
      </div>
    </div>
  );
}
