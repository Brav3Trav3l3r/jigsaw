import "./App.css";
import Dragable from "./components/Dragable";
import Dropable from "./components/Dropable";
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";

function App() {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <Dragable>Drag me</Dragable>;

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped ? draggableMarkup : null}
      <Dropable>{isDropped ? draggableMarkup : "Drop here"}</Dropable>
    </DndContext>
  );

  function handleDragEnd(event) {
    if (event.over?.id === "droppable") {
      setIsDropped(true);
    }
    console.log(event);
  }
}

export default App;
