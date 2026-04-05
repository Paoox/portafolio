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
import Bot from "../assets/Severian.png";
import { useEffect } from "react";

const proyectos = [
  {
    id: 1,
    titulo: "Automatización Activades Admin",
    descripcion: (
      <>
        <p>
          Este proyecto es un flujo de automatización para apoyar al área de coordinación de una empresa privada la cual por contrato no puedo mencionar, ni mostrar el repositorio ya que contiene información privada y sensible. <br />
        </p>
        <p>
          Con este proyecto se busco eficientar el tiempo de los coordinadores, los cuales tenian asignadas labores administrativas como:
          <ul>Subir asistencias diarias de los promotores de manera manual</ul>
          <ul>Llevar un control de los pagos que tendra cada promotor dependiendo de su actividad quincenal y el tipo de actividad realizada</ul>
          <ul>Realizar solicitudes de gasolina y reembolsos en List para su dispersión </ul>
          <ul>Realizar el monitoreo y rastreo de guías de paquetería para la entrega del material correspondiente a nivel nacional</ul>
          <ul>Llevar acabo el monitoreo y revisión de la actividad de los promotores</ul>
          <ul>Revisión de formularios respondidos por los promotores para mitigar errores</ul>
          <ul>Actualización diaria del avance de actividades de cada promotor en excel por medio de graficas comparativas y tablas dinamicas</ul> <br />
          Y logramos una reducción de tiempo del 85% en estas actividades a las que los coordinadores les invertian cerca de 5hrs diarias lo redujimos a 45 mins al día. <br />
          Sin mencionar que los errores que antes les costaban de 2 a 5 días detectar ahora los detecta el mismo día a los pocos minutos de haberlos cometido el promotor, esto ayuda a mejorar el ingreso de la empresa al evitar descuentos por actividades con errores y tambien ahorra tiempo de traslados y gasolina al ya no tener que regresar en un futuro a realizar dichas correcciones.
        </p>
        <p>Es un sistema de automatización operativa construido en Python 3.13
        sobre un servidor local Debian, controlado completamente desde Telegram. Automatiza la supervisión de un equipo de 35 promotores de campo: valida formularios en tiempo real, clasifica fotos de exhibidores con visión computacional, lee remisiones con
        OCR y registra asistencias de forma autónoma</p>
        <ul style={{ listStyle: "none" }}>
          <li>
          🤖 Dos bots independientes de Telegram como interfaz
          de control total del servidor, con ConversationHandlers para flujos multi-paso y hash MD5 de 8 caracteres para callbacks inline respetando el límite de 64 bytes de Telegram.
          </li>
          <li>
          🌐 Automatización web con doble motor de navegador: Selenium 4.41 con Firefox y geckodriver 0.36.0 para captura de asistencias y carga de PDFs en nómina, y Playwright 1.48 con Chromium vía CDP en puertos diferentes para monitoreo e inspección del DOM Angular en tiempo real.
          </li>
          <li>
          ✅ Sistema de validaciones en capas (7 en total) para visitas a tiendas: confirma que la visita se realizó, que recibieron las tarjetas, que se permitió contar el inventario, valida RP principal y secundario contra número de tienda, lee la remisión con OCR, detecta productos en ticket y clasifica los diferentes exhibidores con visión computacional.
          </li>
          <li>
          🏪 Validación de formularios para cadenas comerciales con reglas específicas por tipo de comercio y cotejo de campos obligatorios en cada visita.
          </li>
          <li>
          🧠 Clasificador de exhibidores entrenado sobre embeddings de OpenAI CLIP ViT-B/32 con PyTorch CPU-only, scikit-learn LogisticRegression y data augmentation. Reentrenamiento automático cada viernes con backup del modelo anterior. El coordinador confirma o corrige clasificaciones desde Telegram con botones inline, y las fotos corregidas se incorporan al dataset de entrenamiento automáticamente para mejorar la calidad de la clasificación.
          </li>
          <li>
          🔍 Lectura de remisiones con EasyOCR 1.7.2 y OpenCV headless con 3 estrategias de fallback, detección de productos en ticket para validación cruzada y resolución de URLs cacheadas por Angular entre eventos del mismo promotor.
          </li>
          <li>
          📋 Gestión de correcciones pendientes con persistencia en JSON y ciclo de vida completo por error: registrado → pendiente → corregido, con reporte agrupado por promotor y cálculo de días sin resolver vía Telegram.
          </li>
          <li>
          📊 Reportes automáticos de avance del equipo con conteo acumulado de visitas según el comercio, lista de promotores activos en campo y ciclo de monitoreo adaptativo: 15 minutos con actividad, 60 minutos sin ella.
          </li>
          <li>
          📦 Integración con Teams y documentos de Excel compartidos para consulta de guías FedEx de promotores con validación de estatus en la página de rastreo, actualización de avance en tabla y extracción de datos del equipo.
          </li>
          <li>
          💬 Bot conectado a WhatsApp de trabajo que lee mensajes entrantes y responde automáticamente a promotores con planogramas, encuestas específicas por tipo de comercio y FAQs del equipo.
          </li>
          <li>
          ⛽ Extracción automática de información de chats para generar solicitudes de gasolina con detalle de kilómetros recorridos, capturas de evidencia y gestión de solicitudes de reembolso en Microsoft Lists.
          </li>
          <li>
          📄 Generación automática mensual de cartas responsivas de material con fpdf2, y automatización de nómina de promotores con cálculo por tienda visitada.
            <li>
            🖥️ Infraestructura self-hosted con 4 servicios systemd independientes, Xvfb como display virtual X11, encendido programado vía RTC wake y suspensión desactivada desde logind.conf para operación con tapa cerrada.
            </li>
            <li>
            🔄 Flujo de despliegue con GitHub como fuente de verdad: git reset --hard origin/main seguido de restart de servicios systemd, sin contenedores ni entornos virtuales, instalación directa con pip3 --break-system-packages.
            </li>
          </li>
        </ul>
      </>
    ),
    imagen: Bot,
    tecnologias: [
      "Python 3.13",
      "Telegram Bot API",
      "python-telegram-bot 21.6",
      "Selenium 4.41",
      "Playwright 1.48",
      "Firefox + geckodriver",
      "Chromium CDP",
      "OpenAI CLIP ViT-B/32",
      "PyTorch CPU",
      "EasyOCR",
      "scikit-learn",
      "OpenCV",
      "Pillow",
      "fpdf2",
      "WhatsApp API",
      "Microsoft Teams",
      "Microsoft Lists",
      "Excel automation",
      "FedEx tracking",
      "systemd",
      "Xvfb",
      "Debian",
      "GitHub",
    ],
    repo: {
      frontend: "https://github.com/Paoox/To-do-FrontEnd.git",
      backend: "https://github.com/Paoox/To-Do.git",
    },

    demo: "https://to-do-front-end-fawn.vercel.app/#/",
  },
  {
    id: 2,
    titulo: "Red Social Blah (Fullstack)",
    descripcion: (
      <>
        <p>
          Aplicación web fullstack para gestión de tareas con enfoque
          profesional en arquitectura desacoplada, seguridad, escalabilidad y
          despliegue moderno. Desarrollada como parte de un portafolio técnico
          para demostrar habilidades completas en desarrollo backend, frontend y
          DevOps.
        </p>
        <p>
          El backend fue construido con Java 17 y Spring Boot 3.5, exponiendo
          una API REST segura con control total de usuarios y tareas. El
          frontend fue desarrollado en React con Vite, brindando una experiencia
          limpia, responsive y moderna. Ambos componentes se comunican mediante
          peticiones HTTP autenticadas con JWT.
        </p>
        <p>
          Para probar la interfaz puedes crear un usuario nuevo o usar uno
          generico user:p@gmail.com password: P123456
        </p>
        <ul style={{ listStyle: "none" }}>
          <li>
            🔐 Sistema de autenticación robusto con JSON Web Tokens (JWT) que
            protege todas las rutas sensibles y controla el acceso a nivel de
            usuario.
          </li>
          <li>
            🔁 Funcionalidad de recuperación de contraseña y actualización de
            datos personales.
          </li>
          <li>
            🔒 Encriptación segura de contraseñas usando BCrypt antes de
            almacenarlas en la base de datos PostgreSQL.
          </li>
          <li>
            🔄 Operaciones CRUD completas para usuarios y tareas: registrar,
            iniciar sesión, crear, listar, actualizar y eliminar tareas
            personales.
          </li>
          <li>
            🧩 Arquitectura desacoplada: frontend y backend separados en
            distintos repositorios y desplegados de forma independiente.
          </li>
          <li>
            🖥️ Interfaz de usuario moderna hecha con React, utilizando
            `useState`, `useEffect` y `fetch` para interacción dinámica con el
            backend.
          </li>
          <li>
            📱 Diseño responsive con Material UI adaptado a dispositivos
            móviles.
          </li>
          <li>
            🐘 Persistencia de datos con PostgreSQL, con configuración de
            conexión desde Spring Boot mediante archivo
            `application.properties`.
          </li>
          <li>
            🐳 Contenerización profesional usando Docker para backend y base de
            datos, incluyendo archivos `Dockerfile` y `docker-compose.yml`.
          </li>
          <li>
            ☁️ Despliegue de backend en Fly.io usando imagen multistage
            optimizada con Maven y Java, y frontend en Vercel mediante GitHub
            integration.
          </li>
          <li>
            🔁 Flujo de autenticación gestionado en frontend con manejo de
            tokens JWT, almacenamiento en `localStorage` y validación de sesión
            activa.
          </li>
          <li>
            🌐 Manejo de CORS y control de origen entre capas para asegurar la
            comunicación entre dominios distintos (localhost, Fly.io, Vercel).
            <li>
              🛠️ Herramientas de desarrollo: IntelliJ IDEA, VSCode, Postman,
              GitHub.
            </li>
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
      "Maven",
    ],
    repo: {
      frontend: "https://github.com/Paoox/To-do-FrontEnd.git",
      backend: "https://github.com/Paoox/To-Do.git",
    },

    demo: "https://to-do-front-end-fawn.vercel.app/#/",
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
    const tooltip = document.getElementById("tooltip");
    const cards = document.querySelectorAll(".card-proyecto");

    const showTooltip = (e) => {
      if (window.innerWidth > 768) {
        tooltip.style.top = `${e.clientY + 12}px`;
        tooltip.style.left = `${e.clientX + 12}px`;
      }
      tooltip.style.opacity = "1";
    };

    const hideTooltip = () => {
      tooltip.style.opacity = "0";
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", showTooltip); // Desktop
      card.addEventListener("mouseleave", hideTooltip); // Desktop

      card.addEventListener("touchstart", showTooltip); // Mobile
      card.addEventListener("touchend", hideTooltip); // Mobile
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", showTooltip);
        card.removeEventListener("mouseleave", hideTooltip);
        card.removeEventListener("touchstart", showTooltip);
        card.removeEventListener("touchend", hideTooltip);
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

          <div id="tooltip" className="tooltip-hover">
            Conoce más →
          </div>

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
