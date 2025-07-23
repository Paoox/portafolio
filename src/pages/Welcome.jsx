import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/IconLogo.svg";
import "../styles/Welcome.css";

function Welcome() {
  const [showTitle, setShowTitle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Temporizador para mostrar el título después de la animación de entrada
    const timerIn = setTimeout(() => {
      setShowTitle(true);
    }, 3000); // 3 segundos para que coincida con la animación de entrada

    // Temporizador para redirigir a la página de inicio después de mostrar el título
    const timerOut = setTimeout(() => {
      navigate("/about"); // Redirige automáticamente a la página Home
    }, 7000); // Tiempo total: 3 segundos de animación + 4 segundos de visualización

    return () => {
      clearTimeout(timerIn);
      clearTimeout(timerOut);
    };
  }, [navigate]);

  return (
    <section className="welcome-page">
      <div className="logo">
        <img src={Logo} className="blur-in" alt="Logo" />
        <p className={`fade-in ${showTitle ? "visible" : "fade-out"}`}>
          Created by Paoox Dev
        </p>
      </div>
    </section>
  );
}

export default Welcome;
