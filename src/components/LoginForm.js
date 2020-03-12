import React from "react";
//import { fireAuth } from "./fireApi";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      submitting: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { email, password } = this.state;
    if (onSubmit) {
      this.setState({ submitting: true });
      onSubmit(email, password);
    }
  };
  //handleRegister =


  handleChange = key => e => {
    this.setState({ [key]: e.target.value });
  };

  render() {
    const { email, password, submitting, registering } = this.state;
    return (
      <React.Fragment>
        <Typography variant="h5" style={{ marginBottom: 24 }}>
          Login
        </Typography>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={this.handleSubmit}
        >
          <TextField
            style={{ marginBottom: 24 }}
            variant={"outlined"}
            required
            type={"email"}
            label={"Email"}
            value={email}
            onChange={this.handleChange("email")}
          />
          <TextField
            style={{ marginBottom: 24 }}
            variant={"outlined"}
            required
            type={"password"}
            label={"Password"}
            value={password}
            onChange={this.handleChange("password")}
          />
          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
          >
            {submitting ? (
              <CircularProgress
                style={{ color: "#fff" }}
                color={"inherit"}
                size={16}
              />
            ) : (
              "Submit"
            )}
            </Button>
            <Button
              type={"register"}
              fullWidth
              variant={"contained"}
              color={"primary"}
            >
              {registering ? (
                <CircularProgress
                  style={{ color: "#fff" }}
                  color={"inherit"}
                  size={16}
                />
              ) : (
                "Register"
              )}
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
