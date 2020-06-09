import React from "react";
import * as S from "../../styles";
import { Speech } from "../../../Icons";

const Item = ({ item }) => {
  return (
    <div>
      <S.SpeechContainer>
        <Speech height={36} />
      </S.SpeechContainer>

      <S.Text>
        <p>{item.content.text}</p>
        <span>{item.person.text}</span>
        {item.image && item.image.url && (
          <img src={item.image.url} alt={item.image.alt} />
        )}
      </S.Text>
    </div>
  );
};

export default Item;
