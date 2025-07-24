import NavBar from "../components/NavBar";
import "../styles/Services.css";

function Services() {
  return (
    <section id="container-major">
      <NavBar />
      <main id="main-container">
        <div className="services-wrapper">
          <h1 className="services-title">¿En qué puedo ayudarte?</h1>
          <p className="services-description">
            Soy desarrolladora fullstack y me especializo en crear soluciones
            digitales modernas, eficientes y personalizadas. Ya sea que tengas
            un emprendimiento o una empresa, puedo ayudarte a transformar tus
            ideas en productos reales.
          </p>

          <div className="services-grid">
            <div className="service-card">
              <h3>🛠️ Desarrollo Web</h3>
              <p>
                Sitios responsivos, optimizados y atractivos con tecnologías
                como React, Vite, Spring Boot y PostgreSQL. Desde landing pages
                hasta plataformas completas.
              </p>
            </div>

            <div className="service-card">
              <h3>🤖 Automatización y Bots</h3>
              <p>
                ¿Necesitas automatizar respuestas, ventas o seguimiento a
                clientes? Desarrollo bots para WhatsApp, integración con n8n, e
                incluso asistentes personalizados.
              </p>
            </div>

            <div className="service-card">
              <h3>📱 Aplicaciones Fullstack</h3>
              <p>
                Backend robusto en Java y frontend dinámico con React. Ideal
                para MVPs, redes sociales, dashboards o cualquier app que
                necesites lanzar.
              </p>
            </div>

            <div className="service-card">
              <h3>🚀 Despliegue y Hosting</h3>
              <p>
                Llevo tu proyecto a producción usando servicios como Vercel,
                Railway o Fly.io. También trabajo con Docker y bases de datos
                PostgreSQL.
              </p>
            </div>

            <div className="service-card">
              <h3>🎯 Asesoría Técnica</h3>
              <p>
                ¿No sabes por dónde empezar? Te ayudo a definir tu MVP, elegir
                tecnologías, estructurar tu base de datos o automatizar procesos
                repetitivos.
              </p>
            </div>

            <div className="service-card">
              <h3>📊 Sistemas CRM Personalizados</h3>
              <p>
                Desarrollo de herramientas internas para gestionar clientes,
                productos, ventas o inventario. Ideal para emprendedores o
                negocios que requieren control sin depender de plataformas
                externas.
              </p>
            </div>
          </div>

          <div className="cta-section">
            <p>¿Te interesa alguno de estos servicios o tienes una idea?</p>
            <a href="https://wa.me/525645834640" className="cta-button">
              Contáctame
            </a>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Services;
