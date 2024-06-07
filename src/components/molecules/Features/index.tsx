import { useRef, useState } from "react";
import { _keyFeatures } from "./constants";
import Emulator from "@/components/common/Emulator";
import KeyFeatures from "./sub-components/KeyFeatures";

interface IFeatures {}

const Features: React.FC<IFeatures> = () => {
  const emulatorRef = useRef<HTMLDivElement>(null);
  const [displayImage, setDisplayImage] = useState<string>("/screenshot.jpg");

  return (
    <div className="format py-10 pt-20 ">
      <div className="grid grid-cols-4 px-7 gap-10">
        <div className="col-span-2 p-10 !pt-0">
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
