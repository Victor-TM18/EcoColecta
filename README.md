# 🌿 EcoColecta - Plataforma Municipal de Reciclaje Comunitario

Solución digital desarrollada para el municipio local que facilita la gestión de puntos de reciclaje comunitario y el registro de entregas de materiales reciclables por parte de los ciudadanos.

---

## 📚 Fase 1: Investigación Inicial y Conceptual

### a. Evolución del Control de Versiones
El control de versiones ha evolucionado para solucionar los problemas de respaldos manuales y conflictos en equipo:
* **Sistemas Centralizados (ej. SVN):** Poseen un único servidor central que almacena todas las versiones de los archivos. Los desarrolladores descargan solo una porción del historial. Si el servidor central cae, nadie puede respaldar cambios ni trabajar en colaboración de manera óptima.
* **Sistemas Distribuidos (ej. Git):** Cada computadora de los desarrolladores contiene un repositorio local completo con todo el historial de cambios. Esto permite trabajar sin conexión, realizar operaciones rápidas de forma local y ofrecer una alta redundancia y seguridad ante fallos del servidor remoto.

### b. Diferencias Conceptuales entre Git y GitHub
* **Git:** Es una **herramienta de software de control de versiones** de código abierto que se ejecuta localmente en tu computadora para rastrear cambios, administrar ramas y fusionar código.
* **GitHub:** Es una **plataforma web basada en la nube** que hospeda repositorios Git, facilitando la colaboración en equipo, la revisión de código (*Code Review*), tableros de gestión (*Projects*) y la automatización (*GitHub Actions*).

### c. Configuración de Seguridad (Llaves SSH)
Para garantizar una comunicación segura y autenticada entre el equipo de desarrollo local y los repositorios remotos en GitHub sin exponer contraseñas, se configuran llaves criptográficas SSH (Secure Shell) asociadas a las cuentas institucionales de los integrantes.

---

## 🛠️ Stack Tecnológico
* **Frontend:** Angular (Standalone Components)
* **Estilos:** Bootstrap 5, CSS
* **Control de Versiones:** Git & GitHub / GitHub Desktop
