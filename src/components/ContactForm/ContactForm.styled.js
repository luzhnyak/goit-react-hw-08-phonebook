import styled from 'styled-components';

export const Form = styled.form``;

export const Input = styled.input`
  display: block;
  margin-right: 16px;
  font-size: 1.2em;
  width: 100%;
  margin-bottom: 12px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  display: block;
  background-color: transparent;
  font-weight: 700;
  border-radius: 3px;
  padding: 8px 8px;
  margin-left: auto;

  border: 1px solid black;
  &:hover {
    background-color: green;
    color: white;
    border: 1px solid green;
  }
`;
