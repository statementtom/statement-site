import React from "react";
import Slider from "react-slick";

import "./slick.css";
import "./slick-theme.css";

const Carousel = React.forwardRef(({ settings, children }, ref) => {
  return (
    <Slider ref={ref} {...settings}>
      {children}
    </Slider>
  );
});

export default Carousel;
