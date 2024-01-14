import { Cards } from "../Cards";

import { products } from "../../data/data.js";

export function Content() {
  return (
    <main className="mx-auto my-0 w-full max-w-6xl px-6 py-14">
      <h2 className="mb-3 text-center text-2xl font-semibold text-zinc-900">
        Os melhores em só lugar
      </h2>
      <p className="text-center text-base text-zinc-900">
        A marca Jordan na JordanShoes é a escolha certa para os amantes de
        sneakers que buscam estilo e conforto.
      </p>
      <div className="md:grid md:grid-cols-2 md:grid-rows-3 md:gap-x-8 md:gap-y-10">
        {products.map((product) => (
          <Cards
            key={product.name}
            name={product.name}
            category={product.category}
            price={product.price}
            url_img={product.url_img}
          />
        ))}
      </div>
    </main>
  );
}
