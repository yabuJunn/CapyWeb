import PlannerIcon from "../../../../../src/assets/svg/PlannerIcon.svg"

export const ExpensePlanner = () => {
  return (
    <div className='planner'>
        <h1>Monthly expense planner</h1>
        <img className="PlannerIcon" src={PlannerIcon} alt="PlannerIcon" />
        <h3>You don't have budgeted expenses</h3>
        <button>Add a new expense</button>


       
 
    </div>
  );
}