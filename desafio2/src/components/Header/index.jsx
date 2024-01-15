import logo from "../../assets/logo-jordan.svg";

export function Header() {
  return (
    <header>
      <div className="py-2">
        <p className="text-center text-sm font-medium">
          Frete grátis para todo o Brasil
        </p>
      </div>
      <div className="flex h-96 items-center bg-image-michael-jordan bg-cover bg-center bg-no-repeat px-6">
        <div className="mx-auto my-0 w-full max-w-6xl">
          <div className="mb-10 flex w-full items-center gap-2">
            <img src={logo} alt="Logo Jordan" />
            <span className="text-center text-lg font-medium text-zinc-100">
              JordanShoes
            </span>
          </div>
          <h1 className="mb-2 text-2xl font-medium text-zinc-100">
            A melhor loja de Jordan
          </h1>
          <p className="text-base text-zinc-100">
            O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e
            o jogador Michael Jordan.
          </p>
        </div>
      </div>
    </header>
  );
}
