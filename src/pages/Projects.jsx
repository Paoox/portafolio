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
import Exsemed from "../assets/exsemed.jpg";
import Colabora from "../assets/colabora.jpg";
import Encriptador from "../assets/encriptador.png";
import Blah from "../assets/blah.png";
import { useEffect } from 'react';


const proyectos = [
  {
    id: 1,
    titulo: "Red Social Blah (Fullstack)",
    descripcion: (
    <>
      <p>
        Aplicación web fullstack para gestión de tareas con enfoque profesional en arquitectura desacoplada, seguridad, escalabilidad y despliegue moderno. Desarrollada como parte de un portafolio técnico para demostrar habilidades completas en desarrollo backend, frontend y DevOps.
      </p>
      <p>
        El backend fue construido con Java 17 y Spring Boot 3.5, exponiendo una API REST segura con control total de usuarios y tareas. El frontend fue desarrollado en React con Vite, brindando una experiencia limpia, responsive y moderna. Ambos componentes se comunican mediante peticiones HTTP autenticadas con JWT.
      </p>
      <p>Para probar la interfaz puedes crear un usuario nuevo o usar uno generico user:p@gmail.com password: P123456</p>
      <ul style={{ listStyle: "none" }}>
        <li>
          🔐 Sistema de autenticación robusto con JSON Web Tokens (JWT) que protege todas las rutas sensibles y controla el acceso a nivel de usuario.
        </li>
        <li>🔁 Funcionalidad de recuperación de contraseña y actualización de datos personales.</li>
        <li>
          🔒 Encriptación segura de contraseñas usando BCrypt antes de almacenarlas en la base de datos PostgreSQL.
        </li>
        <li>
          🔄 Operaciones CRUD completas para usuarios y tareas: registrar, iniciar sesión, crear, listar, actualizar y eliminar tareas personales.
        </li>
        <li>
          🧩 Arquitectura desacoplada: frontend y backend separados en distintos repositorios y desplegados de forma independiente.
        </li>
        <li>
          🖥️ Interfaz de usuario moderna hecha con React, utilizando `useState`, `useEffect` y `fetch` para interacción dinámica con el backend.
        </li>
         <li>📱 Diseño responsive con Material UI adaptado a dispositivos móviles.</li>
        <li>
          🐘 Persistencia de datos con PostgreSQL, con configuración de conexión desde Spring Boot mediante archivo `application.properties`.
        </li>
        <li>
          🐳 Contenerización profesional usando Docker para backend y base de datos, incluyendo archivos `Dockerfile` y `docker-compose.yml`.
        </li>
        <li>
          ☁️ Despliegue de backend en Fly.io usando imagen multistage optimizada con Maven y Java, y frontend en Vercel mediante GitHub integration.
        </li>
        <li>
          🔁 Flujo de autenticación gestionado en frontend con manejo de tokens JWT, almacenamiento en `localStorage` y validación de sesión activa.
        </li>
        <li>
          🌐 Manejo de CORS y control de origen entre capas para asegurar la comunicación entre dominios distintos (localhost, Fly.io, Vercel).
           <li>🛠️ Herramientas de desarrollo: IntelliJ IDEA, VSCode, Postman, GitHub.</li>
        </li>
      </ul>
    </>
  ),
    imagen: Blah,
    tecnologias: [
    "React",
    "Vite",
    "Material UI",
    "Java 17",
    "Spring Boot 3.5",
    "PostgreSQL",
    "JWT",
    "BCrypt",
    "API REST",
    "Docker",
    "Docker Compose",
    "Fly.io",
    "Vercel",
    "IntelliJ IDEA",
    "VSCode",
    "Postman",
    "Javascript",
    "Maven"
  ],
    repo: {
      frontend: "https://github.com/Paoox/To-do-FrontEnd.git",
      backend: "https://github.com/Paoox/To-Do.git",
    },

    demo: "https://to-do-front-end-fawn.vercel.app/#/",
  },
  {
    id: 2,
    titulo: "Exsemed (Fullstack)",
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
        <ul style={{ listStyle: "none" }}>
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
    id: 3,
    titulo: "Colabora.mx (Frontend)",
    descripcion: (
      <>
        <p>
          Participación en el desarrollo frontend del sitio oficial de Colabora,
          una plataforma enfocada en promover la colaboración ciudadana para
          proyectos sociales, educativos y comunitarios en México.
        </p>
        <p>
          El sitio ofrece herramientas para registrar, difundir y apoyar
          iniciativas ciudadanas desde una interfaz accesible, intuitiva y
          adaptable a distintos dispositivos.
        </p>
        <ul style={{ listStyle: "none" }}>
          <li>
            Desarrollo de interfaces limpias y responsivas con foco en UX/UI.
          </li>
          <li>
            Implementación de componentes reutilizables en React para mayor
            mantenibilidad.
          </li>
          <li>
            Consumo de APIs RESTful para mostrar dinámicamente el contenido del
            portal.
          </li>
          <li>
            Colaboración en equipo multidisciplinario usando metodología ágil
            (Scrum).
          </li>
          <li>
            Aplicación de buenas prácticas de accesibilidad web y semántica
            HTML.
          </li>
          <li>Uso de Tailwind CSS y CSS modular para estilizar componentes.</li>
          <li>
            Adaptación visual a múltiples resoluciones (desktop, tablet, móvil).
          </li>
          <li>
            Participación en pruebas funcionales cruzadas para asegurar
            compatibilidad en navegadores.
          </li>
        </ul>
      </>
    ),
    imagen: Colabora,
    tecnologias: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "APIs REST",
      "Responsive Design",
      "Scrum",
      "CSS Modules",
      "UX/UI",
      "Accesibilidad Web",
    ],
    demo: "https://colabora.mx/",
  },
  {
    id: 4,
    titulo: "Encriptador (Frontend)",
    descripcion: (
      <>
        <p>
          Es un proyecto al que le tengo particular aprecio por lo diertido que
          fue crearlo. Es una herramienta web de encriptación y desencriptación
          de texto, construida como parte del Challenge 1 de Alura. Permite
          conservar y transformar mensajes aplicando reglas específicas de
          sustitución de caracteres.
        </p>
        <p>
          Desarrollé el frontend y la lógica de cifrado aplicando buenas
          prácticas de usabilidad, validaciones y compatibilidad con diversas
          resoluciones.
        </p>
        <ul style={{ listStyle: "none" }}>
          <li>
            📌 Sustitución de vocales por claves: “a” ⇢ “ai”, “e” ⇢ “enter”,
            etc.
          </li>
          <li>
            Validaciones que permiten únicamente texto en minúscula sin acentos
            ni caracteres especiales.
          </li>
          <li>
            Botón para copiar el resultado al portapapeles con feedback visual.
          </li>
          <li>
            Interfaz amigable con área de entrada y salida claramente
            diferenciadas.
          </li>
          <li>
            Pie de página con enlaces a redes sociales y semana de creación.
          </li>
          <li>
            Convertido estáticamente con HTML, CSS y JavaScript sin frameworks.
          </li>
          <li>
            Desplegado en Vercel con HTTPS automático y tiempo de respuesta
            rápida.
          </li>
        </ul>
      </>
    ),
    imagen: Encriptador,
    tecnologias: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Validaciones DOM",
      "Clipboard API",
      "Responsive Design",
      "Vercel Deployment",
    ],
    repo: "https://github.com/Paoox/Encriptador",
    demo: "https://encriptador-tau.vercel.app/",
  },
  // Agrega más proyectos
];

function Projects() {
  const [proyectoActivo, setProyectoActivo] = useState(null);
  useEffect(() => {
  const tooltip = document.getElementById('tooltip');
  const cards = document.querySelectorAll('.card-proyecto');

  const showTooltip = (e) => {
    tooltip.style.top = `${e.clientY + 12}px`;
    tooltip.style.left = `${e.clientX + 12}px`;
    tooltip.style.opacity = '1';
  };

  const hideTooltip = () => {
    tooltip.style.opacity = '0';
  };

  cards.forEach((card) => {
    card.addEventListener('mousemove', showTooltip);
    card.addEventListener('mouseleave', hideTooltip);
  });

  return () => {
    cards.forEach((card) => {
      card.removeEventListener('mousemove', showTooltip);
      card.removeEventListener('mouseleave', hideTooltip);
    });
  };
}, []);

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

          <div id="tooltip" className="tooltip-hover">Conoce más →</div>

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
