import { ReactNode } from "react";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";

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
  return (
    <div className="flex gap-4 items-center ml-auto">
      <IconBubble>
        <FaGooglePlay className="text-xs" />
      </IconBubble>
      <IconBubble>
        <FaAppStore />
      </IconBubble>

      <IconBubble className="!w-16"></IconBubble>
    </div>
  );
};

export default NavMisc;
