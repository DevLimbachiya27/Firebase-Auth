import { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      nav("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Login</Typography>

      <TextField label="Email" fullWidth margin="normal"
        onChange={(e) => setEmail(e.target.value)} />

      <TextField label="Password" type="password" fullWidth margin="normal"
        onChange={(e) => setPassword(e.target.value)} />

      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>

      <p>Don't have account? <Link to="/register">Register</Link></p>
    </Container>
  );
}
