 
import { storyblokEditable } from "@storyblok/react";

const Hero = ({block}) => {
    return(


     <div
          style={{ display: "flex", justifyContent: "space-around" }}
          {...storyblokEditable(block)}
          className="grid"
        >
        <image alt="Hero" src={block.image.filename}></image>
           {
        block.title
       }
        </div>
    

    );
}

export default Hero