"use client"; // Indica que este componente es del lado del cliente

import useCart from "@/lib/hooks/useCart"; // Importa el hook personalizado para manejar el carrito
import { useUser } from "@clerk/nextjs"; // Obtiene el usuario autenticado a través de Clerk
import { MinusCircle, PlusCircle, Trash } from "lucide-react"; // Iconos para manipular cantidades y eliminar artículos
import Image from "next/image"; // Utilizado para mostrar imágenes de productos
import { useRouter } from "next/navigation"; // Enrutador de Next.js para navegar entre páginas

// Componente principal del carrito
const Cart = () => {
  const router = useRouter(); // Inicializa el enrutador para redirección
  const { user } = useUser(); // Obtiene los datos del usuario autenticado
  const cart = useCart(); // Hook personalizado para gestionar los elementos del carrito

  // Calcula el total del carrito sumando precio * cantidad de cada producto
  const total = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0
  );
  const totalRounded = parseFloat(total.toFixed(2)); // Redondea el total a 2 decimales

  // Define los datos del cliente para el checkout
  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[0].emailAddress,
    name: user?.fullName,
  };

  // Función para proceder con el checkout
  const handleCheckout = async () => {
    try {
      if (!user) {
        // Redirige al inicio de sesión si el usuario no está autenticado
        router.push("sign-in");
      } else {
        // Realiza la petición POST para iniciar el proceso de pago
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
          method: "POST",
          body: JSON.stringify({ cartItems: cart.cartItems, customer }), // Envía los elementos del carrito y el cliente
        });
        const data = await res.json(); // Respuesta en formato JSON
        window.location.href = data.url; // Redirige a la URL de pago recibida
        console.log(data); // Muestra la respuesta en consola para depuración
      }
    } catch (err) {
      console.log("[checkout_POST]", err); // Muestra errores en la consola
    }
  };

  // Estructura de renderizado del carrito
  return (
    <div className="flex gap-20 py-16 px-10 max-lg:flex-col max-sm:px-3">
      <div className="w-2/3 max-lg:w-full">
        <p className="text-heading3-bold">Carrito de compras</p>
        <hr className="my-6" />

        {/* Si no hay elementos en el carrito, muestra un mensaje */}
        {cart.cartItems.length === 0 ? (
          <p className="text-body-bold">No hay ningún artículo en el carrito</p>
        ) : (
          <div>
            {/* Mapea cada elemento del carrito para mostrarlo individualmente */}
            {cart.cartItems.map((cartItem) => (
              <div className="w-full flex max-sm:flex-col max-sm:gap-3 hover:bg-grey-1 px-4 py-3 items-center max-sm:items-start justify-between">
                <div className="flex items-center">
                  {/* Imagen del producto */}
                  <Image
                    src={cartItem.item.media[0]}
                    width={100}
                    height={100}
                    className="rounded-lg w-32 h-32 object-cover"
                    alt="product"
                  />
                  <div className="flex flex-col gap-3 ml-4">
                    <p className="text-body-bold">{cartItem.item.title}</p>
                    {/* Opcional: muestra el color y tamaño si existen */}
                    {cartItem.color && (
                      <p className="text-small-medium">{cartItem.color}</p>
                    )}
                    {cartItem.size && (
                      <p className="text-small-medium">{cartItem.size}</p>
                    )}
                    <p className="text-small-medium">${cartItem.item.price}</p>
                  </div>
                </div>

                {/* Controles para ajustar cantidad */}
                <div className="flex gap-4 items-center">
                  <MinusCircle
                    className="hover:text-[rgba(6,173,239,1)] cursor-pointer"
                    onClick={() => cart.decreaseQuantity(cartItem.item._id)} // Disminuye la cantidad del producto
                  />
                  <p className="text-body-bold">{cartItem.quantity}</p>
                  <PlusCircle
                    className="hover:text-[rgba(6,173,239,1)] cursor-pointer"
                    onClick={() => cart.increaseQuantity(cartItem.item._id)} // Aumenta la cantidad del producto
                  />
                </div>

                {/* Icono para eliminar el producto del carrito */}
                <Trash
                  className="hover:text-[rgba(6,173,239,1)] cursor-pointer"
                  onClick={() => cart.removeItem(cartItem.item._id)} // Elimina el producto del carrito
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sección de resumen de compra */}
      <div className="w-1/3 max-lg:w-full flex flex-col gap-8 bg-grey-1 rounded-lg px-4 py-5">
        <p className="text-heading4-bold pb-4">
          Resumen{" "}
          <span>{`(${cart.cartItems.length} ${
            cart.cartItems.length > 1 ? "artículos" : "artículo"
          })`}</span>
        </p>
        <div className="flex justify-between text-body-semibold">
          <span>Importe total</span>
          <span>$ {totalRounded}</span> {/* Muestra el total redondeado */}
        </div>
        {/* Botón para iniciar el proceso de pago */}
        <button
          className="border rounded-lg text-body-bold bg-white py-3 w-full hover:bg-black hover:text-white"
          onClick={handleCheckout} // Llama a la función de checkout
        >
          Proceder al Pago
        </button>
      </div>
    </div>
  );
};

export default Cart; // Exporta el componente para uso en la aplicación
