import './TaskForm.css';
import useFormValidation from '../../hooks/useFormValidation';

function TaskForm({ onAddTask }) {
    const {values, handleChange, resetForm, errors} = useFormValidation();

    const data = {
        email: values.email,
        text: values.text,
        username: values.username
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        
        onAddTask(data);
        resetForm();
    }

    return (
        <form className="task-form" onSubmit={handleSubmit} id="form">
            <input 
                className="task-form__user-name" 
                minLength="1" 
                maxLength="30"
                type="text"
                id="username" 
                name="username"
                placeholder="Name" 
                onChange={handleChange}
                value={values.username || ''}
                required
            />

            <span className={`task-form_error ${errors.username && "task-form_error_visible"}`}>
                {errors.username || ''}
            </span>

            <input 
                className="task-form__user-email" 
                type="email"
                id="email" 
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={values.email || ''}
                required
            />

            <span className={`task-form_error ${errors.email && "task-form_error_visible"}`}>
                {errors.email || ''}
            </span>

            <textarea 
                className="task-form__text"
                minLength="1" 
                maxLength="30"
                type="text"
                id="text" 
                name="text"
                placeholder="Task"
                onChange={handleChange}
                value={values.text || ''}
                required
            />

            <span className={`task-form_error ${errors.text && "task-form_error_visible"}`}>
                {errors.text || ''}
            </span>

            <button 
                className="task-form_button"
                type="submit"
                required
            >
                Add Task
            </button>
        </form>
    )
}

export default TaskForm;