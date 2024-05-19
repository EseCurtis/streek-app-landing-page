import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import { IconBubble } from "../../NavBar/sub-components/NavMisc";
import cmm from "cmm-util";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

interface IHeroInfo {}

const HeroInfo: React.FC<IHeroInfo> = () => {
  return (
    <div className="col-span-2 flex flex-col h-full justify-center gap-7 relative z-20">
      <motion.h1
        initial={{ x: "-500px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="text-6xl font-bold leading-tight "
      >
        Embrace Freedom, <br />
        Break Persistent <br />
        Bad Habits
      </motion.h1>

      <motion.p
        initial={{ x: "-500px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.67, delay: 0.11 }}
        className="text-slate-200/70 max-w-[70%] leading-[2rem] text-sm"
      >
        Streek is a revolutionary app designed to help you manage and overcome
        your habits. With its intuitive and user-friendly interface, Streek
        makes habit tracking a breeze.
      </motion.p>

      <motion.div
        initial={{ scale: "-500px", opacity: 0 }}
        animate={{ scale: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2.4 }}
        className="flex gap-4 items-center"
      >
        <IconBubble className="!w-[3rem] !h-[3rem]">
          <FaGooglePlay className="text-xs" />
        </IconBubble>
        <IconBubble className="!w-[3rem] !h-[3rem]">
          <FaAppStore />
        </IconBubble>

        <p className="ml-3 text-accent flex items-center gap-1">
          Download Now <MdArrowOutward />
        </p>
      </motion.div>
    </div>
  );
};

export default HeroInfo;
