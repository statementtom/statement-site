import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

import * as S from "./styles";

const mobilePlus = `<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="581.26000977 1265.19348145 1911.64257813 393.12670898"
height="30"
>
<path
  fill="#fff"
  d="M2071.08 1413.81c-24.35 0-44.33 8.48-58.53 24.68l2.75-14.28c.87-4.52-2.21-8.34-6.73-8.34s-9.08 3.82-9.94 8.34l-42.07 218.41c-.87 4.52 2.21 8.34 6.73 8.34s9.08-3.82 9.95-8.34l15.62-81.12c5.75 10.37 19.09 24.59 49.04 24.59 23.43 0 43.08-7.2 58.42-21.42 15.83-14.67 26.63-36.5 32.1-64.9 5.47-28.38 3.06-50.16-7.14-64.73-9.86-14.08-26.76-21.23-50.2-21.23zm-30.23 157c-35.63 0-49.73-24.56-40.78-71.02 9.04-46.9 31.59-70.68 67.04-70.68 38.74 0 53.11 23.12 43.95 70.68-9.34 48.45-31.65 71.02-70.21 71.02zm393.23-80.25c-21.13-7.84-41.1-15.24-37.3-34.94 1.91-9.9 9.94-26.52 42.31-26.52 18.19 0 29.67 5.03 39.62 17.37 1.87 2.3 3.99 2.3 4.9 2.3 4.14 0 8.32-3.5 9.12-7.65.44-2.25.01-3.58-.98-5.35-.04-.07-.08-.14-.13-.21-10.1-14.44-26.78-21.76-49.58-21.76-33.23 0-56.96 16.02-61.94 41.81-5.94 30.87 21.39 41.21 45.51 50.33 20.84 7.88 40.54 15.32 36.89 34.2-5.14 26.67-33.1 30.65-49.32 30.65-22.36 0-36.16-6.08-46.17-20.34-.03-.04-.07-.09-.1-.13-1.24-1.53-2.89-2.3-4.89-2.3-3.69 0-8.24 3.08-9.12 7.65-.44 2.24-.01 3.56.98 5.34 6.66 12.47 26.68 25.08 56.36 25.08 37.63 0 63.4-17.18 68.94-45.95 5.92-30.67-21.19-40.72-45.1-49.58zm-50.42-119.88h-17.6l3.39-17.6c.87-4.52-2.21-8.34-6.73-8.34s-9.08 3.82-9.95 8.34l-3.39 17.6h-17.6c-4.52 0-9.07 3.82-9.94 8.34s2.21 8.34 6.73 8.34h17.6l-3.39 17.6c-.87 4.52 2.21 8.34 6.73 8.34s9.08-3.82 9.94-8.34l3.39-17.6h17.6c4.51 0 9.07-3.82 9.94-8.34.89-4.51-2.2-8.34-6.72-8.34zM986.29 1540.19c8.55 4.45 23.94 10.6 38.65 10.26 13.34 0 20.52-7.19 20.52-16.07 0-8.55-5.13-14.36-19.5-22.57-17.78-10.26-31.12-24.63-31.12-43.44 0-33.18 28.39-56.78 69.77-56.78 18.13 0 32.15 3.42 39.67 7.87l-10.94 33.52c-6.5-3.08-17.1-6.5-29.41-6.5-13.34 0-21.89 6.16-21.89 15.73 0 7.52 6.16 13 18.13 19.5 18.47 10.6 33.86 24.97 33.86 45.15 0 37.62-30.44 58.83-72.85 58.49-19.5-.34-37.63-5.48-46.51-11.63zm117.32 44.23l45.83-239.49h47.2l-18.13 92.84.68-.61c12.65-15.05 29.07-25.44 49.93-25.44 24.63 0 38.65 15.84 38.65 42.52 0 8.21-1.37 21.48-3.42 31.75l-18.47 98.44h-47.2l17.78-95.49c1.36-6.5 2.06-14.91 2.06-21.4 0-10.26-4.1-17.71-14.71-17.71-15.05 0-31.13 20.1-37.28 51.23l-15.74 83.37h-47.18zm334.85-107.16c0 58.49-37.63 108.43-93.38 108.43-42.41 0-64.98-29.42-64.98-66.02 0-57.12 37.63-108.43 94.4-108.43 44.13.01 63.96 32.16 63.96 66.02zm-110.13 41.39c0 17.1 6.84 30.78 22.92 30.78 24.96 0 38.99-44.47 38.99-73.54 0-14.02-5.48-28.38-22.23-28.38-25.66-.01-39.68 44.11-39.68 71.14zm98.85 132.3l32.83-172.6c3.77-19.5 7.52-44.72 9.58-62.47h41.73l-2.74 26.61h.68c12.65-17.74 31.13-29.65 49.93-29.65 34.54 0 48.57 27.59 48.57 59.4 0 57.47-36.25 114.07-91.66 114.07-11.63 0-22.23-1.89-27.71-6.32h-1.03l-13 70.96zm67.39-107.68c5.13 4.1 10.94 6.84 19.5 6.84 26.34 0 44.47-43.44 44.47-73.88 0-12.65-4.45-25.99-18.81-25.99-16.42 0-31.81 19.5-37.28 48.91zm114.58 41.15l31.81-168.53h47.54l-32.15 168.53zm61.23-186.27c-13.34 0-22.23-11.41-22.23-25.43 0-15.39 11.97-28.28 27.02-28.28 14.36 0 23.6 11.3 23.6 24.98-.34 17.44-13 28.74-27.7 28.74zm27.01 186.27l24.97-133.05h-21.89l6.84-35.48h21.89l1.37-8.48c3.77-19.84 11.28-39.99 27.36-53.67 12.65-10.94 29.41-15.89 46.18-15.89 11.63 0 20.18 1.64 25.65 4.03l-9.23 36.9c-4.1-1.36-8.89-2.41-15.05-2.41-15.74 0-25.32 14.97-28.05 31.05l-1.71 8.47h32.83l-6.5 35.48h-32.49l-24.97 133.05zm169.66-168.53l7.52 75.44c2.06 16.76 3.42 31 4.1 39.87h.68c3.77-8.87 7.19-22.09 14.03-40.21l28.73-75.09h49.25l-57.8 123.38c-20.52 42.41-40.36 73.32-61.91 93.5-16.76 15.73-36.6 23.49-46.18 25.54l-13-40.08c7.87-2.74 17.78-6.87 26.68-13.36 10.94-7.52 20.18-17.8 25.65-28.4 1.36-2.39 1.71-4.01 1.03-7.43l-28.39-153.14zm478 15.85c-4.52 0-9.08 3.82-9.95 8.34l-15.94 82.79c-8.65 42.17-34.55 47.93-58.83 47.93-43.73 0-44.83-24.91-40.14-49.28l18.74-97.3c.87-4.52-2.21-8.34-6.73-8.34s-9.08 3.82-9.95 8.34l-18.74 97.3c-3.77 19.61-2.43 34.25 4.13 44.74 8.22 13.16 24.96 19.83 49.74 19.83s44.08-6.68 57.38-19.83c10.6-10.49 17.59-25.13 21.36-44.74l15.68-81.44c.85-4.52-2.23-8.34-6.75-8.34zm-150.68-86.53c-4.52 0-9.08 3.82-9.95 8.34l-42.78 222.15c-.87 4.52 2.21 8.34 6.73 8.34s9.08-3.82 9.95-8.34l42.78-222.15c.87-4.53-2.21-8.34-6.73-8.34zm-1381.22-35.13c-.03.01-4.3 1.33-11.52 3.57-1.2-3.91-2.98-8.72-5.51-13.55-8.16-15.57-20.12-23.82-34.56-23.84h-.05c-1 0-2 .09-3 .18-.42-.51-.85-1.02-1.31-1.5-6.29-6.73-14.37-10.01-24.03-9.73-18.66.54-37.24 14.01-52.3 37.94-10.61 16.84-18.66 38-20.95 54.37-21.42 6.63-36.41 11.28-36.73 11.38-10.81 3.39-11.15 3.73-12.57 13.92-1.07 7.71-29.36 226.5-29.36 226.5l234.74 40.6V1309.6c-1.16.08-2.2.29-2.85.48zm-54.2 16.79c-12.42 3.85-25.98 8.05-39.59 12.26 3.83-14.65 11.08-29.24 19.99-38.8 3.31-3.56 7.95-7.52 13.44-9.79 5.17 10.76 6.28 26.02 6.16 36.33zm-25.42-49.24c4.38-.09 8.07.87 11.22 2.94-5.04 2.62-9.92 6.38-14.49 11.28-11.85 12.71-20.93 32.45-24.55 51.49-11.3 3.5-22.35 6.92-32.51 10.07 6.41-29.97 31.53-74.95 60.33-75.78zm-36.3 170.74c1.26 19.97 53.8 24.33 56.75 71.11 2.32 36.8-19.52 61.97-50.99 63.96-37.77 2.38-58.56-19.9-58.56-19.9l8-34.05s20.93 15.79 37.68 14.73c10.94-.69 14.85-9.59 14.46-15.89-1.64-26.05-44.42-24.52-47.13-67.32-2.27-36.02 21.38-72.52 73.58-75.82 20.11-1.27 30.41 3.86 30.41 3.86l-11.94 44.65s-13.31-6.06-29.1-5.07c-23.15 1.49-23.4 16.09-23.16 19.74zm74.12-125.34c-.14-9.45-1.27-22.59-5.67-33.95 14.16 2.68 21.13 18.7 24.07 28.25-5.45 1.69-11.66 3.61-18.4 5.7zM823.76 1649l97.38-24.21s-41.93-283.48-42.19-285.43c-.27-1.94-1.97-3.02-3.37-3.14s-28.82-.53-28.82-.53-16.72-16.23-23-22.38z"
/>
</svg>`;

const Slider = ({ items }) => {
  if (!items || items.length === 0) return null;
  return (
    <div className="slide-wrapper">
      {items.map((slide, index) => (
        <S.Slide key={index}>
          <Img
            fluid={slide.background_image.localFile.childImageSharp.fluid}
            alt={slide.background_image.alt}
          />
          {slide.slider_content && (
            <S.Content
              className="has-text-centered"
              dangerouslySetInnerHTML={{
                __html: `${mobilePlus} ${slide.slider_content.html}`
              }}
            />
          )}
        </S.Slide>
      ))}
    </div>
  );
};

Slider.propTypes = {
  items: PropTypes.array.isRequired
};

export default Slider;
