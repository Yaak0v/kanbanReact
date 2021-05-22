import React from 'react'
import {
    MenuIcon,
    ViewBoardsIcon,
    PlusIcon,
  } from "@heroicons/react/outline";

function TopArea() {
    return (
        <div>
             <div className="flex items-center justify-between px-6 py-2">
        <div className="flex items-center">
          <h2 className="text-2xl font-semibold text-gray-900">All Issues</h2>
          <div className="ml-6 flex items-center">
            <span className="rounded-full border-2 border-white">
              <img
                className="h-6 w-6 rounded-full object-cover"
                src="img\JS.JPG"
                alt="JS"
              />
            </span>
            <span className="-ml-2 rounded-full border-2 border-white">
              <img
                className="h-6 w-6 rounded-full object-cover"
                src="img\RG.JPG"
                alt="RG"
              />
            </span>
            <span className="-ml-2 rounded-full border-2 border-white">
              <img
                className="h-6 w-6 rounded-full object-cover"
                src="img\BD.JPG"
                alt="BD"
              />
            </span>
            <span className="-ml-2 rounded-full border-2 border-white">
              <img
                className="h-6 w-6 rounded-full object-cover"
                src="img\RG2.JPG"
                alt="RG2"
              />
            </span>
          </div>
        </div>
        <div className="flex">
          <span className="inline-flex p-1 border bg-gray-200 rounded-md">
            <button className="px-2 py-1 rounded">
              <MenuIcon className="h-6 w-6 text-gray-600" />
            </button>
            <button className="px-2 py-1 bg-white rounded shadow">
              <ViewBoardsIcon className="h-6 w-6 text-gray-600" />
            </button>
          </span>
          <button className="flex items-center ml-5 px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700">
            <PlusIcon className="h-5 w-5 text-white" />
            <span className="ml-1">New Issue</span>
          </button>
        </div>
      </div>
      <div className="flex-shrink-0 border-b-2 border-gray-200"></div>
        </div>
    )
}

export default TopArea
