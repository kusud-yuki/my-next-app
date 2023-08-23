import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>ToDoリスト</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="新しいタスクを入力してください"
        />
        <button onClick={addTask}>追加</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
            onClick={() => toggleTask(index)}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));
