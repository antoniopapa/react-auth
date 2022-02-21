import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setAuth} from "../redux/authSlice";
import {RootState} from "../redux/store";

export const Home = () => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');
    const auth = useSelector((state: RootState) => state.auth.value);

    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('user');

                setMessage(`Hi ${data.first_name} ${data.last_name}`);
                dispatch(setAuth(true));
            } catch (e) {
                setMessage('You are not authenticated');
                dispatch(setAuth(false));
            }
        })();
    }, []);


    return <div className="container mt-5 text-center">
        <h3>{auth ? message : 'You are not authenticated'}</h3>
    </div>
}
