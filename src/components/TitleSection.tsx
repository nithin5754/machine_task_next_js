import Image from "next/image";
import { FC } from "react";

const TitleSection: FC<{ main_title: string; sub_title: string }> = ({
  main_title,
  sub_title,
}) => {
  return (
    <div className="h-screen flex flex-col justify-center text-center font-[Times_New_Roman] ">
      <div className="flex flex-col justify-center mb-6">
        <div className=" flex items-center justify-center mb-8">
          <Image src={"/title_icon.png"} alt="sfd" width={200} height={200} />
        </div>
        <div className=" flex flex-col gap-8">
          <h1 className="text-white text-2xl md:text-3xl font-normal lg:text-[61px]  mb-4">
            {main_title}
          </h1>
          <h2 className="text-white text-xl md:text-2xl font-normal lg:text-[61px]  ">
            {sub_title}
          </h2>
        </div>
      </div>
    </div>
  );
};
export default TitleSection;
