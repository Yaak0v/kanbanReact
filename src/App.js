import logo from "./logo.svg";
import {
  PlusIcon,
  SearchIcon,
  BellIcon,
  MenuIcon,
  ViewBoardsIcon,
} from "@heroicons/react/outline";
import "./App.css";

function App() {
  return (
    <div className="h-screen flex">
      <div className="w-64 px-8 py-4 bg-gray-100 border-r overflow-auto">
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
      <div className="flex-1 min-w-0 flex flex-col bg-white">
        <div className="flex-shrink-0 border-b-2 border-gray-200">
          <header className="px-6">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <div className="flex-1">
                <div className="relative w-64">
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
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <h2 className="text-2xl font-semibold text-gray-900">
                  All Issues
                </h2>
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
          </header>
        </div>
        <div className="flex-1 overflow-auto">
          <main className="p-3 inline-flex">
            <div className="ml-3 flex-shrink-0 p-3 w-80 bg-gray-100 rounded-md">
              <h3 className="text-sm font-medium text-gray-900">Backlog</h3>
              <ul className="mt-2">
                <li>
                  <a href="#" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="rounded-full h-6 w-6"
                          src="img\JS.JPG"
                          alt="JS"
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline mt-2">
                      <div className="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>    </div>
                    <div>
                      <span class="bg-green-100 px-2 py-1 inline-flex items-center rounded">
                        <svg
                          className="h-2 w-2 text-green-500"
                          viewBox="0 0 8 8"
                          fill="currentColor"
                          >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span className="ml-2 text-green-900 text-sm font-medium">Feature Request</span>
                      </span>
                          </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="#" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="rounded-full h-6 w-6"
                          src="img\JS.JPG"
                          alt="JS"
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline mt-2">
                      <div className="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>    </div>
                    <div>
                      <span class="bg-green-100 px-2 py-1 inline-flex items-center rounded">
                        <svg
                          className="h-2 w-2 text-green-500"
                          viewBox="0 0 8 8"
                          fill="currentColor"
                          >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span className="ml-2 text-green-900 text-sm font-medium">Feature Request</span>
                      </span>
                          </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="#" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="rounded-full h-6 w-6"
                          src="img\JS.JPG"
                          alt="JS"
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline mt-2">
                      <div className="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>    </div>
                    <div>
                      <span class="bg-green-100 px-2 py-1 inline-flex items-center rounded">
                        <svg
                          className="h-2 w-2 text-green-500"
                          viewBox="0 0 8 8"
                          fill="currentColor"
                          >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span className="ml-2 text-green-900 text-sm font-medium">Feature Request</span>
                      </span>
                          </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="#" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="rounded-full h-6 w-6"
                          src="img\JS.JPG"
                          alt="JS"
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline mt-2">
                      <div className="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>    </div>
                    <div>
                      <span class="bg-green-100 px-2 py-1 inline-flex items-center rounded">
                        <svg
                          className="h-2 w-2 text-green-500"
                          viewBox="0 0 8 8"
                          fill="currentColor"
                          >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span className="ml-2 text-green-900 text-sm font-medium">Feature Request</span>
                      </span>
                          </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="ml-3 flex-shrink-0 p-3 w-80 bg-gray-100 rounded-md">
              <h3 className="text-sm font-medium text-gray-900">Backlog</h3>
              <ul className="mt-2">
                <li>
                  <a href="#" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="rounded-full h-6 w-6"
                          src="img\JS.JPG"
                          alt="JS"
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline mt-2">
                      <div className="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>    </div>
                    <div>
                      <span class="bg-green-100 px-2 py-1 inline-flex items-center rounded">
                        <svg
                          className="h-2 w-2 text-green-500"
                          viewBox="0 0 8 8"
                          fill="currentColor"
                          >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span className="ml-2 text-green-900 text-sm font-medium">Feature Request</span>
                      </span>
                          </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="#" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="rounded-full h-6 w-6"
                          src="img\JS.JPG"
                          alt="JS"
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline mt-2">
                      <div className="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>    </div>
                    <div>
                      <span class="bg-green-100 px-2 py-1 inline-flex items-center rounded">
                        <svg
                          className="h-2 w-2 text-green-500"
                          viewBox="0 0 8 8"
                          fill="currentColor"
                          >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span className="ml-2 text-green-900 text-sm font-medium">Feature Request</span>
                      </span>
                          </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="#" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="rounded-full h-6 w-6"
                          src="img\JS.JPG"
                          alt="JS"
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline mt-2">
                      <div className="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>    </div>
                    <div>
                      <span class="bg-green-100 px-2 py-1 inline-flex items-center rounded">
                        <svg
                          className="h-2 w-2 text-green-500"
                          viewBox="0 0 8 8"
                          fill="currentColor"
                          >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span className="ml-2 text-green-900 text-sm font-medium">Feature Request</span>
                      </span>
                          </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="#" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="rounded-full h-6 w-6"
                          src="img\JS.JPG"
                          alt="JS"
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline mt-2">
                      <div className="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>    </div>
                    <div>
                      <span class="bg-green-100 px-2 py-1 inline-flex items-center rounded">
                        <svg
                          className="h-2 w-2 text-green-500"
                          viewBox="0 0 8 8"
                          fill="currentColor"
                          >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span className="ml-2 text-green-900 text-sm font-medium">Feature Request</span>
                      </span>
                          </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="#" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="rounded-full h-6 w-6"
                          src="img\JS.JPG"
                          alt="JS"
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline mt-2">
                      <div className="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>    </div>
                    <div>
                      <span class="bg-green-100 px-2 py-1 inline-flex items-center rounded">
                        <svg
                          className="h-2 w-2 text-green-500"
                          viewBox="0 0 8 8"
                          fill="currentColor"
                          >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span className="ml-2 text-green-900 text-sm font-medium">Feature Request</span>
                      </span>
                          </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="#" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="rounded-full h-6 w-6"
                          src="img\JS.JPG"
                          alt="JS"
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline mt-2">
                      <div className="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>    </div>
                    <div>
                      <span class="bg-green-100 px-2 py-1 inline-flex items-center rounded">
                        <svg
                          className="h-2 w-2 text-green-500"
                          viewBox="0 0 8 8"
                          fill="currentColor"
                          >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span className="ml-2 text-green-900 text-sm font-medium">Feature Request</span>
                      </span>
                          </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="#" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="rounded-full h-6 w-6"
                          src="img\JS.JPG"
                          alt="JS"
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline mt-2">
                      <div className="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>    </div>
                    <div>
                      <span class="bg-green-100 px-2 py-1 inline-flex items-center rounded">
                        <svg
                          className="h-2 w-2 text-green-500"
                          viewBox="0 0 8 8"
                          fill="currentColor"
                          >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span className="ml-2 text-green-900 text-sm font-medium">Feature Request</span>
                      </span>
                          </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="ml-3 flex-shrink-0 p-3 w-80 bg-gray-100 rounded-md">
              <h3 className="text-sm font-medium text-gray-900">Backlog</h3>
              <ul className="mt-2">
                <li>
                  <a href="#" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="rounded-full h-6 w-6"
                          src="img\JS.JPG"
                          alt="JS"
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline mt-2">
                      <div className="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>    </div>
                    <div>
                      <span class="bg-green-100 px-2 py-1 inline-flex items-center rounded">
                        <svg
                          className="h-2 w-2 text-green-500"
                          viewBox="0 0 8 8"
                          fill="currentColor"
                          >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span className="ml-2 text-green-900 text-sm font-medium">Feature Request</span>
                      </span>
                          </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="#" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="rounded-full h-6 w-6"
                          src="img\JS.JPG"
                          alt="JS"
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline mt-2">
                      <div className="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>    </div>
                    <div>
                      <span class="bg-green-100 px-2 py-1 inline-flex items-center rounded">
                        <svg
                          className="h-2 w-2 text-green-500"
                          viewBox="0 0 8 8"
                          fill="currentColor"
                          >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span className="ml-2 text-green-900 text-sm font-medium">Feature Request</span>
                      </span>
                          </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="#" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="rounded-full h-6 w-6"
                          src="img\JS.JPG"
                          alt="JS"
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline mt-2">
                      <div className="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>    </div>
                    <div>
                      <span class="bg-green-100 px-2 py-1 inline-flex items-center rounded">
                        <svg
                          className="h-2 w-2 text-green-500"
                          viewBox="0 0 8 8"
                          fill="currentColor"
                          >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span className="ml-2 text-green-900 text-sm font-medium">Feature Request</span>
                      </span>
                          </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="#" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="rounded-full h-6 w-6"
                          src="img\JS.JPG"
                          alt="JS"
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline mt-2">
                      <div className="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>    </div>
                    <div>
                      <span class="bg-green-100 px-2 py-1 inline-flex items-center rounded">
                        <svg
                          className="h-2 w-2 text-green-500"
                          viewBox="0 0 8 8"
                          fill="currentColor"
                          >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span className="ml-2 text-green-900 text-sm font-medium">Feature Request</span>
                      </span>
                          </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="ml-3 flex-shrink-0 p-3 w-80 bg-gray-100 rounded-md">
              <h3 className="text-sm font-medium text-gray-900">Backlog</h3>
              <ul className="mt-2">
                <li>
                  <a href="#" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="rounded-full h-6 w-6"
                          src="img\JS.JPG"
                          alt="JS"
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline mt-2">
                      <div className="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>    </div>
                    <div>
                      <span class="bg-green-100 px-2 py-1 inline-flex items-center rounded">
                        <svg
                          className="h-2 w-2 text-green-500"
                          viewBox="0 0 8 8"
                          fill="currentColor"
                          >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span className="ml-2 text-green-900 text-sm font-medium">Feature Request</span>
                      </span>
                          </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="#" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="rounded-full h-6 w-6"
                          src="img\JS.JPG"
                          alt="JS"
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline mt-2">
                      <div className="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>    </div>
                    <div>
                      <span class="bg-green-100 px-2 py-1 inline-flex items-center rounded">
                        <svg
                          className="h-2 w-2 text-green-500"
                          viewBox="0 0 8 8"
                          fill="currentColor"
                          >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span className="ml-2 text-green-900 text-sm font-medium">Feature Request</span>
                      </span>
                          </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="#" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="rounded-full h-6 w-6"
                          src="img\JS.JPG"
                          alt="JS"
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline mt-2">
                      <div className="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>    </div>
                    <div>
                      <span class="bg-green-100 px-2 py-1 inline-flex items-center rounded">
                        <svg
                          className="h-2 w-2 text-green-500"
                          viewBox="0 0 8 8"
                          fill="currentColor"
                          >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span className="ml-2 text-green-900 text-sm font-medium">Feature Request</span>
                      </span>
                          </div>
                    </div>
                  </a>
                </li>
                <li className="mt-3">
                  <a href="#" className="block p-5 bg-white rounded-md shadow">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        Add discount code to checkout page
                      </p>
                      <span>
                        <img
                          className="rounded-full h-6 w-6"
                          src="img\JS.JPG"
                          alt="JS"
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline mt-2">
                      <div className="text-sm text-gray-600">
                        <time datetime="2019-09-14">Sep 14</time>    </div>
                    <div>
                      <span class="bg-green-100 px-2 py-1 inline-flex items-center rounded">
                        <svg
                          className="h-2 w-2 text-green-500"
                          viewBox="0 0 8 8"
                          fill="currentColor"
                          >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        <span className="ml-2 text-green-900 text-sm font-medium">Feature Request</span>
                      </span>
                          </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
