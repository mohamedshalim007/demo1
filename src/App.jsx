 import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  const addUser = async () => {
    const res = await fetch("http://localhost:5000/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, age }),
    });
    const data = await res.json();
    alert(data.message);
    fetchUsers();
  };

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();
    setUsers(data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Insert Name & Age into MongoDB</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={addUser}>Add User</button>

      <h2>User List</h2>
      <button onClick={fetchUsers}>Refresh</button>
      <ul>
        {users.map((u, i) => (
          <li key={i}>{u.name} - {u.age}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
