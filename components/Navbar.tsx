"use client"; // Indica que este componente se debe renderizar en el cliente

import useCart from "@/lib/hooks/useCart"; // Hook personalizado para manejar el carrito de compras

import { UserButton, useUser } from "@clerk/nextjs"; // Componente y hook para manejar la autenticación de usuarios
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react"; // Iconos de la biblioteca lucide-react
import Image from "next/image"; // Componente de Next.js para manejar imágenes
import Link from "next/link"; // Componente de Next.js para manejar enlaces
import { usePathname, useRouter } from "next/navigation"; // Hooks para la navegación en Next.js
import { useState } from "react"; // Hook para manejar el estado en React

const Navbar = () => {
  const pathname = usePathname(); // Obtiene la ruta actual
  const router = useRouter(); // Inicializa el router para la navegación
  const { user } = useUser(); // Obtiene el usuario autenticado
  const cart = useCart(); // Obtiene información del carrito de compras

  // Estado para manejar el menú desplegable y la consulta de búsqueda
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="sticky top-0 z-10 py-2 px-10 flex gap-2 justify-between items-center bg-white max-sm:px-2">
      <Link href="/"> {/* Enlace al inicio */}
        <Image src="/logo.png" alt="logo" width={130} height={100} /> {/* Logo de la tienda */}
      </Link>

      <div className="flex gap-4 text-base-bold max-lg:hidden"> {/* Navegación principal (escritorio) */}
        <Link
          href="/"
          className={`hover:text-[rgba(6,173,239,1)] ${pathname === "/" && "text-[rgba(6,173,239,1)]"}`}
        >
          Inicio
        </Link>
        <Link
          href={user ? "/wishlist" : "/sign-in"} // Enlace a la lista de deseos o inicio de sesión
          className={`hover:text-[rgba(6,173,239,1)] ${pathname === "/wishlist" && "text-[rgba(6,173,239,1)]"}`}
        >
          Lista de deseos
        </Link>
        <Link
          href={user ? "/orders" : "/sign-in"} // Enlace a pedidos o inicio de sesión
          className={`hover:text-[rgba(6,173,239,1)] ${pathname === "/orders" && "text-[rgba(6,173,239,1)]"}`}
        >
          Pedidos
        </Link>
      </div>

      <div className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg"> {/* Barra de búsqueda */}
        <input
          className="outline-none max-sm:max-w-[120px]" // Estilo del input
          placeholder="Buscar..."
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Actualiza el estado de la consulta
        />
        <button
          disabled={query === ""} // Deshabilita el botón si no hay consulta
          onClick={() => router.push(`/search/${query}`)} // Redirige a la página de búsqueda
        >
          <Search className="cursor-pointer h-4 w-4 hover:text-[rgba(6,173,239,1)]" /> {/* Icono de búsqueda */}
        </button>
      </div>

      <div className="relative flex gap-3 items-center"> {/* Sección del carrito y usuario */}
        <Link
          href="/cart"
          className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white max-md:hidden"
        >
          <ShoppingCart /> {/* Icono del carrito */}
          <p className="text-base-bold">Carrito ({cart.cartItems.length})</p> {/* Muestra la cantidad de artículos en el carrito */}
        </Link>

        <Menu
          className="cursor-pointer lg:hidden" // Icono de menú para pantallas pequeñas
          onClick={() => setDropdownMenu(!dropdownMenu)} // Alterna el menú desplegable
        />

        {dropdownMenu && ( // Muestra el menú desplegable si está activo
          <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden">
            <Link href="/" className="hover:text-[rgba(6,173,239,1)]">Inicio</Link>
            <Link
              href={user ? "/wishlist" : "/sign-in"}
              className="hover:text-[rgba(6,173,239,1)]"
            >
              Lista de deseos
            </Link>
            <Link
              href={user ? "/orders" : "/sign-in"}
              className="hover:text-[rgba(6,173,239,1)]"
            >
              Pedidos
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
            >
              <ShoppingCart />
              <p className="text-base-bold">Carrito ({cart.cartItems.length})</p>
            </Link>
          </div>
        )}

        {user ? ( // Si hay un usuario autenticado, muestra el botón de usuario
          <UserButton afterSignOutUrl="/sign-in" /> // Botón de usuario que redirige al inicio de sesión después de cerrar sesión
        ) : (
          <Link href="/sign-in"> {/* Si no hay usuario, muestra el icono de inicio de sesión */}
            <CircleUserRound />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar; // Exporta el componente Navbar
