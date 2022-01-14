import React from "react";
import { HeroBg, HeroContainer, VideoBg } from "./Hero.Style";
import video from "../../../videos/video.mp4";
const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>
    </HeroContainer>
  );
};

export default Hero;
