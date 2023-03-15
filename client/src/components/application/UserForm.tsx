import {useState, useEffect} from "react"

const UserForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [company_id, setCompany_id] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState(null)


  useEffect(() => {
    const companyId = localStorage.getItem("companyID");
    const fetchCompany = async () => {
      const response = await fetch(`http://localhost:8080/api/companies?name=${companyId}`);
      const json = await response.json();
      if (response.ok) {
        setCompany_id(json[0].id);
      }
    };
    fetchCompany();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { firstname, lastname, username, email, password, company_id };
    
    const response = await fetch("http://localhost:8080/api/users", {
      method: "POST",
      body: JSON.stringify(user),
      
      headers: { 
        "Content-Type": "application/json" 
      }
    });

    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setFirstname("");
      setLastname("");
      setPassword("");
      setUsername("");
      setEmail("");
      setCompany_id(""); //needs to find the company id through the name with a get request
      setError(null);
      console.log("new user added");
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Create a new User</h3>

      <input
        type="text"
        onChange={(e) => setFirstname(e.target.value)}
        value={firstname}
        placeholder ="Firstname"
      />

      <input
        type="text"
        onChange={(e) => setLastname(e.target.value)}
        value={lastname}
        placeholder ="Lastname"
      />

      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        placeholder ="Username"
      />

      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder ="Email"
      />

      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder ="Password"
      />

      <button>Create User</button>
    </form>
  );
};

export default UserForm;
