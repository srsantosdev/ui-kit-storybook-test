import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  outlined,
  children,
  ...rest
}) => {
  return (
    <Container outlined={outlined} {...rest}>
      {children}
    </Container>
  );
};
