import React, { Component } from 'react';
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from 'react-redux';
import { login } from "../../actions/securityActions";

class Login extends Component {

    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({
                errors: nextProps.errors
            });
        }

        if(nextProps.security.validToken){
            this.props.history.push("/dashboard");
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const loginRequest = {
            username: this.state.username,
            password: this.state.password,
        };

        this.props.login(loginRequest);
    }

    render() {
        const {errors} = this.state;

        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>
                            <form action="dashboard.html" onSubmit={this.onSubmit}>
                                <div className="form-group" style={{marginBottom: "5px"}}>
                                    <input type="text" className={classnames("form-control form-control-lg", {"is-invalid": errors.username})} 
                                           placeholder="Email Address (Username)" 
                                           name="username" value={this.state.value} onChange={this.onChange} />
                                    {errors.fullName && (
                                        <div className="invalid-feedback">{errors.fullName}</div>
                                    )}
                                </div>
                                <div className="form-group" style={{marginBottom: "5px"}}>
                                    <input type="password" className={classnames("form-control form-control-lg", {"is-invalid": errors.password})} placeholder="Password" 
                                           name="password" value={this.state.value} onChange={this.onChange} />
                                    {errors.password && (
                                        <div className="invalid-feedback">{errors.password}</div>
                                    )}
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return ({
        security: state.security,
        errors: state.errors
    });
}

export default connect(mapStateToProps, {login})(Login);
