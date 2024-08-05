import { useState } from "react";
import { IMG_ERR } from "../utils/constants";

const ImageFallback = ({ src, alt, className }) => {
  const [Image, setImage] = useState(src);
  const handleImage = () => {
    setImage(IMG_ERR);
  };
  return (
    <div>
      <img src={Image} alt={alt} className={className} onError={handleImage} />
    </div>
  );
};
export default ImageFallback;
