import React from "react";
import styles from "./Dragable.module.css";
import { useDraggable } from "@dnd-kit/core";

export default function Dragable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
      <h1>hello</h1>
    </button>
  );
}
