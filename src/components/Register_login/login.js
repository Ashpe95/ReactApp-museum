import React, {Component} from 'react';
import MyButton from '../utils/button';
import MyGroup from "../utils/group";
import MyForm from "../utils/form";

class Login extends Component {

    render() {
        return (
            <div className="page_wrapper">
                <div className="container">
                    <div className="register_login">
                        <div className="login-image">
                        </div>
                        <MyGroup
                            type="login"
                            title="YOUR ART MUSEUM"
                            address="151 3rd St San Francisco, CA 94103"
                        />
                        <form>
                            <MyForm
                                type="default"
                            />
                            <p className={'random-text-form'}>Forgot your password?</p>
                        </form>
                        <div className="">
                            <MyButton
                                type="default"
                                title="Log in"
                                altClass="button-simple"
                                linkTo="/"
                            />
                            <p className={'random-text-button'}>Don't have an account</p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;
