import { RiSearchLine } from "react-icons/ri";

export function Input() {
  return (
    <div className="font-inter flex w-full items-center gap-3 rounded-lg border border-zinc-700 bg-zinc-800 px-6 py-4">
      <span className="text-salmon text-lg">
        <RiSearchLine />
      </span>
      <input
        className="w-full bg-zinc-800 text-sm text-zinc-400 outline-0"
        type="text"
        placeholder="Pesquisar no blog"
      />
    </div>
  );
}
