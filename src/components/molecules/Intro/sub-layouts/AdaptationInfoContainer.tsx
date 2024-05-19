import { ReactNode } from "react";

interface IAdaptationInfoContainer {
  children: ReactNode;
}

const AdaptationInfoContainer: React.FC<IAdaptationInfoContainer> = ({
  children
}) => {
  return <div className="grid grid-cols-3 gap-5 pt-5">{children}</div>;
};

export default AdaptationInfoContainer;
