import React, {useState} from 'react';
import {Login} from "../component";
import AuthService from "../services/auth.service";
import {useHistory} from "react-router-dom";

export default function LoginContainer(){
    const [email, setEmail] = useState('');
    const [error, setEmailErr] = useState(false);
    const [password, setPassword] = useState('');

    let history = useHistory();

    const valid = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const onBlur = (e) =>{
        const value = e.target.value;
        setEmailErr(!valid(value));
    }

    const onHandleSubmit = () => {
        if(valid(email) && password !== ''){
            AuthService.login(email, password).then(
                () => {
                    history.push("/panel");
                    window.location.reload();
                }
            );
        }
    }

    return(
        <>
            <Login>
                <Login.Card>
                    <Login.Title>Scoreboard Panel</Login.Title>
                    <Login.InputGroup error={error}>
                        <Login.IconMail  error={error}/>
                        <Login.Mail type="text" onChange={(e)=>setEmail(e.target.value)} value={email} onBlur={onBlur} error={error} placeholder={"E-mail"}/>
                    </Login.InputGroup>
                    <Login.InputGroup>
                        <Login.IconLock />
                        <Login.Password type='password' onChange={(e)=>setPassword(e.target.value)} value={password} placeholder={"Password"}/>
                    </Login.InputGroup>
                    <Login.Button onClick={onHandleSubmit} disabled={!valid(email) && password === ''}>Login</Login.Button>
                </Login.Card>
            </Login>
        </>
    )
}