import { storyblokEditable } from "@storyblok/react";
import { FaCheckCircle } from 'react-icons/fa'; // Usamos react-icons para los checks

const Article_page = ({ blok }) => {
  return (
    <div
      style={{ textAlign: "center" }} {...storyblokEditable(blok)}
    >

 <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md overflow-hidden font-sans">
      {/* Imagen de cabecera */}
      <img 
        src={blok.image.filename} 
        alt="Mujer durmiendo entre nubes" 
        className="w-full object-cover"
      />

      {/* Contenido del artículo */}
      <div className="p-6">
        {/* Etiqueta */}
        <span className="inline-block text-blue-700 bg-blue-100 text-sm font-medium px-3 py-1 rounded-full mb-3">
          🛌 Sueño
        </span>

        {/* Título */}
        <h2 className="text-xl font-bold leading-snug text-gray-900 mb-2">
        {blok.title}  
        </h2>

        {/* Metadatos */}
        <p className="text-gray-500 text-sm mb-4">
          {blok.published_date}  • {blok.read_time} min de lectura
        </p>

        {/* Autor */}
        <div className="flex items-center gap-3 mb-4">
          <img 
            src="https://via.placeholder.com/40" 
            alt="Dr. Sebastian Arrieta" 
            className="w-9 h-9 rounded-full"
          />
          <span className="text-sm font-medium text-gray-800">Dr. Sebastian Arrieta</span>
        </div>

        {/* Resumen */}
        <div className="border-t pt-4 mt-2">
          <h3 className="text-base font-semibold mb-1">Resumen</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Dormir no es solo un reajuste diario; es un pilar fundamental de la salud que afecta prácticamente todos los aspectos del cuerpo y la mente. Sin embargo, en un mundo impulsado por la productividad, el sueño a menudo queda relegado a un segundo plano. Este artículo explora la ciencia del sueño y sus profundos efectos a largo plazo en la salud y el bienestar general.
          </p>
 {/* Por Qué Dormir es Esencial */}
      <section>
        <h2 className="text-xl font-bold mb-3">Por Qué Dormir es Esencial</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm leading-relaxed">
          <li>
            <span className="font-medium">Reparación y recuperación celular:</span> Durante el sueño profundo, el cuerpo repara tejidos, desarrolla músculos y sintetiza proteínas. Esto es crucial para la recuperación del desgaste diario, especialmente si se realiza actividad física.
          </li>
          <li>
            <span className="font-medium">Desintoxicación cerebral:</span> El sistema glinfático, activo durante el sueño, elimina toxinas del cerebro, incluyendo la beta-amiloide, relacionada con la enfermedad de Alzheimer.
          </li>
          <li>
            <span className="font-medium">Consolidación de la memoria:</span> El sueño ayuda a consolidar los recuerdos y a mejorar el aprendizaje al fortalecer las conexiones neuronales formadas durante el día.
          </li>
        </ol>
      </section>
       {/* Beneficios del Sueño */}
      <section>
        <h2 className="text-xl font-bold mb-3">Beneficios del Sueño</h2>
        <ul className="space-y-2 text-sm">
          {[
            'Mejor Salud Cardiovascular',
            'Mejor Metabolismo y Control de Peso',
            'Sistema Inmunitario Más Fuerte',
            'Estabilidad Mental'
          ].map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <FaCheckCircle className="text-blue-600 mt-0.5" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Reflexiones Finales */}
      <section>
        <h2 className="text-xl font-bold mb-3">Reflexiones Finales</h2>
        <p className="text-sm leading-relaxed">
          El sueño es fundamental para una buena salud y ningún atajo puede reemplazarlo. Priorizar el descanso es una inversión en tu bienestar físico, mental y emocional.
        </p>
      </section>
   


        </div>


      </div>
    </div>
    </div>
  );
};

export default Article_page;
