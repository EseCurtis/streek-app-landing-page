import StateWatcher from "@/components/atoms/StateWatcher";
import { ReactNode } from "react";

interface IContainer {
  children: ReactNode;
}

const Container: React.FC<IContainer> = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <StateWatcher />
      {children}
    </div>
  );
};

export default Container;
