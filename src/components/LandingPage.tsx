import TitleSection from "./TitleSection";

import MiddleSection from "./MiddleSection";
import { FC } from "react";
import MobileMiddleSection from "./mobile/MobileMiddleSection";

const LandingPage: FC = () => {
  return (
    <div className="flex flex-col justify-between">
      <TitleSection
        main_title="The First Media Company crafted For the"
        sub_title="Digital First generation"
      />
      <MobileMiddleSection />
      <MiddleSection />
    </div>
  );
};

export default LandingPage;
