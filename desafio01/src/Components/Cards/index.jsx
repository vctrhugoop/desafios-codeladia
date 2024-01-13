import { RiHeart3Line } from "react-icons/ri";

export function Cards({ title, description, data }) {
  return (
    <div className=" hover:border-salmon rounded-lg border-2 border-zinc-700 bg-zinc-900 px-6 py-8 text-zinc-100">
      <div className="text-salmon mb-5 flex items-center justify-between">
        <span className="font-inter text-sm">{data}</span>
        <span className="cursor-pointer">
          <RiHeart3Line size={20} />
        </span>
      </div>
      <h2 className="font-space-grotesk mb-4 text-xl ">{title}</h2>
      <p className="font-inter text-sm text-zinc-400">{description}</p>
    </div>
  );
}
