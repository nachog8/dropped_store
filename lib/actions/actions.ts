// Función para obtener todas las colecciones
export const getCollections = async () => {
  const collections = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`); // Realiza una solicitud GET a la API para obtener colecciones
  return await collections.json(); // Convierte la respuesta en JSON y la devuelve
}

// Función para obtener los detalles de una colección específica
export const getCollectionDetails = async (collectionId: string) => {
  const collection = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`); // Solicita detalles de una colección por ID
  return await collection.json(); // Devuelve la respuesta en formato JSON
}

// Función para obtener todos los productos
export const getProducts = async () => {
  const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`); // Realiza una solicitud GET para obtener todos los productos
  return await products.json(); // Devuelve la respuesta en formato JSON
}

// Función para obtener los detalles de un producto específico
export const getProductDetails = async (productId: string) => {
  const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`); // Solicita detalles de un producto por ID
  return await product.json(); // Devuelve la respuesta en formato JSON
}

// Función para buscar productos por consulta
export const getSearchedProducts = async (query: string) => {
  const searchedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`); // Realiza una búsqueda de productos según la consulta
  return await searchedProducts.json(); // Devuelve la respuesta en formato JSON
}

// Función para obtener órdenes de un cliente específico
export const getOrders = async (customerId: string) => {
  const orders = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`); // Solicita las órdenes de un cliente por su ID
  return await orders.json(); // Devuelve la respuesta en formato JSON
}

// Función para obtener productos relacionados a un producto específico
export const getRelatedProducts = async (productId: string) => {
  const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`); // Solicita productos relacionados por ID de producto
  return await relatedProducts.json(); // Devuelve la respuesta en formato JSON
}
