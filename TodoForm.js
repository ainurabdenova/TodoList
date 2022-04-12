import { Button, TextField } from "@mui/material"
import { useState } from "react";


export function TodoForm({ onCreate }) {
    const [text, setText] = useState('')

    const handleChange = e => {
        setText(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        onCreate(text)
        setText('')
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <div>
            <form className="Form" onSubmit={handleSubmit}>
                <TextField className="input" label="TodoL" value={text} onChange={handleChange} onKeyDown={handleKeyPress} />
                <Button className="Button" onClick={() => { onCreate(text) }}>Create</Button>

            </form>
        </div>
    )
}





