import React from "react";

import Item from "../Item";

const List = ({ items }) => {
  return items.map((item, index) => <Item key={index} item={item} />);
};

export default List;
