"use client";
import { useRef, useState, useEffect } from "react";

export default function NoteComp1() {
  const [liHtml, setliHtml] = useState([]); // Always start with empty array
  const [isHydrated, setIsHydrated] = useState(false); // Track hydration state
  const inpref = useRef();

  // Load todos from localStorage after component mounts (client-side only)
  useEffect(() => {
    setIsHydrated(true);
    const saved = localStorage.getItem("todos");
    if (saved) {
      try {
        setliHtml(JSON.parse(saved));
      } catch (error) {
        console.error("Error parsing saved todos:", error);
        localStorage.removeItem("todos"); // Clear corrupted data
      }
    }
  }, []);

  // Save to localStorage whenever liHtml changes (only after hydration)
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("todos", JSON.stringify(liHtml));
    }
  }, [liHtml, isHydrated]);

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
        addList();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  });

  const addList = () => {
    const text = inpref.current.value.trim();
    if (text !== "") {
      const newItem = { completed: false, text };
      setliHtml([...liHtml, newItem]);
      inpref.current.value = "";
    }
  };

  const doneItem = (index) => {
    const newToDo = [...liHtml];
    newToDo[index].completed = !newToDo[index].completed;
    setliHtml(newToDo);
  };

  const deleteItem = (index) => {
    const newToDo = [...liHtml];
    newToDo.splice(index, 1);
    setliHtml(newToDo);
  };

  return (
    <div className="h-dvh flex justify-around items-center p-5 flex-col bg-lime-50">
      <div className="justify-center flex flex-col">
        <h1
          className="text-center text-blue-600 text-5xl"
          style={{ fontFamily: "sans-serif" }}
        >
          To Do List
        </h1>

        <div className="inp">
          <input type="text" placeholder=" " ref={inpref} id="my-input" />
          <label className="label" htmlFor="my-input">
            write your note here
          </label>
          <div className="focus-bg"></div>
        </div>

        <button
          className="squishy squishy-tech m-2"
          style={{ fontFamily: "Gloria Hallelujah" }}
          onClick={addList}
        >
          add
        </button>

        <div className="p-1 pt-5">
          <ul>
            {liHtml.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <li
                  className={item.completed ? "done" : ""}
                  onClick={() => doneItem(index)}
                  style={{ width: "100%", color: "black" }}
                >
                  {item.text}
                </li>
                <p
                  onClick={() => deleteItem(index)}
                  style={{
                    color: "black",
                    cursor: "pointer",
                    alignSelf: "center",
                    height: "100%",
                    margin: "40px",
                    fontSize: "20px",
                  }}
                >
                  &#10006;
                </p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}