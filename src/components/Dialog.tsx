import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface IDialogProps {
  children: ReactNode,
  onClose: () => void,
  title?: string,
  isOpen?: boolean,
}

const Article = styled.article`
  position: fixed;
  height: 100vh;
  top: 0;
  right: 0;
  left: 10%;
  z-index: 1;
  background-color: #212126;
  box-shadow: -3px 2px 13px 0 #141628;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Header = styled.header`
  position: relative;
  padding: 25px 55px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 25px;
  right: 20px;
  width: 25px;
  height: 25px;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: 0;
  
  &::before {
    content: "✕";
    position: absolute;
    left: 0;
    top: 0;
    font-size: 25px;
    line-height: 1;
    color: #8da5aa;
    cursor: pointer;
    font-weight: bold;
  }
  
  &:hover::before {
    opacity: 0.7;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 50px;
  text-align: center;
`;

const Content = styled.div`
  padding: 25px 55px;
`;

export function Dialog({
  title,
  isOpen = false,
  children,
  onClose,
  ...props
}: IDialogProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <Article {...props}>
      <Header>
        <CloseButton
          type="button"
          aria-label="Close"
          onClick={() => {onClose()}}
        />
        <Title>{title}</Title>
      </Header>
      <Content>{children}</Content>
    </Article>
  );
}
