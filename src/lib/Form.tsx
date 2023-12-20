import styled from '@emotion/styled';

const Fields = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Field = styled.li`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 15px;
  font: inherit;
  font-size: 20px;
  font-weight: 600;
  color: #212126;
  background-color: #f6f6f6;
  border: solid 1px #979797;
  border-radius: 5px;
  outline: none;
  resize: none;
`;

export { Fields, Field, Label, Input };
