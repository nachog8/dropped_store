import ProductCard from "@/components/ProductCard"; // Importa el componente ProductCard para mostrar productos
import { getCollectionDetails } from "@/lib/actions/actions"; // Función para obtener detalles de la colección
import Image from "next/image"; // Componente de Next.js para mostrar imágenes
import React from "react"; // Importa React para utilizar JSX

// Componente CollectionDetails que recibe los parámetros de la colección
const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string }; // Define que espera recibir un objeto con el id de la colección
}) => {
  // Obtiene los detalles de la colección utilizando el id proporcionado
  const collectionDetails = await getCollectionDetails(params.collectionId);

  // Renderiza el contenido de la colección
  return (
    <div className="px-10 py-5 flex flex-col items-center gap-8">
      {/* Muestra la imagen de la colección */}
      <Image
        src={collectionDetails.image} // URL de la imagen de la colección
        width={1500} // Ancho de la imagen
        height={1000} // Altura de la imagen
        alt="collection" // Texto alternativo para la imagen
        className="w-full h-[400px] object-cover rounded-xl" // Clases de estilo para la imagen
      />
      {/* Título de la colección */}
      <p className="text-heading3-bold text-grey-2">{collectionDetails.title}</p>
      {/* Descripción de la colección */}
      <p className="text-body-normal text-grey-2 text-center max-w-[900px]">
        {collectionDetails.description}
      </p>
      {/* Sección para mostrar los productos de la colección */}
      <div className="flex flex-wrap gap-16 justify-center">
        {collectionDetails.products.map((product: ProductType) => (
          // Renderiza un ProductCard para cada producto en la colección
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CollectionDetails; // Exporta el componente para su uso en otras partes de la aplicación

// Esta línea permite que el contenido se renderice de forma dinámica
export const dynamic = "force-dynamic";
