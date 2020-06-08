import React from "react";

import * as S from './styles';

const Arrow = ({ onClick, children, ml, mr, left }) => (
  <S.Container left={left} ml={ml} mr={mr} onClick={onClick}>
    {children}
  </S.Container>
);

export default Arrow;
