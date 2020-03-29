import React, { useState} from 'react';
import { STRAPI_API } from '../constants/constants';
import axios from 'axios';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        axios.post(STRAPI_API + '/auth/local', {
            identifier: username,
            password: password,
        })
            .then(response => {
                console.log('well done');
                console.log('User profile', response.data.user);
                console.log('User Token', response.data.jwt);
                sessionStorage.setItem('token', response.data.jwt);
                props.updateLoginStatus();
            })
            .catch(error => {
                console.log('An error has occured: ', error)
            })
    }

    return (
        <div className="login">
                        <form onSubmit={handleSubmit} className="form">
                            <p>Enter Username</p>
                            <input type="text"
                                name="username"
                                onChange={e => setUsername(e.target.value)}
                            />
                            <br />
                            <p>Enter Password</p>
                            <input type="password"
                                name="password"
                                onChange={e => setPassword(e.target.value)}
                            />
                            <br/>
                            <input type="submit" />
                        </form>
                        <p>Password is 'Admin' and password is 'Admin1'</p>
        </div >
    );
}

export default Login;