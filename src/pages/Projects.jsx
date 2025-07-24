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

const proyectos = [
  {
    id: 1,
    titulo: "Red Social",
    descripcion: "Una red social hecha con React, Spring Boot y PostgreSQL.",
    imagen: "/assets/proyectos/red-social.jpg",
    tecnologias: ["React", "Spring Boot", "PostgreSQL"],
    repo: "https://github.com/...",
    demo: "https://red-social.fly.dev",
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
    titulo: "Encrptador",
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
                  <p>{proyecto.descripcion}</p>
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
