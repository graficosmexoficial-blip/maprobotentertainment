# MAP Robot Entertainment — Liberación de Readdy

## 1. Descripción del Proyecto
Sitio web oficial de MAP Robot Entertainment, empresa de entretenimiento con robots LED en Port Chester, Nueva York. El objetivo es hacer el sitio 100% independiente de la plataforma Readdy, alojando todo código, datos, imágenes y formularios en infraestructura propia (Supabase + Vercel).

## 2. Estructura de Páginas
- `/` — Home (Hero, Servicios, Nosotros, Cómo Funciona, Reviews, CTA)
- `/services` — Página de Servicios
- `/about` — Página Nosotros
- `/contact` — Página de Contacto con formulario
- `/site-manager` — Panel de Administración (Owner Panel)

## 3. Features Core
- [x] Lectura de contenido editable desde Supabase (site_content)
- [x] Lectura de multimedia desde Supabase (site_media)
- [x] Panel admin para editar texto
- [x] Panel admin para gestionar imágenes/videos
- [ ] Guardar formularios en Supabase (sin Readdy)
- [ ] Todas las imágenes en Supabase Storage (sin Readdy)
- [ ] Deploy independiente en GitHub + Vercel

## 4. Modelo de Datos

### Tabla: site_content (YA EXISTE)
| Field | Type | Description |
|-------|------|-------------|
| id | serial | PK |
| page | text | Página (home, about, contact) |
| section | text | Sección (hero, about, services) |
| field_key | text | Campo (title, subtitle, badge) |
| field_value | text | Valor del texto |
| updated_at | timestamptz | Última modificación |

### Tabla: site_media (YA EXISTE)
| Field | Type | Description |
|-------|------|-------------|
| id | serial | PK |
| section | text | Sección (INICIO, NOSOTROS, etc.) |
| media_key | text | Key identificador |
| media_type | text | image / video |
| url | text | URL del archivo |
| filename | text | Nombre original |
| sort_order | int | Orden |

### Tabla: contact_submissions (NUEVA)
| Field | Type | Description |
|-------|------|-------------|
| id | bigserial | PK |
| name | text | Nombre del contacto |
| phone | text | Teléfono |
| email | text | Email |
| service_needed | text | Servicio seleccionado |
| message | text | Mensaje / detalles |
| source | text | hero-form o contact-form |
| status | text | new / contacted / booked / closed |
| created_at | timestamptz | Fecha de envío |

## 5. Backend / Integraciones
- **Supabase**: Base de datos PostgreSQL, Storage para imágenes, Auth para panel admin
- **No Shopify**: No es e-commerce
- **No Stripe**: No hay pagos online
- **Vercel**: Deploy desde GitHub

## 6. Fases de Desarrollo

### Fase 1: Formularios Independientes
- Crear tabla `contact_submissions` en Supabase
- Actualizar formulario del Hero para guardar en Supabase
- Actualizar formulario de Contact page para guardar en Supabase
- Validación y mensaje de éxito desde el frontend

### Fase 2: Imágenes 100% en Supabase Storage
- Verificar bucket `site-media` en Supabase Storage
- Migrar todas las imágenes actuales de Readdy al bucket
- Actualizar fallbacks en componentes para usar URLs de Supabase
- Eliminar toda referencia a `storage.readdy-site.link` y `static.readdy.ai`

### Fase 3: Preparar para GitHub + Vercel
- Crear `vercel.json` si no existe
- Documentar variables de entorno necesarias
- Confirmar que no queda ninguna dependencia de Readdy en el código