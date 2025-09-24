import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Hero = ({ blok }) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-around" }}
      {...storyblokEditable(blok)}
      className="grid"
    >
     
        <StoryblokComponent blok={blok} key={blok._uid} />
      
    </div>
  );
};

export default Hero;
