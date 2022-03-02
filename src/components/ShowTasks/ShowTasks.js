import './ShowTasks.css';
import TaskList from '../TaskList/TaskList';
import TaskFilter from '../TaskFilter/TaskFilter';

function ShowTasks({ 
    taskList, 
    getTasks, 
    totalTaskCount, 
    loggedIn, 
    editTask 
}) {

    return (
        <section className="task-list__container">
            <TaskFilter
                getTasks={getTasks}
                totalTaskCount={totalTaskCount}
            />
            <div className="task-list">
                {taskList.map((task) => {
                    return (
                        <TaskList
                            task={task}
                            key={task.id}
                            loggedIn={loggedIn}
                            editTask={editTask}
                        />
                    )
                })}
            </div>
        </section>
    );
}

export default ShowTasks;