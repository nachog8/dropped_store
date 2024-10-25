import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

// Define la interfaz para un artículo del carrito
interface CartItem {
  item: ProductType;
  quantity: number;
  color?: string; // opcional
  size?: string; // opcional
}

// Define la interfaz para el estado del carrito
interface CartStore {
  cartItems: CartItem[]; // Array de artículos en el carrito
  addItem: (item: CartItem) => void; // Método para agregar un artículo
  removeItem: (idToRemove: string) => void; // Método para eliminar un artículo
  increaseQuantity: (idToIncrease: string) => void; // Método para aumentar cantidad
  decreaseQuantity: (idToDecrease: string) => void; // Método para disminuir cantidad
  clearCart: () => void; // Método para limpiar el carrito
}

// Crea el store de Zustand con persistencia
const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      cartItems: [], // Inicializa el carrito vacío
      addItem: (data: CartItem) => {
        const { item, quantity, color, size } = data;
        const currentItems = get().cartItems; // Obtiene los artículos actuales del carrito
        const isExisting = currentItems.find(
          (cartItem) => cartItem.item._id === item._id // Verifica si el artículo ya existe
        );

        if (isExisting) {
          // Si el artículo ya está en el carrito, muestra un mensaje
          return toast("El artículo ya está en el carrito");
        }

        // Agrega el nuevo artículo al carrito
        set({ cartItems: [...currentItems, { item, quantity, color, size }] });
        toast.success("Producto agregado al carrito", { icon: "🛒" });
      },
      removeItem: (idToRemove: string) => {
        // Filtra los artículos para eliminar el seleccionado
        const newCartItems = get().cartItems.filter(
          (cartItem) => cartItem.item._id !== idToRemove
        );
        set({ cartItems: newCartItems });
        toast.success("Producto eliminado del carrito");
      },
      increaseQuantity: (idToIncrease: string) => {
        // Aumenta la cantidad del artículo en el carrito
        const newCartItems = get().cartItems.map((cartItem) =>
          cartItem.item._id === idToIncrease
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        set({ cartItems: newCartItems });
        toast.success("Cantidad de productos aumentada");
      },
      decreaseQuantity: (idToDecrease: string) => {
        // Disminuye la cantidad del artículo en el carrito
        const currentItems = get().cartItems;
        const newCartItems = currentItems
          .map((cartItem) => {
            if (cartItem.item._id === idToDecrease) {
              // Verifica que la cantidad no sea cero
              const newQuantity = cartItem.quantity - 1;
              if (newQuantity <= 0) {
                // Si la cantidad llega a cero, elimina el artículo
                toast.success("Producto eliminado del carrito");
                return null; // Devolvemos null para eliminarlo luego
              }
              return { ...cartItem, quantity: newQuantity };
            }
            return cartItem;
          })
          .filter((cartItem): cartItem is CartItem => cartItem !== null); // Filtra los null para no dejar artículos sin cantidad
        set({ cartItems: newCartItems });
        toast.success("Cantidad de productos disminuida");
      },
      clearCart: () => {
        set({ cartItems: [] }); // Limpia el carrito
        toast.success("Carrito limpiado"); // Agrega un mensaje de confirmación
      },
    }),
    {
      name: "cart-storage", // Nombre para la persistencia
      storage: createJSONStorage(() => localStorage), // Almacena en localStorage
    }
  )
);

export default useCart; // Exporta el hook para usar en los componentes
