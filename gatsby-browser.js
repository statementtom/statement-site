import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import Transition from './src/components/transition';

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

export const wrapPageElement = ({ element, props }) => (
  <Transition {...props}>{element}</Transition>
);

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
  smoothscroll.polyfill();
  console.log(`# smoothscroll is polyfilled!`);
};
