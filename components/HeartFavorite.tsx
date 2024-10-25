"use client";

import { useUser } from "@clerk/nextjs"; // Hook para obtener información del usuario autenticado
import { Heart } from "lucide-react"; // Icono de corazón de la biblioteca lucide-react
import { useRouter } from "next/navigation"; // Hook para la navegación en Next.js
import { useEffect, useState } from "react"; // Hooks de React para manejar estado y efectos

// Interfaz para las props del componente
interface HeartFavoriteProps {
  product: ProductType; // Tipo de producto que se está manejando
  updateSignedInUser?: (updatedUser: UserType) => void; // Función opcional para actualizar el usuario autenticado
}

const HeartFavorite = ({ product, updateSignedInUser }: HeartFavoriteProps) => {
  const router = useRouter(); // Inicializa el router para la navegación
  const { user } = useUser(); // Obtiene el usuario autenticado

  // Estado para manejar la carga y el estado de "me gusta"
  const [loading, setLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Función asíncrona para obtener el usuario y su lista de deseos
  const getUser = async () => {
    try {
      setLoading(true); // Inicia el estado de carga
      const res = await fetch("/api/users"); // Solicita la información del usuario
      const data = await res.json(); // Convierte la respuesta a JSON
      // Verifica si el producto está en la lista de deseos
      setIsLiked(data.wishlist.includes(product._id));
      setLoading(false); // Termina el estado de carga
    } catch (err) {
      console.log("[users_GET]", err); // Maneja errores
    }
  };

  // Efecto para obtener la información del usuario cuando se monta el componente
  useEffect(() => {
    if (user) {
      getUser(); // Llama a la función para obtener el usuario
    }
  }, [user]); // Dependencia: se ejecuta cuando cambia el usuario

  // Maneja el evento de "me gusta" al hacer clic en el botón
  const handleLike = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault(); // Previene el comportamiento por defecto del botón
    try {
      // Verifica si el usuario está autenticado
      if (!user) {
        router.push("/sign-in"); // Redirige a la página de inicio de sesión si no está autenticado
        return;
      } else {
        // Envía una solicitud para agregar el producto a la lista de deseos
        const res = await fetch("/api/users/wishlist", {
          method: "POST",
          body: JSON.stringify({ productId: product._id }), // Envía el ID del producto
        });
        const updatedUser = await res.json(); // Obtiene la respuesta actualizada del usuario
        // Actualiza el estado de "me gusta"
        setIsLiked(updatedUser.wishlist.includes(product._id));
        // Si se proporciona, actualiza el usuario autenticado
        updateSignedInUser && updateSignedInUser(updatedUser);
      }
    } catch (err) {
      console.log("[wishlist_POST]", err); // Maneja errores
    }
  };

  return (
    <button onClick={handleLike}> {/* Botón para manejar el evento de "me gusta" */}
      <Heart fill={`${isLiked ? "red" : "white"}`} /> {/* Cambia el color del corazón según si está o no en la lista de deseos */}
    </button>
  );
};

export default HeartFavorite; // Exporta el componente
