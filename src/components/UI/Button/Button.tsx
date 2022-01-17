import React, { FC } from 'react';
import { MainButton, ButtonPropsType } from './button.style';

export const Button: FC<ButtonPropsType> = ({ children, ...props }) => (
  <MainButton {...props}>{children}</MainButton>
);