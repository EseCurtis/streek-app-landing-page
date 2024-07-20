import { ReactNode } from "react";
import { motion } from "framer-motion";

interface IHeroContainer {
  children?: ReactNode;
}

const HeroContainer: React.FC<IHeroContainer> = ({ children }) => {
  return (
    <div className="md:min-h-screen lg:max-h-[900px] lg:aspect-video pt-[3rem] flex  flex-col format overflow-x-clip relative bg-black ">
      <div className="grid lg:grid-cols-3 w-full px-7 relative -h-screen mb- z-20  grid-cols-2 pt-20">
        {children}
      </div>

      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="bg-red-500 opacity-50 absolute -top-40 left-0 w-full h-full"
        style={{
          background: "url(/images/timon-studler-BIk2ANMmNz4-unsplash.png)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></motion.div>
      <div className="bg-gradient-to-t from-black  to-transparent to-190% from-20% absolute top-0 left-0 w-full h-full"></div>
    </div>
  );
};

export default HeroContainer;
