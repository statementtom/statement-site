import posed from "react-pose";

import * as S from "./styles";

export const Menu = posed(S.Menu)({
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 1
  }
});

export const Toggle = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

export const NavColumn = posed(S.NavColumn)({
  enter: {
    x: "0",
    transition: {
      duration: 400,
      ease: "easeInOut"
    }
  },
  exit: {
    x: props => (props.reverse ? "-100%" : "110%"),
    transition: {
      duration: 400,
      ease: "easeInOut"
    }
  }
});

export const Items = posed.ul({
  enter: {
    staggerChildren: 20
  },
  exit: {
    staggerChildren: 20,
    staggerDirection: -1
  }
});

export const Item = posed(S.Item)({
  enter: {
    y: "0%",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 300
    }
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 0
    }
  }
});
