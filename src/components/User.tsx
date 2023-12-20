import { useState } from 'react';
import styled from '@emotion/styled';

import { Dialog } from './Dialog';
import { Login } from './Login';

// @ts-ignore
import userProfileImage from '../assets/images/bitmap@2x.png';

// todo: if user is not logged-in or has no custom image, show placeholder

const Modal = {
  LOGIN: 'login',
  REGISTER: 'register',
};

const Section = styled.section`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const Info = styled.p`
  font-size: 20px;
`;

const Avatar = styled.img`
  display: block;
  margin-left: 15px;
`;

export function User() {
  const [openModal, setOpenModal] = useState<string>();

  return (
    <>
      <Section>
        <Info>
          <button
            className="link"
            onClick={() => setOpenModal(Modal.LOGIN)}
          >
            Login
          </button>
          &nbsp;/&nbsp;
          <button
            className="link"
            onClick={() => setOpenModal(Modal.REGISTER)}
          >
            Register
          </button>
          {/*Movie Buff*/}
        </Info>
        <Avatar
          src={userProfileImage}
          alt="Avatar"
          width="35"
          height="35"
        />
      </Section>
      <Dialog
        title="Login"
        isOpen={openModal === Modal.LOGIN}
        onClose={() => setOpenModal('')}
      >
        <Login onFormSubmit={() => console.log('on login submit')} buttonLabel="Login" />
      </Dialog>
      <Dialog
        title="Register"
        isOpen={openModal === Modal.REGISTER}
        onClose={() => setOpenModal('')}
      >
        <Login onFormSubmit={() => console.log('on register submit')} buttonLabel="Register" />
      </Dialog>
    </>
  );
}
