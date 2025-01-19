import {useState} from 'react';
import useLocalStorage from "./useLocalStorage";
import Swal from "sweetalert";

function ToDoList() {

    const [tasks, setTasks] = useLocalStorage("tasks", []);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() === "") {
            Swal("Oops!", "You cannot add an empty task!", "warning"); // Alert for empty task
            return;
        }
        setTasks((t) => [...t, newTask]);
        setNewTask("");
    }

    function deleteTask(index) {
        Swal({
            title: "Are you sure?",
            text: "Do you want to delete this task?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                const updatedTasks = tasks.filter((_, i) => i !== index);
                setTasks(updatedTasks);
                Swal("Deleted!", "Your task has been deleted.", "success");
            }
        });
    }

    function deleteAllTasks() {
        Swal({
            title: "Are you sure?",
            text: "Do you want to delete all tasks?",
            icon: "warning",
            buttons: ["Cancel", "Delete All"],
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                setTasks([]);
                Swal("Deleted!", "All tasks have been deleted.", "success");
            }
        });
    }


    function moveTaskUp(index) {

        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    function moveTaskDown(index) {

        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    return (
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div className="input-div">
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <div className="button-group">
                    <button
                        className="add-button"
                        onClick={addTask}>
                        Add Task
                    </button>
                    <button
                        className="delete-all-button"
                        onClick={deleteAllTasks}>
                        Delete All
                    </button>
                </div>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>

                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}>
                            UP
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskDown(index)}>
                            DOWN
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default ToDoList