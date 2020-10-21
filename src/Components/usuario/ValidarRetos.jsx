import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import Swal from "sweetalert2";
import "../../css/Desafios.css";

export default function ValidarRetos() {
  const [showValidar, setShowValidar] = useState(false);

  const enviarDatos = () => {
    Swal.fire({
      text: "Se ha validado con éxito tu desafío",
    });
  };

  const enviarEtiqueta = () => {
    Swal.fire({
      text: "Se etiquetó con exito a tus compañeros",
    });
  };

  let abrirValidar = () => {
    setShowValidar(true);
  };
  let cerrarValidar = () => {
    setShowValidar(false);
  };

  return (
    <div>
      <div className="container-validarDesafios">
        <Modal
          show={showValidar}
          onHide={cerrarValidar}
          className="modal-color modal-dialog-scrollable"
        >
          <Modal.Header closeButton>
            <Modal.Title as="h3">Sube tu foto y valida tus desafios</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="form text-center">
              <Form.Group>
                <Form.Label>Desafío</Form.Label>
                <Form.Control
                  as="select"
                  id="desafio"
                  name="desafio"
                  required
                >
                  <option>--Selecciona el tipo--</option>
                  <option value="Carro Compartido">Carro Compartido</option>
                  <option value="Caminata">Caminata</option>
                  <option value="Transporte Publico">Transporte público</option>
                  <option value="Bicicleta">Bicicleta</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Foto Origen:</Form.Label>
                <Form.Control
                  type="file"
                  id="origen"
                  name="origen"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Foto Destino:</Form.Label>
                <Form.Control
                  type="file"
                  id="destino"
                  name="destino"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Etiquetar Compañeros</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  type="text"
                  id="compañeros"
                  name="compañeros"
                  placeholder="Por favor etiqueta a tus compañeros de ruta con un @ seguido con el correo"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Button
                  type="button"
                  variant="warning"
                  size="lg"
                  block
                  onClick={enviarEtiqueta}
                >
                  Etiquetar
                </Button>
              </Form.Group>
              <Form.Group>
                <Button
                  type="button"
                  variant="info"
                  size="lg"
                  block
                  onClick={enviarDatos}
                >
                  Validar mi reto
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
      <Button variant="success" onClick={abrirValidar}>VALIDAR DESAFIOS</Button>
      
    </div>
  );
}