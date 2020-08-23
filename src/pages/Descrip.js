import React, { useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { initialListState } from "../recoil/globalState";
import { useParams } from "react-router-dom";

const Descrip = () => {
  const [text, setText] = useState("");
  const initialValue = useRecoilValue(initialListState);
  const setTasks = useSetRecoilState(initialListState);

  const { id } = useParams();

  const found = initialValue.find((item) => item.id === id);

  const EditItem = (event) => {
    event.preventDefault();
    if (text) {
      setTasks(
        initialValue.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              description: text
            };
          }
          return task;
        })
      );
      setText("");
    } else {
      let letter = window.confirm("Do you want to keep this Empty?");
      if (letter === true) {
        console.log(letter);
        setTasks(
          initialValue.map((task) => {
            if (task.id === id) {
              return {
                ...task,
                description: ""
              };
            }
            return task;
          })
        );
        setText("");
      }
    }
  };

  //toggling priorities of the tasks....
  const selectBoxHandler = (event) => {
    event.preventDefault();
    setTasks(
      initialValue.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            priority: event.target.value
          };
        }
        return task;
      })
    );
  };

  //useEffects --> on each renders

  useEffect(() => {
    window.localStorage.setItem(
      "adv-tasks-recoil",
      JSON.stringify(initialValue)
    );
  }, [initialValue]);

  return (
    <>
      <div className="jumbotron">
        <form>
          <h2>Title : {found.title}</h2>
          <h5>
            Status : {found.isComplete === true ? "Completed" : "Not Completed"}
          </h5>
          <h5>
            Priority :
            <select
              class="form-control"
              value={found.priority}
              onChange={selectBoxHandler}
            >
              <option value="high">high</option>
              <option value="medium">medium</option>
              <option value="low">low</option>
            </select>
          </h5>
          <h5>
            Description :{" "}
            <span className="text-primary">{found.description}</span>
          </h5>
          <hr />

          <div class="row">
            <div class="col">
              <textarea
                className="form-control"
                value={text}
                onChange={(event) => setText(event.target.value)}
                rows="3"
                placeholder="Edit the description of this task..."
              ></textarea>
            </div>
            <div class="col">
              <button
                className="btn btn-dark font-weight-bold"
                onClick={EditItem}
              >
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Descrip;
