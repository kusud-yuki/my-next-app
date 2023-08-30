import React, { useState, useEffect } from 'react';

function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <div>
      <h1>ユーザーページ</h1>
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

export default UsersPage;

