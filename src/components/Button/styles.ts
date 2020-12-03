import styled, { css } from 'styled-components';

interface ContainerProps {
  outlined?: boolean;
}

export const Container = styled.button<ContainerProps>`
  font: 500 16px 'Montserrat', sans-serif;
  border: 0;
  background: #1f01b9;
  color: #fff;
  outline: 0;

  width: 100%;
  height: 40px;
  border-radius: 2px;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background-color: #19009a;
  }

  &:active {
    background-color: #2600e7;
  }

  ${props =>
    props.disabled &&
    css`
      opacity: 0.8;
      cursor: not-allowed;
    `}

  ${props =>
    props.outlined &&
    css`
      background: none;
      border: 2px solid #1f01b9;
      color: #1f01b9;

      &:hover {
        border-color: #19009a;
        color: #19009a;
        background-color: #d5c9fb;
      }

      &:active {
        border-color: #2600e7;
        background-color: #ad97fc;
      }
    `}
`;
