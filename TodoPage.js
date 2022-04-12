
import React, { useState } from 'react'
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";

export function TodoPage() {

    const [todos, setTodos] = useState([])

    const onCreate = (text) => {
        if (text) {
            const newItem = {
                id: Math.random().toString(36).substr(2, 9),
                task: text,
                complete: false
            }
            setTodos([...todos, newItem])
        }
    }

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    const handleToggle = (id) => {
        setTodos([
            ...todos.map((todo) =>
                todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
            )
        ])
    }

    return (
        <div className="Page" >
            <TodoForm onCreate={onCreate} />
            {todos.map((todo) => {
                return (
                    <TodoList todo={todo} key={todo.id} toggleTask={handleToggle} removeTask={removeTask} />
                )
            })}
        </div>
    )
}