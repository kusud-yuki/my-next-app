import React, { useState } from 'react';

function ListApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('low');
  const [showCompleted, setShowCompleted] = useState(true);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false, priority }]);
      setNewTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const changePriority = (index, newPriority) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].priority = newPriority;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(
    (task) => showCompleted || !task.completed
  );

  return (
    <div>
      <h2>ToDoリストアプリ</h2>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="新しい項目を入力してください"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">低</option>
          <option value="medium">中</option>
          <option value="high">高</option>
        </select>
        <button onClick={addTask}>追加</button>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
          />
          完了済みタスクを表示しない
        </label>
      </div>
      <ul>
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => toggleTask(index)}
          >
            {task.text} (優先度: {task.priority})
            <button onClick={() => deleteTask(index)}>削除</button>
            <select
              value={task.priority}
              onChange={(e) => changePriority(index, e.target.value)}
            >
              <option value="low">低</option>
              <option value="medium">中</option>
              <option value="high">高</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListApp;
