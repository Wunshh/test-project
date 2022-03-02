import { useEffect, useState } from 'react';
import './App.css';
import * as api from '../../api/TestApi';
import TaskForm from '../TaskForm/TaskForm';
import ShowTasks from '../ShowTasks/ShowTasks';
import Login from '../Login/Login';

function App() {

  const [totalTaskCount, setTotalCount]= useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [task, setTask] = useState([]);
  const delay = 3600 * 24000;

  useEffect(() => {
    api.getTasks()
    .then((res) => {
      setTotalCount(res.message.total_task_count);
      setTask(res.message.tasks);
      if (localStorage.getItem('token')) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    })
  }, []);

  function handleTaskGet(options) {
    api.getAllTasks(options)
    .then((res) => {
      setTask(res.message.tasks);
    });
  }

  function handleTaskSubmit(item) {
    api.addTasks(item)
    .then((newTask) => {
      setTask([...task, newTask.message]);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function removeToken() {
    setTimeout(function() {
      localStorage.removeItem('token');
      setLoggedIn(false);
    }, delay);
  }

  function handleLogin(data) {
    api.login(data)
    .then((res) => {
      if(res.status !== 'error') {
        setLoggedIn(true);
        localStorage.setItem('token', res.message.token); 
        removeToken();
      } else {
        setLoggedIn(false);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleTaskEdit(data) {
    api.taskEdit(data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleSignOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
  }

  return (
    <div className="App">
      <TaskForm 
        onAddTask={handleTaskSubmit}
      />

      <ShowTasks 
        taskList={task} 
        getTasks={handleTaskGet} 
        totalTaskCount={totalTaskCount}
        loggedIn={loggedIn}
        editTask={handleTaskEdit}
      />

      <Login
        signIn={handleLogin}
        signOut={handleSignOut}
      />
    </div>
  );
}

export default App;
