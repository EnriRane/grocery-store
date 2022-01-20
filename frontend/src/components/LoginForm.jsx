import React from "react";
import Form from "./common/form";
import authService from "../services/authService";
import "../css/form.css";
import { Navigate } from "react-router-dom";
class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await authService.login(data.email, data.password);
      window.location = "/";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = error.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    if (authService.getCurrentUser()) {
      return <Navigate to="/" />;
    }
    return (
      <div className=" loginForm form">
        <h1>Login Form</h1>
        <form onSubmit={this.handleSumbit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
