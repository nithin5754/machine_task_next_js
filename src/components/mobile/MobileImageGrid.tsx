import ImageItemBox from "../ImageItemBox";

const MobileImageGrid = ({ images }: { images: string[] }) => {
  return (
    <div className="relative w-full mx-auto flex h-[150px] justify-between  gap-4">
      {images.map((image, index) => (
        <ImageItemBox
          key={index}
          image={image}
          animation="animate-float"
          style="transform rotate-[70deg]"
        />
      ))}
    </div>
  );
};

export default MobileImageGrid;
