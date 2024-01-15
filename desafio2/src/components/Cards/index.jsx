// eslint-disable-next-line react/prop-types
export function Cards({ name, category, price, url_img }) {
  return (
    <div className="mt-10 flex flex-col">
      <div className="flex h-48 w-full flex-col items-center justify-center bg-blue-100">
        <img src={url_img} alt="Imagem produto" className="h-36 w-56" />
      </div>

      <div className="mt-6 flex flex-col">
        <span className="mb-3 text-base font-medium">{name}</span>
        <span className="mb-6 font-medium text-blue-400">{category}</span>
        <span className="font-space-grotesk text-xl font-medium">{price}</span>
      </div>
    </div>
  );
}
