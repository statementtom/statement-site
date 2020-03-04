import React from 'react';
import { Section, Container, Column, Content as BulmaContent } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import styled from '@emotion/styled';

const StyledContent = styled(BulmaContent)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000000;
    margin: 30px 0;
    font-weight: 500;
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
    img {
      margin-top: 30px;
    }
  }
  p,
  li {
    color: #000000;
    font-weight: 300;
  }
  a {
    color: #000;
    text-decoration: underline;
  }
  ul {
    list-style: none;
    margin: 0 0 0 25px;
  }
  li {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 16px;
      left: -20px;
      transform: translateY(-50%);
      height: 3px;
      width: 3px;
      background-color: #ce0527;
      border-radius: 50%;
    }
  }
`;

const CustomSection = styled(Section)`
  @media screen and (max-width: 768px) {
    padding-bottom: 3rem;
  }
  padding-top: 0;
`;

const HtmlBlock = ({ primary }) => (
  <>
    {primary.html && (
      <CustomSection>
        <Container>
          <ColumnGroup className="is-mobile is-multiline is-centered">
            <Column
              mobile={{ size: 12 }}
              tablet={{ size: 10 }}
              desktop={{ size: 8 }}
            >
              <StyledContent
                dangerouslySetInnerHTML={{
                  __html: primary.html.text,
                }}
              />
            </Column>
          </ColumnGroup>
        </Container>
      </CustomSection>
    )}
  </>
);

export default HtmlBlock;
