<p >
    <img width="100%" src="https://github.com/user-attachments/assets/7b177163-3f7e-48f7-a95e-e90149dc7852"> 
</p>

# Proyecto individual módulo Front End

## Aplicación eCommerce

## Características

- Como usuario visitante:
  - Navegar la tienda, buscar productos por nombre.
  - Ver página de detalles de un producto y sus productos relacionados.
  - Agregar productos a carrito de compras.
  - Llegar a instancia de check-out, donde será instado a regitrarse para completar una compra.
- Como usuario registrado (comprador):
  - Crear una cuenta distinguida por e-mail como tambien puede ingresar atravez de facebook y google.
  - Modificar datos personales (Email, Nombre, Apellido), persistente en base de datos.
  - Completar una compra en un simulacro de pago exitoso. (utilizar este numero de tarjeta para la prueba 4000 0003 2000 0021, cvc al azar y fecha futura)
  - Ver historial de compras con detalle de fecha y productos, persistente en base de datos.

## Tecnologías y frameworks utilizados

- Next.JS (14.1)
- TypeScript
- Tailwind CSS
- Clerk para autenticacion y administracion de usuarios
- Stripe para los pagos
- MongoDB para administracion de base de datos
- React-Hook-Form para validacion de formularios
- Shadcn UI para diseño de ui
- Cloudinary para carga y almacenamiento de imagenes

## Requisitos previos

- Node.js (v18.x +)
- npm (v10.x +)

## Instalación

1. Clonar repositorio

```bash
git clone https://github.com/nachog8/dropped_store
```

2. Navegar a directorio raíz

```bash
cd dropped_admin
```

3. Instalar dependencias

```bash
npm install
```

4. Crear archivo `.env` y añadir a gitignore

```bash
touch .env
echo '.env' >> .gitignore
```

5. Añadir variables de entorno a `.env`:
<details>
<summary>(ver variables)</summary>

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_bGVhZGluZy1tYW1tb3RoLTkxLmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_1PsaOLNCad2UgzN5nKnq7PSg2rk7FoKHGcXriksPdI

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

NEXT_PUBLIC_API_URL=http://localhost:3000/api

MONGODB_URL=mongodb+srv://nachog88:mDo4ZjVoRm42QSVP@dropped.5q6rs.mongodb.net/?retryWrites=true&w=majority&appName=Dropped
```

</details>

6. Ejecutar modo de desarrollo.

```bash
npm run dev
```

> Navegar a la App expuesta en [http://localhost:3000](http://localhost:3000)

## Despliegue demo: https://dropped-store.vercel.app/
