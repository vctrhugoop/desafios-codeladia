import { createContext, useState } from "react";

import { contents } from "../utils";

export const ContentsContext = createContext({
  contents,
  filterCard: () => {},
  filtered: [],
});

export function ContentsProvider({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [cards, setCards] = useState(contents);
  const [filtered, setFiltered] = useState(contents);

  function filterCard(title) {
    const filteredCard = cards.filter((card) => {
      const cardTitle = card.title.toLowerCase();
      const targetTitle = title.toLowerCase();

      return cardTitle.includes(targetTitle);
    });

    setFiltered(filteredCard);
  }

  return (
    <ContentsContext.Provider value={{ contents: cards, filterCard, filtered }}>
      {children}
    </ContentsContext.Provider>
  );
}
