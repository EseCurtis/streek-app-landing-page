import { motion } from "framer-motion";
import { useRef } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

export const PricingItem = ({
  item,
  theme,
  index
}: {
  item: { title: string; description: string; benefits: string[] };
  theme: any;
  index: any;
}) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      style={{
        scrollSnapAlign: "center",
        minWidth: "calc(80%)",
        //@ts-ignore
        "--theme": theme,
        "--theme-5": `${theme}20`,
        "--theme-10": `${theme}50`,
        "--theme-20": `${theme}a9`
      }}
      className={`relative flex flex-col h-auto p-3 px-5 items-center justify-center  rounded-xl !text-xl`}
    >
      {index == 1 && (
        <div className="absolute -top-0 right-5 p-1 bg-red-500 text-[0.7rem]">
          Popular
        </div>
      )}
      <div className="flex flex-col gap-4 w-full items-start">
        <span className="bg-[var(--theme-5)] border rounded-full text-[0.6rem] border-slate-300/20 py-1 px-2 ">
          <span className="text-lg px-1">{item.title}</span>
        </span>

        <div className="flex flex-col gap-2">
          {/* <div className="flex items-end gap-2">
            <h4 className="text-2xl leading-[2rem]">{item.cost}</h4>
            <small className="text-[0.6rem] opacity-70 leading-[1.55rem]">
              {packageType.toLowerCase()}
            </small>
          </div> */}
          <p className="text-sm opacity-70">
            {item.description.length > 0 ? item.description : "No Description"}
          </p>
        </div>

        <div className=" flex flex-col gap-2 py-4">
          {item?.benefits?.map((benefit, index) => (
            <div className="flex items-center gap-2 text-[0.7rem]" key={index}>
              <FaRegCheckCircle /> <span className=""> {benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
