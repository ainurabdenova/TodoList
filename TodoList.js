
export function TodoList({ todo, toggleTask, removeTask }) {

    let time = new Date()
    let timenow = time.toLocaleString("es-CL")

    return (
        <div key={todo.id} className="Todo">
            <div
                className={todo.complete ? "Text strike" : "Text"}
                onClick={() => toggleTask(todo.id)}
            >
                {todo.task}
            </div>
            <div className="Delete" onClick={() => removeTask(todo.id)}>
                <button className="deleteButton">Delete</button>
            </div>
            <div className="time">
                created: {timenow}
            </div>
        </div>
    )
}