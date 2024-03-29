import styled from '@emotion/styled';

const Button = styled.button`
  box-sizing: border-box;
  display: block;
  min-width: 100px;
  margin: 0;
  padding: 14px 20px 15px;
  font-family: var(--font);
  font-weight: 600;
  font-size: 20px;
  color: var(--text-color);
  background: none;
  border: solid 1px var(--outline-color);
  border-radius: 5px;
  opacity: 1;
  transition: opacity 0.1s ease-in;

  &:hover {
    opacity: 0.7;
  }
`;

export { Button };
