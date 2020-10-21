//este es mi header
import React, { useState } from 'react'
import Logo from './../images/logo.png'
import './../css/Header.css';
import CreaEncuentraDesafios from './CreaEncuentraDesafios';
import Dashboard from '../Components/usuario/Dashboard';
import Usuario from '../Components/usuario/Usuario';
import SignUp from '../Components/loginSignUp/SignUp';
import Login from '../Components/loginSignUp/Login';
import Home from './Home';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cookies from "universal-cookie/es6";


export default function Header() {

  let cookies = new Cookies();

  const [showLogin, setShowLogin] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false);

  let abrirLogin = ()=>{
    setShowLogin(true);

  }

  let abrirSignup = () => {
    setShowSignUp(true);

  };
  let cerrarSignup = ()=>{
    setShowSignUp(false)
  }

  let cerrarLogin = () => {
    setShowLogin(false);
  };

  let eliminarCookies = ()=>{
    cookies.remove("nombreUsuario", { path: "/" });
    cookies.remove("apellidoUsuario", { path: "/" });
    cookies.remove("avatarUsuario", { path: "/" });
    cookies.remove("emailUsuario", { path: "/" });
    cookies.remove("passwordUsuario", { path: "/" });
    cookies.remove("celUsuario", { path: "/" });
    window.location.href='/'
  }
    return (
      <Router>
        <header className="header">
          <NavLink smooth to="/#home">
            <img src={Logo} alt="logo" className="w-75 img-fluid" />
          </NavLink>
          <nav className="text-right align-self-center">
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            {cookies.get("nombreUsuario") ? (
              <ul className="menu align-self-center">
                
                
                <li>
                  <NavLink to="/dashboard" smooth>
                    {cookies.get("nombreUsuario")}
                    <img
                      src={cookies.get("avatarUsuario")}
                      alt="avatar"
                      style={{ width: "25px", borderRadius: "50%" }}
                    />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/desafios#map" smooth>
                    Desafíos
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/desafios#map" onClick={eliminarCookies}>
                    <button className="btn btn-warning">Cerrar Sesion</button>
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul className="menu align-self-center">
                <li>
                  <NavLink smooth to="/#comofunciona">
                    ¿Cómo funciona?
                  </NavLink>
                </li>
                <li>
                  <NavLink smooth to="/#recompensas">
                    Recompensas
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/desafios#map" smooth>
                    Desafíos
                  </NavLink>
                </li> */}
                <li>
                  <button
                    className="btn btn-primary mr-1"
                    onClick={abrirSignup}
                  >
                    Registrarme
                  </button>
                </li>
                <li>
                  <button className="btn btn-warning" onClick={abrirLogin}>
                    Ingresar
                  </button>
                </li>
              </ul>
            )}
          </nav>
        </header>
        {showLogin ? <Login cerrarModal={cerrarLogin} /> : ""}
        {showSignUp ? <SignUp cerrarModal={cerrarSignup} /> : ""}
        <Switch>
          <Route path="/desafios">
            <div>
              <CreaEncuentraDesafios />
            </div>
          </Route>
          {/* <Route path="/registro">
            <div className="space-header">
              <SignUp />
            </div>
          </Route>
          <Route path="/ingreso">
            <div className="space-header">
              <Login />
            </div>
          </Route> */}
          <Route path="/dashboard/">
            <div className="space-header">
              <Dashboard />
            </div>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
}