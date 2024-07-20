import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

interface ISponsorsBanner {}

const SponsorsBanner: React.FC<ISponsorsBanner> = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="col-span-3 flex justify-between w-full relative z-20 py-3 pt-0 pb-12 format ptx-10 bg-black max-w-screen overflow-x-auto gap-4 px-7 md:px-0">
      {Array.from({ length: 5 }).map((_, key) => (
        <div
          className="text-white col-span-1 h-20 flex items-center justify-center px-4"
          key={key}
        >
          <h3 className="text-sm lg:text-4xl md:text-xl font-extrabold uppercase text-slate-400/20 mt-10 md:mt-0">
            {" "}
            {key % 2 == 0 ? (
              "SPONSOR"
            ) : (
              <span
                className="text-transparent"
                style={{
                  WebkitTextStrokeWidth: "3px",
                  WebkitTextStrokeColor: "rgb(148 163 184 / 0.2)"
                }}
              >
                SPONSOR
              </span>
            )}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default SponsorsBanner;
