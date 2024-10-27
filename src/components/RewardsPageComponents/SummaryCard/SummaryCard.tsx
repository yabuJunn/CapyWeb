import React from "react";
import "./SummaryCard.css";

interface ResumenCardProps {
  icon: string;
  title: string;
  content: string | number;
  backgroundColor: string;
}

const SummaryCard: React.FC<ResumenCardProps> = ({ icon, title, content, backgroundColor }) => {
  return (
    <div className="resumen-card" style={{ backgroundColor }}>
      <div className="icono">{icon}</div>
      <div>
        <p className="titulo">{title}</p>
        <p className="contenido">{content}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
