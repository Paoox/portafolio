import "../styles/AboutMe.css";
import Skills from "../components/Skills";
import NavBar from "../components/NavBar";
import { useState } from "react";
import Download from "../assets/download.svg";
import Icon from "../assets/IconAboutMe.jpeg";
import Selfie from "../assets/Paoox1.svg";
import SliderTechIcons from "../components/SliderTechIcons";
import CarruselCertificados from "../components/CarruselCertificados";

function AboutMe() {
  const [mostrarReal, setMostrarReal] = useState(false);

  return (
    <section id="container-major">
      <NavBar />
      <main id="main-container">
        <h1 id="title">Conociendo a Paoox Dev</h1>
        <section id="icon-container">
          <img
            src={mostrarReal ? Selfie : Icon}
            alt="Paoox"
            id="icon"
            onClick={() => setMostrarReal((prev) => !prev)}
          />
          <div className="subtitle-container">
            <h2>Paola Arreola </h2>
            <h3>Paoox Dev</h3>
          </div>

        <section id="description">
          <li>Edad: 39 años</li>
          <li>Estado civil: Casada</li>
          <li>Ubicación: México</li>
          <li>Localidad: Estado de México (Tecámac)</li>
        </section>

        <a className="container-download" href="/PaooxDev.pdf">
            <img
              className="icondownload"
              src={Download}
              alt="Descargar-cv-pdf"
            />
            <p>Descargar mi cv</p>
          </a>
        </section>

        <section id="me">
          <p id="subtitle-description">Sobre mi:</p>
          <p id="description-me">
            Soy una apasionada del desarrollo web y de la programación.
            <br />
            Realice un cambio radical en mi carrera profesional en la cual obtuve mas de 20 años de experiencia<br /> en diferentes areas como ventas, atención a clientes, promotoria, etc.<br />
            Cuento con amplia experiencia en manejo de personal como Supervisora, Coordinadora y Gerente. <br />
            Descubri hace unos 5 años atras que me gustaba el tema de la
            programación, <br />
            desde entonces he estado aprendiendo y creciendo en este campo.
            <br />
            Me encanta aprender día a día y enfrentar nuevos desafíos. <br />
            Mis ganas de aprender y mejorar son infinitas, siempre estoy
            buscando
            <br /> nuevas oportunidades para crecer y superarme. <br />
            Me considero una persona perseverante y dedicada, siempre dispuesta
            a dar lo mejor de mi.
            <br />
            Busco siempre pefeccionar los detalles minimos de cada proyecto.
          </p>
        </section>

        <section id="slider-skills">
          <SliderTechIcons />
          <Skills />
        </section>

        <section id="education">
          <h4 id="subtitle-educacion">Educación</h4>
          <ul id="education-list">
            <li>Diplomado de Desarrollo Web Frontend - 2023</li>
            <li>Especialización en JavaScript & React - 2023</li>
            <li>Certificación de metodologias Scrum - 2023</li>
            <li>Diplomado en BD no relacionales(Mongo DB y Mongoose) - 2024</li>
            <li>Diplomado de especialización en desarrollo Backend - 2024</li>
            <li>Diplomado de especialización en POO - 2024</li>
            <li>Especialización en Java & Spring Boot - 2024</li>
            <li>Diplomado en BD relacionales, SQL y MySQL - 2025</li>
            <li>
              Certificación en Aws y OCI (Oracle Cloud Infrastructure) - 2025
            </li>
            <li>Diplomado en UI/UX - 2025</li>
            <li>Taller de actualización de manejo de Git y Github - 2026</li>
            <li>Diplomado integraciones con n8n - 2026</li>
            <li>Taller de Innovación con Inteligencia Artificial - 2026</li>
            <br />
            <li>Estudiante de la Ingeniería en Desarrollo de Software 2025 - en curso </li>
            <li>Estudiante de la Ingenieria en IA 2025 - en curso</li>
          </ul>
        </section>

        <section className="aboutme-section">
          {/* ...última sección de educación */}
          <CarruselCertificados />
        </section>
      </main>
    </section>
  );
}

export default AboutMe;
