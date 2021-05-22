import React from "react";


function KanbanCard(card) {
  return (
    <li>
      <a href="#" className="block p-5 mb-3 bg-white rounded-md shadow">
        <div className="flex justify-between">
          <p className="text-sm font-medium text-gray-900 leading-snug">
            {card.action}
          </p>
          <span>
                <img className="rounded-full h-6 w-6" src={card.imgSrc} alt="JS" />
          </span>
        </div>
        <div className="flex justify-between items-baseline mt-2">
          <div className="text-sm text-gray-600">
            <time>
                {card.date}
            </time>
          </div>
          <div>
            <span class="bg-green-100 px-2 py-1 inline-flex items-center rounded">
              <svg
                className="h-2 w-2 text-green-500"
                viewBox="0 0 8 8"
                fill="currentColor"
              >
                <circle cx="4" cy="4" r="3" />
              </svg>
                <span className="ml-2 text-green-900 text-sm font-medium">
                  {card.actionType}
                </span>
            </span>
          </div>
        </div>
      </a>
    </li>
  );
}

export default KanbanCard;
