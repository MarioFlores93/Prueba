 
import { storyblokEditable } from "@storyblok/react";

const Hero = ({blok}) => {
    return(

    <h2 style={{ textAlign: "center" }} {...storyblokEditable(blok)}>
      hola
      <image alt="Hero" src={blok.image.filename}></image>
    </h2>
     
    );
}

export default Hero