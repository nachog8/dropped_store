import { getOrders } from "@/lib/actions/actions"; // Importa la función para obtener las órdenes del usuario

import { auth } from "@clerk/nextjs"; // Importa la autenticación de Clerk para obtener el ID del usuario
import Image from "next/image"; // Componente de Next.js para mostrar imágenes

// Componente Orders que obtiene y muestra los pedidos del usuario
const Orders = async () => {
  const { userId } = auth(); // Obtiene el ID del usuario autenticado
  const orders = await getOrders(userId as string); // Llama a la función para obtener las órdenes del usuario

  console.log(orders[0].products); // Muestra los productos del primer pedido en la consola para depuración

  // Renderiza el contenido de los pedidos
  return (
    <div className="px-10 py-5 max-sm:px-3">
      <p className="text-heading3-bold my-10">Sus Pedidos</p>
      {/* Muestra un mensaje si no hay órdenes disponibles */}
      {!orders ||
        (orders.length === 0 && (
          <p className="text-body-bold my-5">Aún no tienes pedidos.</p>
        ))}

      <div className="flex flex-col gap-10">
        {/* Mapea a través de las órdenes y muestra cada una */}
        {orders?.map((order: OrderType) => (
          <div className="flex flex-col gap-8 p-4 hover:bg-grey-1" key={order._id}>
            <div className="flex gap-20 max-md:flex-col max-md:gap-3">
              <p className="text-base-bold">Orden ID: {order._id}</p>
              <p className="text-base-bold">
                Importe total: ${order.totalAmount}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {/* Mapea a través de los productos de la orden y muestra la información de cada uno */}
              {order.products.map((orderItem: OrderItemType) => (
                <div className="flex gap-4" key={orderItem.product._id}>
                  <Image
                    src={orderItem.product.media[0]} // Imagen del producto
                    alt={orderItem.product.title} // Texto alternativo para la imagen
                    width={100} // Ancho de la imagen
                    height={100} // Altura de la imagen
                    className="w-32 h-32 object-cover rounded-lg" // Clases de estilo para la imagen
                  />
                  <div className="flex flex-col justify-between">
                    {/* Muestra el título del producto */}
                    <p className="text-small-medium">
                      Titulo:{" "}
                      <span className="text-small-bold">
                        {orderItem.product.title}
                      </span>
                    </p>
                    {/* Muestra el color del producto si está disponible */}
                    {orderItem.color && (
                      <p className="text-small-medium">
                        Color:{" "}
                        <span className="text-small-bold">
                          {orderItem.color}
                        </span>
                      </p>
                    )}
                    {/* Muestra el tamaño del producto si está disponible */}
                    {orderItem.size && (
                      <p className="text-small-medium">
                        Tamaño:{" "}
                        <span className="text-small-bold">
                          {orderItem.size}
                        </span>
                      </p>
                    )}
                    {/* Muestra el precio unitario del producto */}
                    <p className="text-small-medium">
                      Precio unitario:{" "}
                      <span className="text-small-bold">{orderItem.product.price}</span>
                    </p>
                    {/* Muestra la cantidad de este producto en la orden */}
                    <p className="text-small-medium">
                      Cantidad:{" "}
                      <span className="text-small-bold">{orderItem.quantity}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders; // Exporta el componente para su uso en otras partes de la aplicación

// Esta línea permite que el contenido se renderice de forma dinámica
export const dynamic = "force-dynamic";
