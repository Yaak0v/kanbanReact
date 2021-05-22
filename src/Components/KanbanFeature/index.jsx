import React from "react";
import { MenuIcon, ViewBoardsIcon, PlusIcon } from "@heroicons/react/outline";
import TopArea from "./TopArea";
import KanbanColumn from "./KanbanColumn";

function KanbanFeature() {
  return (
    <>
      <TopArea />
      <div className="flex-1 overflow-auto">
        <main className="p-3 inline-flex h-full overflow-hidden">
          <KanbanColumn />
          <KanbanColumn />
          <KanbanColumn />
          <KanbanColumn />
        </main>
      </div>
    </>
  );
}

export default KanbanFeature;
