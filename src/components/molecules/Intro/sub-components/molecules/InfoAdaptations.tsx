import { external_urls } from "@/utils/constants";
import Link from "next/link";
import { useMemo } from "react";
import { _adaptations } from "../../constants";
import { AdaptationItem } from "./adaptation-item";

interface IInfoAdaptations {}

const InfoAdaptations: React.FC<IInfoAdaptations> = () => {
  const adaptations = useMemo(() => _adaptations, []);

  return (
    <>
      {adaptations.map((adaptation, index) => (
        <AdaptationItem index={index} key={index} adaptation={adaptation} />
      ))}
      <div className="col-span-3 flex items-center justify-center py-5">
        <Link
          href={external_urls.autodetect_store()}
          target="_blank"
          className="text-accent hover:opacity-70 bg-slate-300/5 border border-slate-300/10 px-7 font-semibold text-sm py-5 rounded-full "
        >
          And more than 40+ other Adaptations
        </Link>
      </div>
    </>
  );
};

export default InfoAdaptations;
