import { Button } from "../../Components/Button";

export function Cards({ title, description, data }) {
  return (
    <div className=" rounded-lg border-2 border-zinc-700 bg-zinc-900 px-6 py-8 text-zinc-100 hover:border-salmon">
      <div className="mb-5 flex items-center justify-between text-salmon">
        <span className="font-inter text-sm">{data}</span>
        <Button />
      </div>
      <h2 className="mb-4 font-space-grotesk text-xl ">{title}</h2>
      <p className="font-inter text-sm text-zinc-400">{description}</p>
    </div>
  );
}
