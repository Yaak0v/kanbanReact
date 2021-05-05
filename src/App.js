import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="h-screen flex">
      <div className="w-64 px-8 py-4 bg-gray-100">
        <img className="h-9 w-9" src="img\E.svg" alt="Euclid Logo" />
        <nav className='mt-8'>
          <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Issues</h2>
          <a 
          href="#" className='mt-2 flex justify-between items-center px-3 py-1 bg-gray-200 rounded-lg text-small font-medium text-gray-900'>
            <span>All</span>
            <span className="text-xs font-semibold text-gray-700">36</span>

          </a>

        </nav>
      </div>
      <div className="flex-1 min-w-0 bg-white">
        <div className="border-b-2 border-gray-200"></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
