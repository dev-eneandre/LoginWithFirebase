import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import Button from '@mui/material/Button';
// import { Input } from '@material-ui/core';

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
// import EmailIcon from '@mui/icons-material/Email';

// firebase imports 
import { signup, useAuth, logout, login} from "../firebase";

function AccountForm() {
    const [ loading, setLoading ] = useState(false);
    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();


    async function handleSignup() {
        setLoading(true);
        try{
            await signup(emailRef.current.value, passwordRef.current.value);
        }catch{
            alert("somethng went wrong");
        }
        setLoading(false);
    }

    async function handleLogin() {
        setLoading(true);
        try{
            await login(emailRef.current.value, passwordRef.current.value);
        }catch{
            alert("somethng went wrong");
        }
        setLoading(false);
    }

    async function handleLogout(){
        setLoading(true);
        try{
            await logout();
          }catch{
            alert("error");
          }
        setLoading(false);
    }

    return (
        <Container>
            <p>Currently logged in as : {currentUser?.email} </p>
            <form>
                <SectionOne>
                    <Wrap>
                        <p>Email</p>
                        <input ref={emailRef} type="text" />
                        <span><Email /></span>
                    </Wrap>
                    <Wrap>
                        <p>Password</p>
                        <input ref={passwordRef} type="password" />
                        <span><Lock /></span>
                    </Wrap>
                </SectionOne>
                <Buttons>
                    <Button disabled={loading || currentUser != null} onClick={handleSignup}>SignUp</Button>
                    <Button disabled={loading || currentUser != null } onClick={handleLogin}>Login</Button>
                    <Button disabled={loading || !currentUser } onClick={handleLogout}>Logout</Button>
                </Buttons>
            </form>
        </Container>
    )
}

export default AccountForm;

const Container = styled.div`
    height : 300px;
    margin-top : 20px;
    padding-left : 60px;
    
    @media screen and (max-width: 375px) {
        padding : 10px 30px;
    }
`
const SectionOne = styled.div`
    display : flex;
    flex-wrap : wrap;
`
const Wrap = styled.div`
    position : relative;
    margin-top : 16px;
    
    &:last-child{
        margin-left : 35px;
        margin-top : 16px;
        @media screen and (max-width: 788px) {
            margin-left : 0px;
        }
    }
    
    input {
        width : 270px;
        padding : 15px 20px;
        border-radius : 10px;
        background-color : rgb(39, 42, 55);
        border : 1px solid rgb(0,0,0,0.3);
        color : rgb(249,249,249);

    }
    
    p{
        position : absolute;
        top : -3px;
        left : 10px;
        padding-top : 5px;
        font-size : 10px;
        color : #6C7483;
    }
        
    span{
        position : absolute;
        top : 11px;
        right : 9px;
        width : 20px;
        height : 20px;
        color : #9da3af;
    }   

    @media screen and (max-width: 375px) {
        input{
            width : 270px;
            padding : 15px 20px;
        }

        p{
            position : absolute;
            top : 0;
            left : 10px;
            padding-top : 5px;
            font-size : 10px;
            color : #6C7483;
        }
        
        span{
            position : absolute;
            top : 10px;
            right : 10px;
            width : 20px;
            height : 20px;
            color : #9da3af;
        }
    }
`
const Buttons = styled.div`
    display flex;
    flex-wrap : wrap;

    Button {
        border : 1px solid blue;
        margin-top : 20px;
        background : rgb(39, 42, 55);
        padding : 10px 25px;
        border-radius : 20px;
        font-size : 12px;
        font-variant : small-caps;
        width : 275px;

        &:first-child{
            margin-right : 30px;
            @media screen and (max-width: 788px) {
                margin-right : 0px;
            }
        }

        &:last-child{
            background : #3385ff;
            color : white;
            margin-left : 30px;
            @media screen and (max-width: 788px) {
                margin-left : 0px;
            }
        }
      
    }
`