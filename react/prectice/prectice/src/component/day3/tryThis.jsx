import { useState } from "react";

const ToDoList2 = () => {
  let [Input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [onedit, setonedit] = useState({});

  const inputValue = (e) => {
    setInput((prev) => {
      Input = e.target.value;
    });
  };
  const addToDo = () => {
    setList((prev) => {
      return [...prev, { todo: Input, id: new Date().getTime() }];
    });
    setInput("");
  };
  const updateToDo = (e) => {
    const { value } = e.target;
    console.log(value);
    setonedit((prev) => {
      return { ...prev, todo: value };
    });
  };
  const onsave = () => {
    setList((prev) =>
      prev.map((data) => {
        if (data.id === onedit.id) {
          return onedit;
        }
        return data;
      })
    );
    setonedit({});
  };

  return (
    <>
      <input type="text" name="input" value={Input} onChange={inputValue} />
      <button onClick={addToDo}>Add</button>
      <p>To Do</p>
      <div>
        {list.map((data, index) => {
          return onedit.id === data.id ? (
            <div key={data.id}>
              <input type="text" onChange={updateToDo} value={onedit.todo} />
              <button onClick={onsave}>save</button>
            </div>
          ) : (
            <div key={data.id}>
              <span>{data.todo}</span>
              <button onClick={() => setonedit(data)}>edit</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ToDoList2;
