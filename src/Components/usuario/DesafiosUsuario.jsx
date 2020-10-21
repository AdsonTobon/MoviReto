import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie/es6";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DesafiosUsuario() {
  let cookies = new Cookies();
  let Desafio1 = cookies.get("Desafio1");
  let iddesafio1= Desafio1.id
  let Desafio2 = cookies.get("Desafio2");
  let iddesafio2= Desafio2.id
  let Desafio3 = cookies.get("Desafio3");
  let iddesafio3= Desafio3.id

  const [desa1, setDesa1] = useState([]);
  const [desa2, setDesa2] = useState([]);
  const [desa3, setDesa3] = useState([]);

  useEffect(() => {
    async function getDesafios() {
      let response1 = await fetch(
        `https://api-triatlon-urbana-users.vercel.app/desafios/${iddesafio1}`
      );
      let desa1Data = await response1.json();
      setDesa1(desa1Data);
      let response2 = await fetch(
        `https://api-triatlon-urbana-users.vercel.app/desafios/${iddesafio2}`
      );
      let desa2Data = await response2.json();
      setDesa2(desa2Data);
      let response3 = await fetch(
        `https://api-triatlon-urbana-users.vercel.app/desafios/${iddesafio3}`
      );
      let desa3Data = await response3.json();
      setDesa3(desa3Data);
    }
    getDesafios();
  }, [iddesafio1, iddesafio2, iddesafio3]);
  
  return (
    <div>
      <h2 className="title">Reto 1 (Quedan 4 días)</h2>
      <section className="retosuser">
      <FontAwesomeIcon
        className="success"
        icon={["fas", "check"]}
        />
        <img src={desa1.avatar} alt={desa1.nombre} />
        <Link to="/" className="success">Ver más</Link>

        <FontAwesomeIcon
        className="success"
        icon={["fas", "check"]}
        />

        <img src={desa2.avatar} alt={desa2.nombre} className="success" />
        <Link to="/" className="success">Ver más</Link>

        <FontAwesomeIcon
        className="success"
        icon={["fas", "check"]}
        />
        <img src={desa3.avatar} alt={desa3.nombre} className="success" />
        <Link to="/" className="success">Ver más</Link>

      </section>
      
    </div>
  );
}

export default DesafiosUsuario;
