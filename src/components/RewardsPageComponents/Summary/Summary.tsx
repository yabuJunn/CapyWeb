
import React from "react";
import "./Summary.css";
import SummaryCard from "../SummaryCard/SummaryCard";

const Summary: React.FC = () => {
  return (
    <div className="resumen">
      <h2>Summary</h2>
      <SummaryCard
        icon="🏆"
        title="Nivel de ahorrador"
        content="Novato"
        backgroundColor="#f45b3e"
      />
      <SummaryCard
        icon="🚩"
        title="Metas completadas"
        content="6"
        backgroundColor="#a3eb30"
      />
      <SummaryCard
        icon="💰"
        title="Capypoints"
        content="315"
        backgroundColor="#3c4cff"
      />
    </div>
  );
};

export default Summary;
