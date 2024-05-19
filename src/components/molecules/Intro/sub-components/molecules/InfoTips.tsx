import { MdArrowOutward } from "react-icons/md";
import InfoTip from "../atoms/InfoTip";

interface IInfoTips {}

const InfoTips: React.FC<IInfoTips> = () => {
  return (
    <>
      <InfoTip>
        We employ some of the best techniques and methods proven to correct or
        halt various repetitive intrusive habits and traits, including various
        types of addiction.
      </InfoTip>
      <InfoTip>
        Our app employs enjoyable methods to help you track and break habits. It
        makes the process feel engaging and enjoyable, motivating you to stick
        with it.
      </InfoTip>

      <InfoTip>
        <span className="text-slate-200/70 text-sm flex w-full justify-end items-center gap-2 hover:underline cursor-pointer">
          Discover all adaptations <MdArrowOutward />
        </span>
      </InfoTip>
    </>
  );
};

export default InfoTips;
