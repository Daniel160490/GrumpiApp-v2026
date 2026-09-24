# 👾 Los Grumpis: Plataforma Educativa Gamificada

[![Angular](https://img.shields.io/badge/Angular-v18%2B-red?style=flat-square&logo=angular)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-Styling-pink?style=flat-square&logo=sass)](https://sass-lang.com/)
[![License](https://img.shields.io/badge/License-Educational-green?style=flat-square)](LICENSE)

**Los Grumpis** es una plataforma web integral desarrollada para transformar la experiencia de aprendizaje y convivencia en el aula de Educación Primaria (de 1º a 6º curso). A través de mecánicas de gamificación, coleccionismo de criaturas, economía interna y gestión de responsabilidades, la aplicación conecta de forma fluida las necesidades del profesorado con la motivación del alumnado.

---

## 🌟 Características Principales

### 🎓 1. Portal del Alumno (Estudiante)
Un espacio gamificado con una interfaz visual limpia, intuitiva y atractiva:
* **Perfil de Entrenador Grumpi:** Visualización de avatar personalizable, nivel, Grumpidólares y total de energías acumuladas.
* **Sistema de Energías y Medallas:** Conteo detallado de los distintos tipos de energía (Agua, Fuego, Tierra, Aire, Rayo, Luz, Oscuridad, Vida y Normal) y colección de medallas de combate.
* **Grumpi Tienda:** Canjeo de Grumpidólares por objetos de apoyo, pociones, antídotos y mejoras.
* **Gestión de Encargados:** Asignación dinámica de roles semanales (como *Policía Grumpi*) con listado de responsabilidades y tareas asociadas.
* **Guía y Leyenda Grumpi:** Explicación interactiva del funcionamiento de las cartas, tipos de criaturas y normas de la clase.
* **Blog Educativo:** Lectura de publicaciones, noticias y avisos del profesorado con sistema de notificaciones de nuevos posts.

### ⚙️ 2. Portal de Administración (Profesorado)
Un panel de control protegido por autenticación segura (`AuthGuard`) para la gestión total del aula:
* **Dashboard Resumen:** Estadísticas generales de la clase en tiempo real, hora actual y directorios rápidos desplegables por curso.
* **Gestión de Alumnos:** Tabla interactiva filtrada por ciclos (1º a 6º de Primaria) para la administración ágil de Grumpis, Grumpidólares, energías, objetos y roles.
* **Creador de Posts:** Editor de entradas para el blog del aula con soporte para múltiples imágenes, subtítulos y fechas automáticas.

---

## 🎮 Mecánicas de Juego y Aprendizaje

* **Obtención de Energías:** Vinculada directamente al comportamiento y actitud semanal en el aula (asistencia, traer tareas hechas, convivencia sin conflictos, atención en clase y ayuda a los compañeros).
* **Economía de Aula:** Sistema de recompensas basado en puntos y monedas (*Grumpidólares*) que refuerzan el esfuerzo académico y la participación activa.

---

## 🛠️ Stack Tecnológico

El proyecto está construido siguiendo los estándares más modernos del ecosistema web:

* **Framework:** [Angular](https://angular.dev/) (Arquitectura basada en componentes *Standalone*).
* **Gestión de Estado:** Angular **Signals** para un rendimiento reactivo y fluido.
* **Rutas:** Angular Router con carga perezosa (`lazy loading`) y protección de rutas mediante funciones de guardia (`guards`).
* **Estilos:** SCSS modular, con un diseño adaptable (*responsive*), variables globales y una estética "premium" de tarjetas redondeadas.
* **Internacionalización:** Soporte multi-idioma integrado mediante [@ngx-translate/core](https://github.com/ngx-translate/core).

---

## 👤 Autor y Creador

Este proyecto ha sido concebido, diseñado y desarrollado por **Daniel García Díaz**, desarrollador Full-stack y apasionado por la innovación educativa y la tecnología aplicada al aula.

---

## 🚀 Puesta en Marcha (Desarrollo Local)

Si deseas clonar el repositorio y ejecutarlo en tu entorno local:

1. **Clona el repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/los-grumpis.git](https://github.com/tu-usuario/los-grumpis.git)