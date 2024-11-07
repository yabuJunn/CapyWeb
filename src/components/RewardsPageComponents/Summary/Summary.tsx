import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import SummaryCard from "../SummaryCard/SummaryCard";

const Summary: React.FC = () => {
  const { saverLevel, completedMissions, capyPoints } = useSelector((state: RootState) => state.missions);

  return (
    <div className="resumen">
      <h2>Summary</h2>
      <SummaryCard icon="../../src/assets/svg/Trofeo.svg" title="Saver level" content={saverLevel} backgroundColor="#F2622E" />
      <SummaryCard icon="../../src/assets/svg/Bandera.svg" title="Goals completed" content={completedMissions} backgroundColor="#A8F25D" />
      <SummaryCard icon="../../src/assets/svg/Logo.svg" title="Capypoints" content={capyPoints} backgroundColor="#3c4cff" />
    </div>
  );
};

export default Summary;