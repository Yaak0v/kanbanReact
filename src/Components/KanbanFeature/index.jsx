import React, { useState } from "react";
import { MenuIcon, ViewBoardsIcon, PlusIcon } from "@heroicons/react/outline";
import TopArea from "./TopArea";
import uuid from "uuid/dist/v4";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const itemsFromBackend1 = [
  {
    id: uuid(),
    date: "Sep 14",
    action: "Add discount code to checkout page",
    imgSrc: "img/JS.JPG",
    actionType: "Feature Request",
  },
  {
    id: uuid(),
    date: "Sep 15",
    action: "Build Ryan's House",
    imgSrc: "img/JS.JPG",
    actionType: "Feature Request",
  },
  {
    id: uuid(),
    date: "Sep 16",
    action: "Walk LuLu",
    imgSrc: "img/JS.JPG",
    actionType: "Feature Request",
  },
  {
    id: uuid(),
    date: "Sep 17",
    action: "Lift some weights",
    imgSrc: "img/JS.JPG",
    actionType: "Feature Request",
  },
  {
    id: uuid(),
    date: "Sep 18",
    action: "Costa Rica",
    imgSrc: "img/JS.JPG",
    actionType: "Feature Request",
  },
  {
    id: uuid(),
    date: "Sep 19",
    action: "PRODUCT PRODUCT PRODUCT",
    imgSrc: "img/JS.JPG",
    actionType: "Feature Request",
  },
];

const columnsFromBackend = {
  [uuid()]: {
    name: "Requested",
    items: itemsFromBackend1,
  },
  [uuid()]: {
    name: "To Do",
    items: [],
  },
  [uuid()]: {
    name: "In Progress",
    items: [],
  },
  [uuid()]: {
    name: "Done",
    items: [],
  },
};

const onDragEnd = (result, columns, setColumns) => {
  console.log(result);
  if (!result.destination) return;
  const { source, destination } = result;
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function KanbanFeature() {
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <>
      <TopArea />
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        <div className="flex-1 overflow-auto">
          <main className="p-3 inline-flex h-full overflow-hidden">
            {Object.entries(columns).map(([id, column]) => {
              return (
                <Droppable droppableId={id} key={id}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={`ml-3 flex-shrink-0 flex flex-col w-80 rounded-md ${
                          snapshot.isDraggingOver
                            ? "bg-gray-200"
                            : "bg-gray-100"
                        }`}
                      >
                        <div className="flex-1 min-h-0 overflow-y-auto">
                          <h3 className="flex-shrink-0 pb-1 pt-3 px-3 text-sm font-medium text-gray-700">
                            {column.name}
                          </h3>
                          <div className="pt-1 pb-3 px-3">
                            {column.items.map((item, index) => {
                              return (
                                <Draggable
                                  key={item.id}
                                  draggableId={item.id}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          userSelect: "none",
                                          ...provided.draggableProps.style,
                                        }}
                                        href="#"
                                        className="block p-5 mb-3 bg-white rounded-md shadow"
                                      >
                                        <div className="flex justify-between">
                                          <p className="text-sm font-medium text-gray-900 leading-snug">
                                            {item.action}
                                          </p>
                                          <span>
                                            <img
                                              className="rounded-full h-6 w-6"
                                              src={item.imgSrc}
                                              alt="JS"
                                            />
                                          </span>
                                        </div>
                                        <div className="flex justify-between items-baseline mt-2">
                                          <div className="text-sm text-gray-600">
                                            <time>{item.date}</time>
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
                                                {item.actionType}
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  }}
                </Droppable>
              );
            })}
          </main>
        </div>
      </DragDropContext>
    </>
  );
}

export default KanbanFeature;
