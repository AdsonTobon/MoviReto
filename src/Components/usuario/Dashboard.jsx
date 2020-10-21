import React from 'react'
import Compañeros from './Compañeros'
import DesafiosUsuario from './DesafiosUsuario'
import Perfil from './Perfil'
import Proximos from './Proximos'
import Solicitudes from './Solicitudes'
import ValidarRetos from './ValidarRetos'

function dashboard() {
  return (
    <section className="grid-dashboard">
    
       <Perfil/>
    <div className="retos">
        <div className="retosarriba">
        <DesafiosUsuario/>
          <div className="text-center">
          <Proximos />
          <ValidarRetos />
          </div>
        </div>
    </div>
    <div className="retosarriba">
      <Solicitudes />
      <div className="flex-grow-1 ml-3">
         <Compañeros/>
      </div>
     
    </div>
  </section>
  )
}

export default dashboard
