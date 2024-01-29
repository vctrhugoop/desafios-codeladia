import { Cards } from "./components/Cards";
import { Input } from "./components/Input";

import { useContext } from "react";
import { ContentsContext } from "./contexts/ContentsProvider";

export default function App() {
  const { filtered } = useContext(ContentsContext);
  return (
    <main className="h-dvh w-full bg-zinc-950">
      <header className=" bg-zinc-900 px-6 py-12">
        <div className="mx-auto my-0 flex max-w-5xl flex-col items-center gap-y-8">
          <h1 className="font-space-grotesk text-2xl font-medium text-salmon">
            Code<span className="text-zinc-100">lância</span>
          </h1>
          <Input />
        </div>
      </header>
      <section className="w-full bg-zinc-950 px-6 py-10">
        <div className="mx-auto my-0 flex max-w-5xl flex-col items-center gap-y-8">
          {filtered.map((content) => (
            <Cards
              key={content.title}
              title={content.title}
              description={content.description}
              data={content.data}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
