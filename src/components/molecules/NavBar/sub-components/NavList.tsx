import GlobalStore from "@/store/Global";
import { tl } from "@/utils/helpers/_tailwind";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, ReactNode, useEffect, useMemo, useState } from "react";

interface INavListItem {
  label: string | ReactNode;
  target?: string;
  matches?: string[];
}

const NavListItem: React.FC<INavListItem> = ({
  label,
  target = "#",
  matches = []
}) => {
  const { activeRoute } = GlobalStore.useState((s) => s);
  const [hash, setHash] = useState("");
  const pathname = usePathname();
  const isActive = useMemo(
    () =>
      pathname == target ||
      !!matches.find((match) => {
        return pathname === match || hash == match;
      }),
    [matches, pathname, target, hash]
  );

  useEffect(() => {
    // Check if the window object is available
    if (typeof window !== "undefined") {
      // Get the initial hash
      setHash(window.location.hash);

      // Optional: Update the hash when it changes
      const onHashChange = () => {
        setHash(window.location.hash);
        window.history.pushState({}, "", window.location.hash);
      };

      window.addEventListener("hashchange", onHashChange);
      window.addEventListener("onpopstate", onHashChange);

      // Cleanup the event listener
      return () => {
        window.removeEventListener("hashchange", onHashChange);
        window.removeEventListener("onpopstate", onHashChange);
      };
    }
  }, []);

  useEffect(() => {
    // Update the hash when the router's path changes
    setHash(activeRoute.split("#")[1]);
  }, [activeRoute]);

  return (
    <div className="relative">
      <Link
        onClick={() => {
          GlobalStore.update((s) => {
            s.activeRoute = target;
          });
        }}
        href={target}
        className={`${tl(
          isActive,
          "active"
        )}   text-slate-200/70 transition-all [&.active]:text-slate-200 [&.active~span]:w-full hover:text-slate-200 [&:hover~span]:w-full`}
      >
        {label}
      </Link>
      <span className="absolute -bottom-1 left-0 w-0 border-b border-accent transition-all"></span>
    </div>
  );
};

interface INavList {}

const NavList: React.FC<INavList> = () => {
  const mobileNavActive = GlobalStore.useState((s) => s.mobileNavActive);
  const navList = useMemo(
    () => [
      {
        label: "Home",
        target: "/",
        matches: ["/home", "/"]
      },
      {
        label: "Features",
        target: "#features",
        matches: ["features"]
      },
      {
        label: "Pricing",
        target: "#pricing",
        matches: ["pricing"]
      },
      {
        label: "FAQs",
        target: "#faq",
        matches: ["faq"]
      }
    ],
    []
  );

  return (
    <div
      className={`flex transition-all md:items-center md:h-full gap-8 ml-20 text-sm fixed top-20 right-0 w-auto min-w-[40vw] h-auto md:bg-transparent bg-black/90 md:static p-5 md:p-0 md:flex-row flex-col ${tl(
        !mobileNavActive,
        "!-right-[100vw]"
      )}`}
    >
      {navList.map((_, key) => (
        <Fragment key={key}>
          <NavListItem {..._} />
        </Fragment>
      ))}
    </div>
  );
};

export default NavList;
