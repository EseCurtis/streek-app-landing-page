import { useMemo } from "react";

export function Footer() {
  const thisYear = useMemo(() => new Date().getFullYear(), []);
  return (
    <div className="format flex flex-col items-center p-20 px-5 lg:px-20 xl:p-x-20 bg-gradient-to-t from-black to-transparent text-center ">
      <p className="text-sm">
        All Rights Reserved - &copy; <b>StreekApp</b> {thisYear}
      </p>
    </div>
  );
}
