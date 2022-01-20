import Form from "./common/form";
import Joi from "joi-browser";
import * as userService from "../services/userService";
import authService from "../services/authService";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../css/form.css";

class ProfileForm extends Form {
  state = {
    data: { name: "", email: "", password: "", address: "" },
    errors: {},
  };
  schema = {
    name: Joi.string().required().label("Name"),
    email: Joi.string().email().required().label("Username"),
    password: Joi.string().required().label("Password").min(5),
    address: Joi.string().required().label("Address").min(5),
  };

  doSubmit = async () => {
    try {
      const response = await userService.update(
        this.state.data,
        this.props.id.id
      );
      toast.success("Successfully changed your credentials!", {
        theme: "dark",
      });
      authService.loginWithJWT(response.headers["x-auth-token"]);
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
    if (!authService.getCurrentUser()) {
      return <Navigate to="/" />;
    }
    return (
      <div className="profileForm form">
        <h1>Profile</h1>
        <form onSubmit={this.handleSumbit}>
          {this.renderInput("name", "Full Name")}
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput(
            "address",
            "Address  (Include all details of your address)"
          )}
          {this.renderButton("Modify your account info")}
        </form>
      </div>
    );
  }
}

export default ProfileForm;
