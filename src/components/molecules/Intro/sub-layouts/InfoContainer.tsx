import { ReactNode } from "react";
import { motion } from "framer-motion";

interface IInfoContainer {
  children: ReactNode;
}

const InfoContainer: React.FC<IInfoContainer> = ({ children }) => {
  return (
    <div className="format py-10 pt-20">
      <div className="flex flex-col bg-accxent rounded-3xl gap-5 text-blacxk">
        <motion.h3
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "backInOut"
          }}
          className="text-5xl font-semibold"
        >
          Different Adaptations
        </motion.h3>
        {children}
      </div>
    </div>
  );
};

export default InfoContainer;
