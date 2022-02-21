import React, {SyntheticEvent, useState} from "react";
import axios from "axios";
import {Navigate, useParams} from "react-router-dom";

export const Reset = () => {
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {token} = useParams();

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post('reset', {
            token,
            password,
            password_confirm: passwordConfirm
        });

        setRedirect(true);
    }

    if (redirect) {
        return <Navigate to="/login"/>;
    }

    return <main className="form-signin">
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Reset your password</h1>

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

            <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Submit</button>
        </form>
    </main>
}
