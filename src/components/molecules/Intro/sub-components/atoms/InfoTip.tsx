import { ReactNode } from "react";

interface IInfoTip {
  children: ReactNode;
}

const InfoTip: React.FC<IInfoTip> = ({ children }) => {
  return (
    <div className="col-span-1 h-full ">
      <p className="text-slate-200/70 text-sm leading-[1.7rem]">
        {children}
      </p>
    </div>
  );
};

export default InfoTip;
