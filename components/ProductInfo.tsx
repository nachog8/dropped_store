"use client";

import { useState } from "react";
import HeartFavorite from "./HeartFavorite";
import { MinusCircle, PlusCircle } from "lucide-react";

import useCart from "@/lib/hooks/useCart";

// Componente que muestra la información de un producto
const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {
  // Estado para el color seleccionado, inicializado con el primer color del producto
  const [selectedColor, setSelectedColor] = useState<string>(
    productInfo.colors[0]
  );
  
  // Estado para el tamaño seleccionado, inicializado con el primer tamaño del producto
  const [selectedSize, setSelectedSize] = useState<string>(
    productInfo.sizes[0]
  );

  // Estado para la cantidad del producto, inicializado en 1
  const [quantity, setQuantity] = useState<number>(1);

  // Hook para manejar el carrito de compras
  const cart = useCart();

  return (
    <div className="max-w-[400px] flex flex-col gap-4">
      <div className="flex justify-between items-center">
        {/* Título del producto */}
        <p className="text-heading3-bold">{productInfo.title}</p>
        {/* Componente para marcar como favorito */}
        <HeartFavorite product={productInfo} />
      </div>

      <div className="flex gap-2">
        {/* Muestra la categoría del producto */}
        <p className="text-base-medium text-grey-2">Categoria:</p>
        <p className="text-base-bold">{productInfo.category}</p>
      </div>

      {/* Muestra el precio del producto */}
      <p className="text-heading3-bold">$ {productInfo.price}</p>

      <div className="flex flex-col gap-2">
        {/* Descripción del producto */}
        <p className="text-base-medium text-grey-2">Descripción:</p>
        <p className="text-small-medium">{productInfo.description}</p>
      </div>

      {/* Selección de colores, si hay colores disponibles */}
      {productInfo.colors.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Colores:</p>
          <div className="flex gap-2">
            {productInfo.colors.map((color, index) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                  selectedColor === color && "bg-black text-white"
                }`}
                onClick={() => setSelectedColor(color)} // Actualiza el color seleccionado al hacer clic
              >
                {color}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Selección de tamaños, si hay tamaños disponibles */}
      {productInfo.sizes.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Tamaños:</p>
          <div className="flex gap-2">
            {productInfo.sizes.map((size, index) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                  selectedSize === size && "bg-black text-white"
                }`}
                onClick={() => setSelectedSize(size)} // Actualiza el tamaño seleccionado al hacer clic
              >
                {size}
              </p>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <p className="text-base-medium text-grey-2">Cantidad:</p>
        <div className="flex gap-4 items-center">
          {/* Botón para disminuir la cantidad */}
          <MinusCircle
            className="hover:text-[rgba(6,173,239,1)] cursor-pointer"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)} // Disminuye la cantidad si es mayor a 1
          />
          <p className="text-body-bold">{quantity}</p>
          {/* Botón para aumentar la cantidad */}
          <PlusCircle
            className="hover:text-[rgba(6,173,239,1)] cursor-pointer"
            onClick={() => setQuantity(quantity + 1)} // Aumenta la cantidad
          />
        </div>
      </div>

      {/* Botón para agregar el producto al carrito */}
      <button
        className="outline text-base-bold py-3 rounded-lg hover:bg-black hover:text-white"
        onClick={() => {
          cart.addItem({
            item: productInfo, // Información del producto
            quantity, // Cantidad seleccionada
            color: selectedColor, // Color seleccionado
            size: selectedSize, // Tamaño seleccionado
          });
        }}
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ProductInfo;
