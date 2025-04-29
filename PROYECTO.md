# Proyecto: Estimación de Carga de Contaminantes en un Río

## 1. Definición del Problema y Justificación

El proyecto se centra en desarrollar una **aplicación web** para estimar la carga total de contaminantes en un tramo de río, utilizando datos de concentración (`C(x)`) y velocidad del flujo (`v(x)`).  
La idea es aplicar métodos de integración numérica (por ejemplo, **Trapecio** y **Simpson**) para calcular la integral definida:

\[
Q = \int_{a}^{b} C(x) \cdot v(x) \, dx
\]

**Justificación:**
- **Impacto ambiental:** La herramienta facilitará la identificación de áreas críticas en términos de contaminación, apoyando la toma de decisiones en políticas ambientales.
- **Viabilidad técnica:** Los métodos numéricos permiten trabajar con datos discretos, reduciendo costos de monitoreo en campo.
- **Aplicabilidad:** La solución es de interés para organismos gubernamentales, investigadores y gestores ambientales.

---

## 2. Ingeniería de Requisitos

### Casos de Uso

- **Ingreso de Datos:** El usuario introduce valores de concentración y velocidad mediante formularios web.
- **Cálculo de Contaminación:** El sistema procesa los datos utilizando algoritmos numéricos para obtener la carga total.
- **Visualización de Resultados:** Se muestran los resultados en formato numérico y gráfico.
- **Gestión de Usuarios y Reportes:** Los administradores gestionan cuentas y pueden exportar reportes.

### Requerimientos Funcionales

- Permitir el ingreso y validación de datos.
- Ejecutar cálculos mediante métodos numéricos (Trapecio y Simpson).
- Presentar resultados numéricos y gráficos interactivos.
- Almacenar y recuperar sesiones de cálculo.
- Gestionar autenticación y roles de usuarios.

### Requerimientos No Funcionales

- Diseño responsivo y adaptable a distintos dispositivos.
- Arquitectura modular y escalable.
- Seguridad en el acceso mediante autenticación.
- Rendimiento óptimo en procesamiento y visualización.

---

## 3. Backlog Inicial del Proyecto

### Historias de Usuario

- **HU-01:** Ingreso de datos para el cálculo de contaminación.
- **HU-02:** Visualización de resultados en formatos numéricos y gráficos.
- **HU-03:** Guardado y recuperación de sesiones de cálculo.
- **HU-04:** Gestión de cuentas y generación de reportes.
- **HU-05:** Exportación de resultados a formatos PDF y Excel.

### Planificación por Sprints

- **Sprint 1:** Definición de requisitos, casos de uso y elaboración del backlog. Configuración inicial del repositorio y diseño de la arquitectura.
- **Sprint 2:** Desarrollo del módulo de cálculo numérico, creación de la API y realización de pruebas unitarias.
- **Sprint 3:** Implementación de la interfaz web, integración con la API y ajustes de usabilidad.
- **Sprint 4:** Pruebas de integración, validación final y documentación completa.

---

## 4. Diseño Preliminar de la Arquitectura y Tecnologías a Usar

### Arquitectura del Sistema

- **Capa de Presentación (Frontend):** Interfaz web responsiva (por ejemplo, usando ReactJS) para el ingreso de datos y visualización de resultados.
- **Capa de Lógica (Backend):** API REST desarrollada con Django que orquesta la comunicación entre la interfaz y el módulo de cálculo.
- **Capa de Cómputo:** Módulo numérico implementado en Matlab/Octave para realizar los cálculos.
- **Capa de Datos:** Base de datos (PostgreSQL) para gestionar usuarios, sesiones y resultados.

### Tecnologías

- **Frontend:** ReactJS, Chart.js (o D3.js), CSS/Bootstrap.
- **Backend:** Django y Django REST Framework, autenticación con JWT.
- **Cómputo:** Matlab/Octave.
- **Base de Datos:** PostgreSQL.
- **Control de Versiones:** Git (repositorio en GitHub o similar).

---

## 5. Visualización y Uso de la Aplicación

1. **Visualiza este archivo en GitHub:**  
   - Ve a tu repositorio en [https://github.com/rafael667q/calculadora](https://github.com/rafael667q/calculadora)
   - Haz clic en el archivo `PROYECTO.md` para ver la documentación formateada.

2. **Para usar la aplicación:**  
   - Consulta el README o la documentación técnica para instrucciones de instalación y uso.
   - Usualmente, deberás clonar el repositorio, instalar dependencias y ejecutar los servicios (por ejemplo, con Docker Compose o comandos de Django/React).
   - Si necesitas una guía paso a paso para levantar el entorno, ¡dímelo y te la preparo!

---

**Autor:**  
[Tu Nombre o Equipo]  
[Fecha]