-- ============================================================
-- MAP ROBOT ENTERTAINMENT - SQL COMPLETO DE MIGRACIÓN
-- Copiar y pegar esto en el SQL Editor de tu NUEVO Supabase
-- ============================================================

-- ============================================================
-- 1. TABLA: site_content (contenido editable del sitio)
-- ============================================================
CREATE TABLE IF NOT EXISTS site_content (
  id SERIAL PRIMARY KEY,
  page TEXT NOT NULL DEFAULT 'home',
  section TEXT NOT NULL DEFAULT 'hero',
  field_key TEXT NOT NULL,
  field_value TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Datos actuales de site_content
INSERT INTO site_content (page, section, field_key, field_value, updated_at) VALUES
('home','hero','badge_text','Port Chester, Nueva York','2026-05-19 16:47:57.512227+00'),
('home','hero','main_title','Shows de Robot LED y Entretenimiento.','2026-05-19 16:47:57.512227+00'),
('home','hero','subtitle','Show de robot con luces LED, hora loca, fiestas para toda ocasión, clubs, eventos privados, bazuca de CO2, confeti, party poppers, muñecos cabezones de los artistas del momento, DJ privado y más.','2026-05-19 16:47:57.512227+00'),
('home','hero','primary_button','Reserva Tu Show Hoy','2026-05-19 16:47:57.512227+00'),
('home','hero','secondary_button','Ver Nuestros Servicios','2026-05-19 16:47:57.512227+00'),
('home','hero','form_title','Reserva Tu Show Hoy 👇','2026-05-19 16:47:57.512227+00'),
('home','hero','form_subtitle','Sin compromiso — te llamamos rápido','2026-05-19 16:47:57.512227+00'),
('home','stats','stat1_value','5+','2026-05-19 16:47:57.512227+00'),
('home','stats','stat1_label','Años de Experiencia','2026-05-19 16:47:57.512227+00'),
('home','stats','stat1_desc','Más de 5 años de entretenimiento con robot LED en el área Tri-State','2026-05-19 16:47:57.512227+00'),
('home','stats','stat2_value','500+','2026-05-19 16:47:57.512227+00'),
('home','stats','stat2_label','Eventos Realizados','2026-05-19 16:47:57.512227+00'),
('home','stats','stat2_desc','Bodas, clubs, fiestas privadas, eventos corporativos y más','2026-05-19 16:47:57.512227+00'),
('home','stats','stat3_value','100%','2026-05-19 16:47:57.512227+00'),
('home','stats','stat3_label','Satisfacción Garantizada','2026-05-19 16:47:57.512227+00'),
('home','stats','stat3_desc','No paramos hasta que tu evento sea inolvidable','2026-05-19 16:47:57.512227+00'),
('home','stats','stat4_value','4.9','2026-05-19 16:47:57.512227+00'),
('home','stats','stat4_label','Calificación','2026-05-19 16:47:57.512227+00'),
('home','stats','stat4_desc','Basado en reseñas verificadas de clientes en todas las plataformas','2026-05-19 16:47:57.512227+00'),
('home','about','badge','Sobre Nosotros','2026-05-19 16:47:57.512227+00'),
('home','about','title','El Mejor Entretenimiento con Robot LED de Nueva York','2026-05-19 16:47:57.512227+00'),
('home','about','paragraph1','MAP Robot Entertainment trae la experiencia de fiesta definitiva a tu evento. Desde shows de robots LED de alta energía con deslumbrantes luces hasta bazucas de CO2, explosiones de confeti y divertidos muñecos cabezones — convertimos cualquier ocasión en una celebración inolvidable.','2026-05-19 16:47:57.512227+00'),
('home','about','paragraph2','Con base en Port Chester, Nueva York, servimos todo el área Tri-State incluyendo Nueva York, Connecticut y Nueva Jersey. Ya sea una boda, noche de club, fiesta privada o evento corporativo, nuestro equipo ofrece entretenimiento de alto impacto que mantiene a la multitud emocionada toda la noche.','2026-05-19 16:47:57.512227+00'),
('home','about','button_text','Conoce Más Sobre Nosotros','2026-05-19 16:47:57.512227+00'),
('home','about','years_badge_value','5+','2026-05-19 16:47:57.512227+00'),
('home','about','years_badge_label','Años de Excelencia','2026-05-19 16:47:57.512227+00'),
('home','cta','badge','Reserva Tu Show Hoy 👇','2026-05-19 16:47:57.512227+00'),
('home','cta','title','Reserva Tu Show de Robot LED Hoy','2026-05-19 16:47:57.512227+00'),
('home','cta','subtitle','Obtén planificación de entretenimiento personalizada sin compromiso. Hablemos de tu próximo evento y hagámoslo inolvidable.','2026-05-19 16:47:57.512227+00'),
('home','cta','primary_button','Habla Con Nuestro Equipo','2026-05-19 16:47:57.512227+00'),
('home','cta','phone_button','(914) 527-2616','2026-05-19 16:47:57.512227+00'),
('home','services','badge','Nuestros Servicios','2026-05-19 16:47:57.512227+00'),
('home','services','title','Servicios Premium de Entretenimiento Para Todo Evento','2026-05-19 16:47:57.512227+00'),
('home','services','subtitle','Desde shows de robot LED hasta bazucas de CO2 y lluvias de confeti, ofrecemos entretenimiento de impacto que hace de tu evento el tema de conversación de la ciudad.','2026-05-19 16:47:57.512227+00'),
('home','services','stat_value','500+','2026-05-19 16:47:57.512227+00'),
('home','services','stat_label','Clientes Felices','2026-05-19 16:47:57.512227+00'),
('home','services','stat_desc','Eventos transformados en experiencias inolvidables','2026-05-19 16:47:57.512227+00'),
('home','services','card1_title','Show de Robot LED','2026-05-19 16:47:57.512227+00'),
('home','services','card1_desc','Performers robots de alta energía cubiertos de luces LED deslumbrantes que bailan, interactúan y electrizan a la multitud. Perfecto para clubs, bodas y eventos corporativos.','2026-05-19 16:47:57.512227+00'),
('home','services','card2_title','Hora Loca','2026-05-19 16:47:57.512227+00'),
('home','services','card2_desc','¡La hora de fiesta definitiva! Performers de alta energía, locos accesorios y acción sin parar que convierten la pista en un carnaval de diversión inolvidable.','2026-05-19 16:47:57.512227+00'),
('home','services','card3_title','Bazuca de CO2 y Confeti','2026-05-19 16:47:57.512227+00'),
('home','services','card3_desc','Explosiones dramáticas de CO2 y lluvias de confeti colorido sobre la multitud. Crea momentos impresionantes que asombran a tus invitados y iluminan las redes sociales.','2026-05-19 16:47:57.512227+00'),
('home','services','bottom_title','Entretenimiento Diseñado para Impresionar','2026-05-19 16:47:57.512227+00'),
('home','services','bottom_desc','Desde performers robots LED hasta bazucas de CO2 y muñecos cabezones, nuestros servicios cubren toda necesidad de entretenimiento con energía y visuales de alto impacto.','2026-05-19 16:47:57.512227+00'),
('home','howItWorks','badge','Cómo Funciona','2026-05-19 16:47:57.512227+00'),
('home','howItWorks','title','Tu Viaje de Entretenimiento en Cuatro Simples Pasos','2026-05-19 16:47:57.512227+00'),
('home','howItWorks','step1_title','Contacto y Cotización','2026-05-19 16:47:57.512227+00'),
('home','howItWorks','step1_desc','Contáctanos por teléfono, correo o nuestro formulario. Cuéntanos sobre tu tipo de evento, fecha, lugar y el paquete de entretenimiento que deseas. Te enviaremos una cotización detallada rápidamente.','2026-05-19 16:47:57.512227+00'),
('home','howItWorks','step2_title','Planifica Tu Evento','2026-05-19 16:47:57.512227+00'),
('home','howItWorks','step2_desc','Trabajamos contigo para personalizar el show perfecto — seleccionando efectos como CO2, confeti, robots LED, muñecos cabezones y música que combine con tu ambiente y audiencia.','2026-05-19 16:47:57.512227+00'),
('home','howItWorks','step3_title','Performance en Vivo','2026-05-19 16:47:57.512227+00'),
('home','howItWorks','step3_desc','Nuestro equipo llega temprano para montar y entrega un show de alta energía, profesionalmente coreografiado con deslumbrantes luces LED, efectos especiales e interacción con la multitud.','2026-05-19 16:47:57.512227+00'),
('home','howItWorks','step4_title','Noche Inolvidable','2026-05-19 16:47:57.512227+00'),
('home','howItWorks','step4_desc','Tus invitados se van asombrados. Nosotros desmontamos sin problemas después del show para que tú sigas celebrando. Los recuerdos y las fotos durarán para siempre.','2026-05-19 16:47:57.512227+00'),
('home','whyChooseUs','badge','¿Por Qué Elegirnos?','2026-05-19 16:47:57.512227+00'),
('home','whyChooseUs','title','Excelencia en Entretenimiento Respaldada Por Performance Real','2026-05-19 16:47:57.512227+00'),
('home','whyChooseUs','subtitle','Nuestros resultados hablan por sí solos. En MAP Robot Entertainment nos exigimos los más altos estándares en cada evento — desde los efectos LED que traemos hasta la reacción final de la multitud.','2026-05-19 16:47:57.512227+00'),
('home','whyChooseUs','paragraph','Nuestros resultados hablan por sí solos. En MAP Robot Entertainment nos exigimos los más altos estándares en cada evento.','2026-05-19 16:47:57.512227+00'),
('home','reviews','title','Lo Que Dicen Nuestros Clientes','2026-05-19 16:47:57.512227+00'),
('home','reviews','subtitle','Reseñas reales de clientes reales en Nueva York, Connecticut y Nueva Jersey. Estamos orgullosos de nuestra reputación.','2026-05-19 16:47:57.512227+00'),
('home','reviews','rating_value','4.9','2026-05-19 16:47:57.512227+00'),
('home','reviews','reviews_count','40+','2026-05-19 16:47:57.512227+00'),
('home','finalCta','badge','¿Listo para Iluminar Tu Evento?','2026-05-19 16:47:57.512227+00'),
('home','finalCta','title','Hagámoslo Inolvidable','2026-05-19 16:47:57.512227+00'),
('home','finalCta','subtitle','Desde una fiesta privada hasta una noche masiva de club — estamos aquí para hacerlo realidad. Contáctanos hoy y reserva tu show.','2026-05-19 16:47:57.512227+00'),
('home','finalCta','primary_button','Reserva Tu Show Hoy','2026-05-19 16:47:57.512227+00'),
('home','finalCta','phone_button','(914) 527-2616','2026-05-19 16:47:57.512227+00'),
('contact','info','phone_label','Llámanos Directo','2026-05-19 16:47:57.512227+00'),
('contact','info','phone','(914) 527-2616','2026-05-19 16:47:57.512227+00'),
('contact','info','phone_sub','Siempre Disponible','2026-05-19 16:47:57.512227+00'),
('contact','info','email_label','Escríbenos','2026-05-19 16:47:57.512227+00'),
('contact','info','email','mandonaire6238@gmail.com','2026-05-19 16:47:57.512227+00'),
('contact','info','social_label','Síguenos','2026-05-19 16:47:57.512227+00'),
('contact','info','social_handle','@m.a.p.robot','2026-05-19 16:47:57.512227+00'),
('contact','info','location_label','Nuestra Ubicación','2026-05-19 16:47:57.512227+00'),
('contact','info','location','Port Chester, NY, Estados Unidos, 10573','2026-05-19 16:47:57.512227+00'),
('contact','hero','title','Contáctanos','2026-05-19 16:47:57.512227+00'),
('about','hero','title','Sobre Nosotros','2026-05-19 16:47:57.512227+00'),
('about','story','badge','NUESTRA HISTORIA','2026-05-19 16:47:57.512227+00'),
('about','story','title','El Mejor Entretenimiento con Robot LED de Nueva York','2026-05-19 16:47:57.512227+00'),
('about','story','paragraph1','MAP Robot Entertainment nació de una pasión por llevar energía extraordinaria a cada celebración. Lo que comenzó como un pequeño show de robot LED en clubs locales ha crecido hasta convertirse en una de las empresas de entretenimiento más solicitadas del área Tri-State — presentándose en bodas, galas corporativas, quinceañeras y eventos de nightclub en Nueva York, Connecticut y Nueva Jersey.','2026-05-19 16:47:57.512227+00'),
('about','story','paragraph2','Con base en Port Chester, Nueva York, nuestro equipo combina tecnología LED de punta con arte de performance de alta energía. Desde nuestros shows de robot LED hasta bazucas de CO2, explosiones de confeti y divertidos muñecos cabezones, creamos momentos de los que los invitados hablan mucho después de que la fiesta termina.','2026-05-19 16:47:57.512227+00'),
('about','ctaBanner','title','Reserva Tu Show de Robot LED Hoy','2026-05-19 16:47:57.512227+00'),
('about','ctaBanner','subtitle','Obtén planificación de entretenimiento personalizada sin compromiso. Hablemos de tu próximo evento y hagámoslo inolvidable.','2026-05-19 16:47:57.512227+00'),
('about','ctaBanner','primary_button','Habla Con Nuestro Equipo','2026-05-19 16:47:57.512227+00'),
('about','ctaBanner','phone_button','(914) 527-2616','2026-05-19 16:47:57.512227+00'),
('about','faqs','badge','PREGUNTAS FRECUENTES','2026-05-19 16:47:57.512227+00'),
('about','faqs','title','Preguntas Comunes Sobre MAP Robot Entertainment','2026-05-19 16:47:57.512227+00'),
('about','faqs','subtitle','Sabemos que planificar el entretenimiento para tu evento genera preguntas. Aquí están algunas de las más comunes que nuestros clientes hacen antes de empezar.','2026-05-19 16:47:57.512227+00'),
('about','values','badge','NUESTROS VALORES','2026-05-19 16:47:57.512227+00'),
('about','values','title','Lo Que Hace Diferente a MAP Robot Entertainment','2026-05-19 16:47:57.512227+00'),
('about','values','subtitle','Cualquier empresa de entretenimiento puede prometer un buen show, pero lo que realmente nos define es cómo lo entregamos. En MAP Robot Entertainment, nuestra fundación se construye sobre un conjunto de valores centrales que guían cada performance, cada interacción y cada evento que iluminamos.','2026-05-19 16:47:57.512227+00');

-- ============================================================
-- 2. TABLA: site_media (imágenes y videos del sitio)
-- ============================================================
CREATE TABLE IF NOT EXISTS site_media (
  id SERIAL PRIMARY KEY,
  section TEXT NOT NULL DEFAULT 'INICIO',
  media_type TEXT NOT NULL DEFAULT 'image',
  url TEXT NOT NULL,
  filename TEXT NOT NULL,
  file_size INTEGER,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  media_key TEXT NOT NULL
);

-- Datos actuales de site_media (URLs apuntan a Readdy — necesitarás re-subir)
INSERT INTO site_media (section, media_type, url, filename, file_size, sort_order, created_at, updated_at, media_key) VALUES
('INICIO','video','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/5a12f5b9-68b7-47e6-b661-8055d89bfec0_423423.mp4?v=2c7ee5cbe95f9426dfeecd4aea39862f','hero-video.mp4',NULL,0,'2026-05-19 18:40:15.549423+00','2026-05-19 18:40:15.549423+00','hero-video'),
('INICIO','image','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/29295c48-a9ff-4b25-ae66-12a6b5e33085_magnific_me-puedes-dar-exactamente_3010333418-3.png?v=ce1237072a1d7806122d911e0b83c1af','about-image.png',NULL,1,'2026-05-19 18:40:15.549423+00','2026-05-19 18:40:15.549423+00','about-image'),
('INICIO','image','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/46454922-26f6-41a4-8ed8-11dcb4e51d37_472366821_571862878980890_353559173388661885_n.jpg?v=668f06be35cbc91052be1dd38d91bc21','services-featured.jpg',NULL,2,'2026-05-19 18:40:15.549423+00','2026-05-19 18:40:15.549423+00','services-featured'),
('NOSOTROS','image','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/29295c48-a9ff-4b25-ae66-12a6b5e33085_magnific_me-puedes-dar-exactamente_3010333418-3.png?v=ce1237072a1d7806122d911e0b83c1af','about-hero.png',NULL,0,'2026-05-19 18:40:15.549423+00','2026-05-19 18:40:15.549423+00','about-hero'),
('SERVICIOS','image','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/f20d1c73-1b3c-4908-84fe-88ea081a8666_677149541_928146753372013_7091196280485826080_n.jpg?v=c83fc433256257c5c53af1374d2d15f4','service-robot-led.jpg',NULL,0,'2026-05-19 18:40:15.549423+00','2026-05-19 18:40:15.549423+00','service-robot-led'),
('CONTACTO','image','https://static.readdy.ai/image/3ce9d24c92e6c33dbaca65a0380531ab/c064f3abd7f7d2172500e7fcf75e5075.jpeg','contact-bg.jpg',NULL,0,'2026-05-19 18:40:15.549423+00','2026-05-19 18:40:15.549423+00','contact-bg'),
('INICIO','image','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/f20d1c73-1b3c-4908-84fe-88ea081a8666_677149541_928146753372013_7091196280485826080_n.jpg?v=c83fc433256257c5c53af1374d2d15f4','services-card-led.jpg',NULL,4,'2026-05-19 19:06:30.561234+00','2026-05-19 19:06:30.561234+00','services-card-1'),
('INICIO','image','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/ad4c1e98-5c5b-4273-9aac-6829e12c5afa_474682414_578610134992345_9182123045525748269_n.jpg?v=a41920e8eab7525a3d1d17adf96a1078','services-card-hora-loca.jpg',NULL,5,'2026-05-19 19:06:30.561234+00','2026-05-19 19:06:30.561234+00','services-card-2'),
('INICIO','image','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/3262ffbb-4118-4113-b07f-23fafeca12a2_484407683_622784440555400_1975758362729952323_n-1.jpg?v=ef56c01f6b547b47c41dd411b0bcb258','services-card-co2.jpg',NULL,6,'2026-05-19 19:06:30.561234+00','2026-05-19 19:06:30.561234+00','services-card-3'),
('INICIO','video','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/5a12f5b9-68b7-47e6-b661-8055d89bfec0_423423.mp4?v=2c7ee5cbe95f9426dfeecd4aea39862f','why-choose-video.mp4',NULL,7,'2026-05-19 19:06:30.561234+00','2026-05-19 19:06:30.561234+00','why-choose-video'),
('INICIO','image','https://static.readdy.ai/image/3ce9d24c92e6c33dbaca65a0380531ab/c064f3abd7f7d2172500e7fcf75e5075.jpeg','cta-background.jpg',NULL,8,'2026-05-19 19:06:30.561234+00','2026-05-19 19:06:30.561234+00','cta-background'),
('INICIO','image','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/4b1daa0f-661b-488e-a20b-004b498469aa_IMG_1043.jpg?v=c948462af5c891c7eb3044134d3d12db','final-cta-background.jpg',NULL,9,'2026-05-19 19:06:30.561234+00','2026-05-19 19:06:30.561234+00','final-cta-background'),
('INICIO','image','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/a27ac3c3-dbf9-4849-83e5-4957e5e94ab3_aff17f747b134ccb95b0c51344fcc99e-1.png?v=560df2c84d57cceb4d73c1fa15a21893','footer-logo.png',NULL,10,'2026-05-19 19:06:30.561234+00','2026-05-19 19:06:30.561234+00','footer-logo'),
('NOSOTROS','video','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/5a12f5b9-68b7-47e6-b661-8055d89bfec0_423423.mp4?v=2c7ee5cbe95f9426dfeecd4aea39862f','story-video.mp4',NULL,2,'2026-05-19 19:06:35.628416+00','2026-05-19 19:06:35.628416+00','story-video'),
('NOSOTROS','image','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/f20d1c73-1b3c-4908-84fe-88ea081a8666_677149541_928146753372013_7091196280485826080_n.jpg?v=c83fc433256257c5c53af1374d2d15f4','nosotros-cta-banner.jpg',NULL,3,'2026-05-19 19:06:35.628416+00','2026-05-19 19:06:35.628416+00','cta-banner'),
('NOSOTROS','image','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/46454922-26f6-41a4-8ed8-11dcb4e51d37_472366821_571862878980890_353559173388661885_n.jpg?v=668f06be35cbc91052be1dd38d91bc21','nosotros-faq.jpg',NULL,4,'2026-05-19 19:06:35.628416+00','2026-05-19 19:06:35.628416+00','faq-image'),
('NOSOTROS','image','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/bf3d74d3-2393-4b3e-956e-f99bdea30a18_484407683_622784440555400_1975758362729952323_n.jpg?v=ef56c01f6b547b47c41dd411b0bcb258','nosotros-values.jpg',NULL,5,'2026-05-19 19:06:35.628416+00','2026-05-19 19:06:35.628416+00','values-image'),
('SERVICIOS','video','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/5a12f5b9-68b7-47e6-b661-8055d89bfec0_423423.mp4?v=2c7ee5cbe95f9426dfeecd4aea39862f','servicios-hero-video.mp4',NULL,1,'2026-05-19 19:09:33.28917+00','2026-05-19 19:09:33.28917+00','hero-video'),
('SERVICIOS','image','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/03ce3bf9-bd5c-4f26-9585-c91c72f0252c_IMG_0629.jpg?v=fcd672a7ce915086a643c785a64a0648','service-hora-loca.jpg',NULL,3,'2026-05-19 19:09:33.28917+00','2026-05-19 19:09:33.28917+00','service-hora-loca'),
('SERVICIOS','image','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/4e58eb80-f950-4a99-b00a-0d31462e6265_IMG_0248.jpg?v=fa1f93661f5df6b6b9c58559c3d00777','service-quince.jpg',NULL,4,'2026-05-19 19:09:33.28917+00','2026-05-19 19:09:33.28917+00','service-quince'),
('SERVICIOS','image','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/250602d4-be15-46f1-b828-71cc7c4e89f9_magnific_creame-una-foto-en-donde-_3004892059-2.png?v=ec97826a62581d568be1d8f82a8d091a','service-co2.png',NULL,5,'2026-05-19 19:09:33.28917+00','2026-05-19 19:09:33.28917+00','service-co2'),
('SERVICIOS','image','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/3262ffbb-4118-4113-b07f-23fafeca12a2_484407683_622784440555400_1975758362729952323_n-1.jpg?v=ef56c01f6b547b47c41dd411b0bcb258','service-confeti.jpg',NULL,6,'2026-05-19 19:09:33.28917+00','2026-05-19 19:09:33.28917+00','service-confeti'),
('SERVICIOS','image','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/aceddab2-b7d8-4d00-8469-2b0020f0cd28_magnific_hazme-una-foto-realistas-_3004925656.png?v=8e6d104f1c26286d5683440d6a7cbb68','service-bodas.png',NULL,8,'2026-05-19 19:09:33.28917+00','2026-05-19 19:09:33.28917+00','service-bodas'),
('SERVICIOS','image','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/29295c48-a9ff-4b25-ae66-12a6b5e33085_magnific_me-puedes-dar-exactamente_3010333418-3.png?v=ce1237072a1d7806122d911e0b83c1af','service-munecos.png',NULL,9,'2026-05-19 19:09:33.28917+00','2026-05-19 19:09:33.28917+00','service-munecos'),
('SERVICIOS','image','https://static.readdy.ai/image/3ce9d24c92e6c33dbaca65a0380531ab/e8b998673d2c6d02e5307b7a12a4c0f7.png','service-dj.png',NULL,10,'2026-05-19 19:09:41.262386+00','2026-05-19 19:09:41.262386+00','service-dj'),
('SERVICIOS','image','https://readdy.ai/api/search-image?query=Colorful%20party%20poppers%20exploding%20with%20confetti%20streamers%20at%20a%20lively%20nightclub%20celebration%20with%20dramatic%20blue%20and%20yellow%20neon%20lighting%20and%20energetic%20crowd%20having%20fun&width=640&height=360&seq=map14&orientation=landscape','service-party-poppers.jpg',NULL,7,'2026-05-19 19:09:41.262386+00','2026-05-19 19:09:41.262386+00','service-party-poppers'),
('SERVICIOS','image','https://readdy.ai/api/search-image?query=Elegant%20private%20party%20celebration%20in%20a%20beautifully%20decorated%20venue%20with%20ambient%20blue%20LED%20lighting%20and%20guests%20dancing%20and%20enjoying%20themselves%20with%20festive%20atmosphere%20colorful%20confetti%20and%20balloons&width=640&height=360&seq=map17&orientation=landscape','service-fiestas.jpg',NULL,11,'2026-05-19 19:09:41.262386+00','2026-05-19 19:09:41.262386+00','service-fiestas'),
('SERVICIOS','image','https://readdy.ai/api/search-image?query=Exclusive%20private%20event%20celebration%20in%20a%20luxury%20venue%20with%20dramatic%20blue%20LED%20uplighting%20and%20professional%20performers%20entertaining%20guests%20confetti%20falling%20and%20energetic%20atmosphere&width=640&height=360&seq=map18&orientation=landscape','service-privados.jpg',NULL,12,'2026-05-19 19:09:41.262386+00','2026-05-19 19:09:41.262386+00','service-privados'),
('SERVICIOS','image','https://readdy.ai/api/search-image?query=High%20energy%20nightclub%20scene%20with%20DJ%20booth%20and%20colorful%20LED%20light%20beams%20cutting%20through%20fog%20with%20crowd%20celebrating%20and%20hands%20in%20the%20air%20under%20blue%20neon%20lights%20and%20confetti%20explosions&width=640&height=360&seq=map19&orientation=landscape','service-clubs.jpg',NULL,13,'2026-05-19 19:09:41.262386+00','2026-05-19 19:09:41.262386+00','service-clubs'),
('SERVICIOS','image','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/46454922-26f6-41a4-8ed8-11dcb4e51d37_472366821_571862878980890_353559173388661885_n.jpg?v=668f06be35cbc91052be1dd38d91bc21','servicios-cta-banner.jpg',NULL,14,'2026-05-19 19:09:41.262386+00','2026-05-19 19:09:41.262386+00','cta-banner'),
('SERVICIOS','image','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/34fe7ad5-7308-499d-817c-ed43fd8924b9_magnific_hazme-una-foto-realistas-_3004906578.png?v=4fef05408125de5cf5472996c084eba6','servicios-final-cta.png',NULL,15,'2026-05-19 19:09:41.262386+00','2026-05-19 19:09:41.262386+00','final-cta'),
('CONTACTO','video','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/5a12f5b9-68b7-47e6-b661-8055d89bfec0_423423.mp4?v=2c7ee5cbe95f9426dfeecd4aea39862f','contacto-hero-video.mp4',NULL,2,'2026-05-19 19:09:41.262386+00','2026-05-19 19:09:41.262386+00','hero-video'),
('CONTACTO','image','https://storage.readdy-site.link/project_files/6121d4b8-f034-4ba6-80cd-8d246ebadd63/a27ac3c3-dbf9-4849-83e5-4957e5e94ab3_aff17f747b134ccb95b0c51344fcc99e-1.png?v=560df2c84d57cceb4d73c1fa15a21893','contacto-logo.png',NULL,3,'2026-05-19 19:09:41.262386+00','2026-05-19 19:09:41.262386+00','logo');

-- ============================================================
-- 3. TABLA: contact_submissions (formularios de contacto)
-- ============================================================
CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  service TEXT,
  message TEXT,
  source TEXT DEFAULT 'website',
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 4. TABLAS DE PRODUCTOS (e-commerce)
-- ============================================================

-- product_categories
CREATE TABLE IF NOT EXISTS product_categories (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- product_items
CREATE TABLE IF NOT EXISTS product_items (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  category_id BIGINT REFERENCES product_categories(id),
  status TEXT DEFAULT 'draft',
  description TEXT,
  pricing_mode INT DEFAULT 0,
  currency TEXT DEFAULT 'USD',
  price NUMERIC(12,2),
  stock INT,
  discount_enabled BOOLEAN DEFAULT false,
  discount_price NUMERIC(12,2),
  media JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- product_variants
CREATE TABLE IF NOT EXISTS product_variants (
  id BIGSERIAL PRIMARY KEY,
  product_id BIGINT NOT NULL REFERENCES product_items(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  options JSONB DEFAULT '[]',
  sort_order INT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- product_skus
CREATE TABLE IF NOT EXISTS product_skus (
  id BIGSERIAL PRIMARY KEY,
  product_id BIGINT NOT NULL REFERENCES product_items(id) ON DELETE CASCADE,
  label TEXT,
  options JSONB DEFAULT '[]',
  price NUMERIC(12,2),
  stock INT,
  discount_enabled BOOLEAN DEFAULT false,
  discount_price NUMERIC(12,2),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- product_custom_fields
CREATE TABLE IF NOT EXISTS product_custom_fields (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  field_type TEXT DEFAULT 'text',
  options JSONB DEFAULT '[]',
  required BOOLEAN DEFAULT false,
  sort_order INT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- product_custom_values
CREATE TABLE IF NOT EXISTS product_custom_values (
  id BIGSERIAL PRIMARY KEY,
  product_id BIGINT NOT NULL REFERENCES product_items(id) ON DELETE CASCADE,
  field_id BIGINT NOT NULL REFERENCES product_custom_fields(id) ON DELETE CASCADE,
  value TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(product_id, field_id)
);

-- ============================================================
-- 5. TABLAS DE ÓRDENES
-- ============================================================

-- order_headers
CREATE TABLE IF NOT EXISTS order_headers (
  id BIGSERIAL PRIMARY KEY,
  customer_id TEXT,
  status TEXT DEFAULT 'pending_payment',
  customer_notes TEXT,
  admin_notes TEXT,
  tracking_number TEXT,
  currency TEXT DEFAULT 'USD',
  shipping_total NUMERIC(12,2),
  tax_total NUMERIC(12,2),
  subtotal_items NUMERIC(12,2),
  discount_price NUMERIC(12,2),
  payment_provider TEXT,
  checkout_session_id TEXT,
  payment_id TEXT,
  recipient JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- order_items
CREATE TABLE IF NOT EXISTS order_items (
  id BIGSERIAL PRIMARY KEY,
  order_id BIGINT NOT NULL REFERENCES order_headers(id),
  product_id TEXT NOT NULL,
  product_name TEXT NOT NULL,
  sku_id TEXT,
  sku_label TEXT,
  quantity INT DEFAULT 1,
  unit_price NUMERIC(12,2) NOT NULL,
  final_price NUMERIC(12,2),
  subtotal NUMERIC(12,2),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 6. ROW LEVEL SECURITY (RLS) - POLICIES
-- ============================================================

-- Habilitar RLS en todas las tablas
ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_variants ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_skus ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_custom_fields ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_custom_values ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_headers ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- site_content: lectura pública, escritura autenticada
CREATE POLICY "site_content_select_all" ON site_content FOR SELECT USING (true);
CREATE POLICY "site_content_write_auth" ON site_content FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- site_media: lectura pública, escritura autenticada
CREATE POLICY "site_media_select_all" ON site_media FOR SELECT USING (true);
CREATE POLICY "site_media_write_auth" ON site_media FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- contact_submissions: insert público, lectura autenticada
CREATE POLICY "contact_insert_public" ON contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "contact_select_auth" ON contact_submissions FOR SELECT TO authenticated USING (true);
CREATE POLICY "contact_update_auth" ON contact_submissions FOR UPDATE TO authenticated USING (true);

-- product_categories: lectura pública
CREATE POLICY "product_categories_select_all" ON product_categories FOR SELECT USING (true);

-- product_items: lectura pública (solo activos recomendado)
CREATE POLICY "product_items_select_all" ON product_items FOR SELECT USING (true);

-- product_variants: lectura pública
CREATE POLICY "product_variants_select_all" ON product_variants FOR SELECT USING (true);

-- product_skus: lectura pública
CREATE POLICY "product_skus_select_all" ON product_skus FOR SELECT USING (true);

-- product_custom_fields: lectura pública
CREATE POLICY "product_custom_fields_select_all" ON product_custom_fields FOR SELECT USING (true);

-- product_custom_values: lectura pública
CREATE POLICY "product_custom_values_select_all" ON product_custom_values FOR SELECT USING (true);

-- orders: anónimo puede insertar, autenticado puede ver sus propias
CREATE POLICY "order_headers_insert_anon" ON order_headers FOR INSERT WITH CHECK (true);
CREATE POLICY "order_headers_select_own" ON order_headers FOR SELECT USING (
  customer_id IS NULL OR customer_id = auth.uid()::text
);
CREATE POLICY "order_items_insert_anon" ON order_items FOR INSERT WITH CHECK (true);
CREATE POLICY "order_items_select_own" ON order_items FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM order_headers oh
    WHERE oh.id = order_items.order_id
    AND (oh.customer_id IS NULL OR oh.customer_id = auth.uid()::text)
  )
);

-- ============================================================
-- INSTRUCCIONES POST-SQL (hacer manualmente en Supabase UI)
-- ============================================================
-- 1. Crear Storage Bucket: Ve a Storage → New Bucket → nombre: "site-media"
-- 2. En el bucket "site-media", click Policies → Add Policies:
--    - SELECT: public (anon puede leer)
--    - INSERT/DELETE: solo authenticated (o service role)
-- 3. Copiar Project URL y Anon Key del nuevo Supabase → poner en .env
-- 4. Si usás Edge Functions, desplegarlas desde Supabase CLI
-- ============================================================