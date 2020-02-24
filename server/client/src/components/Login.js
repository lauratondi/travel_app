import React, { Component } from 'react'
import { connect } from 'react-redux';
import Footer from './Footer';
import { fetchLogin } from '../store/actions/loginActions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            passwrod: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchLogin(this.state.email, this.state.password);
    }

    render() {
        return (
            <div className="form-container">

                <h3><center>Login</center></h3>

                <form onSubmit={this.handleSubmit}>

                    <div className="email">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id='email' onChange={this.handleChange} />
                    </div>

                    <div className="password">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>

                    <div className="checkbox2">
                        <label>Remember me</label>
                        <input id="RememberMe" type="checkbox" />
                    </div>

                    <center><button>OK</button></center>

                </form>

                <Footer />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLogin: (email, password) => dispatch(fetchLogin(email, password))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
