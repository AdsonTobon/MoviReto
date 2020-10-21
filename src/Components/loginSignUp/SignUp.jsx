import React, { useState } from "react";
import { Button, Col, Form, Modal, Row,} from "react-bootstrap";


const SignUp = (props) => {
 
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    celular: "",
    email: "",
    password: "",
    medioTransporte: "",
    compartirCarro:"",
  }) 
  let cerrarModal = props.cerrarModal;
  const peticionesPost = async (e) => {

      e.preventDefault();

      let respuesta = await fetch(
        "https://api-triatlon-urbana-users.vercel.app/usersTriatlonUrbana",
        {
          method: "POST",
          body: JSON.stringify(usuario),
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Request-Method": "*",
            "Content-Type": "application/json",
          },
          mode: "cors",
          cache: "default",
          credentials: "include",
        }
      );
      let desafios = await respuesta.json();
      if (respuesta.status === 201) {
        alert(`Usuario ${desafios.nombre} creado`);
      }
      console.log(
        usuario.nombre +
          " " +
          usuario.apellido +
          " " +
          usuario.email
      );
  };

  const handlechange=(e)=>{
    console.log(usuario)
    let user = usuario;
    user[e.target.name] = e.target.value;
    setUsuario(user);
  }  

    return (
      <Modal show={true} onHide={cerrarModal} className="modal-color modal-dialog-scrollable">
        <Modal.Header closeButton>
          <Modal.Title>Formulario de Inscripcion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} controlId="nombre">
              <Form.Label column sm={3}>
                Nombre
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="nombre"
                  placeholder="Nombre"
                  name="nombre"
                  defaultValue={usuario.nombre}
                  onChange={handlechange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="apellido">
              <Form.Label column sm={3}>
                Apellido
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="apellido"
                  placeholder="Apellido"
                  name="apellido"
                  defaultValue={usuario.apellido}
                  onChange={handlechange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="celular">
              <Form.Label column sm={3}>
                Celular
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="celular"
                  placeholder="Celular"
                  name="celular"
                  defaultValue={usuario.celular}
                  onChange={handlechange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="email">
              <Form.Label column sm={3}>
                Email
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="email"
                  placeholder="email"
                  name="email"
                  defaultValue={usuario.email}
                  onChange={handlechange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="password">
              <Form.Label column sm={3}>
                Password
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  defaultValue={usuario.password}
                  onChange={handlechange}
                />
              </Col>
            </Form.Group>

            <Form.Group>
              <Form.Label>Medio de transporte habitual</Form.Label>
              <Form.Control
                as="select"
                id="medioTransporte"
                name="medioTransporte"
                defaultValue={usuario.medioTransporte}
                onChange={handlechange}
              >
                <option>--Select--</option>
                <option value="carro">Carro</option>
                <option value="moto">Moto</option>
                <option value="TransportePublico">Transporte público</option>
                <option value="caminata">Caminata</option>
                <option value="Bicicleta">Bicicleta</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>
                ¿ si tu Respuesta es carro o moto, compartirias vehiculo ?
              </Form.Label>
              <Form.Control
                as="select"
                id="compartirCarro"
                name="compartirCarro"
                defaultValue={usuario.compartirCarro}
                onChange={handlechange}
              >
                <option>--Select--</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button variant="dark" type="submit" onClick={peticionesPost}>
                Registrate
              </Button>
            </Col>
          </Form.Group>
        </Modal.Footer>
      </Modal>
    );
};
export default SignUp