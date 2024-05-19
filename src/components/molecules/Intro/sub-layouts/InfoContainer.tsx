import { ReactNode } from "react";

interface IInfoContainer {
  children: ReactNode;
}

const InfoContainer: React.FC<IInfoContainer> = ({ children }) => {
  return (
    <div className="format py-10 pt-20">
      <div className="flex flex-col bg-accxent rounded-3xl gap-5 text-blacxk">
        <h3 className="text-5xl font-semibold">Different Adaptations</h3>
        {children}
      </div>
    </div>
  );
};

export default InfoContainer;
