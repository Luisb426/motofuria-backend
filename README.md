markdown
# 🏍️ MotoFuria Backend

Este es el backend oficial del proyecto **MotoFuria**, encargado de procesar pagos, asignar fondos exclusivos a los compradores y registrar la información en Google Sheets. También envía los fondos por correo electrónico de forma automática.

---

## 🚀 Funcionalidades

- Recibe datos desde el formulario del frontend
- Valida pagos realizados por Mercado Pago
- Registra compras en una hoja de cálculo de Google Sheets
- Envía fondos exclusivos por correo electrónico
- Conecta con el frontend mediante la ruta `/api/enviarFondos`

---

## 📦 Requisitos

- Node.js v18 o superior
- Cuenta de Mercado Pago con token de producción
- Cuenta de Google Cloud con acceso a Google Sheets
- Correo electrónico habilitado para envío (recomendado: Gmail con contraseña de aplicación)

---

## 🔧 Instalación

bash
git clone https://github.com/tuusuario/motofuria-backend.git
cd motofuria-backend
npm install


---

*🔐 Configuración*

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

env
MP_TOKEN_PROD=tu_token_de_mercado_pago
CORREO_MOTOFURIA=motofuria@gmail.com
CLAVE_CORREO=tu_contraseña_de_aplicación
GOOGLE_CLIENT_EMAIL=servicio@motofuria.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIB...==\n-----END PRIVATE KEY-----"


También debes tener el archivo `google-credenciales.json` con las credenciales completas de tu cuenta de servicio de Google.

---

*🧪 Ejecución local*

bash
npm start


El servidor se iniciará en `http://localhost:3000` y estará listo para recibir solicitudes POST en `/api/enviarFondos`.

---

*🌐 Despliegue en Render*

1. Sube tu proyecto a GitHub
2. Crea un nuevo servicio web en [Render](https://render.com)
3. Configura las variables de entorno en el panel de Render
4. Render detectará automáticamente el `start` script y levantará el servidor

---

*📁 Estructura del proyecto*


motofuria-backend/
├── index.js
├── asignarFondos.js
├── google-credenciales.json
├──.env
├── package.json
├── public/
│   ├── index.html
│   ├── logomotofuria.jpg
│   ├── premio1.jpg
│   └── ganador.jpg


---

*📬 Contacto*

Para soporte técnico o colaboración, escribe a [motofuria@gmail.com]()

---

*⚠️ Licencia*

Este proyecto es privado y no debe ser distribuido sin autorización.