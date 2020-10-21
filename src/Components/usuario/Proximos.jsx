import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie/es6";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Proximos() {
  let cookies = new Cookies();
  let Desafio3 = cookies.get("Desafio3");
  let integrantes = Desafio3.integrantes;

  const [bus, setBus] = useState([]);

  useEffect(() => {
    async function getCarro() {
      let response4 = await fetch(
        `https://api-triatlon-urbana-users.vercel.app/desafios/4`
      );
      let busData = await response4.json();
      setBus(busData);
    }
    getCarro();
  }, []);
  // const listItems = desafio.map((numbers) => <li>{numbers.id}</li>
  // );
console.log(integrantes[0])
  return (
    <div>
      <h2 className="title">Próximos desafíos</h2>
      <section className="proximosuser">
        <img src={bus.avatar} alt={bus.nombre} className="success" />
        <Link to="/desafios" className="fail">
      <FontAwesomeIcon
        className="fail"
        icon={["fas", "calendar-alt"]}
        /> 11/11/2020</Link>

        <FontAwesomeIcon    
        className="success"
        icon={["fas", "user-friends"]}
        />
        <div>
        <Link to="/" >Raul</Link>,<Link to="/">Marcela</Link> 
        </div>
         


      </section>
    </div>
  );
}

export default Proximos;