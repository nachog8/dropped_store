import ProductCard from '@/components/ProductCard'; // Importa el componente de tarjeta de producto
import { getSearchedProducts } from '@/lib/actions/actions'; // Importa la función para obtener productos según la búsqueda

// Componente SearchPage que muestra los productos encontrados en una búsqueda
const SearchPage = async ({ params }: { params: { query: string } }) => {
  // Obtiene los productos que coinciden con la consulta de búsqueda
  const searchedProducts = await getSearchedProducts(params.query);

  // Decodifica la consulta de búsqueda para mostrarla correctamente
  const decodedQuery = decodeURIComponent(params.query);

  return (
    <div className='px-10 py-5'>
      {/* Muestra el título de la página con la consulta de búsqueda */}
      <p className='text-heading3-bold my-10'>Resultados de la búsqueda para {decodedQuery}</p>
      
      {/* Muestra un mensaje si no se encontraron resultados */}
      {!searchedProducts || searchedProducts.length === 0 && (
        <p className='text-body-bold my-5'>No se encontraron resultados</p>
      )}
      
      <div className='flex flex-wrap justify-between gap-16'>
        {/* Mapea los productos encontrados a tarjetas de producto */}
        {searchedProducts?.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

// Configura la propiedad dinámica del componente
export const dynamic = "force-dynamic";

export default SearchPage; // Exporta el componente para su uso en otras partes de la aplicación
