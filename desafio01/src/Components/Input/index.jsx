import { useState, useContext } from "react";
import { RiSearchLine } from "react-icons/ri";

import { ContentsContext } from "../../contexts/ContentsProvider";

export function Input() {
  const { filterCard } = useContext(ContentsContext);

  const [searchCard, setSearchCard] = useState("");

  console.log(searchCard);

  function handleSearch(event) {
    setSearchCard(event.target.value);

    filterCard(event.target.value);
  }

  return (
    <div className="flex w-full items-center gap-3 rounded-lg border border-zinc-700 bg-zinc-800 px-6 py-4 font-inter">
      <span className="text-lg text-salmon">
        <RiSearchLine />
      </span>
      <input
        className="w-full bg-zinc-800 text-sm text-zinc-400 outline-0"
        type="text"
        placeholder="Pesquisar no blog"
        value={searchCard}
        onChange={handleSearch}
      />
    </div>
  );
}
