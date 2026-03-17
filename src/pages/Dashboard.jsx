import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Button, Typography } from "@mui/material";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <Typography variant="h5">
        Welcome {user?.email}
      </Typography>

      <Button variant="contained" onClick={logout}>
        Logout
      </Button>
    </div>
  );
}
