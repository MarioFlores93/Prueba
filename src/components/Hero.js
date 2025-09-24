import { storyblokEditable } from "@storyblok/react";

const Hero = ({ blok }) => {
  return (
    <div
      style={{ textAlign: "center" }} {...storyblokEditable(blok)}
    >
     <img className="center" alt="ddd" src={blok.imagen.filename} />
        {blok.title} {blok.imagen.filename}
    </div>
  );
};

export default Hero;
