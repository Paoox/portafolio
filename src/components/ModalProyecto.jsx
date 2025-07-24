import React from "react";
import "../styles/ModalProyecto.css";

export default function ModalProyecto({ proyecto, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
        <button className="btn-cerrar" onClick={onClose}>×</button>
        <img
          src={proyecto.imagen}
          alt={proyecto.titulo}
          className="modal-img"
        />
        <h2>{proyecto.titulo}</h2>
        <p>{proyecto.descripcion}</p>
        <div className="modal-tecnologias">
          {proyecto.tecnologias.map((tech, i) => (
            <span key={i} className="badge">{tech}</span>
          ))}
        </div>
        <div className="modal-links">
          <a href={proyecto.repo} target="_blank" rel="noopener noreferrer">🔗 GitHub</a>
          <a href={proyecto.demo} target="_blank" rel="noopener noreferrer">🚀 Ver demo</a>
        </div>
      </div>
    </div>
  );
}
