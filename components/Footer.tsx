"use client"; // Indica que este componente se ejecuta en el cliente
import Link from "next/link"; // Importa el componente Link de Next.js
import { Instagram } from "lucide-react"; // Importa el icono de Instagram
import { Button } from "@/components/ui/button"; // Importa el componente de botón personalizado
import { Separator } from "@/components/ui/separator"; // Importa el separador de componentes
import { usePathname } from "next/navigation"; // Hook para obtener la ruta actual
import Image from "next/image"; // Importa el componente de imagen optimizada de Next.js
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"; // Importa los componentes de Tooltip

// Componente para mostrar un ícono de pago con tooltip
const PaymentIcon = ({ children, name }: { children: React.ReactNode; name: string }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <div className="bg-white p-1 rounded-md shadow-sm">
          {children}
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

// Componente principal del pie de página
export default function Footer() {
    const pathname = usePathname();
  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y redes sociales */}
          <div className="flex flex-col items-center">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={230} height={200} />
            </Link>
            <div className="flex justify-center mt-4">
              <Link href="https://www.instagram.com/dropped.iphone/" target="_blank" rel="Dropped">
                <Button variant="ghost" size="icon">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
                  <li>
                    <Link
                      href="/indumentaria"
                      className="hover:text-[rgba(6,173,239,1)]"
                    >
                      Indumentaria
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/productos-apple"
                      className="hover:text-[rgba(6,173,239,1)]"
                    >
                      Productos Apple
                    </Link>
                  </li>
            </ul>
          </div>

          {/* Atención al cliente */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Atención al cliente</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="hover:text-[rgba(6,173,239,1)]">
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link href="/envios" className="hover:text-[rgba(6,173,239,1)]">
                  Envíos y devoluciones
                </Link>
              </li>
              <li>
                <Link href="/garantia" className="hover:text-[rgba(6,173,239,1)]">
                  Garantía
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="hover:text-[rgba(6,173,239,1)]">
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Métodos de pago */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Métodos de pago</h3>
            <div className="flex flex-wrap gap-2">
              <PaymentIcon name="Mercado Pago">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                  <ellipse cx="23.5" cy="23.5" fill="#4fc3f7" rx="21.5" ry="15.5"></ellipse>
                  <path fill="#fafafa" d="M22.471,24.946c-1.978-5.537-4.884-10.881-6.085-12.995c-0.352-0.619-0.787-1.186-1.29-1.69 l-2.553-2.553c-0.391-0.391-1.414,0-1.414,0L9.497,8.734l-0.162,2.319L8.773,11c-0.518,0-0.938,0.42-0.938,0.938 c0,0.52,0.413,0.969,0.933,0.961c1.908-0.03,3.567,1.601,3.567,1.601h2c0.32,0.32,1.139,1.366,1.328,2.439 c0.107,0.611,0.154,1.229,0.119,1.848C15.458,24.622,16.835,26,16.835,26c-5.5-3.5-14.819-2.964-14.819-2.964l0.193,3.016L5,31 c0.919,0.212,0.744-0.626,1.765-0.504c6.199,0.741,13.57,0.004,13.57,0.004c1.5,0,1.958-0.793,2.665-1.5 C24,28,22.849,26.004,22.471,24.946z"></path>
                  <path fill="#fafafa" d="M24.913,24.946c1.978-5.537,4.884-10.881,6.085-12.995c0.352-0.619,0.787-1.186,1.29-1.69 l2.553-2.553c0.391-0.391,1.414,0,1.414,0L37.814,9l0.235,2.053L38.611,11c0.518,0,0.938,0.42,0.938,0.938 c0,0.52-0.413,0.969-0.933,0.961c-1.908-0.03-3.567,1.601-3.567,1.601h-2c-0.32,0.32-1.139,1.366-1.328,2.439 c-0.107,0.611-0.154,1.229-0.119,1.848C31.926,24.622,30.549,26,30.549,26c5.5-3.5,15-3,15-3l-0.165,3l-3,5 c-0.919,0.212-0.744-0.626-1.765-0.504c-6.199,0.741-13.57,0.004-13.57,0.004c-1.5,0-1.958-0.793-2.665-1.5 C23.384,28,24.535,26.004,24.913,24.946z"></path>
                  <path fill="#1a237e" d="M43.832,16.326c-0.311-0.415-0.644-0.808-0.992-1.187c-0.059-0.064-0.123-0.123-0.183-0.186 c-0.309-0.326-0.628-0.639-0.96-0.938c-0.026-0.023-0.053-0.045-0.079-0.068c-0.587-0.522-1.201-1.012-1.845-1.454 c0.071-0.175,0.11-0.364,0.11-0.555c0-0.792-0.643-1.437-1.481-1.437c-0.001,0-0.003,0-0.004,0l-0.015,0.002V9.32 c0-0.534-0.288-1.032-0.75-1.299L36.269,7.24c-0.221-0.085-1.356-0.478-1.946,0.113l-1.837,1.838 c-0.381-0.106-0.89-0.25-1.211-0.326C28.893,8.288,26.446,8.014,24,8c-3.031-0.004-6.095,0.39-9.018,1.275l-1.921-1.921 c-0.59-0.59-1.725-0.199-2.018-0.079L9.75,8.021C9.288,8.288,9,8.786,9,9.32v1.186L8.938,10.5c-0.793,0-1.438,0.646-1.438,1.438 c0,0.311,0.103,0.614,0.283,0.865c-0.978,0.715-1.903,1.512-2.722,2.422c-0.315,0.35-0.616,0.715-0.9,1.096 C2.638,18.346,2.061,20.87,2,23.5c-0.035,2.628,0.455,5.223,1.932,7.343c1.478,2.132,3.451,3.854,5.624,5.163 c4.378,2.609,9.436,3.749,14.444,3.846c2.511-0.026,5.023-0.319,7.471-0.924c2.442-0.624,4.81-1.582,6.986-2.9 c2.163-1.328,4.143-3.041,5.617-5.18c1.476-2.122,1.932-4.719,1.894-7.347C45.905,20.87,45.357,18.348,43.832,16.326z M40.793,15.139c0.229,0.225,0.448,0.459,0.662,0.697c0.096,0.107,0.195,0.211,0.288,0.32c0.293,0.347,0.573,0.703,0.828,1.076 c1.088,1.579,1.785,3.39,1.957,5.242c-2.274-0.031-8.444,0.114-13.042,2.342c0.335-1.133,0.619-3.016,0.449-6.058 c-0.03-0.552,0.008-1.135,0.113-1.733c0.139-0.79,0.702-1.618,1.054-2.026h0.727c0.731,0,1.432-0.224,2.025-0.647 c0.624-0.444,1.559-0.981,2.588-0.954c0.072,0,0.139-0.03,0.21-0.04c0.267,0.192,0.536,0.383,0.792,0.587 c0.076,0.061,0.15,0.124,0.225,0.186c0.273,0.224,0.538,0.457,0.795,0.696C40.576,14.93,40.686,15.034,40.793,15.139z M24,9 c2.369,0.026,4.734,0.303,7.027,0.87c0.208,0.053,0.412,0.118,0.617,0.181c-0.482,0.503-0.906,1.054-1.246,1.652 c-1.175,2.068-4.124,7.483-6.121,13.075c-0.075,0.208-0.163,0.43-0.255,0.66c-0.112,0.281-0.226,0.572-0.331,0.868 c-0.104-0.296-0.219-0.588-0.331-0.868c-0.092-0.23-0.18-0.452-0.255-0.66c-2-5.599-4.947-11.009-6.121-13.075 c-0.297-0.523-0.667-1.004-1.074-1.456C18.522,9.461,21.264,9.054,24,9z M5.435,17.238c0.251-0.364,0.524-0.713,0.811-1.052 c0.094-0.112,0.196-0.218,0.294-0.327c0.202-0.225,0.408-0.448,0.625-0.662c0.115-0.114,0.233-0.224,0.351-0.335 c0.229-0.213,0.463-0.421,0.704-0.622c0.099-0.083,0.198-0.166,0.299-0.247c0.243-0.193,0.495-0.376,0.748-0.558 c0.886,0.089,1.707,0.522,2.262,0.918C12.123,14.776,12.823,15,13.555,15h0.727c0.352,0.407,0.915,1.235,1.054,2.026 c0.105,0.597,0.143,1.18,0.113,1.733c-0.17,3.042,0.114,4.927,0.449,6.059c-4.193-2.029-9.734-2.333-12.425-2.344 C3.648,20.623,4.346,18.814,5.435,17.238z M6.236,30.271c-0.192-0.224-0.396-0.437-0.572-0.673 C4.329,27.826,3.49,25.705,3.426,23.5c0-0.008,0.001-0.017,0.001-0.025c2.878,0.006,9.226,0.351,13.305,2.947 c0.211,0.134,0.484,0.088,0.646-0.104c0.162-0.19,0.153-0.477-0.014-0.662c-0.012-0.014-1.218-1.422-0.916-6.842 c0.035-0.63-0.007-1.29-0.126-1.962c-0.218-1.235-1.133-2.372-1.467-2.706C14.76,14.053,14.632,14,14.5,14h-0.945 c-0.522,0-1.021-0.159-1.445-0.462c-0.745-0.531-1.925-1.147-3.185-1.14c-0.131,0.004-0.226-0.063-0.281-0.117 C8.552,12.192,8.5,12.067,8.5,11.938c0-0.242,0.196-0.438,0.391-0.44l0.562,0.054c0.111,0.007,0.216-0.027,0.308-0.084l0.386,0.386 C10.242,11.949,10.37,12,10.5,12c0.053,0,0.106-0.009,0.158-0.025l1.207-0.402l1.281,1.281C13.244,12.951,13.372,13,13.5,13 s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.512,0-0.707L12.707,11l0.146-0.146C12.951,10.756,13,10.628,13,10.5 s-0.049-0.256-0.146-0.354l-1-1c-0.195-0.195-0.512-0.195-0.707,0C11.049,9.244,11,9.372,11,9.5s0.049,0.256,0.146,0.354 l0.646,0.646l-0.063,0.063l-1.095,0.365L10,10.293V9.32c0-0.178,0.096-0.344,0.25-0.434l1.22-0.712 c0.365-0.139,0.792-0.179,0.883-0.114l2.554,2.554c0.475,0.475,0.882,1.007,1.209,1.583c1.161,2.043,4.076,7.393,6.049,12.917 c0.078,0.219,0.171,0.452,0.267,0.694c0.347,0.871,0.741,1.858,0.58,2.583C22.808,29.309,21.728,30,20.49,30 c-0.07,0.002-7.123,0.139-13.425,0.011C6.798,30.002,6.509,30.114,6.236,30.271z M37.217,33.918 c-1.98,1.119-4.156,1.898-6.385,2.419c-2.228,0.539-4.528,0.798-6.832,0.812c-4.592,0.01-9.259-0.951-13.23-3.208 c-1.401-0.799-2.709-1.764-3.832-2.891c0.036-0.014,0.083-0.038,0.107-0.039C13.367,31.138,20.439,31.001,20.5,31 c1.396,0,2.616-0.673,3.192-1.67c0.575,0.997,1.794,1.67,3.182,1.67c0.071,0.002,7.146,0.139,13.462,0.011 c0.089,0.003,0.272,0.102,0.483,0.249C39.748,32.289,38.531,33.185,37.217,33.918z M42.329,29.593 c-0.247,0.329-0.526,0.635-0.803,0.941c-0.37-0.273-0.81-0.524-1.192-0.524c-0.005,0-0.011,0-0.017,0 c-6.3,0.125-13.354-0.01-13.434-0.011c-1.228,0-2.308-0.691-2.512-1.608c-0.161-0.725,0.232-1.712,0.58-2.583 c0.096-0.242,0.189-0.476,0.267-0.694c1.971-5.518,4.887-10.871,6.049-12.917c0.327-0.576,0.734-1.108,1.209-1.583l2.55-2.551 C35.122,8,35.548,8.037,35.841,8.14l1.293,0.747c0.154,0.09,0.25,0.256,0.25,0.434v0.973l-0.635,0.635l-1.095-0.365L35.591,10.5 l0.646-0.646c0.098-0.098,0.146-0.226,0.146-0.354s-0.049-0.256-0.146-0.354c-0.195-0.195-0.512-0.195-0.707,0l-1,1 c-0.098,0.098-0.146,0.226-0.146,0.354s0.049,0.256,0.146,0.354L34.677,11l-1.146,1.146c-0.195,0.195-0.195,0.512,0,0.707 C33.628,12.951,33.756,13,33.884,13s0.256-0.049,0.354-0.146l1.281-1.281l1.207,0.402C36.777,11.991,36.831,12,36.884,12 c0.13,0,0.258-0.051,0.354-0.146l0.386-0.386c0.092,0.057,0.197,0.092,0.308,0.084l0.515-0.052c0.242,0,0.438,0.196,0.438,0.438 c0,0.129-0.052,0.254-0.143,0.343c-0.056,0.055-0.157,0.109-0.282,0.117c-1.279,0.011-2.439,0.608-3.185,1.14 C34.851,13.841,34.352,14,33.83,14h-0.946c-0.133,0-0.26,0.053-0.354,0.146c-0.334,0.334-1.25,1.473-1.467,2.706 c-0.118,0.674-0.161,1.334-0.126,1.963c0.302,5.419-0.904,6.827-0.907,6.831c-0.18,0.181-0.196,0.468-0.037,0.666 c0.159,0.199,0.442,0.246,0.659,0.109c4.408-2.805,11.576-2.969,13.922-2.942c0,0.007,0.001,0.013,0.001,0.02 C44.507,25.705,43.666,27.824,42.329,29.593z"></path>
              </svg>
              </PaymentIcon>
              <PaymentIcon name="Mastercard">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                  <path fill="#3F51B5" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"></path>
                  <path fill="#FFC107" d="M30 14A10 10 0 1 0 30 34A10 10 0 1 0 30 14Z"></path>
                  <path fill="#FF3D00" d="M22.014,30c-0.464-0.617-0.863-1.284-1.176-2h5.325c0.278-0.636,0.496-1.304,0.637-2h-6.598C20.07,25.354,20,24.686,20,24h7c0-0.686-0.07-1.354-0.201-2h-6.598c0.142-0.696,0.359-1.364,0.637-2h5.325c-0.313-0.716-0.711-1.383-1.176-2h-2.973c0.437-0.58,0.93-1.122,1.481-1.595C21.747,14.909,19.481,14,17,14c-5.523,0-10,4.477-10,10s4.477,10,10,10c3.269,0,6.162-1.575,7.986-4H22.014z"></path>
              </svg>
              </PaymentIcon>
              <PaymentIcon name="Visa">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                  <path fill="#1565C0" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"></path>
                  <path fill="#FFF" d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"></path>
                  <path fill="#FFC107" d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"></path>
              </svg>
              </PaymentIcon>
              <PaymentIcon name="Efectivo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                </svg>
              </PaymentIcon>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dropped. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}