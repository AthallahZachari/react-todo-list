import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCheck, faX } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, onDelete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDone, setIsDone] = useState(true);

  const toggleList = () => {
    setIsDone(!isDone);
  };

  const toggleDetail = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="todo-list" style={{ backgroundColor: task.bgColor }}>
      <section className="todo-list-title">
        <h1 className={isDone ? "" : "strikethrough"}>{task.title}</h1>
        <section className="button-group">
          <div className="todo-action" onClick={toggleDetail}>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <div className="todo-action-delete" onClick={onDelete} >
            <FontAwesomeIcon icon={faX} />
          </div>
        </section>
      </section>
      {isVisible && (
        <section className="description">
          <p className={isDone ? "" : "strikethrough"}>{task.desc}</p>
          <hr
            style={{
              border: "1px solid rgb(70, 70, 70)",
              width: "100%",
              margin: "15px 0 10px 0",
            }}
          />
          <section className="action-wrapper">
            <span className="delete" onClick={toggleList}>
              <p>Mark as Done</p>
              <FontAwesomeIcon icon={faCheck} />
            </span>
          </section>
        </section>
      )}
    </div>
  );
};
