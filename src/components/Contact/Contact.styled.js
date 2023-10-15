import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 8px;
  border-bottom: 1px solid gray;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Name = styled.div`
  padding-left: 8px;
  font-weight: 700;
  margin-bottom: 4px;
`;

export const Number = styled.a`
  padding-left: 8px;
  text-decoration: none;
  color: darkcyan;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background-color: transparent;
  border-radius: 3px;
  padding: 2px;
  margin-left: auto;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
