import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import "../css/Desafios.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Mapa from "../images/mapa.JPG";
import Swal from "sweetalert2";

const url = "https://api-triatlon-urbana-users.vercel.app/destinos";

function CreaEncuentraDesafios() {
  const [datos, setDatos] = useState({
    desafio: "",
    origen: "",
    destino: "",
    fecha: "",
    horario: "",
  });

  const [DataDesafios, setDataDesafios] = useState({});
  const [load, setLoad] = useState("true");

  useEffect(() => {
    obtenerDesafios();
  }, []);

  const obtenerDesafios = async () => {
    let respuesta = await fetch(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Method": "*",
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "default",
      credentials: "include",
    });
    let desafios = await respuesta.json();
    setDataDesafios(desafios);
  };

  const handleInputChange = (e) => {
    let desafios = datos;
    desafios[e.target.name] = e.target.value;
    setDatos(desafios);
  };

  const enviarDatos = async (event) => {
    event.preventDefault();

    let respuesta = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Method": "*",
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "default",
      credentials: "include",
    });
    let desafios = await respuesta.json();
    if (respuesta.status === 201) {
      Swal.fire({
        text: `Desafio creado con éxito numero ${desafios.id}`,
            });
      
    }

    obtenerDesafios();
    
  };

  

  const Unirme = () => {
    
    Swal.fire({
      text: "Tu solicitud para unirte a este desafío fue enviada",
          });
  };

  setTimeout(() => {
    setLoad(false);
  }, 1000);

  return (
    <div id = "map" >
      <div className="container-map">
        <div className="container-form">
          <div className="Button-creacionRuta">
            {["bottom"].map((placement) => (
              <OverlayTrigger
                trigger="click"
                key={placement}
                placement={placement}
                overlay={
                  <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Title as="h3">{`PROGRAMA TU DESAFIO`}</Popover.Title>
                    <Popover.Content>
                      <Form onSubmit={enviarDatos} className="form" id="form">
                        <Form.Group>
                          <Form.Label>Desafío</Form.Label>
                          <Form.Control
                            as="select"
                            id="desafio"
                            name="desafio"
                            defaultValue={datos.desafio}
                            required
                            onChange={handleInputChange}
                          >
                            <option>--Selecciona el tipo--</option>
                            <option value="Carro Compartido">
                              Carro Compartido
                            </option>
                            <option value="Caminata">Caminata</option>
                            <option value="Transporte Publico">
                              Transporte público
                            </option>
                            <option value="Bicicleta">Bicicleta</option>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Origen:</Form.Label>
                          <Form.Control
                            type="text"
                            id="origen"
                            name="origen"
                            defaultValue={datos.origen}
                            required
                            placeholder="Direccion Origen"
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Destino:</Form.Label>
                          <Form.Control
                            type="text"
                            id="destino"
                            name="destino"
                            defaultValue={datos.destino}
                            required
                            placeholder="Direccion Destino"
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Fecha:</Form.Label>
                          <Form.Control
                            type="date"
                            id="fecha"
                            name="fecha"
                            defaultValue={datos.fecha}
                            required
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Horario:</Form.Label>
                          <Form.Control
                            type="text"
                            id="horario"
                            name="horario"
                            defaultValue={datos.horario}
                            required
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Button type="submit" variant="info"  size="lg" block>
                            Compartir mi viaje
                          </Button>
                        </Form.Group>
                        <Form.Group>
                          <Button variant="secondary"  size="lg" block>
                            Hare mi viaje solo
                          </Button>
                        </Form.Group>
                      </Form>
                    </Popover.Content>
                  </Popover>
                }
              >
                <Button variant="success">Programa tu próximo desafío</Button>
              </OverlayTrigger>
            ))}
          </div>
          <img src={Mapa} alt="Google Maps Medellin"  className="img-mapa"/>
          <div className="mapa">
            <div className="mapa-desafios">
              {load ? (
                <p>Loading...</p>
              ) : (
                DataDesafios.map((data, i) => {
                  var x = Math.floor(Math.random() * (1366 + 1));
                  var y = Math.floor(Math.random() * (657 + 1));

                  return (
                    <div
                      key={i}
                      className="card-desafios"
                      style={{
                        position: "absolute",
                        marginLeft: x,
                        marginTop: y,
                      }}
                    >
                      {["bottom"].map((placement) => (
                        <OverlayTrigger
                          trigger="click"
                          key={placement}
                          placement={placement}
                          overlay={
                            <Popover id={`popover-positioned-${placement}`}>
                              <Popover.Title as="h3">{`Detalle Desafio`}</Popover.Title>
                              <Popover.Content>
                                <div>Desafio: {data.desafio}</div>
                                <div>Origen: {data.origen}</div>
                                <div>Destino: {data.destino}</div>
                                <div>Fecha: {data.fecha}</div>
                                <div>Hora: {data.horario}</div>
                                <div className="contenedor-unirme">
                                  <Button
                                    variant="success"
                                    className="Button-unirme"
                                    onClick={Unirme}
                                  >
                                    Unirme
                                  </Button>
                                </div>
                              </Popover.Content>
                            </Popover>
                          }
                        >
                          {data.desafio === "Carro Compartido" ? (
                            <Button variant="success" className="Button-info">
                              <FontAwesomeIcon
                                className="iconos"
                                icon={["fas", "car"]}
                              />
                            </Button>
                          ) : data.desafio === "Caminata" ? (
                            <Button variant="success" className="Button-info">
                              <FontAwesomeIcon
                                className="iconos"
                                icon={["fas", "running"]}
                              />
                            </Button>
                          ) : data.desafio === "Transporte Publico" ? (
                            <Button variant="success" className="Button-info">
                              <FontAwesomeIcon
                                className="iconos"
                                icon={["fas", "subway"]}
                              />
                            </Button>
                          ) : (
                            <Button variant="success" className="Button-info">
                              <FontAwesomeIcon
                                className="iconos"
                                icon={["fas", "biking"]}
                              />
                            </Button>
                          )}
                        </OverlayTrigger>
                      ))}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreaEncuentraDesafios;