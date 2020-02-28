import React, { useEffect } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Navbar, Column, Content } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import styled from '@emotion/styled';
import posed, { PoseGroup } from 'react-pose';
import { useMedia, useWindowScroll, useToggle } from 'react-use';
import {
  Hamburger,
  Logo,
  Close,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from '../Icons';
import { linkResolver } from '../../../util/links';

const HamburgerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    p {
      padding: 0;
      margin: 0 10px 0 0;
      color: #ffffff;
      font-size: 18px;
    }
    p,
    svg {
      cursor: pointer;
    }
  }
`;

const CustomNavbar = styled(Navbar)`
  transition: all 0.3s ease;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.65) 100%
  ) !important;
  min-height: ${props => (props.scrolling ? `72px` : `90px`)} !important;
  @media screen and (max-width: 768px) {
    min-height: ${props => (props.scrolling ? `72px` : `90px`)} !important;
  }
  > .columns {
    min-height: inherit;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  transition: all 0.3s ease;
  max-width: ${props => (props.scrolling ? '150px' : '170px')};
  svg {
    display: block;
    width: 100%;
  }
`;

const MainMenu = styled.div`
  position: fixed !important;
  top: ${props => (props.scrolling ? '72px' : '90px')};
  height: 100vh;
  width: 100%;
  left: 0;
  right: 0;
  z-index: 10;

  > .columns {
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  height: ${props =>
    props.scrolling ? `calc(100% - 72px)` : `calc(100% - 90px)`};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const NavItem = styled.li`
  text-align: center;
  margin-bottom: 15px;

  a {
    color: #959595;
    font-size: 32px;
    font-weight: 300;
    letter-spacing: -0.34px;
    text-align: center;
    transition: color 0.3s ease;
    &:hover,
    &.active {
      color: #ffffff;
    }
    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 5px;
    &:last-child,
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const SocialIconsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
  li {
    margin-right: 25px;
    &:last-child,
    &:last-of-type {
      margin-right: 0;
    }
  }
  a {
    color: #959595;
    transition: color 0.3s ease;
    &:hover {
      color: #ffffff;
    }
  }
`;

const LocationsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  li {
    margin-right: 10px;
    font-size: 20px;
    &:last-child,
    &:last-of-type {
      margin-right: 0;
    }
  }
  a {
    color: #959595;
    transition: color 0.3s ease;
    &:hover {
      color: #ffffff;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 40px 0;
    flex-direction: column;
    max-height: 100%;
    overflow: hidden;
    flex-wrap: wrap;
    li {
      margin-right: 0;
    }
  }
`;

const ContactInformationWrapper = styled(Content)`
  text-align: center;
  margin-bottom: 20px !important;
  @media screen and (max-width: 768px) {
    display: none;
  }
  p,
  a {
    color: #ffffff;
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 0 !important;
    @media screen and (max-width: 768px) {
      font-size: 22px;
    }
    &:hover {
      color: #ffffff;
    }
  }
`;

const NavColumn = styled(Column)`
  background-color: ${props => props.desktopbg};
  transition: background 0.3s ease;
  @media screen and (max-width: 768px) {
    min-width: 50vw;
    background-color: transparent;
    background-color: #000;
  }
`;

const Nav = styled.nav`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 60px;
  }
`;

const PosedMainMenu = posed(MainMenu)({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 1,
  },
});

const HamburgerToggle = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
});

const PosedNavColumn = posed(NavColumn)({
  enter: {
    x: '0',
    transition: {
      duration: 400,
      ease: 'easeInOut',
    },
  },
  exit: {
    x: props => (props.reverse ? '-100%' : '110%'),
    transition: {
      duration: 400,
      ease: 'easeInOut',
    },
  },
});

const PosedNavItems = posed.ul({
  enter: {
    staggerChildren: 20,
  },
  exit: {
    staggerChildren: 20,
    staggerDirection: -1,
  },
});

const PosedNavItem = posed(NavItem)({
  enter: {
    y: '0%',
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 300,
    },
  },
  exit: {
    y: '-100%',
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 0,
    },
  },
});

export default () => {
  const {
    prismicNavigation: { data },
  } = useStaticQuery(graphql`
    query Header {
      prismicNavigation {
        data {
          body {
            ... on PrismicNavigationBodySocialLink {
              items {
                social_item_link {
                  url
                }
                social_item_title {
                  text
                }
              }
            }
            ... on PrismicNavigationBodyNavigationItem {
              items {
                navigation_label {
                  text
                }
                navigation_link {
                  uid
                }
              }
            }
            ... on PrismicNavigationBodyLocations {
              primary {
                content {
                  text
                }
              }
              items {
                label
                link {
                  document {
                    uid
                    type
                  }
                }
              }
            }
          }
          # navigation_contact {
          #   html
          # }
        }
      }
    }
  `);
  const mobile = useMedia('(max-width: 768px)');
  const { y: scrollY } = useWindowScroll();

  const [expanded, toggleExpanded] = useToggle(false);
  const [scrolling, toggleScrolling] = useToggle(false);

  const [navItems] = data.body.filter(
    item => item.__typename === 'PrismicNavigationBodyNavigationItem'
  );
  const [socialLinks] = data.body.filter(
    item => item.__typename === 'PrismicNavigationBodySocialLink'
  );
  const [locations] = data.body.filter(
    item => item.__typename === 'PrismicNavigationBodyLocations'
  );

  useEffect(() => {
    const html = document.querySelector('html');
    if (scrollY >= 100) {
      toggleScrolling(true);
    } else {
      toggleScrolling(false);
    }

    if (expanded) {
      html.style.overflow = 'hidden';
    } else {
      html.style.overflow = 'scroll';
    }
  }, [expanded, scrollY, toggleScrolling]);

  return (
    <>
      <header>
        <CustomNavbar
          scrolling={scrolling ? scrolling.toString() : undefined}
          fixed="top"
        >
          <ColumnGroup className="is-mobile is-multiline">
            <NavColumn
              mobile={{ size: 4 }}
              tablet={{ size: 6 }}
              desktop={{ size: 6 }}
              desktopbg={expanded && !mobile ? '#000' : 'transparent'}
              transparent="true"
            >
              <LogoWrapper
                style={{ paddingLeft: 10 }}
                scrolling={scrolling ? scrolling.toString() : undefined}
              >
                <Link
                  title="Statement"
                  to="/"
                  onClick={() => toggleExpanded(false)}
                >
                  <Logo />
                </Link>
              </LogoWrapper>
            </NavColumn>
            <NavColumn
              mobile={{ size: 6 }}
              tablet={{ size: 6 }}
              desktop={{ size: 6 }}
              desktopbg={expanded && !mobile ? '#1B1B1B' : 'transparent'}
              transparent="true"
            >
              <HamburgerWrapper
                onClick={() => {
                  toggleExpanded(!expanded);
                }}
              >
                {!expanded && (
                  <HamburgerToggle style={{ paddingRight: 10 }}>
                    <p>Menu</p>
                    <Hamburger height={24} width={24} />
                  </HamburgerToggle>
                )}
                {expanded && (
                  <HamburgerToggle style={{ paddingRight: 10 }}>
                    <p>Close</p>
                    <Close height={17} width={17} />
                  </HamburgerToggle>
                )}
              </HamburgerWrapper>
            </NavColumn>
          </ColumnGroup>
        </CustomNavbar>
      </header>
      <PoseGroup>
        {expanded && (
          <PosedMainMenu
            scrolling={scrolling ? scrolling.toString() : undefined}
            expanded={expanded}
            key="menu"
          >
            <ColumnGroup style={{ height: '100%' }}>
              {navItems && navItems.items.length > 0 && (
                <PosedNavColumn
                  reverse="true"
                  desktopbg={expanded && !mobile ? '#000' : 'transparent'}
                  mobilebg={expanded && mobile ? '#000' : 'transparent'}
                >
                  <ContentWrapper
                    scrolling={scrolling ? scrolling.toString() : undefined}
                  >
                    <Nav>
                      <PosedNavItems>
                        {navItems.items.map((item, index) => (
                          <PosedNavItem key={index}>
                            <Link
                              activeClassName="active"
                              onClick={() => {
                                toggleExpanded(false);
                              }}
                              to={
                                item.navigation_link
                                  ? `/${item.navigation_link.uid}`
                                  : '/'
                              }
                            >
                              {item.navigation_label.text}
                            </Link>
                          </PosedNavItem>
                        ))}
                      </PosedNavItems>
                      {mobile && (
                        <div>
                          {locations.items && locations.items.length > 0 && (
                            <LocationsList>
                              {locations.items.map((item, index) => {
                                const {
                                  link: {
                                    document: [doc],
                                  },
                                } = item;
                                return (
                                  <li
                                    key={index}
                                    onClick={e => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      toggleExpanded(false);
                                    }}
                                  >
                                    <Link to={linkResolver(doc.type, doc.uid)}>
                                      {item.label}
                                    </Link>
                                  </li>
                                );
                              })}
                            </LocationsList>
                          )}
                          {socialLinks && socialLinks.items.length > 0 && (
                            <SocialIconsList>
                              {socialLinks.items.map((item, index) => {
                                if (
                                  item.social_item_title.text === 'Instagram'
                                ) {
                                  return (
                                    <li key={index}>
                                      <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={item.social_item_link.url}
                                      >
                                        <Instagram />
                                      </a>
                                    </li>
                                  );
                                }
                                if (
                                  item.social_item_title.text === 'Facebook'
                                ) {
                                  return (
                                    <li key={index}>
                                      <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={item.social_item_link.url}
                                      >
                                        <Facebook />
                                      </a>
                                    </li>
                                  );
                                }
                                if (item.social_item_title.text === 'Twitter') {
                                  return (
                                    <li key={index}>
                                      <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={item.social_item_link.url}
                                      >
                                        <Twitter />
                                      </a>
                                    </li>
                                  );
                                }
                                if (
                                  item.social_item_title.text === 'Linkedin'
                                ) {
                                  return (
                                    <li key={index}>
                                      <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={item.social_item_link.url}
                                      >
                                        <Linkedin />
                                      </a>
                                    </li>
                                  );
                                }
                                if (item.social_item_title.text === 'Youtube') {
                                  return (
                                    <li key={index}>
                                      <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={item.social_item_link.url}
                                      >
                                        <Youtube />
                                      </a>
                                    </li>
                                  );
                                }
                                return (
                                  <li key={index}>
                                    <a
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      href={item.social_item_link.url}
                                    >
                                      Find us Here
                                    </a>
                                  </li>
                                );
                              })}
                            </SocialIconsList>
                          )}
                        </div>
                      )}
                    </Nav>
                  </ContentWrapper>
                </PosedNavColumn>
              )}
              {!mobile && (
                <PosedNavColumn
                  desktopbg={expanded && !mobile ? '#1B1B1B' : 'transparent'}
                  mobilebg={expanded && mobile ? '#000' : 'transparent'}
                >
                  <ContentWrapper
                    scrolling={scrolling ? scrolling.toString() : undefined}
                  >
                    {locations.primary.content &&
                      locations.primary.content.text && (
                        <ContactInformationWrapper>
                          <a href={`tel:${locations.primary.content.text}`}>
                            {locations.primary.content.text}
                          </a>
                        </ContactInformationWrapper>
                      )}

                    {locations.items && locations.items.length > 0 && (
                      <LocationsList>
                        {locations.items.map((item, index) => {
                          const {
                            link: {
                              document: [doc],
                            },
                          } = item;
                          return (
                            <li
                              key={index}
                              onClick={e => {
                                e.preventDefault();
                                e.stopPropagation();
                                toggleExpanded(false);
                              }}
                            >
                              <Link to={linkResolver(doc.type, doc.uid)}>
                                {item.label}
                              </Link>
                            </li>
                          );
                        })}
                      </LocationsList>
                    )}

                    {socialLinks && socialLinks.items.length > 0 && (
                      <SocialIconsList>
                        {socialLinks.items.map((item, index) => {
                          if (item.social_item_title.text === 'Instagram') {
                            return (
                              <li key={index}>
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={item.social_item_link.url}
                                >
                                  <Instagram />
                                </a>
                              </li>
                            );
                          }
                          if (item.social_item_title.text === 'Facebook') {
                            return (
                              <li key={index}>
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={item.social_item_link.url}
                                >
                                  <Facebook />
                                </a>
                              </li>
                            );
                          }
                          if (item.social_item_title.text === 'Twitter') {
                            return (
                              <li key={index}>
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={item.social_item_link.url}
                                >
                                  <Twitter />
                                </a>
                              </li>
                            );
                          }
                          if (item.social_item_title.text === 'Linkedin') {
                            return (
                              <li key={index}>
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={item.social_item_link.url}
                                >
                                  <Linkedin />
                                </a>
                              </li>
                            );
                          }
                          if (item.social_item_title.text === 'Youtube') {
                            return (
                              <li key={index}>
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={item.social_item_link.url}
                                >
                                  <Youtube />
                                </a>
                              </li>
                            );
                          }
                          return (
                            <li key={index}>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={item.social_item_link.url}
                              >
                                Find us Here
                              </a>
                            </li>
                          );
                        })}
                      </SocialIconsList>
                    )}
                  </ContentWrapper>
                </PosedNavColumn>
              )}
            </ColumnGroup>
          </PosedMainMenu>
        )}
      </PoseGroup>
    </>
  );
};
