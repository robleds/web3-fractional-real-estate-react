import type { NextPage } from 'next';
import { InitialAuthBanner } from '../../components/auth/AuthBanner/Initial';
import { ChangePassword } from '../../components/auth/ChangePassword';
import { StyledAuthPage } from '../../styles/auth';

const ChangePasswordPage: NextPage = () => {
  return (
    <>
      <StyledAuthPage>
        <InitialAuthBanner />
        <ChangePassword />
      </StyledAuthPage>
    </>
  )
}

export default ChangePasswordPage;
