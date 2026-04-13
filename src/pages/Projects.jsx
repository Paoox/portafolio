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
import Feria from "../assets/ferIA.png";
import { useEffect } from "react";

const proyectos = [
  {
    id: 1,
    titulo: "FerIA",
    descripcion: (
      <>
        <p>
          Plataforma B2B2C de <strong>acompañamiento financiero con IA</strong>,
          desarrollada en el <strong>hackathon de genius arena de Talent-Land 2026</strong> con enfoque en el ODS 8. Un proyecto
          especial por la escala técnica y el impacto que busca generar.
        </p>
        <p>
          Construida con <strong>Ionic React + TypeScript</strong> en el frontend
          y un backend serverless completo en <strong>AWS (CDK, Lambda, Bedrock)</strong>.
        </p>
      </>
    ),
    descripcionCompleta: (
      <>
        <p>
          FerIA permite registrar ingresos y gastos por texto o voz, conversar con
          un tutor financiero impulsado por IA y desbloquear logros que refuerzan
          hábitos financieros saludables.
        </p>
        <p><strong>Funcionalidades:</strong></p>
        <ul>
          <li>🎙️ <strong>Registro por voz:</strong> pipeline event-driven con Amazon Transcribe + Bedrock que transcribe, clasifica y persiste movimientos automáticamente.</li>
          <li>🤖 <strong>Tutor con IA:</strong> chat conversacional con Claude (Amazon Bedrock) que responde con contexto real de tus finanzas.</li>
          <li>🏆 <strong>Motor de logros:</strong> gamificación con reglas auditables bajo dos ejes — Claridad y Control del mes.</li>
          <li>📊 <strong>Dashboard financiero:</strong> resumen de ingresos, gastos, balance y tendencias semanales.</li>
          <li>🔐 <strong>Autenticación OAuth:</strong> email/password y Google con Amazon Cognito.</li>
          <li>📱 <strong>Web + móvil:</strong> una sola base de código con Ionic + Capacitor.</li>
          <li>☁️ <strong>Infraestructura como código:</strong> todo el backend definido y desplegable con AWS CDK v2.</li>
        </ul>
      </>
    ),
    imagen: Feria, // <- actualiza con tu imagen/screenshot
    tecnologias: [
      "Ionic React", "TypeScript", "AWS Lambda", "AWS CDK v2",
      "Amazon Bedrock", "DynamoDB", "Amazon Cognito", "API Gateway",
      "Amazon Transcribe", "Capacitor", "Vite", "GitHub Actions",
    ],
    repo: {
      frontend: "https://github.com/Paoox/feria-portafolio/tree/develop",
      backend: "https://github.com/jesus1612/feria-infraestructure",
    },
    demo: "https://d3sksrbscbaj6x.cloudfront.net/login", 
  },
  {
    id: 2,
    titulo: "Automatización Actividades Admin",
    descripcion: (
      <>
        <p>
          Flujo de automatización para apoyar al área de coordinación de una
          empresa privada. Por contrato de confidencialidad no puedo mencionar
          el nombre de la empresa ni mostrar el repositorio.
        </p>
        <p>
          Logramos una <strong>reducción del 85%</strong> en el tiempo de
          actividades administrativas: de 5 horas diarias a solo 45 minutos.
          Los errores que antes tardaban 2 a 5 días en detectarse, ahora se
          identifican el mismo día.
        </p>
      </>
    ),
    descripcionCompleta: (
      <>
        <p>
          Sistema de automatización operativa construido en <strong>Python 3.13</strong> sobre
          un servidor local Debian, controlado completamente desde Telegram.
          Automatiza la supervisión de un equipo de 35 promotores de campo.
        </p>
        <p><strong>Actividades que automatizamos:</strong></p>
        <ul>
          <li>Subir asistencias diarias de promotores de forma autónoma</li>
          <li>Control de pagos quincenales según tipo de actividad</li>
          <li>Solicitudes de gasolina y reembolsos en Microsoft Lists</li>
          <li>Monitoreo y rastreo de guías de paquetería a nivel nacional</li>
          <li>Revisión de formularios para mitigar errores</li>
          <li>Actualización diaria de avance en Excel con gráficas y tablas dinámicas</li>
        </ul>
        <p><strong>Resultado:</strong> reducción del <strong>85%</strong> del tiempo — de 5 hrs/día a 45 min/día.</p>
        <p><strong>Funcionalidades destacadas:</strong></p>
        <ul>
          <li>🤖 <strong>Dos bots de Telegram</strong> como interfaz de control total del servidor, con ConversationHandlers para flujos multi-paso.</li>
          <li>🌐 <strong>Doble motor de navegador:</strong> Selenium 4.41 con Firefox y Playwright 1.48 con Chromium vía CDP para monitoreo del DOM Angular.</li>
          <li>✅ <strong>Sistema de validaciones en 7 capas</strong> para visitas a tiendas con OCR y visión computacional.</li>
          <li>🧠 <strong>Clasificador de exhibidores</strong> con embeddings CLIP ViT-B/32, PyTorch y scikit-learn. Reentrenamiento automático cada viernes.</li>
          <li>🔍 <strong>OCR con EasyOCR 1.7.2 y OpenCV headless</strong> con 3 estrategias de fallback.</li>
          <li>📋 <strong>Gestión de correcciones</strong> con persistencia en JSON: registrado → pendiente → corregido.</li>
          <li>📊 <strong>Reportes automáticos</strong> con ciclo de monitoreo adaptativo: 15 min con actividad, 60 min sin ella.</li>
          <li>📦 <strong>Integración con Microsoft Teams y Excel</strong> para consulta de guías FedEx.</li>
          <li>💬 <strong>Bot de WhatsApp</strong> que responde automáticamente con planogramas, encuestas y FAQs.</li>
          <li>⛽ <strong>Extracción automática</strong> de solicitudes de gasolina y gestión de reembolsos en Lists.</li>
          <li>📄 <strong>Generación mensual de cartas responsivas</strong> con fpdf2 y automatización de nómina.</li>
          <li>🖥️ <strong>Infraestructura self-hosted</strong> con 4 servicios systemd, Xvfb y encendido programado vía RTC wake.</li>
        </ul>
      </>
    ),
    imagen: Bot,
    tecnologias: [
      "Python 3.13", "Debian Linux", "Telegram Bot API", "Selenium 4",
      "Playwright", "EasyOCR", "OpenCV", "PyTorch", "CLIP ViT-B/32",
      "scikit-learn", "fpdf2", "Microsoft Lists", "Microsoft Teams",
      "WhatsApp API", "systemd", "GitHub",
    ],
    privado: true,
  },
  {
    id: 3,
    titulo: "Red Social Blah (Fullstack)",
    descripcion: (
      <>
        <p>
          Aplicación web fullstack con arquitectura desacoplada, seguridad JWT
          y despliegue moderno. Backend en <strong>Java 17 + Spring Boot 3.5</strong>,
          frontend en <strong>React + Vite</strong>.
        </p>
        <p>
          Puedes probarla creando un usuario nuevo o con: user: <strong>p@gmail.com</strong> / pass: <strong>P123456</strong>
        </p>
      </>
    ),
    descripcionCompleta: (
      <>
        <p>
          Aplicación web fullstack para gestión de tareas con enfoque profesional
          en arquitectura desacoplada, seguridad, escalabilidad y despliegue moderno.
        </p>
        <p><strong>Características principales:</strong></p>
        <ul>
          <li>🔐 <strong>Autenticación con JWT</strong> que protege todas las rutas sensibles y controla el acceso por usuario.</li>
          <li>🔁 Recuperación de contraseña y actualización de datos personales.</li>
          <li>🔒 <strong>Encriptación con BCrypt</strong> antes de almacenar contraseñas en PostgreSQL.</li>
          <li>🔄 <strong>CRUD completo</strong> para usuarios y tareas: registrar, iniciar sesión, crear, listar, actualizar y eliminar.</li>
          <li>🧩 <strong>Arquitectura desacoplada:</strong> frontend y backend en repositorios y despliegues independientes.</li>
          <li>🖥️ Interfaz moderna con React usando useState, useEffect y fetch para interacción dinámica.</li>
          <li>📱 <strong>Diseño responsive</strong> con Material UI adaptado a móviles.</li>
          <li>🐘 Persistencia con <strong>PostgreSQL</strong> configurado desde Spring Boot.</li>
          <li>🐳 <strong>Contenerización con Docker</strong> incluyendo Dockerfile y docker-compose.yml.</li>
          <li>☁️ Backend desplegado en <strong>Fly.io</strong> con imagen multistage y frontend en <strong>Vercel</strong>.</li>
          <li>🌐 Manejo de CORS entre dominios distintos (localhost, Fly.io, Vercel).</li>
          <li>🛠️ Herramientas: IntelliJ IDEA, VSCode, Postman, GitHub.</li>
        </ul>
      </>
    ),
    imagen: Blah,
    tecnologias: [
      "React", "Vite", "Material UI", "Java 17", "Spring Boot 3.5",
      "PostgreSQL", "JWT", "BCrypt", "API REST", "Docker", "Docker Compose",
      "Fly.io", "Vercel", "IntelliJ IDEA", "VSCode", "Postman", "Javascript", "Maven",
    ],
    repo: {
      frontend: "https://github.com/Paoox/To-do-FrontEnd.git",
      backend: "https://github.com/Paoox/To-Do.git",
    },
    demo: "https://to-do-front-end-fawn.vercel.app/#/",
  },
  {
    id: 4,
    titulo: "Exsemed (Fullstack)",
    descripcion: (
      <>
        <p>
          Desarrollo completo del sitio web oficial de <strong>Exsemed</strong>,
          empresa con más de 30 años especializada en soluciones médicas de alta tecnología.
        </p>
        <p>
          Interfaz profesional para médicos, hospitales y distribuidores con
          catálogo de productos, SEO on-page y hosting en dominio propio.
        </p>
      </>
    ),
    descripcionCompleta: (
      <>
        <p>
          Sitio web oficial de Exsemed con interfaz limpia y profesional para
          explorar productos médicos especializados.
        </p>
        <p><strong>Funcionalidades:</strong></p>
        <ul>
          <li>🗂️ <strong>Navegación por categorías:</strong> ortopedia, neurología, maxilofacial, oncología y más.</li>
          <li>📋 Catálogo visual con fichas técnicas y detalles por producto.</li>
          <li>🏢 Página institucional con misión, visión y valores de la empresa.</li>
          <li>📍 Página de contacto con mapa embebido, formulario y enlaces a sucursales.</li>
          <li>✨ Íconos con <strong>FontAwesome</strong> y animaciones con <strong>AOS (Animate on Scroll)</strong>.</li>
          <li>📱 Diseño responsive para escritorio, tablet y móvil.</li>
          <li>🔍 <strong>Optimización SEO on-page</strong>: títulos, descripciones y estructura semántica.</li>
          <li>🎠 Carruseles de marcas con <strong>Swiper.js</strong>.</li>
          <li>🌐 Hosting en servidor personalizado con dominio propio.</li>
        </ul>
      </>
    ),
    imagen: Exsemed,
    tecnologias: [
      "HTML5", "CSS3", "JavaScript Vanilla", "Bootstrap 5", "Swiper.js",
      "FontAwesome", "AOS (Animate on Scroll)", "Responsive Design",
      "SEO básico", "Formulario de contacto embebido",
    ],
    demo: "https://exsemed.mx/",
  },
  {
    id: 5,
    titulo: "Colabora.mx (Frontend)",
    descripcion: (
      <>
        <p>
          Participación en el frontend del sitio oficial de <strong>Colabora</strong>,
          plataforma para promover la colaboración ciudadana en proyectos
          sociales, educativos y comunitarios en México.
        </p>
        <p>
          Desarrollo de interfaces responsivas, consumo de APIs REST y
          trabajo en equipo con metodología <strong>Scrum</strong>.
        </p>
      </>
    ),
    descripcionCompleta: (
      <>
        <p>
          Sitio oficial de Colabora con herramientas para registrar, difundir
          y apoyar iniciativas ciudadanas desde una interfaz accesible e intuitiva.
        </p>
        <p><strong>Mi participación:</strong></p>
        <ul>
          <li>🎨 Desarrollo de interfaces limpias y responsivas con foco en <strong>UX/UI</strong>.</li>
          <li>♻️ <strong>Componentes reutilizables en React</strong> para mayor mantenibilidad.</li>
          <li>🔗 <strong>Consumo de APIs RESTful</strong> para mostrar dinámicamente el contenido.</li>
          <li>🤝 Colaboración en equipo multidisciplinario con metodología ágil <strong>Scrum</strong>.</li>
          <li>♿ Buenas prácticas de <strong>accesibilidad web</strong> y semántica HTML.</li>
          <li>💨 <strong>Tailwind CSS</strong> y CSS modular para estilizar componentes.</li>
          <li>📱 Adaptación visual a múltiples resoluciones: desktop, tablet y móvil.</li>
          <li>🧪 Pruebas funcionales cruzadas para compatibilidad en navegadores.</li>
        </ul>
      </>
    ),
    imagen: Colabora,
    tecnologias: [
      "React", "Tailwind CSS", "JavaScript", "HTML5", "APIs REST",
      "Responsive Design", "Scrum", "CSS Modules", "UX/UI", "Accesibilidad Web",
    ],
    demo: "https://colabora.mx/",
  },
  {
    id: 6,
    titulo: "Encriptador (Frontend)",
    descripcion: (
      <>
        <p>
          Herramienta web de encriptación y desencriptación de texto construida
          como <strong>Challenge 1 de Alura</strong>. Un proyecto especial por
          lo divertido que fue crearlo.
        </p>
        <p>
          Desarrollado con <strong>HTML, CSS y JavaScript puro</strong>,
          desplegado en Vercel.
        </p>
      </>
    ),
    descripcionCompleta: (
      <>
        <p>
          Herramienta que permite transformar mensajes aplicando reglas
          específicas de sustitución de caracteres, con validaciones y
          compatibilidad en diversas resoluciones.
        </p>
        <p><strong>Funcionalidades:</strong></p>
        <ul>
          <li>📌 <strong>Sustitución de vocales:</strong> "a" ⇢ "ai", "e" ⇢ "enter", "i" ⇢ "imes", "o" ⇢ "ober", "u" ⇢ "ufat".</li>
          <li>✅ Validaciones: solo texto en minúscula sin acentos ni caracteres especiales.</li>
          <li>📋 <strong>Botón copiar</strong> al portapapeles con feedback visual.</li>
          <li>🎨 Interfaz amigable con área de entrada y salida claramente diferenciadas.</li>
          <li>📱 Diseño <strong>responsive</strong> para distintas resoluciones.</li>
          <li>🚀 Desplegado en <strong>Vercel</strong> con HTTPS automático.</li>
        </ul>
      </>
    ),
    imagen: Encriptador,
    tecnologias: [
      "HTML5", "CSS3", "JavaScript", "Validaciones DOM",
      "Clipboard API", "Responsive Design", "Vercel Deployment",
    ],
    repo: "https://github.com/Paoox/Encriptador",
    demo: "https://encriptador-tau.vercel.app/",
  },
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
      card.addEventListener("mousemove", showTooltip);
      card.addEventListener("mouseleave", hideTooltip);
      card.addEventListener("touchstart", showTooltip);
      card.addEventListener("touchend", hideTooltip);
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
                  {proyecto.privado && (
                    <span className="badge" style={{ backgroundColor: "#555", color: "#fff", marginBottom: "0.5rem", display: "inline-block" }}>
                      🔒 Proyecto Privado
                    </span>
                  )}
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