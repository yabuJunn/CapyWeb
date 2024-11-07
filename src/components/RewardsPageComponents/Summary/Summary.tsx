import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import SummaryCard from "../SummaryCard/SummaryCard";

const Summary: React.FC = () => {
  const { saverLevel, goalsCompleted, accumulatedCapypoints } = useSelector((state: RootState) => state.rewards.summary);

  return (
    <div className="Summary">
      <h2 id="summary">Summary</h2>
      <SummaryCard icon="../../src/assets/desktop/svg/Trofeo.svg" title="Saver level" content={saverLevel} backgroundColor="#F2622E" />
      <SummaryCard icon="../../src/assets/desktop/svg/Bandera.svg" title="Goals completed" content={goalsCompleted} backgroundColor="#A8F25D" />
      <SummaryCard icon="../../src/assets/desktop/svg/Logo.svg" title="Capypoints" content={accumulatedCapypoints} backgroundColor="#3c4cff" />
    </div>
  );
};

export default Summary;