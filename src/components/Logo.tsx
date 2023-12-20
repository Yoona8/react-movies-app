import styled from '@emotion/styled';

const AppLogo = styled.h1`
  cursor: default;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 4px;
  text-align: center;
  text-transform: uppercase;
  
  &.smaller {
    animation: none;
    font-size: var(--font-size);
    letter-spacing: normal;
  }
`;

export function Logo({ className = '' }) {
  return (<AppLogo className={className}>Cinemaddict</AppLogo>);
}
