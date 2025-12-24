import type { NextPage } from 'next';
import { InitialAuthBanner } from '../../components/auth/AuthBanner/Initial';
import { RecoverPassword } from '../../components/auth/RecoverPassword';
import { StyledAuthPage } from '../../styles/auth';

const ResetPassword: NextPage = () => {
  return (
    <>
      <StyledAuthPage>
        <InitialAuthBanner />
        <RecoverPassword />
      </StyledAuthPage>
    </>
  )
}

export default ResetPassword;
