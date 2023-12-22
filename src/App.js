import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUser } from "./features/User";

function App() {
  const userList = useSelector((state) => state?.users?.value);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUserName, setNewUserName] = useState("");

  return (
    <div className="App">
      <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id:
                  userList.length > 0
                    ? userList[userList.length - 1].id + 1
                    : 1,
                name,
                username,
              })
            );
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList?.map((user) => (
          <div>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
            <input
              type="text"
              placeholder="New username..."
              onChange={(e) => setNewUserName(e.target.value)}
            />
            <button
              onClick={() => {
                dispatch(
                  updateUser({
                    id: user.id,
                    username: newUserName,
                  })
                );
              }}
            >
              update User
            </button>
            <button
              onClick={() => {
                dispatch(
                  deleteUser({
                    id: user.id,
                  })
                );
              }}
            >
              delete User
            </button>
            ;
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
