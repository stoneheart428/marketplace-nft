import React from "react";
import { CardGridWrapper } from "./styles";
import { MarketCard } from "../../components";
import { cardData, packData } from "./data";
import { CardActionTypes } from "../../types";

export const MCardGridSection: React.FC<{
  onCardClick: (id: string | number, action: CardActionTypes) => void;
  page?: string;
}> = ({ onCardClick, page }) => {
  return (
    <CardGridWrapper>
      {!page &&
        cardData.map((item, key) => (
          <MarketCard key={key} {...item} onCard={onCardClick} />
        ))}
      {page === "packs" &&
        packData.map((item, key) => (
          <MarketCard key={key} {...item} onCard={onCardClick} />
        ))}
    </CardGridWrapper>
  );
};
