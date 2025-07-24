import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ModalProyecto from "../components/ModalProyecto";
import "../styles/Projects.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Exsemed from "../assets/exsemed.png";

const proyectos = [
  {
    id: 1,
    titulo: "Exsemed",
    descripcion: (
      <>
        <p>
          Desarrollo completo del sitio web oficial de Exsemed, una empresa con
          más de 30 años especializada en soluciones médicas de alta tecnología.
        </p>
        <p>
          El sitio incluye una interfaz limpia y profesional que permite a
          médicos, hospitales y distribuidores explorar una amplia gama de
          productos médicos especializados.
        </p>
        <ul
          style={{ textAlign: "left", padding:"0 0 1.5rem 0", margin: "1rem", fontSize: "14px" }}
        >
          <li>
            Sistema de navegación por categorías: ortopedia, neurología,
            maxilofacial, oncología, entre otras.
          </li>
          <li>Catálogo visual con fichas técnicas y detalles por producto.</li>
          <li>
            Página institucional “Sobre Nosotros” con misión, visión y valores
            de la empresa.
          </li>
          <li>
            Página de contacto con mapa embebido, formulario y enlaces a
            sucursales.
          </li>
          <li>
            Integración de íconos con FontAwesome y animaciones suaves con AOS
            (Animate on Scroll).
          </li>
          <li>Diseño responsive para escritorio, tablet y móvil.</li>
          <li>
            Optimización SEO on-page (títulos, descripciones, estructura
            semántica).
          </li>
          <li>
            Implementación modular con HTML5, CSS3, JavaScript Vanilla y
            Bootstrap para grillas y navbar.
          </li>
          <li>Uso de Swiper.js para carruseles de marcas o distribuidores.</li>
          <li>Hosting en servidor personalizado con dominio propio.</li>
        </ul>
      </>
    ),
    imagen: Exsemed,
    tecnologias: [
      "HTML5",
      "CSS3",
      "JavaScript Vanilla",
      "Bootstrap 5",
      "Swiper.js",
      "FontAwesome",
      "AOS (Animate on Scroll)",
      "Responsive Design",
      "SEO básico",
      "Formulario de contacto embebido",
    ],
    demo: "https://exsemed.mx/",
  },
  {
    id: 2,
    titulo: "Todo App",
    descripcion: "App para tareas con frontend y backend desacoplados.",
    imagen: "/assets/proyectos/todo-app.jpg",
    tecnologias: ["React", "Spring Boot"],
    repo: "https://github.com/...",
    demo: "https://todo-app.vercel.app",
  },
  {
    id: 3,
    titulo: "Encriptador",
    descripcion: "Encriptador de textos.",
    imagen: "/assets/proyectos/todo-app.jpg",
    tecnologias: ["React", "Spring Boot"],
    repo: "https://github.com/...",
    demo: "https://todo-app.vercel.app",
  },
  // Agrega más proyectos reales
];

function Projects() {
  const [proyectoActivo, setProyectoActivo] = useState(null);

  return (
    <section id="container-major">
      <NavBar />
      <main id="main-container">
        <h1 id="title">Proyectos</h1>

        <div className="proyectos-container">
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            className="swiper"
          >
            {proyectos.map((proyecto, index) => (
              <SwiperSlide key={index}>
                <div
                  className="card-proyecto"
                  onClick={() => setProyectoActivo(proyecto)}
                >
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className="imagen-proyecto"
                  />
                  <h3>{proyecto.titulo}</h3>

                  <div className="modal-descripcion">
                    {proyecto.descripcion}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {proyectoActivo && (
            <ModalProyecto
              proyecto={proyectoActivo}
              onClose={() => setProyectoActivo(null)}
            />
          )}
        </div>
      </main>
    </section>
  );
}

export default Projects;
