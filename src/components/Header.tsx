import styled from '@emotion/styled';

import { User } from './User';
import { Logo } from './Logo';

const AppHeader = styled.header`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-bottom: 80px;
`;

const LogoWrapper = styled.div`
  flex-basis: 165px;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 68px;
`;

export function Header() {
  return (
    <AppHeader>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <User />
    </AppHeader>
  );
}
