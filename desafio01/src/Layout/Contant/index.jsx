import { Cards } from "../../Components/Cards";

import { contents } from "../../Data";

export function Contant() {
  return (
    <section className="w-full bg-zinc-950 px-6 py-10">
      <div className="mx-auto my-0 flex max-w-5xl flex-col items-center gap-y-8">
        {contents.map((content) => (
          <Cards
            key={content.title}
            title={content.title}
            description={content.description}
            data={content.data}
          />
        ))}
      </div>
    </section>
  );
}
