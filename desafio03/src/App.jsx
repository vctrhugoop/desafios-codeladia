import Button from "./components/Button";
import { Cards } from "./components/Cards";

import { contents } from "./utils/database/database";

import imgHero from "./assets/image-hero.png";

function App() {
  return (
    <div className="font-roboto min-h-screen">
      <div className="bg-violet-50">
        <header className="mx-auto my-0 flex max-w-7xl flex-col items-center space-y-6 px-6 py-16 text-center lg:flex-row-reverse lg:justify-between">
          <img
            src={imgHero}
            alt="Imagem hero"
            className="w-52 md:w-80 lg:w-auto "
          />
          <div className="lg: flex max-w-xl flex-col items-center space-y-6 text-center lg:items-start lg:text-left">
            <h1 className="m text-2xl font-semibold md:text-4xl">
              Encontre os{" "}
              <span className="text-violet-600">melhores artigos</span> de
              programação em um só lugar
            </h1>
            <p className="md:text-xl">
              Explore o topo da programação em um só lugar! Seu destino único
              para dicas e tendências atuais.
            </p>
            <div className="w-full md:w-48">
              <Button content="buscar artigo" />
            </div>
          </div>
        </header>
      </div>
      <div>
        <main className="mx-auto my-0 flex max-w-7xl flex-col space-y-10 px-6 py-16">
          <h2 className="text-2xl font-semibold">Artigos recomendados</h2>
          <section className="md: md: flex flex-col gap-y-12 space-y-8 md:grid md:grid-cols-2 md:gap-x-8 md:space-y-0 lg:grid-cols-3">
            {contents.map((content) => (
              <Cards
                key={content.id}
                title={content.title}
                description={content.description}
                imgURL={content.imgURL}
              />
            ))}
          </section>
        </main>
        <footer className="flex items-center justify-center bg-violet-50">
          <div className=" flex w-full max-w-3xl flex-col space-y-12 px-6 py-20">
            <h3 className="text-2xl font-semibold">Entre em contato</h3>
            <form className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Nome"
                className="rounded px-5 py-4 outline-none focus:outline-violet-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded px-5 py-4 outline-none  focus:outline-violet-500"
              />
              <textarea
                name="assunto"
                placeholder="Assunto da mensagem"
                className="h-40 resize-none rounded px-5 py-4 outline-none  focus:outline-violet-500"
              ></textarea>
              <div className="mt-4">
                <Button content="entrar em contato" />
              </div>
            </form>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
