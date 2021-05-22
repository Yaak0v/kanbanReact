import React from "react";
import {
    SearchIcon,
    BellIcon,
    MenuAlt2Icon,
  } from "@heroicons/react/outline";
  

function GlobalNavAndSettings() {
  return (
    <div>
      <div className="flex justify-between items-center py-3 px-6 border-b border-gray-200">
        <div className="flex-1 flex">
          <button className="text-gray-600 lg:hidden">
            <MenuAlt2Icon className="text-gray-600 h-6 w-6" />
          </button>
          <div className="ml-3 relative w-64 lg:ml-0">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <SearchIcon className="h-6 w-6 text-gray-600" />
            </span>
            <input
              type="text"
              className="block w-full max-w-xs rounded-md border border-gray-400 pl-10 pr-4 py-2 text-sm text-gray-900 placeholder-gray-600"
              placeholder="search"
            />
          </div>
        </div>
        <div className="flex items-center">
          <button>
            <BellIcon className="h-6 w-6 text-gray-500" />
          </button>
          <button className="ml-6">
            <img
              className="h-9 2-9 rounded-full object-cover"
              src="img\LuluSquare.JPG"
              alt="Lulu"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default GlobalNavAndSettings;
