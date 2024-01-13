import { Input } from "../../Components/Input";

export function Header() {
  return (
    <header className=" bg-zinc-900 px-6 py-12">
      <div className="mx-auto my-0 flex max-w-5xl flex-col items-center gap-y-8">
        <h1 className="font-space-grotesk text-salmon text-2xl font-medium">
          Code<span className="text-zinc-100">lância</span>
        </h1>
        <Input />
      </div>
    </header>
  );
}
