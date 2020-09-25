import React from 'react';
import { Footer, Container, Column } from 'rbx';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { ColumnGroup } from 'rbx/grid/columns/column-group';

import Content from './blocks/content';
import Address from './blocks/address';
import Contact from './blocks/contact';
import { Logo } from '../Icons';

const CustomFooter = styled(Footer)`
  padding: 3rem 1.5rem;
`;

const LogoWrapper = styled.div`
  margin-bottom: 10px;
  max-width: 150px;
`;

export default () => {
  const { allPrismicFooter } = useStaticQuery(graphql`
    query Footer {
      allPrismicFooter {
        nodes {
          data {
            body {
              ... on PrismicFooterBodyContact {
                id
                primary {
                  content {
                    html
                  }
                  email
                  number
                }
                items {
                  social_link {
                    url
                  }
                  social_title {
                    text
                  }
                }
                slice_type
              }
              ... on PrismicFooterBodyContent {
                id
                slice_type
                items {
                  link_label {
                    text
                  }
                  link_url {
                    uid
                    type
                  }
                }
                primary {
                  content {
                    html
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const {
    data: { body },
  } = allPrismicFooter.nodes[0];
  return (
    <CustomFooter>
      <Container>
        <ColumnGroup>
          <Column>
            <LogoWrapper>
              <Link title="Statement" to="/">
                <Logo fill="#000" />
              </Link>
            </LogoWrapper>
          </Column>
          {body.map((item, index) => {
            if (item.slice_type === 'content') {
              return (
                <Content
                  key={index}
                  copy={item.primary.content}
                  items={item.items}
                />
              );
            }
            if (item.slice_type === 'address') {
              return (
                <Address key={index} content={item.primary.content.html} />
              );
            }
            if (item.slice_type === 'contact') {
              return (
                <Contact
                  key={index}
                  content={{
                    ...(item.primary.email && { email: item.primary.email }),
                    ...(item.primary.number && { number: item.primary.number }),
                    ...(item.primary.content && { content: item.primary.content.html })
                  }}
                  social={item.items}
                />
              );
            }
          })}
        </ColumnGroup>
      </Container>
    </CustomFooter>
  );
};
