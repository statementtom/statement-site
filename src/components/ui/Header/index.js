import React, { useEffect } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Navbar, Column, Content } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import styled from "@emotion/styled";
import posed, { PoseGroup } from "react-pose";
import { useMedia, useWindowScroll, useToggle } from "react-use";
import {
  Hamburger,
  Logo,
  Close,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube
} from "../Icons";
import { linkResolver } from "../../../util/links";

import * as S from "./styles";
import * as Animated from "./animations";

export default () => {
  const {
    prismicNavigation: { data }
  } = useStaticQuery(graphql`
    query Header {
      prismicNavigation {
        data {
          announcement_banner {
            html
            text
          }
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
  const mobile = useMedia("(max-width: 768px)");
  const { y: scrollY } = useWindowScroll();

  const [expanded, toggleExpanded] = useToggle(false);
  const [scrolling, toggleScrolling] = useToggle(false);

  const [navItems] = data.body.filter(
    item => item.__typename === "PrismicNavigationBodyNavigationItem"
  );
  const [socialLinks] = data.body.filter(
    item => item.__typename === "PrismicNavigationBodySocialLink"
  );
  const [locations] = data.body.filter(
    item => item.__typename === "PrismicNavigationBodyLocations"
  );

  useEffect(() => {
    const html = document.querySelector("html");
    if (scrollY > 0) {
      toggleScrolling(true);
    } else {
      toggleScrolling(false);
    }

    if (expanded) {
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = "scroll";
    }
  }, [expanded, scrollY, toggleScrolling]);

  return (
    <>
      {data.announcement_banner.text && (
        <S.AnnouncementContainer
          dangerouslySetInnerHTML={{
            __html: data.announcement_banner.html
          }}
        />
      )}
      <header>
        <S.Navbar
          hasAnnouncement={data.announcement_banner.text}
          scrolling={scrolling ? scrolling.toString() : undefined}
          fixed="top"
          s="1"
        >
          <ColumnGroup className="is-mobile is-multiline">
            <S.NavColumn
              mobile={{ size: 4 }}
              tablet={{ size: 6 }}
              desktop={{ size: 6 }}
              desktopbg={expanded && !mobile ? "#000" : "transparent"}
              transparent="true"
            >
              <S.LogoContainer
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
              </S.LogoContainer>
            </S.NavColumn>
            <S.NavColumn
              mobile={{ size: 6 }}
              tablet={{ size: 6 }}
              desktop={{ size: 6 }}
              desktopbg={expanded && !mobile ? "#1B1B1B" : "transparent"}
              transparent="true"
            >
              <S.HamburgerContainer
                onClick={() => {
                  toggleExpanded(!expanded);
                }}
              >
                {!expanded && (
                  <Animated.Toggle style={{ paddingRight: 10 }}>
                    <p>Menu</p>
                    <Hamburger height={24} width={24} />
                  </Animated.Toggle>
                )}
                {expanded && (
                  <Animated.Toggle style={{ paddingRight: 10 }}>
                    <p>Close</p>
                    <Close height={17} width={17} />
                  </Animated.Toggle>
                )}
              </S.HamburgerContainer>
            </S.NavColumn>
          </ColumnGroup>
        </S.Navbar>
      </header>
      <PoseGroup>
        {expanded && (
          <Animated.Menu
            scrolling={scrolling ? scrolling.toString() : undefined}
            expanded={expanded}
            key="menu"
          >
            <ColumnGroup style={{ height: "100%" }}>
              {navItems && navItems.items.length > 0 && (
                <Animated.NavColumn
                  reverse="true"
                  desktopbg={expanded && !mobile ? "#000" : "transparent"}
                  mobilebg={expanded && mobile ? "#000" : "transparent"}
                >
                  <S.ContentContainer
                    scrolling={scrolling ? scrolling.toString() : undefined}
                  >
                    <S.Nav>
                      <Animated.Items>
                        {navItems.items.map((item, index) => (
                          <Animated.Item key={index}>
                            <Link
                              activeClassName="active"
                              onClick={() => {
                                toggleExpanded(false);
                              }}
                              to={
                                item.navigation_link
                                  ? `/${item.navigation_link.uid}`
                                  : "/"
                              }
                            >
                              {item.navigation_label.text}
                            </Link>
                          </Animated.Item>
                        ))}
                      </Animated.Items>
                      {mobile && (
                        <div>
                          {locations.items && locations.items.length > 0 && (
                            <S.Locations>
                              {locations.items.map((item, index) => {
                                const {
                                  link: {
                                    document: [doc]
                                  }
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
                            </S.Locations>
                          )}
                          {socialLinks && socialLinks.items.length > 0 && (
                            <S.SocialIcons>
                              {socialLinks.items.map((item, index) => {
                                if (
                                  item.social_item_title.text === "Instagram"
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
                                  item.social_item_title.text === "Facebook"
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
                                if (item.social_item_title.text === "Twitter") {
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
                                  item.social_item_title.text === "Linkedin"
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
                                if (item.social_item_title.text === "Youtube") {
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
                            </S.SocialIcons>
                          )}
                        </div>
                      )}
                    </S.Nav>
                  </S.ContentContainer>
                </Animated.NavColumn>
              )}
              {!mobile && (
                <Animated.NavColumn
                  desktopbg={expanded && !mobile ? "#1B1B1B" : "transparent"}
                  mobilebg={expanded && mobile ? "#000" : "transparent"}
                >
                  <S.ContentContainer
                    scrolling={scrolling ? scrolling.toString() : undefined}
                  >
                    {locations.primary.content &&
                      locations.primary.content.text && (
                        <S.ContactContainer>
                          <a href={`tel:${locations.primary.content.text}`}>
                            {locations.primary.content.text}
                          </a>
                        </S.ContactContainer>
                      )}

                    {locations.items && locations.items.length > 0 && (
                      <S.Locations>
                        {locations.items.map((item, index) => {
                          const {
                            link: {
                              document: [doc]
                            }
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
                      </S.Locations>
                    )}

                    {socialLinks && socialLinks.items.length > 0 && (
                      <S.SocialIcons>
                        {socialLinks.items.map((item, index) => {
                          if (item.social_item_title.text === "Instagram") {
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
                          if (item.social_item_title.text === "Facebook") {
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
                          if (item.social_item_title.text === "Twitter") {
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
                          if (item.social_item_title.text === "Linkedin") {
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
                          if (item.social_item_title.text === "Youtube") {
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
                      </S.SocialIcons>
                    )}
                  </S.ContentContainer>
                </Animated.NavColumn>
              )}
            </ColumnGroup>
          </Animated.Menu>
        )}
      </PoseGroup>
    </>
  );
};
