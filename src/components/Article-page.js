import { storyblokEditable } from "@storyblok/react";

const Article_page = ({ blok }) => {
  return (
    <div
      style={{ textAlign: "center" }} {...storyblokEditable(blok)}
    >
      
        {blok.title}  
    </div>
  );
};

export default Article_page;
