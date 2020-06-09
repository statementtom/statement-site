import React from "react";
import Item from "../Item";

const List = ({ items }) => {
  return items.map((item, index) => {
    const last = index + 1 === items.length;
    return <Item item={item} last={last} key={index} />;
  });
};

export default List;
