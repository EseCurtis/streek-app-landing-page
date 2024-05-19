import { useMemo } from "react";
import { BsArrowUp } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import { _adaptations } from "./constants";
import Image from "next/image";
import InfoContainer from "./sub-layouts/InfoContainer";
import InfoTip from "./sub-components/atoms/InfoTip";
import InfoAdaptations from "./sub-components/molecules/InfoAdaptations";
import InfoTips from "./sub-components/molecules/InfoTips";
import InfoClearfix from "./sub-components/atoms/InfoClearfix";
import AdaptationInfoContainer from "./sub-layouts/AdaptationInfoContainer";

interface IIntro {}

const Intro: React.FC<IIntro> = () => {
  return (
    <InfoContainer>
      <AdaptationInfoContainer>
        <InfoTips />
        <InfoClearfix />
        <InfoAdaptations />
      </AdaptationInfoContainer>
    </InfoContainer>
  );
};

export default Intro;
