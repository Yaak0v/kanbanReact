import logo from "./logo.svg";
import { PlusIcon, MenuIcon, ViewBoardsIcon } from "@heroicons/react/outline";
import SideNav from "./Components/SideNav";
import GlobalNavAndSettings from "./Components/GlobalNavAndSettings";
import KanbanFeature from "./Components/KanbanFeature";
import "./App.css";

function App() {
  return (
    <div className="h-screen flex">
      <SideNav />
      <div className="flex-1 min-w-0 flex flex-col bg-white">
        <GlobalNavAndSettings />
        <KanbanFeature />
        </div>
      </div>
  );
}

export default App;
