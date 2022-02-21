import React, {SyntheticEvent, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";

export const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post('register', {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            password_confirm: passwordConfirm
        });

        setRedirect(true);
    }

    if (redirect) {
        return <Navigate to="/login"/>
    }

    return <main className="form-signin">
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please register</h1>

            <div className="form-floating">
                <input className="form-control" id="floatingInput" placeholder="First Name"
                       onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="floatingInput">First Name</label>
            </div>

            <div className="form-floating">
                <input className="form-control" id="floatingInput" placeholder="Last Name"
                       onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="floatingInput">Last Name</label>
            </div>

            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                       onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                       onChange={e => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password Confirm"
                       onChange={e => setPasswordConfirm(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password Confirm</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        </form>
    </main>
}
