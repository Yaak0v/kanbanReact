import React from "react";
import KanbanCard from "../KanbanFeature/KanbanCard";
import KanbanCardMulti from "../KanbanFeature/KanbanCard";

const cardInfo = [
  {
    action: "Add discount code to checkout page",
    date: "Sep 14",
    imgSrc: "img/JS.JPG",
    actionType: "Feature Request",
  },
  {
    action: "Run 10 miles",
    date: "Feb 27",
    imgSrc: "img/RG.JPG",
    actionType: "Workout Request",
  },
  {
    action: "Run 10 miles",
    date: "Feb 27",
    imgSrc: "img/RG.JPG",
    actionType: "Workout Request",
  },
];

function KanbanColumn() {
  return (
    <div className="ml-3 flex-shrink-0 flex flex-col w-80 bg-gray-100 rounded-md">
      <h3 className="flex-shrink-0 pb-1 pt-3 px-3 text-sm font-medium text-gray-700">
        Backlog
      </h3>
      <div className="flex-1 min-h-0 overflow-y-auto">
        <ul className="pt-1 pb-3 px-3">
            {cardInfo.map((card, index) => (
                <KanbanCardMulti {...card} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default KanbanColumn;
