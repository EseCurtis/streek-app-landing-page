import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import { IconBubble } from "../NavBar/sub-components/NavMisc";
import HeroContainer from "./sub-layouts/HeroContainer";
import Image from "next/image";
import HeroArt from "./sub-components/HeroArt";
import HeroInfo from "./sub-components/HeroInfo";

interface IHero {}

const Hero: React.FC<IHero> = () => {
  return (
    <HeroContainer>
      <HeroInfo />
      <HeroArt />
    </HeroContainer>
  );
};

export default Hero;
