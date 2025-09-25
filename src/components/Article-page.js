import { storyblokEditable } from "@storyblok/react";

const Article_page = ({ blok }) => {
  return (
    <div
      style={{ textAlign: "center" }} {...storyblokEditable(blok)}
    >
     <img className="center" alt="ddd" src={blok.imagen.filename} />
        {blok.title}  
        {blok.imagen.filename}  
        Tiempo lectura {blok.read_time}  
        Fecha publicacion {blok.published_date}  

    </div>
  );
};

export default Article_page;
