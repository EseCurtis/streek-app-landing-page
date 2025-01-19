import { external_urls } from "@/utils/constants";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export function AdaptationItem({
  index,
  adaptation
}: {
  index: any;
  adaptation: any;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger only once
  const [hasPlayed, setHasPlayed] = useState(false);

  if (isInView && !hasPlayed) {
    setHasPlayed(true);
  }

  return (
    <motion.div
      ref={ref}
      key={index}
      className="flex flex-col"
      initial={{ opacity: 0 }}
      animate={hasPlayed ? { opacity: 1 } : {}}
      transition={{
        duration: 0.5,
        ease: "backInOut",
        delay: (index + 2) / 10
      }}
    >
      <div className="col-span-1 aspect-[1/0.7] bg-black rounded-2xl p-5 relative overflow-clip [&:hover_.art]:scale-[1.1]">
        <div className="flex relative z-10">
          <Link
            href={external_urls.autodetect_store()}
            target="_blank"
            className="bg-white px-3 py-2 flex items-center gap-1 rounded-full text-black w-auto text-sm font-semibold"
          >
            Try it now
          </Link>
        </div>
        <div className="art scale-[1] absolute top-0 left-0  transition-all">
          <Image
            className=" w-full h-full"
            alt="image"
            {...adaptation.img}
            blurWidth={undefined}
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
  );
}
