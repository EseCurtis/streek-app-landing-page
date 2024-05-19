import GlobalStore from "@/store/Global";
import Link from "next/link";
import { Fragment, ReactNode, useMemo } from "react";

interface INavListItem {
  label: string | ReactNode;
  target?: string;
}

const NavListItem: React.FC<INavListItem> = ({ label, target = "#" }) => {
  return (
    <div className="relative">
      <Link
        href={target}
        className="[&:hover~span]:w-full text-slate-200/70 hover:text-slate-200 transition-all"
      >
        {label}
      </Link>
      <span className="absolute -bottom-1 left-0 w-0 border-b border-accent transition-all"></span>
    </div>
  );
};

interface INavList {}

const NavList: React.FC<INavList> = () => {
  const { navActive } = GlobalStore.useState();
  const navList = useMemo(() => ["Home", "Features", "Pricing", "FAQs"], []);

  return (
    <div className="flex items-center h-full gap-8 ml-20 text-sm ">
      {navList.map((_, key) => (
        <Fragment key={key}>
          <NavListItem label={_} />
        </Fragment>
      ))}
    </div>
  );
};

export default NavList;
