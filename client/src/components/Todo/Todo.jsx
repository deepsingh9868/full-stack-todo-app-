import { React, useState, useEffect } from 'react';
import { FaTasks, FaEdit, FaTrashAlt, FaCheckCircle } from "react-icons/fa";
import "./Todo.css";


const Todo = () => {
    const [tasks, setTasks] = useState([
        "sample task"
    ]);
    const [task, setTask] = useState("");
    const [error, setError] = useState("");
    const [edit, setEdit] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [todo, setTodo] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        if (task) {
            setTasks([...tasks, task]);
            setTask("");
            setError("");
        }
        else {
            setError("Type Something to add");
            return;
        }
    }

    const changeHandler = (e) => {
        if (e.target.value.length == 0) {
            setTask("");
            setError("");
            return;
        }
        else {
            setTask(e.target.value);
            setError("");
        }
    }


    const handleDelete = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }

    const handleEdit = (index) => {
        // const edited = tasks.find((item) => {
        //     return item.id === index;
        // });
        // setTask(edited.name);
        // setEdit(index);
        setDisabled(!disabled);
    }

    // useEffect(() => {
    //     localStorage.setTasks("todo-task", JSON.stringify(tasks));
    // }, [tasks])

    const setUpdate = (key) => {
        // const item = tasks.find((task) => {
        //     return task.id === key;
        // })
        // setTask(item.name);
    }
    return (
        <>
            <div className="todo-main-container">
                <div className="todo-container">
                    <h1 className="todo-title">Task Lists <FaTasks /></h1>
                    <form onSubmit={submitHandler}>
                        <input
                            className="todo-input"
                            type="text"
                            placeholder="Add new task..."
                            onChange={changeHandler}
                            value={task}
                            autoComplete="off"
                        />
                        {error && <label className="error">{error}</label>}
                    </form>
                    {tasks.length > 0 && (
                        <ul className="todo-items">
                            {
                                tasks.map((task, index) => (
                                    <li key={index} className="lists">
                                        <input
                                            className="todo-name"
                                            type="text"
                                            disabled={disabled}
                                            key={index}
                                            value={task.trim()}
                                            onchange={setUpdate(index)}
                                        />
                                        {/* {task.trim()}
                                        </input> */}
                                        <span className="todo-icon todo-edit"
                                            style={{ marginRight: "10px" }}
                                            onClick={() => handleEdit(index)}>
                                            {!disabled ? <FaCheckCircle /> : <FaEdit />}
                                        </span>
                                        <span className="todo-icon todo-delete"
                                            onClick={() => handleDelete(index)}>
                                            <FaTrashAlt />
                                        </span>
                                    </li>
                                ))
                            }
                        </ul>
                    )}
                </div>
            </div>
        </>
    )
}

export default Todo
