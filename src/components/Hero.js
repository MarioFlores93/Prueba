import { storyblokEditable } from "@storyblok/react";

const Hero = ({ blok }) => {
  return (
    <div
      style={{ textAlign: "center" }} {...storyblokEditable(blok)}
    >
     <img className="center" alt="ddd" src={blok.filename} />
        {blok.title} {blok.filename}
    </div>
  );
};

export default Hero;
