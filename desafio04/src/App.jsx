import imageLogin from "./assets/image-login.svg";
import logoGoogle from "./assets/logo-google.svg";

export function App() {
  return (
    <div className="grid min-h-screen grid-cols-1 justify-items-center lg:grid lg:grid-cols-2">
      <div className="hidden w-full items-center justify-center bg-slate-50 p-6 lg:flex lg:items-center">
        <img src={imageLogin} />
      </div>
      <div className="flex w-full max-w-md flex-col place-items-center items-center justify-center p-6">
        <form className="mb-16 flex w-full flex-col">
          <span className="font-medium text-zinc-900">Bem-vindo de volta</span>
          <h1 className="mb-10 text-2xl font-semibold text-zinc-900">
            Faça login na sua conta
          </h1>
          <label htmlFor="email" className="mb-3 text-sm text-zinc-900">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            title="email"
            placeholder="Digite seu e-mail..."
            className="rounded-md border border-slate-300 bg-slate-50 p-4 text-zinc-700 placeholder:text-zinc-600 focus:outline-emerald-600"
          />
          <label htmlFor="password" className="mb-3 mt-8 text-sm text-zinc-900">
            Senha
          </label>
          <input
            type="password"
            id="password"
            title="password"
            placeholder="Digite sua senha..."
            className="mb-6 rounded-md border border-slate-300 bg-slate-50 p-4 text-zinc-700 placeholder:text-zinc-600 focus:outline-emerald-600"
          />
          <div className="mb-14 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="checkbox" />
              <label
                htmlFor="checkbox"
                className="text-sm font-medium text-zinc-900"
              >
                Lembre de mim
              </label>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
            >
              Esqueceu sua senha ?
            </a>
          </div>
          <button
            type="submit"
            className="mb-6 rounded bg-emerald-600 px-8 py-4 font-semibold text-zinc-50 hover:bg-emerald-700"
          >
            Entrar na conta
          </button>
          <div className="flex cursor-pointer items-center justify-center gap-3 rounded bg-zinc-950 px-8 py-4 hover:bg-zinc-800">
            <img src={logoGoogle} />
            <a href="#" className="rounded font-semibold text-zinc-50">
              Ou faça login com o Google
            </a>
          </div>
        </form>
        <p className="font-medium text-zinc-950">
          Não tem uma conta?
          <a href="#" className="ml-1 text-emerald-600 hover:text-emerald-700">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}
