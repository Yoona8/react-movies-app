import { User } from '../User/User';
import { Logo } from '../Logo/Logo';

import './header.css';

export function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <User />
    </header>
  );
}
