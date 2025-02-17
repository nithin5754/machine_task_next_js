import { FC } from "react";

const TextSection: FC<{ style: string }> = ({ style }) => {
  return (
    <div
      className={`inset-0 flex flex-col items-center justify-center text-center ${style}`}
    >
      <h1 className="text-2xl lg:text-4xl font-bold text-white">
        Where innovation meets precision
      </h1>
      <p className="text-[#FFE9D9] text-base lg:text-lg mt-4 max-w-md">
        Symphonia unites visionary thinkers, creative architects, and analytical
        experts, collaborating seamlessly to transform challenges into
        opportunities. Together, we deliver tailored solutions that drive impact
        and inspire growth.
      </p>
    </div>
  );
};

export default TextSection;
