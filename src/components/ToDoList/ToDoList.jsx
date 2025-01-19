import {useState, useEffect} from 'react'


function ToDoList() {

    const [tasks, setTasks] = useState(["Teste", "Comer", "Andar"])
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {

        setNewTask(event.target.value);

    }

    function addTask() {

    }

    function deleteTask(index) {

    }

    function moveTaskUp(index) {

    }

    function moveTaskDown(index) {

    }


    return (
        <div className="to-do-list">
            <h1>To Do List</h1>

            <div>
                <input
                    type="text"
                    placeholder={"Enter a task..."}
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button
                    className="add-button"
                    onClick={addTask}>
                    Add Task
                </button>
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