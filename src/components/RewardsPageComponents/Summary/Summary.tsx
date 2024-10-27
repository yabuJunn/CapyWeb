
import React from "react";
import "./Summary.css";
import SummaryCard from "../SummaryCard/SummaryCard";

const Summary: React.FC = () => {
  return (
    <div className="resumen">
      <h2>Summary</h2>
      <SummaryCard
        icon="../../src/assets/svg/Trofeo.svg"
        title="Nivel de ahorrador"
        content="Novato"
        backgroundColor="#f45b3e"
      />
      <SummaryCard
        icon="../../src/assets/svg/Bandera.svg"
        title="Metas completadas"
        content="6"
        backgroundColor="#a3eb30"
      />
      <SummaryCard
        icon="../../src/assets/svg/Logo.svg"
        title="Capypoints"
        content="315"
        backgroundColor="#3c4cff"
      />
    </div>
  );
};

export default Summary;
