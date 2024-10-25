import Gallery from "@/components/Gallery"; // Importa el componente de galería para mostrar imágenes del producto
import ProductCard from "@/components/ProductCard"; // Importa el componente de tarjeta de producto para mostrar productos relacionados
import ProductInfo from "@/components/ProductInfo"; // Importa el componente que muestra la información del producto
import { getProductDetails, getRelatedProducts } from "@/lib/actions/actions"; // Importa funciones para obtener detalles del producto y productos relacionados

// Componente ProductDetails que muestra información detallada de un producto y productos relacionados
const ProductDetails = async ({ params }: { params: { productId: string } }) => {
  // Obtiene los detalles del producto y los productos relacionados usando el ID del producto
  const productDetails = await getProductDetails(params.productId);
  const relatedProducts = await getRelatedProducts(params.productId);

  return (
    <>
      <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
        {/* Componente para mostrar las imágenes del producto */}
        <Gallery productMedia={productDetails.media} />
        {/* Componente que muestra la información del producto */}
        <ProductInfo productInfo={productDetails} />
      </div>

      <div className="flex flex-col items-center px-10 py-5 max-md:px-3">
        <p className="text-heading3-bold">Productos relacionados</p>
        {/* Sección que muestra los productos relacionados */}
        <div className="flex flex-wrap gap-16 mx-auto mt-8">
          {relatedProducts?.map((product: ProductType) => (
            // Mapeo de los productos relacionados a tarjetas de producto
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

// Configura la propiedad dinámica del componente
export const dynamic = "force-dynamic"; 

export default ProductDetails; // Exporta el componente para su uso en otras partes de la aplicación
