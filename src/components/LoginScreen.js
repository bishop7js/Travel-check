import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import userData from "../config/Data.json";

const defaultTheme = createTheme();

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function SignIn() {
  const [validateTextEmail, setValidateTextEmail] = React.useState("");
  const [validateTextPassword, setValidateTextPassword] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [authenticationText, setAuthenticationText] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    if (data.get("email") == "") {
      setValidateTextEmail("Please enter the email address");
    } else {
      setValidateTextEmail("");
    }
    if (data.get("password") == "") {
      setValidateTextPassword("Please enter the password");
    } else {
      setValidateTextPassword("");
    }

    let isUserAuthenticated = false;
    userData.users.forEach((user) => {
      if (
        data.get("email") === user.username &&
        data.get("password") === user.password
      ) {
        isUserAuthenticated = true;
        return;
      }
    });

    if (isUserAuthenticated) {
      setAuthenticationText("Login successful");
      window.location.href = "/users";
      handleOpen();
    } else {
      setAuthenticationText("Login failed");
      handleOpen();
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">{authenticationText}</h2>
          <Button onClick={handleClose}>OK</Button>
        </Box>
      </Modal>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            {validateTextEmail ? (
              <p style={{ fontSize: "12px", color: "red" }}>
                {validateTextEmail}
              </p>
            ) : null}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {validateTextPassword ? (
              <p style={{ fontSize: "12px", color: "red" }}>
                {validateTextPassword}
              </p>
            ) : null}

            <Button
              type="submit"
              onClick={handleOpen}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
