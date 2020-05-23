import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type InputProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<InputProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
