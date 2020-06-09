import React from "react";
import { Section, Container, Column, Content as BulmaContent } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import styled from "@emotion/styled";
import { LongRightArrow, Twitter, Facebook, Linkedin } from "../Icons";

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
      content: "";
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

const CustomLink = styled.a`
  color: #000000;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: lowercase;
  svg {
    display: block;
    transition: all 0.2s cubic-bezier(0.42, 0, 0.58, 1); /* ease-in-out */
    margin-left: 10px;
    margin-top: 2px;
  }
  &:hover {
    color: #000000;
    svg {
      margin-left: 15px;
    }
  }
`;

const SocialShareList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  li {
    margin-right: 10px;
  }
  li,
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #4a4a4a;
    &:hover {
      color: #4a4a4a;
    }
  }
`;

const CustomSection = styled(Section)`
  @media screen and (max-width: 768px) {
    padding-bottom: 3rem;
  }
`;

const Marketing = styled(BulmaContent)`
  border-top: 1px solid #ebebeb;
  margin-top: 20px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000000;
    margin: 30px 0;
    font-weight: 500;
    text-align: center;
    &:first-of-type {
      margin-top: 20px;
    }
    strong {
      color: #ce0527;
      font-weight: inherit;
    }
  }
  p {
    color: #000000;
    text-align: center;
  }
  > div form {
    margin: 0 auto !important;
    padding: 0 !important;
    ._html-code {
      font-size: 18px !important;
      font-weight: 300 !important;
      p,
      i {
        text-align: left !important;
      }
    }
    * {
      font-size: 18px !important;
    }
    ._submit {
      font-size: 18px !important;
      font-weight: 300 !important;
      margin-top: 15px !important;
    }
    input[type="text"] {
      font-size: 18px !important;
    }
  }
`;

const Content = ({ primary, article, event, marketing, key }) => (
  <>
    {primary.content.html && (
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
                  __html: primary.content.html
                }}
              />
              <p>{key}</p>
              {primary.link_url && primary.link_label && (
                <CustomLink href={primary.link_url.url} target="_blank">
                  {primary.link_label.text}
                  <LongRightArrow size="20" fill="#CE0527" />
                </CustomLink>
              )}
            </Column>
          </ColumnGroup>
          {article && (
            <ColumnGroup className="is-mobile is-multiline is-centered">
              <Column
                mobile={{ size: 12 }}
                tablet={{ size: 10 }}
                desktop={{ size: 8 }}
              >
                <SocialShareList>
                  <li>Share</li>
                  <li>
                    <a
                      href={
                        typeof window !== "undefined"
                          ? `http://twitter.com/share?url=${window.location.href}`
                          : null
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter height={16} />
                    </a>
                  </li>
                  <li>
                    <a
                      href={
                        typeof window !== "undefined"
                          ? `http://www.facebook.com/sharer.php?u=${window.location.href}`
                          : null
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook height={16} />
                    </a>
                  </li>
                  <li>
                    <a
                      href={
                        typeof window !== "undefined"
                          ? `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`
                          : null
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin height={16} />
                    </a>
                  </li>
                </SocialShareList>
              </Column>
            </ColumnGroup>
          )}
          {marketing && (
            <Marketing>
              <h3>Register your interest for upcoming eCommerce events</h3>
              <div className="_form_20" />
            </Marketing>
          )}
        </Container>
      </CustomSection>
    )}
  </>
);

export default Content;
