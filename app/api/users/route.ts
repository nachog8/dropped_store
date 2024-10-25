import User from "@/lib/models/User"; // Importa el modelo de usuario
import { connectToDB } from "@/lib/mongoDB"; // Importa la función para conectar a la base de datos MongoDB
import { auth } from "@clerk/nextjs"; // Importa la función de autenticación de Clerk

import { NextRequest, NextResponse } from "next/server"; // Importa tipos de Next.js para manejar solicitudes y respuestas

// Maneja las solicitudes GET a esta ruta
export const GET = async (req: NextRequest) => {
  try {
    const { userId } = auth(); // Obtiene el ID del usuario autenticado

    // Verifica si el usuario está autenticado
    if (!userId) {
      return new NextResponse(JSON.stringify({ message: "Unauthorized" }), { status: 401 }); // Responde con 401 si no está autenticado
    }

    await connectToDB(); // Conecta a la base de datos MongoDB

    let user = await User.findOne({ clerkId: userId }); // Busca al usuario en la base de datos

    // Cuando el usuario inicie sesión por primera vez, inmediatamente crearemos un nuevo usuario para él.
    if (!user) {
      user = await User.create({ clerkId: userId }); // Crea un nuevo usuario si no existe
      await user.save(); // Guarda el nuevo usuario en la base de datos
    }

    return NextResponse.json(user, { status: 200 }); // Devuelve el usuario (ya sea existente o nuevo) con un código de estado 200
  } catch (err) {
    console.log("[users_GET]", err); // Imprime el error en la consola
    return new NextResponse("Internal Server Error", { status: 500 }); // Responde con 500 en caso de error
  }
}
