import { ReactNode, useMemo } from "react";
import { FaAppStore, FaBars, FaGooglePlay, FaTimes } from "react-icons/fa";
import { _misc } from "../constants";
import SimpleImage from "@/components/common/SImpleImage";
import GlobalStore, { GlobalStoreReducer } from "@/store/Global";

interface IIconBubble {
  children?: ReactNode;
  className?: string;
  onClick?: (e: any) => any;
}

export const IconBubble: React.FC<IIconBubble> = ({
  children,
  className,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`${className} w-9 h-9 bg-slate-300/5 border border-slate-300/10 rounded-full items-center flex justify-center cursor-pointer text-accent hover:opacity-70 transition-all`}
    >
      {children}
    </div>
  );
};

interface INavMisc {}

const NavMisc: React.FC<INavMisc> = () => {
  const mobileNavActive = GlobalStore.useState((s) => s.mobileNavActive);
  const { toggleMobileNavActive } = GlobalStoreReducer();
  const misc = useMemo(() => _misc, []);

  return (
    <div className="flex gap-4 items-center ml-auto">
      <IconBubble>
        <FaGooglePlay className="text-xs" />
      </IconBubble>
      <IconBubble>
        <FaAppStore />
      </IconBubble>

      <div className="h-7 w-0.5 bg-slate-300/10 "></div>

      <IconBubble
        className="md:hidden text-white border-transparent"
        onClick={toggleMobileNavActive}
      >
        {mobileNavActive ? <FaTimes /> : <FaBars />}
      </IconBubble>

      <div className=" p-1 bg-slate-300/5 border border-slate-300/10 rounded-full  hidden lg:flex md:flex">
        <div className="flex items-center justify-center pr-2">
          {misc.map((_, key) => (
            <div key={key} className="w-6 h-8">
              <IconBubble className="!w-8 !h-full !bg-darth !p-0.5 overflow-clip">
                <SimpleImage
                  src={_.icon}
                  className="w-full h-full rounded-full"
                />
              </IconBubble>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavMisc;
