import { useState } from 'react';

import { Dialog } from '../Dialog/Dialog';
import { Login } from '../Login/Login';

import './user.css';
// @ts-ignore
import userProfileImage from '../../assets/images/bitmap@2x.png';

// todo: if user is not logged-in or has no custom image, show placeholder

export function User() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="user">
        <p className="user__info">
          <button
            className="link user__auth"
            onClick={() => setIsOpen(true)}
          >
            Login / Register
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
        isOpen={isOpen}
        onClose={() => setIsOpen(!isOpen)}
      >
        <Login />
      </Dialog>
    </>
  );
}
