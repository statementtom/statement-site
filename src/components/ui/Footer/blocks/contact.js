import React from 'react';
import { Column, Content } from 'rbx';
import styled from '@emotion/styled';
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ShopifyPlus,
  IDHL,
} from '../../Icons';

const CustomContent = styled(Content)`
  color: #707070;
  font-weight: 300;

  a {
    text-decoration: none;
    color: #707070;
    font-weight: 300;
    display: block;
  }
  p {
    margin-bottom: 0 !important;
    strong {
      margin-bottom: 10px !important;
      display: block;
    }
  }
`;

const CustomContentSmall = styled(Content)`
  color: #707070;
  font-weight: 300;

  a {
    text-decoration: none;
    color: #707070;
    font-weight: 300;
    display: block;
  }
  p {
    font-size: 0.75rem;
    line-height: 1.25rem;
    margin-bottom: 0 !important;
    strong {
      margin-bottom: 10px !important;
      display: block;
    }
  }
`;

const SocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  li {
    margin-right: 20px;
    margin: 0 20px 1.5rem 0;

    a {
      color: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  }
`;

const IconWrappers = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1.5rem;
  svg {
    &:first-of-type {
      margin-right: 30px;
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Contact = ({ content, social }) => (
  <Column>
    <CustomContent
      dangerouslySetInnerHTML={{
        __html: `${content.email &&
          `<a href="mailto:${content.email}">${content.email}</a>`} ${content.number &&
          `<a href="tel:${content.number}">${content.number}</a>`}`,
      }}
    />
    {social.length > 0 && (
      <SocialList>
        {social.map((item, index) => {
          if (item.social_title.text === 'Instagram') {
            return (
              <li key={index}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.social_title.text}
                  href={item.social_link.url}
                >
                  <Instagram />
                </a>
              </li>
            );
          }
          if (item.social_title.text === 'Facebook') {
            return (
              <li key={index}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.social_title.text}
                  href={item.social_link.url}
                >
                  <Facebook />
                </a>
              </li>
            );
          }
          if (item.social_title.text === 'Twitter') {
            return (
              <li key={index}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.social_title.text}
                  href={item.social_link.url}
                >
                  <Twitter />
                </a>
              </li>
            );
          }
          if (item.social_title.text === 'Linkedin') {
            return (
              <li key={index}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.social_title.text}
                  href={item.social_link.url}
                >
                  <Linkedin />
                </a>
              </li>
            );
          }
          if (item.social_title.text === 'Shopify') {
            return (
              <li key={index}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.social_title.text}
                  href={item.social_link.url}
                >
                  <ShopifyPlus fill="#000" />
                </a>
              </li>
            );
          }
          return (
            <li key={index}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.social_link.url}
              >
                Find us Here
              </a>
            </li>
          );
        })}
      </SocialList>
    )}
    {content.content && (
      <CustomContentSmall
        dangerouslySetInnerHTML={{
          __html: content.content
        }}
      />
    )}
    <IconWrappers>
      <ShopifyPlus fill="#000" height="24" />
      <IDHL fill="#000" height="24" />
    </IconWrappers>
  </Column>
);

export default Contact;
