import React from 'react'
import styled from 'styled-components'

function AccountText() {
    return (
        <Container>
            <h5>START FOR FREE</h5>
            <h2>Create new account</h2>
            <h6>Already a Member? <span>Log In</span></h6>
        </Container>
    )
}

export default AccountText

const Container = styled.div`
    padding : 50px 60px;
    h5{
        font-size : 13px;
        padding-top : 20px;
        padding-bottom : 17px;
        color : #737B8A;
    }
    h2{
        padding-bottom : 25px;
    }
    h6{
        color : #737B8A;    
        span {
            color : #268EEA;
        }
      }
    }

    @media only screen and (max-width: 375px) {
          padding : 50px 30px 30px;
    
        h5{
            font-size : 12px;
            padding-top : 20px;
            padding-bottom : 17px;
        }
        h2{
            padding-bottom : 25px;
        }
        h6{
            color : #737B8A;
            span {
                color : #268EEA;
            }
        }
    }
`