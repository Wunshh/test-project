import { useState } from 'react';
import './TaskList.css';

function TaskList({ task, loggedIn, editTask }) {
    
    const [status, setSatus] = useState(task.status);
    const [text, setText] = useState(task.text);

    function handleStatusChange(evt) {
        setSatus(evt.target.value);
    }

    function handleTaskChange(evt) {
        setText(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        editTask({
            id: task.id,
            text,
            status
        });
    }

    return (
        <div className="task__card">
            <p className="task__username">User name: {task.username}</p>
            <p className="task__email">Email: {task.email}</p>
            {loggedIn ? 
                <form>
                    <label className="task__label" htmlFor="text">       
                        Text: 
                    </label>
                    <input 
                        className="task__input"
                        id="text"
                        value={text}
                        onChange={handleTaskChange}
                        required
                    />

                    <label className="task__label" htmlFor="status">
                        Status: 
                    </label>
                    <select className="task__select" onChange={handleStatusChange} value={status} id="status">
                        <option className="task__option" value="0">0</option>
                        <option className="task__option" value="1">1</option>
                        <option className="task__option" value="10">10</option>
                        <option className="task__option" value="11">11</option>
                    </select>

                    <button 
                        type="submit" 
                        className="task__edit-button" 
                        onClick={handleSubmit}
                    >
                        Edit
                    </button>
                </form>
                : 
                <div> 
                    <p className="task__text">Text: {task.text}</p>
                    <p className="task__status" title="Only an administrator can edit this task">Status: {task.status}</p>
                </div>
            }
        </div>
    );
}

export default TaskList;