import categories from "@/utils/categories";
import { useState } from "react";
import Marquee from "react-fast-marquee";

interface ISponsorsBanner {}

const BannerMarquee = ({ left }: { left?: boolean }) => {
  return (
    <Marquee
      gradient={false}
      direction={left ? "left" : "right"}
      className="col-span-3 flex justify-between w-full relative z-20 opacity-40  format  bg-black max-w-screen overflow-x-auto  md:px-0"
    >
      {categories.map((category, key) => (
        <div
          className="text-white  col-span-1 h-auto flex items-center justify-center mt-2 mx-1 px-7 pr-5 py-2 rounded-md border border-slate-400/40"
          style={
            {
              //background: category.hexColor + "30"
            }
          }
          key={key}
        >
          <h3
            className={`text-md  font-bold uppercase gap-4  md:mt-0 flex gap-1 items-center`}
          >
            {category.label}{" "}
            <span className="text-accent">{category.icon}</span>
          </h3>
        </div>
      ))}
    </Marquee>
  );
};

const SponsorsBanner: React.FC<ISponsorsBanner> = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="flex flex-col pb-10 pt-16  bg-black">
      <BannerMarquee />
      {/* <BannerMarquee left /> */}
      {/* <BannerMarquee /> */}
    </div>
  );
};

export default SponsorsBanner;
