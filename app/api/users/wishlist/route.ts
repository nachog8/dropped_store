import User from "@/lib/models/User"; // Importa el modelo de usuario
import { connectToDB } from "@/lib/mongoDB"; // Importa la función para conectar a la base de datos MongoDB

import { auth } from "@clerk/nextjs"; // Importa la función de autenticación de Clerk
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server"; // Importa tipos de Next.js para manejar solicitudes y respuestas

// Maneja las solicitudes POST a esta ruta
export const POST = async (req: NextRequest) => {
  try {
    const { userId } = auth(); // Obtiene el ID del usuario autenticado

    // Verifica si el usuario está autenticado
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 }); // Responde con 401 si no está autenticado
    }

    await connectToDB(); // Conecta a la base de datos MongoDB

    const user = await User.findOne({ clerkId: userId }); // Busca al usuario en la base de datos

    // Verifica si el usuario existe
    if (!user) {
      return new NextResponse("User not found", { status: 404 }); // Responde con 404 si el usuario no se encuentra
    }

    const { productId } = await req.json(); // Obtiene el ID del producto del cuerpo de la solicitud

    // Verifica si se proporcionó el ID del producto
    if (!productId) {
      return new NextResponse("Product Id required", { status: 400 }); // Responde con 400 si falta el ID del producto
    }

    const isLiked = user.wishlist.includes(productId); // Verifica si el producto ya está en la lista de deseos

    if (isLiked) {
      // Si el producto ya está en la lista de deseos, se elimina
      user.wishlist = user.wishlist.filter((id: string) => id !== productId);
    } else {
      // Si no está en la lista, se agrega
      user.wishlist.push(productId);
    }

    await user.save(); // Guarda los cambios en el usuario
    
    return NextResponse.json(user, { status: 200 }); // Devuelve el usuario actualizado con un código de estado 200
  } catch (err) {
    console.log("[wishlist_POST]", err); // Imprime el error en la consola
    return new NextResponse("Internal Server Error", { status: 500 }); // Responde con 500 en caso de error
  }
}
