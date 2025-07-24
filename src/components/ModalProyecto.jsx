import React from "react";
import "../styles/ModalProyecto.css";

export default function ModalProyecto({ proyecto, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
        <button className="btn-cerrar" onClick={onClose}>
          ×
        </button>
        <img
          src={proyecto.imagen}
          alt={proyecto.titulo}
          className="modal-img"
        />
        <h2>{proyecto.titulo}</h2>
        <div className="modal-descripcion">{proyecto.descripcion}</div>

        <div className="modal-tecnologias">
          {proyecto.tecnologias.map((tech, i) => (
            <span key={i} className="badge">
              {tech}
            </span>
          ))}
        </div>
        <div className="modal-links">
          {proyecto.repo?.frontend && (
            <a
              href={proyecto.repo.frontend}
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 Frontend
            </a>
          )}
          {proyecto.repo?.backend && (
            <a
              href={proyecto.repo.backend}
              target="_blank"
              rel="noopener noreferrer"
            >
              🛠️ Backend
            </a>
          )}
          {proyecto.demo && (
            <a href={proyecto.demo} target="_blank" rel="noopener noreferrer">
              🚀 Ver demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
