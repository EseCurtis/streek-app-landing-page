import { ReactNode } from "react";
import { motion } from "framer-motion";

interface IAdaptationInfoContainer {
  children: ReactNode;
}

const AdaptationInfoContainer: React.FC<IAdaptationInfoContainer> = ({
  children
}) => {
  return (
    <motion.div
      className="md:grid md:grid-cols-x3 gap-5 pt-5 w-full"
      initial={{ opacity: 0.2 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: "backInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export default AdaptationInfoContainer;
