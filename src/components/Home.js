import React from 'react';
import styled from 'styled-components';
import AccountForm from './AccountForm';
import AccountText from './AccountText';
import Header from './Header';

function Home() {
    return (
        <Container>
            <Header />
            <AccountText />
            <AccountForm />
        </Container>
    )
}

export default Home

const Container = styled.div`
    min-height: 100vh;
    min-width : 375px;
    background : linear-gradient(30deg, rgba(0, 0, 0, 2.5), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=kalen-emsley-Bkci_8qcdvQ-unsplash.jpg") center center / cover no-repeat fixed;
    color : #FFFFFF;
    `