import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  color: #666360;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    color: #f4ede8;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #666360;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 50px #232129 inset;
      -webkit-text-fill-color: #f4ede8;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
