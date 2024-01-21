// eslint-disable-next-line react/prop-types
function Button({ content }) {
  return (
    <button className="w-full rounded bg-violet-600 px-8 py-3 text-sm font-bold uppercase text-zinc-50 hover:brightness-105">
      {content}
    </button>
  );
}

export default Button;
