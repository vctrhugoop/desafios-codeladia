import logo from "../../assets/logo-jordan.svg";
import bg from "../../assets/image-michael-jordan.png";

export function Header() {
  return (
    <header>
      <div className="py-2">
        <p className="text-center text-sm font-medium">
          Frete grátis para todo o Brasil
        </p>
      </div>
      <div
        className="flex h-[400px] items-center px-6"
        style={{
          background: `linear-gradient(0deg, rgba(18, 18, 20, 0.75) 0%, rgba(18, 18, 20, 0.75) 100%), url(${bg}) top / cover no-repeat`,
        }}
      >
        <div className="mx-auto my-0 w-full max-w-6xl ">
          <div className="mb-10 flex w-full items-center gap-2">
            <img src={logo} alt="Logo Jordan" />
            <span className="text-center text-lg font-medium text-zinc-100">
              JordanShoes
            </span>
          </div>
          <h1 className="mb-2 text-2xl font-medium text-zinc-100">
            A melhor loja de Jordan
          </h1>
          <p className="max-w-[354px] text-base text-zinc-100">
            O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e
            o jogador Michael Jordan.
          </p>
        </div>
      </div>
    </header>
  );
}
