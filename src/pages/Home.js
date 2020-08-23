import React, { useState, useEffect } from "react";
import { IconButton } from "@material-ui/core";
import routes from "../routes/routes";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { initialListState, filteredTodoListState } from "../recoil/globalState";
import { v4 } from "uuid";
import CurrentStats from "../Stats";
import "./homeStyle.css";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import TodoListFilters from "../FilterCompleted";

const Home = () => {
  const [input, setInput] = useState("");

  let [tasks, setTasks] = useRecoilState(initialListState);

  tasks = useRecoilValue(filteredTodoListState);

  const addItem = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        id: v4(),
        title: input,
        isComplete: false,
        description: "",
        priority: "high"
      }
    ]);
    setInput("");
  };

  const deleteItem = (id) => {
    console.log("whats ", id);
    setTasks((allOldTasks) => {
      return allOldTasks.filter((arr, indexValue) => {
        return indexValue !== id;
      });
    });
  };

  const toggleStatus = (selectedTaskIndex) => {
    setTasks(
      tasks.map((task, taskIndex) => {
        if (taskIndex === selectedTaskIndex) {
          console.log("matched");
          return {
            ...task,
            isComplete: !task.isComplete,
            priority: "low"
          };
        }
        console.log(task);
        return task;
      })
    );
  };

  //useEffects --> on each renders

  useEffect(() => {
    window.localStorage.setItem("adv-tasks-recoil", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div>
        <CurrentStats />
      </div>

      <div className="text-center">
        <form onSubmit={addItem}>
          <div className="form-row align-items-center">
            <div className="col-auto">
              <input
                type="text"
                value={input}
                className="form-control mb-2"
                onChange={(event) => setInput(event.target.value)}
                placeholder="Add new item"
              />
            </div>
            <div className="col-auto">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={addItem}
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <TodoListFilters />
      </div>
      <hr />
      <div>
        <ul className="list-group list-group-flush">
          {tasks.map((task, taskIndex) => {
            const checkBoxHandler = () => toggleStatus(taskIndex);
            const deleteitemHandler = () => deleteItem(taskIndex);

            return (
              <div
                className="card shadow-lg bg-white rounded width-div"
                key={task.id}
              >
                <div className="card-body">
                  <div className="d-flex bd-highlight">
                    <div>
                      <input
                        type="checkbox"
                        checked={task.isComplete}
                        onChange={checkBoxHandler}
                      />
                    </div>
                    <div className="p-1 flex-grow-1 bd-highlight">
                      <Link to={routes.description.replace(":id", task.id)}>
                        <h5>{task.title}</h5>{" "}
                      </Link>
                    </div>
                    <div className="p-1 bd-highlight">
                      <h4>
                        <span
                          className={
                            "badge " +
                            (task.priority === "high"
                              ? "badge-danger"
                              : "badge-warning")
                          }
                        >
                          {task.priority}
                        </span>
                      </h4>
                    </div>
                    <div className="p-1 bd-highlight">
                      <IconButton
                        aria-label="Delete"
                        onClick={deleteitemHandler}
                      >
                        <DeleteForeverIcon />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Home;
