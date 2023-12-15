import { FormEvent } from 'react';

import '../../css/form.css';
import '../../css/button.css';
import './Login.css';

export function Login() {
  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(evt.currentTarget.elements);
  };

  return (
    <form className="form login" onSubmit={onSubmit}>
      <ul className="login__fields">
        <li className="form__field">
          <label className="form__label" htmlFor="username">Username</label>
          <input
            className="form__input"
            name="username"
            id="username"
            type="text"
            placeholder="john"
          />
        </li>
        <li className="form__field">
          <label className="form__label" htmlFor="password">Password</label>
          <input
            className="form__input"
            name="password"
            id="password"
            type="password"
            placeholder="***"
          />
        </li>
      </ul>
      <p className="login__submit">
        <button className="button" type="submit">Login</button>
      </p>
    </form>
  );
}
