import React, { Fragment } from "react";

import Item from "../Item";

const List = ({ items }) => {
  return (
    <Fragment>
      {items.map((item, index) => {
        return <Item key={index} item={item} />;
      })}
    </Fragment>
  );
};

export default List;
