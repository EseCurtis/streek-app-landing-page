import Emulator from "@/components/common/Emulator";
import { useRef, useState } from "react";
import KeyFeatures from "./sub-components/KeyFeatures";

interface IFeatures {}

const Features: React.FC<IFeatures> = () => {
  const emulatorRef = useRef<HTMLDivElement>(null);
  const [displayImage, setDisplayImage] = useState<string>("/period-tracking.jpg");

  return (
    <div className="format py-10 md:pt-20 pt-[40vh] relative " id="features">
      <div className="md:grid md:grid-cols-4 px-7 gap-10">
        <div className="col-span-2 p-10 !pt-0 absolute -z-0 md:flex md:static h-screen w-screen left-0 -top-[25vh] scale-[0.6] md:scale-[unset] md:h-screen sm:h-auto sm:w-auto  ">
          <Emulator
            src={"/images/screenshots"+displayImage}
            emulatorRef={emulatorRef}
            className="from-darth"
          />
        </div>

        <KeyFeatures emulatorRef={emulatorRef} setDisplay={setDisplayImage} />
      </div>
    </div>
  );
};

export default Features;
