# Portfolio Personal

Portfolio personal construido con Next.js 16, TypeScript y Tailwind CSS.

## Características

- **Next.js 16** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos minimalistas y responsive
- **Data-driven**: Toda la información en JSON para fácil edición
- **Diseño minimalista**: Enfocado en claridad y funcionalidad
- **Dark mode**: Soporte automático según preferencias del sistema
- **Performance**: Optimizado con Turbopack

## Estructura del Proyecto

```
portfolio/
├── app/
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
├── components/
│   ├── Header.tsx         # Navegación
│   ├── Footer.tsx         # Pie de página
│   ├── Section.tsx        # Componente de sección reutilizable
│   └── ProjectCard.tsx    # Tarjeta de proyecto
├── data/
│   └── portfolio.json     # ⭐ Datos del portfolio
└── public/                # Assets estáticos
```

## Editar Contenido

Todo el contenido del portfolio se encuentra en `data/portfolio.json`. Editá este archivo para actualizar:

- Información personal
- Skills y tecnologías
- Proyectos
- Experiencia laboral
- Datos de contacto

### Ejemplo: Agregar un Proyecto

```json
{
  "id": "4",
  "title": "Nombre del Proyecto",
  "description": "Descripción clara y concisa",
  "tags": ["React", "Node.js"],
  "year": "2024",
  "featured": true,
  "link": "https://proyecto.com"
}
```

## Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo (con Turbopack)
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Linter
npm run lint
```

## Desarrollo Local

1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Editar `data/portfolio.json` con tu información
4. Ejecutar: `npm run dev`
5. Abrir [http://localhost:3000](http://localhost:3000)

## Principios de Diseño

Este portfolio sigue principios de **warm minimalism**:

- **Clarity first**: Jerarquía clara, lectura rápida
- **Function over decoration**: Cada elemento tiene un propósito
- **Low friction**: Navegación directa y simple
- **Honest UI**: El diseño refleja el contenido real

## Tecnologías

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- Turbopack

## Deploy

Podés deployar en:

- **Vercel** (recomendado): `vercel deploy`
- **Netlify**: Conectar repositorio
- **Cualquier host** con soporte Node.js

## Licencia

ISC
