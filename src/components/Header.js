import React from 'react';
import styled from "styled-components";
// import { device } from "./Device";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
    return (
        <Container>
                <Nav>
                    <Logo>
                        <span></span>
                        <h3>Anywhere App</h3>
                    </Logo>
                    <Links>
                        <h4>Home</h4>
                        <h4>Join</h4>
                    </Links>
                </Nav>
        </Container>
    )
}

export default Header
// #268EEA

const Container = styled.div`
    height : 120px;
    display : flex;
    justify-content : left;
`
const Nav = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    padding : 40px 30px;

    @media screen and (max-width: 375px) {
        padding : 30px 10px;
    }

    `
const Logo = styled.div`
    padding: 0px 30px;


    @media screen and (max-width: 375px) {
        padding : 0px 15px;    
    }
`
const Links = styled.div`
    display : flex ;
    color  : #6C7483;
    align-items: center;
    
    h4{
        padding : 0px 50px;
        font-weight : 500;
        font-size : 15px;
    }
    
    @media screen and (max-width: 768px) {
        h4{
            padding : 0px 10px;
        }
    }

    @media screen and (max-width: 375px) {
        h4 {
            padding : 0px 20px;
        }   
    }
`
