import React, { useState } from 'react';

import AddUser from './component/Users/AddUser';
import UsersList from './component/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge, uCollege) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, college: uCollege ,id: Math.random().toString()},
      ];
    });
  };

  return (
    // method-1
    // <React.Fragment>
    //   <AddUser onAddUser={addUserHandler} />
    //   <UsersList users={usersList} />
    // </React.Fragment>

    // method-2
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;