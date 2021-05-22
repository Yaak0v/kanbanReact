import React from "react";
import {
  PlusIcon,
  SearchIcon,
  BellIcon,
  MenuIcon,
  ViewBoardsIcon,
  MenuAlt2Icon,
} from "@heroicons/react/outline";

function SideNav() {
  return (
    <div className="h-screen flex">
      <div className="hidden lg:block w-64 px-8 py-4 bg-gray-100 border-r overflow-auto">
        <img className="h-9 w-9" src="img\E.svg" alt="Euclid Logo" />
        <nav className="mt-8">
          <h3 className="px-3 text-xs font-semibold text-gray-600 uppercase tracking-wide">
            Issues
          </h3>
          <div className="mt-2">
            <a
              href="#"
              className="flex justify-between items-center px-3 py-2 bg-gray-200 rounded-lg"
            >
              <span className="text-sm font-medium text-gray-900">All</span>
              <span className="text-xs font-semibold text-gray-700">36</span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center px-3 py-2  rounded-lg"
            >
              <span className="text-sm font-medium text-gray-700">
                Assigned to me
              </span>
              <span className="text-xs font-semibold text-gray-700">2</span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center px-3 py-2  rounded-lg"
            >
              <span className="text-sm font-medium text-gray-700">
                Created by me
              </span>
              <span className="text-xs font-semibold text-gray-700">1</span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center px-3 py-2  rounded-lg"
            >
              <span className="text-sm font-medium text-gray-700">
                Archived
              </span>
              <span className="text-xs font-semibold text-gray-700">0</span>
            </a>
          </div>
          <h3 className="px-3 mt-8 text-xs font-semibold text-gray-600 uppercase tracking-wide">
            Tags
          </h3>
          <div className="mt-2">
            <a
              href="#"
              className="flex justify-between items-center px-3 py-2  rounded-lg"
            >
              <span className="text-sm font-medium text-gray-700">Bug</span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center px-3 py-2  rounded-lg"
            >
              <span className="text-sm font-medium text-gray-700">
                Feature Request
              </span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center px-3 py-2  rounded-lg"
            >
              <span className="text-sm font-medium text-gray-700">
                Marketing
              </span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center px-3 py-2  rounded-lg"
            >
              <span className="text-sm font-medium text-gray-700">v2.0</span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center px-3 py-2  rounded-lg"
            >
              <span className="text-sm font-medium text-gray-700">
                Enhancement
              </span>
            </a>
            <a
              href="#"
              className="flex justify-between items-center px-3 py-2  rounded-lg"
            >
              <span className="text-sm font-medium text-gray-700">Design</span>
            </a>
          </div>
          <button className="flex items-center px-3 mt-2 text-sm font-medium text-gray-600">
            <PlusIcon className="h-5 w-5 text-gray-500" />
            <span className="ml-1">New Project</span>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default SideNav;
