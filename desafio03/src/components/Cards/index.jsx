// eslint-disable-next-line react/prop-types
export function Cards({ title, description, imgURL }) {
  return (
    <div className="max-w-96 overflow-hidden rounded-lg border border-violet-100">
      <img src={imgURL} alt="Imagem artigos" />
      <div className="px-4 py-6 ">
        <h3 className="mb-3 text-ellipsis text-lg font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
