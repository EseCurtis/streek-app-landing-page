import topoGraphic2 from "@/images/topographic-2.svg";
import { motion } from "framer-motion";

export function TopoGraphicBg({ opacity = 1 }) {
  return (
    <div
      className="absolute bottom-0 right-0 w-full h-full !bg-cover   "
      style={{
        background: `url(${topoGraphic2.src})`,
        opacity
      }}
    ></div>
  );
}

export function FadedTopoGraphicBg({
  className,
  patternClassName,
  color = "#fff",
  animate,
  opacity = 0.5
}: any) {
  return (
    <div
      className={`absolute w-full top-0 left-0 overflow-clip ${className} topographic `}
    >
      <div className="relative w-full h-full scale-105 bg-black mix-blend-screen topographic">
        <motion.div
          key={color}
          initial={animate ? { opacity: 0 } : { opacity }}
          animate={{ opacity }}
          className=" w-full h-full saturate-0 "
          transition={{ duration: 2 }}
          style={{
            opacity: 0.5
          }}
        >
          <TopoGraphicBg />
        </motion.div>
        <div
          className={`w-full h-full absolute bg-gradient-to-b from-white to-black  top-0 left-0 mix-blend-overlay  z-10 ${patternClassName}`}
          style={{
            //@ts-ignore
            "--tw-gradient-from": `${color} var(--tw-gradient-from-position)`
          }}
        ></div>
      </div>
    </div>
  );
}
