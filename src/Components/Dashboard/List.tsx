import React from 'react';

const UserList = ({ users }) => {
  if (users.length === 0) {
    return <p>No users found</p>;
  }

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

// Test cases
const users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
const emptyUsers = [];

export const ListSection = () => {
  return (
    <div>
      <h1>User List</h1>
      <UserList users={users} />
      <h1>Empty List</h1>
      <UserList users={emptyUsers} />
    </div>
  );
};
