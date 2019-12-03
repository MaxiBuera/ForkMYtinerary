import React, { Component } from "react";
import { connect } from "react-redux";
import { validateUser  } from "../../store/action-creators/loginActions";
import LoginComponent from "../../components/LoginComponent/LoginComponent";

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
        username: "",
        password: "",
        error:false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    }

    async handleSubmit(e) {
        
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
          };
        
        await this.props.validateUserNow(user)
        .then(data => {
            if (data === false) {
                alert("You are successfully logged!");
                this.props.history.push("/index");
            } else {
                alert("Incorrect username or password");
            }
        })
        .catch(() => {
            this.setState({error:true});
        });
    }

    handleUsername(e) {
        this.setState({ username: e.target.value });
    }

    handlePassword(e) {
        this.setState({ password: e.target.value });
    }

    render() {
        return (
            <div>
                <LoginComponent
                    handleSubmit={this.handleSubmit}
                    username={this.state.useranme}
                    password={this.state.password}
                    handleUsername={this.handleUsername}
                    handlePassword={this.handlePassword}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        validateUserNow: data => dispatch(validateUser(data))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);