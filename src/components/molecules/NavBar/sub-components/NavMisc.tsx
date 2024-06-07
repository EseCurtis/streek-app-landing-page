import { ReactNode, useMemo } from "react";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import { _misc } from "../constants";
import SimpleImage from "@/components/common/SImpleImage";

interface IIconBubble {
  children?: ReactNode;
  className?: string;
}

export const IconBubble: React.FC<IIconBubble> = ({ children, className }) => {
  return (
    <div
      className={`${className} w-9 h-9 bg-slate-300/5 border border-slate-300/10 rounded-full items-center flex justify-center cursor-pointer text-accent hover:opacity-70 transition-all`}
    >
      {children}
    </div>
  );
};

interface INavMisc {}

const NavMisc: React.FC<INavMisc> = () => {
  const misc = useMemo(() => _misc, []);

  return (
    <div className="flex gap-4 items-center ml-auto">
      <IconBubble>
        <FaGooglePlay className="text-xs" />
      </IconBubble>
      <IconBubble>
        <FaAppStore />
      </IconBubble>

      <div className="h-7 w-0.5 bg-slate-300/10"></div>

      <div className="flex p-1 bg-slate-300/5 border border-slate-300/10 rounded-full">
        <div className="flex items-center justify-center pr-2">
          {misc.map((_, key) => (
            <div key={key} className="w-6 h-8">
              <IconBubble className="!w-8 !h-full !bg-darth !p-0.5 overflow-clip" >
                <SimpleImage src={_.icon} className="w-full h-full rounded-full"/>
              </IconBubble>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavMisc;
