import { useEffect, useState } from 'react';
import Form from './components/Form/Form';
import UserList from './components/UserList/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const handleFetch = () => {
    try {
      fetch('https://reqres.in/api/users')
        .then((response) => {
          return response.json()
        }).then((users) => {
          console.log(users.data);
          setUsers(users.data);
        })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => handleFetch(), []);

  const showUsers = (user) => {
    setUsers((users) => [...users, user]);
  }

  return (
    <div>
      <header className="header">
        <h1>CRA - Working with data</h1>
      </header>
      <div className='container'>
        <Form showUsers={showUsers} />
        <UserList users={users} />
      </div>
    </div>
  );
}

export default App;
