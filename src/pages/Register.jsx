import { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      nav("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Register</Typography>

      <TextField label="Email" fullWidth margin="normal"
        onChange={(e) => setEmail(e.target.value)} />

      <TextField label="Password" type="password" fullWidth margin="normal"
        onChange={(e) => setPassword(e.target.value)} />

      <Button variant="contained" onClick={handleRegister}>
        Register
      </Button>
    </Container>
  );
}
