// Definición del tipo CollectionType
type CollectionType = {
  _id: string; // Identificador único de la colección
  title: string; // Título de la colección
  products: number; // Número de productos en la colección
  image: string; // URL de la imagen de la colección
};

// Definición del tipo ProductType
type ProductType = {
  _id: string; // Identificador único del producto
  title: string; // Título del producto
  description: string; // Descripción del producto
  media: [string]; // Lista de URLs de medios (imágenes, videos) del producto
  category: string; // Categoría del producto
  collections: [string]; // Lista de identificadores de colecciones a las que pertenece el producto
  tags: [string]; // Lista de etiquetas asociadas al producto
  price: number; // Precio del producto
  cost: number; // Costo del producto
  sizes: [string]; // Lista de tamaños disponibles para el producto
  colors: [string]; // Lista de colores disponibles para el producto
  createdAt: string; // Fecha de creación del producto
  updatedAt: string; // Fecha de última actualización del producto
};

type UserType = {
  clerkId: string; // Identificador del usuario en el sistema de gestión
  wishlist: [string]; // Lista de identificadores de productos en la lista de deseos del usuario
  createdAt: string; // Fecha de creación del usuario
  updatedAt: string; // Fecha de última actualización del usuario
};

// Definición del tipo OrderType
type OrderType = {
  shippingAddress: Object; // Dirección de envío del pedido
  _id: string; // Identificador único del pedido
  customerClerkId: string; // Identificador del cliente en el sistema de gestión
  products: [OrderItemType]; // Lista de productos en el pedido
  shippingRate: string; // Tarifa de envío del pedido
  totalAmount: number; // Monto total del pedido
}

// Definición del tipo OrderItemType
type OrderItemType = {
  product: ProductType; // Información del producto
  color: string; // Color del producto
  size: string; // Tamaño del producto
  quantity: number; // Cantidad del producto
  _id: string; // Identificador único del ítem del pedido
}