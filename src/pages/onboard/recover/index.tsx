import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { InitialAuthBanner } from '../../../components/auth/AuthBanner/Initial';
import { ResetPasswordForm } from '../../../components/auth/ResetPasswordForm';
import { StyledAuthPage } from '../../../styles/auth';

const Login: NextPage = () => {
  const router = useRouter();
  const { token } = router.query;

  return (
    <>
      <StyledAuthPage>
        <InitialAuthBanner />
        <ResetPasswordForm token={token as string} />
      </StyledAuthPage>
    </>
  )
}

export default Login;
