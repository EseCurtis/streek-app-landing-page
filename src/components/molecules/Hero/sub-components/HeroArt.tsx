import { motion } from "framer-motion";
import Image from "next/image";

interface IHeroArt {}

const HeroArt: React.FC<IHeroArt> = () => {
  return (
    <motion.div className="col-span-1  justify-center my-auto items-center h-[80%]  overflow-hidden pt-10 relative hidden lg:flex">
      <div className="absolute [&:xhover~.hero-art-frame_.hero-art-image]:scale-[1] bottom-0 w-full h-[400px] z-20  bg-gradient-to-t from-black  to-transparent to-130% from-30%" />
      <motion.div
        initial={{ y: "500px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="hero-art-frame [&:xhover_.hero-art-image]:scale-[1] h-[100%] w-full overflow-hidden bg-gradient-to-t from-[#0c0f17] to-[#0c0f17] rounded-t-[2.3rem] relative"
      >
        <Image
          className="w-[100%] relative z-10"
          src={"/protoype.svg"}
          alt="proto"
          width={100}
          height={100}
          priority
        />
        <div className="w-full h-full absolute top-0 left-0 p-5 pt-7 hero-art-portal">
          <Image
            className="w-[170%] scale-[0.965] hero-art-image  transition-all"
            src={"/screenshot.jpg"}
            alt="proto"
            width={312}
            height={632}
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroArt;
