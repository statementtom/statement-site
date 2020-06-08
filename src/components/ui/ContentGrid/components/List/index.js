import React from "react";
import Item from "../Item";

const List = ({ items }) => {
  return items.map((item, index) => <Item item={item} key={index} />);
};

export default List;
