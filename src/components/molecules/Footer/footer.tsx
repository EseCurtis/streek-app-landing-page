import { useMemo } from "react";

export function Footer() {
  const thisYear = useMemo(() => new Date().getFullYear(), []);
  return (
    <div className="format flex flex-col items-center p-20 bg-gradient-to-t from-black to-transparent text-center">
      <p>All Rights Reserved - StreekApp {thisYear}</p>
    </div>
  );
}
