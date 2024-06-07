import Image from "next/image";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { _adaptations } from "../../constants";
import Link from "next/link";

interface IInfoAdaptations {}

const InfoAdaptations: React.FC<IInfoAdaptations> = () => {
  const adaptations = useMemo(() => _adaptations, []);

  return (
    <>
      {adaptations.map((adaptation, index) => (
        <motion.div
          key={index}
          className="flex flex-col"
          initial={{ scale: 0.8, opacity: 0.2 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: .5,
            ease: "backInOut",
            delay: (index + 2) / 10
          }}
        >
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
            <p className="text- text-slate-200/70 leading-[1.7rem] text-sm">
              {adaptation.description}
            </p>
          </div>
        </motion.div>
      ))}
      <div className="col-span-3 flex items-center justify-center py-5">
        <Link
          href=""
          className="text-accent hover:opacity-70 bg-slate-300/5 border border-slate-300/10 px-7 font-semibold text-sm py-5 rounded-full "
        >
          And more than 40+ other Adaptations
        </Link>
      </div>
    </>
  );
};

export default InfoAdaptations;
