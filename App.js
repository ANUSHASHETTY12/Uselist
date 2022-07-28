import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHAndler = (uName, uAge) => {
    setUsersList((prevUserlist) => {
      return [...prevUserlist, { name: uName, age: uAge }];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHAndler} />
      <UserList users={usersList} />
    </Fragment>
  );
}

export default App;
