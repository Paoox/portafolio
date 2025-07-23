import "../styles/AboutMe.css";
import Skills from "../components/Skills";
import NavBar from "../components/NavBar";
import { useState } from "react";
import Icon from "../assets/IconAboutMe.jpeg";
import Selfie from "../assets/Paoox1.svg";
import SliderTechIcons from "../components/SliderTechIcons";

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
          <h2 id="subtitle">Paola Arreola </h2>
          <p id="nickname">Paoox Dev</p>
        </section>

        <section id="description">
          <li>Edad: 38 años</li>
          <li>Estado civil: Casada</li>
          <li>Ubicación: México</li>
          <li>Localidad: Estado de México (Tecámac)</li>
        </section>

        <section id="me">
          <p id="subtitle-description">Sobre mi:</p>
          <p id="description-me">
            <br />
            Soy una apasionada del desarrollo web y de la programación.
            <br />
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
          <p id="subtitle-educacion">Educación:</p>
          <ul id="education-list">
            <li>
              Diplomado de Desarrollo Web Frontend - 2023
            </li>
            <li>
              Especialización en JavaScript & React - 2023
            </li>
            <li>
              Certificación de metodologias Scrum - 2023
            </li>
            <li>
              Diplomado en BD no relacionales(Mongo DB y Mongoose) - 2024
            </li>
            <li>
              Diplomado de especialización en desarrollo Backend - 2024
            </li>
            <li>
              Diplomado de especialización en POO - 2024
            </li>
            <li>
              Especialización en Java & Spring Boot - 2024
            </li>
            <li>
              Diplomado en BD relacionales, SQL y MySQL - 2025
            </li>
            <li>
              Certificación en Aws y OCI (Oracle Cloud Infrastructure) - 2025
            </li>
            <li>
              Diplomado en UI/UX - 2025
            </li>
          </ul>
        </section>
        
      </main>
    </section>
  );
}

export default AboutMe;
