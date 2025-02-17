
import MobileImageGrid from "./MobileImageGrid";
import TextSection from "../TextSection";

const MobileMiddleSection = () => {
  const images1 = ["/img-1.jpeg", "/img-2.jpeg"];
  const images2 = ["/img-3.jpeg", "/img-4.jpeg"];

  return (
    <div className="relative w-full h-screen  flex flex-col gap-32 lg:hidden">
      <MobileImageGrid images={images1} />
      <TextSection style="" />
      <MobileImageGrid images={images2} />
    </div>
  );
};

export default MobileMiddleSection;
