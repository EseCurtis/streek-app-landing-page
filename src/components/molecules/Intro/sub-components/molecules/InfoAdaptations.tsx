import Image from "next/image";
import { useMemo } from "react";
import { _adaptations } from "../../constants";

interface IInfoAdaptations {}

const InfoAdaptations: React.FC<IInfoAdaptations> = () => {
  const adaptations = useMemo(() => _adaptations, []);

  return (
    <>
      {adaptations.map((adaptation, index) => (
        <div className="flex flex-col" key={index}>
          <div className="col-span-1 aspect-[1/0.7] bg-black rounded-2xl p-5 relative overflow-clip [&:hover_.art]:scale-[1.1]">
            <div className="flex relative z-10">
              <span className="bg-white px-3 py-2 flex items-center gap-1 rounded-full text-black w-auto text-sm font-semibold">
                Try it now
              </span>
            </div>
            <div className="art scale-[1] absolute top-0 left-0  transition-all">
              <Image
                className=" w-full h-full"
                alt="image"
                {...adaptation.img}
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full  bg-gradient-to-t from-black  to-transparent to-170% from-10%"></div>
          </div>

          <div className="flex flex-col py-5 gap-5">
            <h3 className="text-2xl font-semibold">{adaptation.title}</h3>
            <p className="text-sm text-slate-200/70">
              {adaptation.description}
            </p>
          </div>
        </div>
      ))}
      <div className="col-span-3 flex items-center justify-center py-5">
        <div className="bg-accent px-7 font-semibold text-sm py-5 rounded-full text-black">
          And more than 40+ other Adaptations
        </div>
      </div>
    </>
  );
};

export default InfoAdaptations;
