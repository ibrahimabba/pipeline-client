import React from 'react'
import styled from '@emotion/styled';

export default function UserForm() {
    return (
        <SignupFormContainer>
            <Form>
                <FormHeader>Apply as a Talent</FormHeader>
                <Label>
                    first name
                    <Input type="text" />
                </Label>
                <Label>
                    last name
                    <Input type="text" />
                </Label>
                <Label>
                    email
                    <Input type="email" />
                </Label>
                <Label>
                    password
                    <Input type="password" />
                </Label>
                <Label>
                    phone
                    <Input type="text" />
                </Label>
                <Label>
                    location
                    <Input type="text" />
                </Label>
                <Button onClick={(e) => {
                    e.preventDefault();
                    console.log("submit")
                }}>Apply</Button>
            </Form>
        </SignupFormContainer>
    )
}

const SignupFormContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    marginTop: '6%',
})

const FormHeader = styled.p({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: '20px',
    marginBottom: '1rem',
})

const Form = styled.form({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '20px',
    border: '0px solid black',
    borderRadius: '5px',
    backgroundColor: '',
    boxShadow: '0px 0px 5px black',
})

const Label = styled.label({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '10px',
    fontSize: '15px',
})

const Input = styled.input({
    display: 'flex',
    paddingLeft: '10px',
    width: 300,
    borderRadius: '10px',
    height: '30px',
    border: '1px solid grey',
})

const Button = styled.button({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})