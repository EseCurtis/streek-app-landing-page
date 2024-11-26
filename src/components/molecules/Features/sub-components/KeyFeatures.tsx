import { motion } from "framer-motion";
import React, {
  Dispatch,
  Fragment,
  RefObject,
  SetStateAction,
  useEffect,
  useMemo,
  useState
} from "react";
import { SlArrowRight } from "react-icons/sl";
import { _keyFeatures } from "../constants";

interface IKeyFeatures {
  emulatorRef: RefObject<HTMLDivElement>;
  setDisplay: Dispatch<SetStateAction<string>>;
}

interface IKeyFeatureItem {
  feature: (typeof _keyFeatures)[0];
  key: number;
  index: number;
  activeAccordion: number;
  containerHeight: number;
  setActiveAccordion: Dispatch<SetStateAction<number>>;
}

const KeyFeatureItem: React.FC<IKeyFeatureItem> = ({
  feature,
  index,
  containerHeight,
  activeAccordion,
  setActiveAccordion
}) => {
  const activeHeight = useMemo(() => (3 / 7) * 100, []);
  const inactiveHeight = useMemo(() => (1 / 7) * 100, []);
  const itemIsActive = useMemo(
    () => index === activeAccordion,
    [index, activeAccordion]
  );
  const actualHeight = useMemo(
    () =>
      ((itemIsActive ? activeHeight : inactiveHeight) / 100) * containerHeight +
      "px",
    [itemIsActive, activeHeight, inactiveHeight, containerHeight]
  );

  return (
    <Fragment>
      <div
        onClick={() => setActiveAccordion(index)}
        className={`${
          itemIsActive
            ? "gap-3  !bg-transparent !bg-gradient-to-b from-slate-300/5 pt-8 !border-slate-300/5"
            : "justify-center cursor-pointer hidden md:flex "
        } transitsion-all !transition-[all_2s] flex flex-col justify-start p-5 px-7 text-white hover:opacity-70 border hover:bg-slate-400/5 border-slate-300/10 rounded-2xl`}
        style={{
          height: actualHeight,
          opacity: 1
        }}
      >
        <div className={`flex items-center gap-5 `}>
          <div className="col-span-2">
            <div
              className={`${
                itemIsActive ? "opacity-60" : "opacity-100"
              } text-xl`}
            >
              {feature.icon}
            </div>
          </div>
          <p className="whitespace-nowrap text-lg font-x">{feature.title}</p>
          <div
            className="text-xs cursor-pointer md:hidden float-right"
            onClick={() => setActiveAccordion(index)}
          >
            {!itemIsActive ? <SlArrowRight /> : ""}
          </div>
        </div>
        {itemIsActive && (
          <motion.div
            className=" py-3 overflow-hidden px-8 mx-2 relative h-auto  mb-auto flex text-slate-200/80 leading-[1.7rem] text-sm"
            style={{
              height: itemIsActive ? "auto" : "0%",
              maxHeight: "90%"
            }}
          >
            <div className="h-full w-1  bg-slate-300/10 rounded-full absolute left-0 top-0"></div>
            {feature.description}
          </motion.div>
        )}
      </div>
    </Fragment>
  );
};

const KeyFeatures: React.FC<IKeyFeatures> = ({ emulatorRef, setDisplay }) => {
  const [activeAccordion, setActiveAccordion] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [hasFollowedDirectives, setHasFollowedDirectives] = useState(false);
  const keyFeatures = useMemo(() => _keyFeatures || [], []);

  useEffect(() => {
    setContainerHeight(emulatorRef?.current?.offsetHeight || 0);
  }, [emulatorRef, emulatorRef?.current?.offsetHeight]);

  useEffect(() => {
    if (keyFeatures) {
      const activeKeyFeature = keyFeatures[activeAccordion] || keyFeatures[0];
      const displayImageURL = activeKeyFeature?.displayImageURL;
      displayImageURL && setDisplay(displayImageURL);
    }
  }, [activeAccordion, keyFeatures, setDisplay]);

  const goNext = () => {
    setHasFollowedDirectives(true);
    if (activeAccordion >= (keyFeatures.length -1)) {
      setActiveAccordion(0);
    } else {
      setActiveAccordion(activeAccordion + 1);
    }
  };

  return (
    <div
      className="col-span-2 gap-3 pt-10 pb-20 relative z-20 max-w-screen overflow-x-clip h-auto md:h-[var(--height)]"
      style={{

        //@ts-ignore
        "--height": containerHeight
      }}
    >
      <div
        onClick={goNext}
        className="absolute -top-[40vh] -left-12 w-screen h-[40vh]  md:hidden flex items-center justify-center bg-black/10"
      >
        {!hasFollowedDirectives && (
          <p className="animate-pulse">Click to see next</p>
        )}
      </div>
      <div className="h-full flex flex-col col-span-2 w-full  gap-5">
        {keyFeatures.map((feature, index) => (
          <KeyFeatureItem
            key={index}
            index={index}
            feature={feature}
            containerHeight={containerHeight}
            activeAccordion={activeAccordion}
            setActiveAccordion={setActiveAccordion}
          />
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
