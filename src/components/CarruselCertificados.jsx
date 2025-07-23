import React, { useState, useEffect } from "react";
import "../styles/CarruselCertificados.css";

const imagenes = [
  "/assets/certificados/cert1.jpg",
  "/assets/certificados/cert2.jpg",
  "/assets/certificados/cert3.jpg",
  "/assets/certificados/cert4.jpg",
  "/assets/certificados/cert5.jpg",
  "/assets/certificados/cert6.jpg",
  "/assets/certificados/cert7.jpg",
  "/assets/certificados/cert8.jpg",
  "/assets/certificados/cert9.jpg",
  "/assets/certificados/cert10.jpg",
  "/assets/certificados/cert11.jpg",
  "/assets/certificados/cert12.jpg",
  "/assets/certificados/cert13.jpg",
  "/assets/certificados/cert14.jpg",
  "/assets/certificados/cert15.jpg",
  "/assets/certificados/cert16.jpg",
  "/assets/certificados/cert17.jpg",
  "/assets/certificados/cert18.jpg",
  "/assets/certificados/cert19.jpg",
  "/assets/certificados/cert20.jpg",
  "/assets/certificados/cert21.jpg",
  "/assets/certificados/cert22.jpg",
  "/assets/certificados/cert23.jpg",
  "/assets/certificados/cert24.jpg",
  "/assets/certificados/cert25.jpg",
];

export default function CarruselCertificados() {
  const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % imagenes.length);
    }, 5000); // cambia cada 3 segundos

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="carrusel-wrapper">
      <img
        src={imagenes[indiceActual]}
        alt={`Certificado ${indiceActual + 1}`}
        className="carrusel-img"
        onContextMenu={(e) => e.preventDefault()} // ⛔ bloquea clic derecho
        draggable={false} // ⛔ no permite arrastrar
      />

      <div className="carrusel-indicadores">
        {imagenes.map((_, i) => (
          <span
            key={i}
            className={`punto ${i === indiceActual ? "activo" : ""}`}
            onClick={() => setIndiceActual(i)}
          />
        ))}
      </div>
    </div>
  );
}
