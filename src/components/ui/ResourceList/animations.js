import posed from "react-pose";

import * as S from "./styles";

export const Card = posed(S.Card)({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: {
    scale: 1.025,
    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)"
  },
  press: {
    scale: 1.025,
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
  }
});
