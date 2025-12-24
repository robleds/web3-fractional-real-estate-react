import type { NextPage } from 'next';
import { InitialAuthBanner } from '../../components/auth/AuthBanner/Initial';
import { LoginForm } from '../../components/auth/LoginForm';
import { NavBar } from '../../components/general/NavBar';
import { StyledAuthPage } from '../../styles/auth';

const Login: NextPage = () => {
  return (
    <>
      <StyledAuthPage>
        <InitialAuthBanner />
        <LoginForm />
      </StyledAuthPage>
    </>
  )
}

export default Login;
