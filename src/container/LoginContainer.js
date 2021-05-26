import React, {useState} from 'react';
import {Login} from "../component";
import AuthService from "../services/auth.service";
import {useHistory} from "react-router-dom";

export default function LoginContainer(){
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    let history = useHistory();

    const valid = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const onBlur = (e) =>{
        const value = e.target.value;
        setEmailErr(!valid(value));
    }

    const onChangeMail = (value) => {
        setError(false);
        setEmailErr(false);
        setEmail(value);
    }

    const onChangePassword = (value) => {
        setError(false);
        setPassword(value);
    }

    const onHandleSubmit = () => {
        if(valid(email) && password !== ''){
            AuthService.login(email, password).then(
                () => {
                    history.push("/panel");
                    window.location.reload();
                }
            ).catch(err => {
                console.log(err);
                setError(err.error);
                setMessage(err.message);
            });
        }
    }

    return(
        <>
            <Login>
                <Login.Card>
                    <Login.Title>Scoreboard Panel</Login.Title>
                    <Login.InputGroup error={emailErr || error}>
                        <Login.IconMail  error={emailErr || error}/>
                        <Login.Mail type="text" onChange={(e)=>onChangeMail(e.target.value)} value={email} onBlur={onBlur} error={emailErr || error} placeholder={"E-mail"} />
                    </Login.InputGroup>
                    <Login.InputGroup error={error}>
                        <Login.IconLock error={error}/>
                        <Login.Password type='password' onChange={(e)=>onChangePassword(e.target.value)} value={password} placeholder={"Password"} error={error} />
                    </Login.InputGroup>
                    {error && <Login.SmallText>{message}</Login.SmallText>}
                    <Login.Button onClick={onHandleSubmit} disabled={!valid(email) && password === ''}>Login</Login.Button>
                </Login.Card>
            </Login>
        </>
    )
}