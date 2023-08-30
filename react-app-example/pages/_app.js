import React, { useState } from 'react';
import styles from '@/styles/App.module.css'; 
import ListApp from './ListApp';
import UserApp from './UserApp';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [count, setCount] = useState(0);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className={styles.App}>
      <h1 className={styles.heading}>カウンターアプリ</h1>
      <p>Count: {count}</p>
      <button className={styles.btn} onClick={increment}>増加</button>
      <button className={styles.btn} onClick={decrement}>減少</button>
      <h2>ToDoリスト</h2>
      <div>
        <input
          className={styles.inputField}
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="新しいタスクを入力してください"
        />
        <button className={styles.btn} onClick={addTask}>追加</button>
      </div>
      <ul className={styles.list}>
          {tasks.map((task, index) => (
          <li className={styles.li} key={index}>
            {task}1
            <button className={styles.btn} onClick={() => deleteTask(index)}>削除</button>
          </li>
        ))}
      </ul>
      <h2>Reactアプリケーション</h2>
      <ListApp />
      <UserApp />
    </div>
  );
}

export default App;