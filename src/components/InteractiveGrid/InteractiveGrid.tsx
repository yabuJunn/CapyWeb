import "./InteractiveGrid.css";
import "gridstack/dist/gridstack.min.css";
import { GridStack } from "gridstack";
import { useEffect } from "react";

//Import components
import { Balance } from "../../components/TotalBalance/Balance";
import { Income } from "../../components/Income/Income";
import { CardsSpace } from "../../components/CardsSpace/CardsSpace";
import { Expenses } from "../Expenses/Expenses";
import { ComparationGraphic } from "../ComparationGraphic/ComparationGraphic";
import { Savings } from "../Savings/Savings";
import { Level } from "../SaverLevel/SaverLevel";
import { Missions } from "../Missions/Missions";
import { Capy } from "../Capy/Capy";

export const InteractiveGrid = () => {
  useEffect(() => {
    GridStack.init();
  });

  return (
    <>
      <div id="gridContainer" className="grid-stack">
        <div className="grid-stack-item" gs-h="2" gs-w="4">
          <Balance></Balance>
        </div>
        <div className="grid-stack-item" gs-h="1" gs-w="3">
          <Income></Income>
        </div>
        <div className="grid-stack-item" gs-h="2" gs-w="2">
          <Capy></Capy>
        </div>
        <div className="grid-stack-item" gs-h="8" gs-w="3">
          <CardsSpace></CardsSpace>
        </div>
        <div className="grid-stack-item" gs-h="1" gs-w="3">
          <Expenses></Expenses>
        </div>
        <div className="grid-stack-item" gs-h="3" gs-w="6">
          <ComparationGraphic></ComparationGraphic>
        </div>
        <div className="grid-stack-item" gs-h="3" gs-w="3">
          <Savings></Savings>
        </div>
        <div className="grid-stack-item" gs-h="3" gs-w="5">
          <Level></Level>
        </div>
        <div className="grid-stack-item" gs-h="3" gs-w="4">
          <Missions></Missions>
        </div>
      </div>
    </>
  );
};
