import React from "react";

import Item from "../Item";

const List = ({ items }) => {
  return items.map((item, index) => {
    return <Item item={item} key={index} />;
  });
};

export default List;
