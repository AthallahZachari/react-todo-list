import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const colorOptions = ["#EBC450", "#B5EBBF", "#EBD89E", "#8698EB", "#EB91A1"];

export const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [bgColor, setBgColor] = useState(colorOptions[0]);
  const [error, setError] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !desc) {
      setError("Notes nya jangan dikosongin dong :)");
      setIsActive(!isActive);
      return;
    }

    addTodo({ title, desc, bgColor });

    setTitle("");
    setDesc("");
    setBgColor(colorOptions[0]);
    setIsActive(false);
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <div className="wrapper">
        <section className="input-wrapper">
          <input
            type="text"
            value={title}
            className="todo-input"
            placeholder="Title..."
            onChange={(e) => setTitle(e.target.value)}
          />
          <hr style={{ border: "1px solid lightgray", width: "90%" }} />
          <textarea
            name="todo-desc"
            value={desc}
            id="todo-desc"
            cols="30"
            rows="12"
            placeholder="What you're gonna do?..."
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </section>
        {isActive && <p>{error}</p>}
      </div>
      <section className="button-wrapper">
        <button type="submit" className="todo-btn">
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <div className="color-options">
          {colorOptions.map((color) => (
            <button
              key={color}
              type="button"
              style={{ backgroundColor: color }}
              className={`color-btn ${color === bgColor ? "selected" : ""}`}
              onClick={() => setBgColor(color)}
            ></button>
          ))}
        </div>
      </section>
    </form>
  );
};
