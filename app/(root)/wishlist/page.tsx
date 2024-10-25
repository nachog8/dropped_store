"use client"; // Indica que este es un componente del lado del cliente

import Loader from "@/components/Loader"; // Importa el componente Loader para mostrar mientras se cargan los datos
import ProductCard from "@/components/ProductCard"; // Importa el componente ProductCard para mostrar productos
import { getProductDetails } from "@/lib/actions/actions"; // Importa la función para obtener detalles de un producto
import { useUser } from "@clerk/nextjs"; // Importa el hook useUser para obtener información del usuario
import { useEffect, useState } from "react"; // Importa hooks de React

const Wishlist = () => {
  const { user } = useUser(); // Obtiene la información del usuario actual

  // Estados para manejar la carga, el usuario autenticado y la lista de deseos
  const [loading, setLoading] = useState(true);
  const [signedInUser, setSignedInUser] = useState<UserType | null>(null);
  const [wishlist, setWishlist] = useState<ProductType[]>([]);

  // Función para obtener los datos del usuario
  const getUser = async () => {
    try {
      const res = await fetch("/api/users"); // Realiza una solicitud para obtener información del usuario
      const data = await res.json(); // Convierte la respuesta en JSON
      setSignedInUser(data); // Establece el usuario autenticado
      setLoading(false); // Cambia el estado de carga a falso
    } catch (err) {
      console.log("[users_GET", err); // Maneja cualquier error en la solicitud
    }
  };

  // Efecto que se ejecuta cuando el usuario cambia
  useEffect(() => {
    if (user) {
      getUser(); // Llama a la función para obtener los datos del usuario si está autenticado
    }
  }, [user]);

  // Función para obtener los productos de la lista de deseos
  const getWishlistProducts = async () => {
    setLoading(true); // Establece el estado de carga a verdadero

    if (!signedInUser) return; // Si no hay un usuario autenticado, sale de la función

    // Obtiene los detalles de cada producto en la lista de deseos
    const wishlistProducts = await Promise.all(signedInUser.wishlist.map(async (productId) => {
      const res = await getProductDetails(productId); // Llama a la función para obtener los detalles del producto
      return res; // Devuelve el producto
    }));

    setWishlist(wishlistProducts); // Establece la lista de deseos
    setLoading(false); // Cambia el estado de carga a falso
  };

  // Efecto que se ejecuta cuando el usuario autenticado cambia
  useEffect(() => {
    if (signedInUser) {
      getWishlistProducts(); // Llama a la función para obtener los productos de la lista de deseos si hay un usuario autenticado
    }
  }, [signedInUser]);

  // Función para actualizar el usuario autenticado
  const updateSignedInUser = (updatedUser: UserType) => {
    setSignedInUser(updatedUser); // Establece el usuario actualizado
  };

  // Renderiza un loader si está cargando; de lo contrario, muestra la lista de deseos
  return loading ? <Loader /> : (
    <div className="px-10 py-5">
      <p className="text-heading3-bold my-10">Tu lista de deseos</p>
      {wishlist.length === 0 && (
        <p>No hay artículos en tu lista de deseos.</p> // Mensaje si la lista de deseos está vacía
      )}

      <div className="flex flex-wrap justify-center gap-16">
        {/* Mapea los productos en la lista de deseos a componentes ProductCard */}
        {wishlist.map((product) => (
          <ProductCard key={product._id} product={product} updateSignedInUser={updateSignedInUser} />
        ))}
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic"; // Configura la propiedad dinámica del componente

export default Wishlist; // Exporta el componente para su uso en otras partes de la aplicación
