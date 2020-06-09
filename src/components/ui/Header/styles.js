import styled from "@emotion/styled";
import * as RBX from "rbx";

export const HamburgerContainer = styled.div`
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

export const Navbar = styled(RBX.Navbar)`
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
  top: ${props =>
    props.hasAnnouncement && !props.scrolling ? "50px" : "0"} !important;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  transition: all 0.3s ease;
  max-width: ${props => (props.scrolling ? "150px" : "170px")};
  svg {
    display: block;
    width: 100%;
  }
`;

export const Menu = styled.div`
  position: fixed !important;
  top: ${props => (props.scrolling ? "72px" : "90px")};
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

export const ContentContainer = styled.div`
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

export const Item = styled.li`
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

export const SocialIcons = styled.ul`
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

export const Locations = styled.ul`
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

export const ContactContainer = styled(RBX.Content)`
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

export const NavColumn = styled(RBX.Column)`
  background-color: ${props => props.desktopbg};
  transition: background 0.3s ease;
  @media screen and (max-width: 768px) {
    min-width: 50vw;
    background-color: #000;
  }
`;

export const Nav = styled.nav`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 60px;
  }
`;

export const AnnouncementContainer = styled(RBX.Content)`
  background: #ce0527;
  color: #fff;
  margin-bottom: 0px !important;
  padding: 10px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  p {
    font-size: 14px;
    flex: 1 0 auto;
    text-align: center;
    margin-bottom: 0 !important;
    color: #ffffff;
  }
  a,
  strong {
    font-size: 14px;
    color: #ffffff;
  }
  a {
    text-decoration: underline;
    &:hover {
      color: #ffffff;
      text-decoration: none;
    }
  }
`;
