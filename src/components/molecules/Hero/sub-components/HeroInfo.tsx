import { external_urls } from "@/utils/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { IconBubble } from "../../NavBar/sub-components/NavMisc";

interface IHeroInfo {}

const HeroInfo: React.FC<IHeroInfo> = () => {
  return (
    <div className="col-span-2 flex flex-col h-full justify-center md:gap-7 gap-4 relative z-20  items-centder md:items-start">
      <motion.h1
        initial={{ x: "-500px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="md:text-6xl font-bold leading-tight text-centxer md:text-left text-5xl "
      >
        Embrace Freedom, <br />
        Break Persistent <br />
        Bad Habits
      </motion.h1>

      <motion.p
        initial={{ x: "-500px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.67, delay: 0.11 }}
        className="text-slate-200/70 md:max-w-[70%] md:leading-[2rem] leading-[1.7rem] text-sm md:text-sm  text-cenxter md:text-left "
      >
        Streek is a revolutionary app designed to help you manage and overcome
        your habits. With its intuitive and user-friendly interface, Streek
        makes habit tracking a breeze.
      </motion.p>

      <motion.div
        initial={{ scale: "-500px", opacity: 0 }}
        animate={{ scale: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2.4 }}
        className="flex gap-4 items-center mt-4 md:mt-0"
      >
        <IconBubble
          href={external_urls.playstore!}
          store
          className="!w-[3rem] !h-[3rem] aspect-square"
        >
          <FaGooglePlay className="text-xs" />
        </IconBubble>
        <IconBubble
          href={external_urls.appstore!}
          store
          className="!w-[3rem] !h-[3rem] aspect-square"
        >
          <FaAppStore />
        </IconBubble>

        <Link
          href={external_urls.autodetect_store()}
          target="_blank"
          className="ml-3 text-accent flex items-center gap-1"
        >
          Download Now <MdArrowOutward />
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroInfo;
