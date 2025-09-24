import { storyblokEditable } from "@storyblok/react";

const Hero = ({ blok }) => {
  return (
    <div
      style={{ textAlign: "center" }} {...storyblokEditable(blok)}
    >
     
        {blok.title}
      
    </div>
  );
};

export default Hero;
