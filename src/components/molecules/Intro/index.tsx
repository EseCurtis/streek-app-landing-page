import InfoClearfix from "./sub-components/atoms/InfoClearfix";
import InfoAdaptations from "./sub-components/molecules/InfoAdaptations";
import InfoTips from "./sub-components/molecules/InfoTips";
import AdaptationInfoContainer from "./sub-layouts/AdaptationInfoContainer";
import InfoContainer from "./sub-layouts/InfoContainer";

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
