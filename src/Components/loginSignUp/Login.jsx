import Axios from "axios";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import Cookies from "universal-cookie/es6";

export default function Login(props) {

  const [login, setLogin] = useState({email:"",password:""})

  let cookies = new Cookies();

  let cerrarModal = props.cerrarModal;

  let iniciarSesion= async (e)=>{
    e.preventDefault();
    await Axios.get("https://api-triatlon-urbana-users.vercel.app/usuarios", {
      params: { email: login.email, password: login.password },
    }).then(response=>{
      console.log(response.data)
      return response.data; 
    })
    .then((response) => {
        if (response.length > 0) {
          let respuesta = response[0];
          cookies.set("nombreUsuario", respuesta.first_name, { path: "/" });
          cookies.set("apellidoUsuario", respuesta.last_name, { path: "/" });
          cookies.set("avatarUsuario", respuesta.avatar, { path: "/" });
          cookies.set("emailUsuario", respuesta.email, { path: "/" });
          cookies.set("passwordUsuario", respuesta.password, { path: "/" });
          cookies.set("celUsuario", respuesta.cel, { path: "/" });
          cookies.set("estado", respuesta.acercaDeMi.estado, { path: "/" });
          cookies.set("pasatiempos", respuesta.acercaDeMi.pasatiempos, { path: "/" });
          cookies.set("Desafio1", respuesta.desafios_usuario[0], { path: "/" });
          cookies.set("Desafio2", respuesta.desafios_usuario[1], { path: "/" });
          cookies.set("Desafio3", respuesta.desafios_usuario[2], { path: "/" });
          cookies.set("Desafio4", respuesta.desafios_usuario[3], { path: "/" });
          // cookies.set("Desafio1", respuesta.desafios_usuario[0].id, { path: "/" });
          // cookies.set("Integrantes", respuesta.desafios_usuario[0].integrantes, { path: "/" });
          window.location.href='/desafios#map';
        }

        else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Porfa verifica tu usuario o tu contraseña ¡Gracias!",
                });
              }
            })
        }
  
  const handleChange =async (e)=>{
    await setLogin({ ...login, [e.target.name]: e.target.value });
    console.log(login);
  }
 


  return (
    <Modal
      show={true}
      onHide={cerrarModal}
      style={{}}
    >
      <Modal.Header closeButton>
        <Modal.Title>Iniciar Sesion</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su Email"
              name="email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="dark"
          type="submit"
          onClick={iniciarSesion}
          className="modal-dialog-centered"
        >
          Ingresar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}