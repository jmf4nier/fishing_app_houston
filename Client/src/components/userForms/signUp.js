import React from "react";
import { Form, Container, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { postUser, showLogin, showSignup } from "../actions/userActions";

class SignUp extends React.Component {
  state = {
    password: null,
    username: null,
    email: null,
    error: null
  };

  handleCancelClick = async () => {
    await this.props.showSignup(false);
    this.props.showLogin(true);
  };

  handleSubmit = async () => {
    const data = this.state;
    await this.props.postUser(data);
    this.setState({
      password: null,
      email: null
    });

    if (this.props.currentUser.error) {
      window.alert(this.props.currentUser.error);
      let form = document.getElementById("signup-form");
      form.reset();
    } else {
      window.alert("Account Created!");
      this.props.showSignup(false);
      this.props.showLogin(true);
    }
  };

  handleChange = e => {
    const info = e.target.value;
    if (e.target.name === "password") {
      this.setState({
        password: info
      });
    } else if (e.target.name === "username") {
      this.setState({
        username: info
      });
    } else if (e.target.name === "email") {
      this.setState({
        email: info
      });
    }
  };

  render() {
    return (
      <Container id="signup-div" style={{ width: "90%", height: "40%" }}>
        <h1
          style={{
            marginTop: "3%",
            color: "white",
            fontFamily: "Times New Roman",
            fontSize: "3vw"
          }}
        >
          Please Sign Up!
        </h1>
        {this.state.error ? <div>{this.state.error}</div> : null}
        <Form
          id="signup-form"
          onSubmit={e => this.handleSubmit(e)}
          style={{ width: "80%", marginLeft: "10%", marginTop: "5%" }}
        >
          <Form.Group style={{ fontSize: "150%" }} widths="equal">
            <Form.Input
              fluid
              name="username"
              label="Username"
              placeholder="Username"
              onChange={event => this.handleChange(event)}
            />
            <Form.Input
              fluid
              name="password"
              label="Password"
              placeholder="Password"
              type="password"
              onChange={event => this.handleChange(event)}
            />
            <Form.Input
              fluid
              name="email"
              label="Email"
              placeholder="Email@email.com"
              onChange={event => this.handleChange(event)}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
          <Button
            onClick={() => this.handleCancelClick()}
            color="red"
            tabIndex={1}
            size="medium"
            style={{ margin: "1%" }}
          >
            Cancel
          </Button>
        </Form>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: state.userReducer.currentUser,
  showSignup: state.userReducer.showSignup,
  showLogin: state.userReducer.showLogin
});
export default connect(
  mapStateToProps,
  { postUser, showLogin, showSignup }
)(SignUp);
