import { FormEvent } from 'react';
import styled from '@emotion/styled';

import { Fields, Field, Label, Input } from '../lib/Form';
import { Button } from '../lib/Button';

interface ILoginProps {
  onFormSubmit: () => void;
  buttonLabel: string;
}

const LoginForm = styled.form`
  max-width: 630px;
  margin: 0 auto;
`;

const Submit = styled.p`
  margin: 30px auto 0;
  
  button {
    width: 100%;
  }
`;

export function Login({ onFormSubmit, buttonLabel }: ILoginProps) {
  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onFormSubmit();
    console.log(evt.currentTarget.elements);
  };

  return (
    <LoginForm onSubmit={onSubmit}>
      <Fields>
        <Field>
          <Label htmlFor="username">Username</Label>
          <Input
            name="username"
            id="username"
            type="text"
            placeholder="john"
          />
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="***"
          />
        </Field>
      </Fields>
      <Submit>
        <Button className="button" type="submit">{buttonLabel}</Button>
      </Submit>
    </LoginForm>
  );
}
