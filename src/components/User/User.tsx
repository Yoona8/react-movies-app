import { useState } from 'react';

import { Dialog } from '../Dialog/Dialog';
import { Login } from '../Login/Login';

import './user.css';
// @ts-ignore
import userProfileImage from '../../assets/images/bitmap@2x.png';

// todo: if user is not logged-in or has no custom image, show placeholder

const Modal = {
  LOGIN: 'login',
  REGISTER: 'register',
};

export function User() {
  const [openModal, setOpenModal] = useState<string>();

  return (
    <>
      <section className="user">
        <p className="user__info">
          <button
            className="link user__auth"
            onClick={() => setOpenModal(Modal.LOGIN)}
          >
            Login
          </button>
          &nbsp;/&nbsp;
          <button
            className="link user__auth"
            onClick={() => setOpenModal(Modal.REGISTER)}
          >
            Register
          </button>
          {/*Movie Buff*/}
        </p>
        <img
          className="user__avatar"
          src={userProfileImage}
          alt="Avatar"
          width="35"
          height="35"
        />
      </section>
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
