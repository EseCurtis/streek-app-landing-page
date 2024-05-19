import GlobalStore from "@/store/Global";
import { tl } from "@/utils/helpers/_tailwind";
import { ReactNode } from "react";

interface INavContainer {
  children: ReactNode;
}

const NavContainer: React.FC<INavContainer> = ({ children }) => {
  const { navActive } = GlobalStore.useState();

  return (
    <div className={`${tl(navActive, "border-b !border-slate-400/20 bg-darth")} border-b border-transparent transition-all w-full h-[6rem] flex items-center py-4 gap-4 format fixed top-0 z-30 `}>
      {children}
    </div>
  );
};

export default NavContainer;
