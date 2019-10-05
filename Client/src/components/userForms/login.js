import React from "react";
import { Form, Container, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { loginUser, showSignup, showLogin } from "../actions/userActions";

class Login extends React.Component {
  componentDidMount() {}

  state = {
    password: null,
    email: null,
    loggedIn: null,
    error: "",
    showSignup: false,
    currentUser: ""
  };

  handleShowSignupClick = async () => {
    await this.setState({
      showSignup: !this.state.showSignup
    });
    await this.props.showLogin(false);
    this.props.showSignup(this.state.showSignup);
  };
  handleCancelClick = () => {
    this.props.showLogin(false);
  };

  handleSubmit = async () => {
    const data = this.state;
    await this.props.loginUser(data);
    await this.setState({
      password: null,
      email: null
    });

    if (this.props.currentUser.error) {
      window.alert(this.props.currentUser.error);
      let form = document.getElementById("login-form");
      form.reset();
    } else {
      let name = this.props.currentUser.username;
      const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
      window.alert(`Welcome ${capitalizedName}`);
      this.props.showLogin(false);
    }
  };
  handleChange = e => {
    const info = e.target.value;

    if (e.target.name === "password") {
      this.setState({
        password: info
      });
    } else if (e.target.name === "email") {
      this.setState({
        email: info
      });
    }
  };

  render() {
    return (
      <Container id="login-div" style={{ width: "90%", height: "40%" }}>
        <h1
          style={{
            marginTop: "3%",
            color: "white",
            fontFamily: "Times New Roman",
            fontSize: "3vw"
          }}
        >
          Please Login
        </h1>

        <Form
          id="login-form"
          onSubmit={e => this.handleSubmit(e)}
          style={{ width: "60%", marginLeft: "20%", marginTop: "4%" }}
        >
          <Form.Group style={{ fontSize: "150%" }} widths="equal">
            <Form.Input
              fluid
              name="email"
              label="Registered  Email"
              placeholder="Email@email.com"
              onChange={e => this.handleChange(e)}
            />
            <Form.Input
              fluid
              name="password"
              label="Password"
              placeholder="Password"
              type="password"
              onChange={e => this.handleChange(e)}
            />
          </Form.Group>
          <Form.Button size="medium">Login</Form.Button>
        </Form>
        <Button
          onClick={() => this.handleCancelClick()}
          color="red"
          tabIndex={1}
          size="medium"
          style={{ margin: "1%" }}
        >
          Cancel
        </Button>
        <h4
          style={{ margin: "1%" }}
          onClick={() => this.handleShowSignupClick()}
        >
          <button
            style={{
              backgroundColor: "lightBlue",
              borderRadius: "3%",
              cursor: "pointer",
              textDecoration: "underline"
            }}
          >
            Need to Create an Account?
          </button>
        </h4>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: state.userReducer.currentUser,
  showLogin: state.userReducer.showLogin
});
export default connect(
  mapStateToProps,
  { loginUser, showSignup, showLogin }
)(Login);
