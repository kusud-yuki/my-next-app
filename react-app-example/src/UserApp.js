import React, { useState, useEffect } from 'react';

function UserApp() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <div>
      <h2>ユーザーアプリ</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <img src={user.picture.thumbnail} alt={`User ${index}`} />
            <p>
              {user.name.first} {user.name.last}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserApp;
