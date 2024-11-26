import SimpleImage from "@/components/common/SImpleImage";
import GlobalStore, { GlobalStoreReducer } from "@/store/Global";
import { external_urls } from "@/utils/constants";
import Link from "next/link";
import { ReactNode, useMemo } from "react";
import { FaAppStore, FaBars, FaGooglePlay, FaTimes } from "react-icons/fa";
import { _misc } from "../constants";

interface IIconBubble {
  children?: ReactNode;
  className?: string;
  onClick?: (e: any) => any;
  href?: string;
  store?: boolean;
}

export const IconBubble: React.FC<IIconBubble> = ({
  children,
  className,
  onClick,
  href,
  store
}) => {
  if (store && !href) {
    return undefined;
  }
  return (
    <Link
      href={store && href ? href : "#"}
      onClick={onClick}
      className={`${className} w-9 h-9 bg-slate-300/5 border border-slate-300/10 rounded-full items-center flex justify-center cursor-pointer text-accent hover:opacity-70 transition-all aspect-square`}
    >
      {children}
    </Link>
  );
};

interface INavMisc {}

const NavMisc: React.FC<INavMisc> = () => {
  const mobileNavActive = GlobalStore.useState((s) => s.mobileNavActive);
  const { toggleMobileNavActive } = GlobalStoreReducer();
  const misc = useMemo(() => _misc, []);

  return (
    <div className="flex gap-4 items-center ml-auto">
      <IconBubble href={external_urls.playstore!} store>
        <FaGooglePlay className="text-xs" />
      </IconBubble>
      <IconBubble href={external_urls.appstore!} store>
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
              <IconBubble
                href={_.action}
                store
                className="!w-8 !h-full !bg-darth !p-0.5 overflow-clip"
              >
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
