import React, { useState } from 'react';
import styles from '@/styles/App.module.css'; 
import ListApp from './ListApp';
import Link from 'next/link';

export default function Home() {
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
      <ListApp/>
      <h2>Reactアプリケーション</h2>
      <p>ホームページのコンテンツです。</p>
      
      <Link href="/UserApp">
        ユーザーページへ
      </Link>
    </div>
  );
}
