import { getCollections } from "@/lib/actions/actions"; // Importa la función para obtener colecciones
import Image from "next/image"; // Importa el componente Image de Next.js para optimizar imágenes
import Link from "next/link"; // Importa el componente Link de Next.js para la navegación entre páginas

// Componente asincrónico para mostrar las colecciones
const Collections = async () => {
  // Obtiene las colecciones desde la API
  const collections = await getCollections();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Colecciones</p> {/* Título de la sección */}

      {/* Verifica si hay colecciones disponibles */}
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">No se encontraron colecciones</p> // Mensaje si no hay colecciones
      ) : (
        // Si hay colecciones, mapea sobre ellas para mostrarlas
        <div className="flex flex-wrap items-center justify-center gap-8">
          {collections.map((collection: CollectionType) => (
            // Crea un enlace para cada colección
            <Link href={`/collections/${collection._id}`} key={collection._id}>
              <Image
                key={collection._id} // La clave única para cada imagen
                src={collection.image} // Fuente de la imagen de la colección
                alt={collection.title} // Texto alternativo para la imagen
                width={350} // Ancho de la imagen
                height={200} // Alto de la imagen
                className="rounded-lg cursor-pointer" // Clases de estilo para la imagen
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections; // Exporta el componente para usarlo en otras partes de la aplicación
