import ReactGA from 'react-ga';

export const initGA = trackingID => {
  ReactGA.initialize(trackingID);
};

export const pageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export const GAEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
