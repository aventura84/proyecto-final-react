import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSetUser, useUser } from "../UserContext";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const user = useUser();
  const setUser = useSetUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    const res = await fetch("https://photochat.anxoso.com/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      setStatus("error");
    } else {
      setUser(data);
    }
    

  if (user) {
    return <Navigate to="/" />;
  }
  auth
  .createUserWithEmailAndPassword(email, password)
  .then((authUser) => {
    return authUser.user.updateProfile({
      displayName: username,
    });
  })
  .catch((error) => alert(error.message));
  setOpen(false);
};
const signIn = (event)=>{
event.preventDefault();

auth
.signInWithEmailAndPassword(email,password)
.catch.((error)=>alert(error.message)

  return (
    <main id="signup" className="modal-like">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Username</span>
          <input
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {status === "error" && <p className="error">El usuario no existe</p>}
        <button>Registro</button>
      </form>
      <p>
        Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
    </main>
  );
}

export default Signup;
