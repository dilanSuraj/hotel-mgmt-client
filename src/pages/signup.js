import React from 'react';
import { Input } from 'semantic-ui-react';

class SignupComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        passowrd: '',
        cPassword: '',
        email: '',
        isAgree: false
    }

    render() {
        return (
            <div class="ui warning form segment">
                <div class="ui warning message">
                    <div class="header">Could you check something!</div>
                    <ul class="list">
                        <li>You forgot your <b>first name</b></li>
                        <li>And also your <b>last name</b></li>
                    </ul>
                </div>
                <div class="two fields">
                    <div class="field">
                        <label>First Name</label>
                        <input placeholder="First Name" type="text" name="firstName"/>
                    </div>
                    <div class="field">
                        <label>Last Name</label>
                        <input placeholder="Last Name" type="text" name="lastName"/>
                    </div>
                </div>
                <div class="field">
                    <label>Email</label>
                    <input placeholder="Email" type="email" name="email"/>
                </div>
                <div class="two fields">
                    <div class="field">
                        <label>Password</label>
                        <input type="password" name="passowrd"/>
                    </div>
                    <div class="field">
                        <label>Confirm Password</label>
                        <input type="password" name="cPassword"/>
                    </div>
                </div>
                <div class="inline field">
                    <div class="ui checkbox">
                        <input type="checkbox" name="isAgree"/>
                        <label>I agree to the Terms and Conditions</label>
                    </div>
                </div>
                <div class="ui submit button">Sign up</div>
            </div>
        );
    }
}

export default SignupComponent;