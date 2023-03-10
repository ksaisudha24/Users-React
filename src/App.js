import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = () => {
  const [userlist, setUserList] = useState([]);
  const addUserHandler = (enteredName, enteredAge) => {
    setUserList((prevState) => {
      return [...prevState, {name: enteredName, age: enteredAge, id: Math.random().toString()}];
    });
  }
  return (
    <React.Fragment>
      <AddUser onAddUserHandler={addUserHandler} />
      <UsersList users={userlist} />
    </React.Fragment>
  );
}

export default App;
