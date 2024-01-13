import { useState } from "react";

import { RiHeart3Line, RiHeart3Fill } from "react-icons/ri";

export function Button() {
  const [isCrecked, setCrecked] = useState(false);

  const icon = isCrecked ? <RiHeart3Fill /> : <RiHeart3Line />;

  const handleCheck = () => {
    setCrecked((prevState) => !prevState);
  };

  return <button onClick={handleCheck}>{icon}</button>;
}
