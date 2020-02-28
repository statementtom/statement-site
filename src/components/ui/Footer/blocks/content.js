import React from 'react';
import { Column, Content as BulmaContent } from 'rbx';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { linkResolver } from '../../../../util/links';

const CustomBulmaContent = styled(BulmaContent)`
  color: #000;
  font-weight: 500;
  margin: 0 0 10px 0;
`;

const Links = styled.ul`
  margin: 0;
  padding: 0;
  li {
    @media screen and (max-width: 768px) {
      margin-bottom: 15px;
    }
  }
  a {
    color: #707070;
    font-weight: 300;
    transition: all 0.3s ease;
    &:hover {
      color: #000000;
      text-decoration: underline;
    }
  }
`;

const Content = ({ items, copy }) => (
  <Column>
    {copy && copy.html && (
      <CustomBulmaContent
        dangerouslySetInnerHTML={{
          __html: copy.html,
        }}
      />
    )}
    {items.length > 0 && (
      <Links>
        {items.map((item, index) => (
          <li key={index}>
            {item.link_url &&
              item.link_url.type &&
              item.link_url.uid &&
              item.link_label &&
              item.link_label.text && (
                <Link to={linkResolver(item.link_url.type, item.link_url.uid)}>
                  {item.link_label.text}
                </Link>
              )}
          </li>
        ))}
      </Links>
    )}
  </Column>
);

export default Content;
