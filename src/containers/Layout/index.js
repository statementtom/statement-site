import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import CookieConsent from 'react-cookie-consent';
import Footer from '../../components/ui/Footer';

import 'rbx/index.css';
import Header from '../../components/ui/Header';

const Layout = ({ children }) => (
  <>
    <Helmet encodeSpecialCharacters>
      <script
        type="text/javascript"
        src="https://cdns.canddi.com/p/d42f869864fbbba8e2b330f06c011ce0.js"
      />
      <div style={{ display: 'none' }}>
        <script type="text/javascript">
          var google_conversion_id = 863787978; var google_custom_params =
          window.google_tag_params; var google_remarketing_only = true;
        </script>
        <script
          type="text/javascript"
          src="https://www.googleadservices.com/pagead/conversion.js"
        />
      </div>
    </Helmet>
    <Header />
    <Global
      styles={css`
        .columns {
          margin: 0 !important;
          width: 100%;
          @media screen and (max-width: 768px) {
            overflow: hidden;
          }
          &.is-reversed {
            flex-direction: row-reverse;
          }
          &.is-reversed-mobile {
            @media screen and (max-width: 768px) {
              display: flex;
              flex-direction: column-reverse;
            }
          }
        }
        p,
        li,
        a,
        button {
          font-size: 18px;
          line-height: 30px;
        }
        html.has-navbar-fixed-top,
        body.has-navbar-fixed-top {
          padding-top: 0;
        }
        * {
          font-family: europa, sans-serif !important;
        }
        .select:not(.is-multiple):not(.is-loading)::after,
        .navbar-link:not(.is-arrowless)::after {
          border-width: 2px;
          border-color: #000;
          height: 0.525em;
          width: 0.525em;
        }
        .pt-0 {
          padding-top: 0 !important;
        }
        .pb-0 {
          padding-bottom: 0 !important;
        }
        .mb-30 {
          margin-bottom: 30px !important;
        }
        .mobile-overflow-show {
          @media screen and (max-width: 768px) {
            overflow: visible;
          }
        }
      `}
    />
    <main>{children}</main>
    <Footer />
    <CookieConsent
      location="bottom"
      buttonText="Got it"
      cookieName="cookie-consent"
      style={{ background: '#000', fontFamily: 'europa, sans-serif' }}
      buttonStyle={{
        color: '#fff',
        fontSize: '16px',
        backgroundColor: '#ce0527',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 30px',
        textTransform: 'lowercase',
      }}
      expires={150}
    >
      This website uses cookies to ensure you get the best experience on our
      website
    </CookieConsent>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
