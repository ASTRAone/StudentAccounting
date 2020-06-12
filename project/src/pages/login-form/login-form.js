import React, { Component } from 'react';

import './login-form.css';

import {connect} from 'react-redux';
import {postLogin} from '../../_actions/applications';

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            login: '',
            pass: '',
            isPrompt: false
        }
    }

    // Изменить логин
    onChangeLogin = (e) => {
        this.setState({
            login: e.target.value
        });
    };

    // Изменить пароль
    onChangePass = (e) => {
        this.setState({
            pass: e.target.value
        });
    };

    // Войти в систему
    singInSistem = (e) => {
        e.preventDefault();

        if (this.state.login.length !== 0 && this.state.pass.length !== 0) {
            console.log(this.state);

            this.props.onChangeRoles(this.state.login)

            this.setState({
                login: '',
                pass: '',
                isPrompt: false
            });

        } else {
            this.setState({
                isPrompt: true
            });
        }
    };

    render() {
        let visiblePrompt = " none";

        if (this.state.isPrompt === true) {
            visiblePrompt = "";
        }

        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-t-50 p-b-90">
                        <form className="login100-form validate-form flex-sb flex-w">
                            <span className="login100-form-title p-b-51">
                                Login
                            </span>

                            
                            <div className="wrap-input100 validate-input m-b-16" data-validate = "Username is required">
                                <input 
                                    className="input100" 
                                    type="text" 
                                    name="username" 
                                    placeholder="Username" 
                                    onChange={this.onChangeLogin}
                                    value={this.state.login}/>
                                <span className="focus-input100"></span>
                            </div>
                            
                            
                            <div className="wrap-input100 validate-input m-b-16" data-validate = "Password is required">
                                <input 
                                    className="input100" 
                                    type="password" 
                                    name="pass" 
                                    placeholder="Password" 
                                    onChange={this.onChangePass}
                                    value={this.state.pass}/>
                                <span className="focus-input100"></span>
                            </div>
                            
                            <div className="flex-sb-m w-full p-t-3 p-b-24">
                                {/* <div class="contact100-form-checkbox">
                                    <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                                    <label class="label-checkbox100" for="ckb1">
                                        Remember me
                                    </label>
                                </div> */}

                                {/* <div>
                                    <a href="#" class="txt1">
                                        Forgot?
                                    </a>
                                </div> */}
                            </div>

                            <div className="container-login100-form-btn m-t-17">
                                <button 
                                    className="login100-form-btn"
                                    onClick={this.singInSistem}> 
                                        Войти   
                                        {/* <Link to="/applications"></Link> */}
                                </button>
                                <p className={`container__prompt${visiblePrompt}`}>
                                    Заполните все поля!
                                </p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        studentsList: state.applications.studentsList
    }
};

const mapDispatchToProps = (dispatch => {
    return {
        postLogin
    }
});

export default connect(mapStateToProps, mapDispatchToProps())(LoginForm);