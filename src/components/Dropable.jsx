import React from "react";
import { useDroppable } from "@dnd-kit/core";
import styles from './Dropable.module.css'

export default function Dropable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div className={styles.container} ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
