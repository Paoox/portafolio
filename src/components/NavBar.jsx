import "../styles/NavBar.css";
import { useTheme } from "../pages/ThemeContext";
import WhatsApp from "../assets/whatsAppCian.svg";
import Gmail from "../assets/gmail.svg";
import Linkedin from "../assets/Linkedin.svg";
import Avatar from "../assets/avatar.png";
import Download from "../assets/download.svg";
import Button from "../components/Button";
import ThemeToggle from "./ThemeToggle";
import LogoClaro from "../assets/Logo-claro.svg";
import LogoOscuro from "../assets/Logo-oscuro.svg";
import { useState } from "react";

function NavBar() {
  const { modoOscuro } = useTheme();
  const [logoCargado, setLogoCargado] = useState(false);

  return (
    <nav className="nav-container">
      <div className="container-logo">
        <a href="/">
           <img
            className={`icon-logo ${logoCargado ? "visible" : ""}`}
            src={modoOscuro ? LogoClaro : LogoOscuro}
            alt="Logotipo"
            onLoad={() => setLogoCargado(true)}
          />
        </a>
        <ThemeToggle />
      </div>
      <div className="container-avatar">
        <img className="avatar" src={Avatar} alt="Avatar-Paoox" />
        <p className="title">Paoox</p>
      </div>
      <div className="icons-container">
        <a className="container-icon" href="https://wa.me/525645834640">
          <img className="icon-whatsapp" src={WhatsApp} alt="Logo WhatsApp" />
        </a>
        <a className="container-icon" href="https://mailto:paoox.dev@gmail.com">
          <img className="icon-gmail" src={Gmail} alt="Logo Gmail" />
        </a>
        <a
          className="container-icon"
          href="https://www.linkedin.com/in/paola-arreola-6442a9375"
        >
          <img className="icon-linkedin" src={Linkedin} alt="Logo Linkedin" />
        </a>
        <a className="container-icon" href="/PaooxDev.pdf">
          <img
            className="icon-download"
            src={Download}
            alt="Descargar-cv-pdf"
          />
        </a>
      </div>
      <div className="buttons-container">
        <Button text="Inicio" redirectTo="/" />
        <Button text="Sobre Mí" redirectTo="/about" />
        <Button text="Proyectos" redirectTo="/projects" />
        <Button text="Soluciones para tu negocio" redirectTo="/services" />
      </div>
    </nav>
  );
}

export default NavBar;
