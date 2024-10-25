"use client"; // Indica que este componente se ejecuta en el lado del cliente

import useCart from "@/lib/hooks/useCart"; // Importa el hook personalizado para manejar el carrito
import Link from "next/link"; // Importa el componente Link de Next.js para la navegación
import { useEffect } from "react"; // Importa el hook useEffect de React

// Componente SuccessfulPayment que muestra un mensaje de pago exitoso
const SuccessfulPayment = () => {
  const cart = useCart(); // Utiliza el hook para acceder al carrito de compras

  // Efecto para limpiar el carrito después de que se renderiza el componente
  useEffect(() => {
    cart.clearCart(); // Llama a la función para limpiar el carrito
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez al montar el componente

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5">
      {/* Mensaje de éxito en el pago */}
      <p className="text-heading4-bold text-[rgba(6,173,239,1)]">Pago Exitoso</p>
      <p>Gracias por tu compra</p>
      {/* Botón para continuar comprando que redirige a la página de inicio */}
      <Link
        href="/" // Redirige a la ruta raíz
        className="p-4 border text-base-bold hover:bg-black hover:text-white"
      >
        CONTINUAR COMPRANDO
      </Link>
    </div>
  );
};

export default SuccessfulPayment; // Exporta el componente para su uso en otras partes de la aplicación
