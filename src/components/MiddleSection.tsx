"use client";

import { ImageDataArray, ImageDataArray2, ImageDataArray3 } from "@/utils/static";
import ImageItemBox from "./ImageItemBox";
import TextSection from "./TextSection";



const MiddleSection = () => {
  return (
    <div className="h-screen lg:flex lg:flex-col lg:justify-between hidden ">
      <div className="relative w-[400px] h-[100px] m-auto flex items-center justify-between ">
        {ImageDataArray.map((item:string, index:number) => (
          <ImageItemBox key={index} image={item} animation="" style="" />
        ))}
      </div>
      <div className="relative w-[900px] h-[100px]  m-auto flex items-center justify-between">
        {ImageDataArray2.map((item:string, index:number) => (
          <ImageItemBox key={index} image={item} animation="" style="" />
        ))}
        <TextSection style="absolute" />
      </div>

      <div className="relative w-[400px] h-[100px]  m-auto flex items-center justify-between">
        {ImageDataArray3.map((item:string, index:number) => (
          <ImageItemBox key={index} image={item} animation="" style="" />
        ))}
      </div>
    </div>
  );
};
export default MiddleSection;
