import React from 'react';
import { Column, Content } from 'rbx';
import styled from '@emotion/styled';

const CustomContent = styled(Content)`
  color: #959595;
  font-weight: 300;
  p {
    margin-bottom: 0 !important;
    strong {
      margin-bottom: 10px !important;
      display: block;
    }
  }
`;

const Address = ({ content }) => (
  <Column>
    <CustomContent
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  </Column>
);

export default Address;
