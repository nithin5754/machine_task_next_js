import Image from "next/image";
import { FC } from "react";

const ImageItemBox: FC<{ image: string; animation: string; style: string }> = ({
  image,
  animation,
  style,
}) => {
  return (
    <div className={`flex justify-center ${animation}`}>
      <div
        className={`w-[100px] h-[100px] rounded-lg  transition-transform hover:scale-110 overflow-hidden ${style} `}
      >
        <Image
          src={image}
          alt="Image"
          width={100}
          height={100}
          className="w-full h-full object-cover "
        />
      </div>
    </div>
  );
};

export default ImageItemBox;
