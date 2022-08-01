import { Layout, UserForm, RecruiterForm } from "../components";
import styled from '@emotion/styled';

export default function Home() {
  return (
    <Layout>
      <Welcome>Welcome to Pipeline, where you don't apply to jobs they apply to you</Welcome>
      <Container>
        <UserForm />
        <TopDividerLine />
        <Divider>Or</Divider>
        <BottomDividerLine />
        <RecruiterForm />
      </Container>
    </Layout>
  )
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const Welcome = styled.h1({
  fontSize: '15px',
  fontWeight: 'bold',
  width: '40%',
  marginTop: '15px',
})

const Divider = styled.div({
  display: 'flex',
  position: 'absolute',
  top: '60%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '20px',
})

const TopDividerLine = styled.div({
  display: 'flex',
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'grey',
  width: '1px',
  height: '34%',
})

const BottomDividerLine = styled.div({
  display: 'flex',
  position: 'absolute',
  top: '80%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'grey',
  width: '1px',
  height: '31%',
})
