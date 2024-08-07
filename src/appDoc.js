/**
 * @file App.vue
 * @description El componente principal de la aplicación.
 * @module App
 */

/**
 * La sección de plantilla del componente.
 *
 * @typedef {object} Template
 * @property {string} id - El ID del contenedor principal.
 * @property {string} class - La clase CSS del contenedor principal.
 * @property {object} column-izq - El contenedor de la columna izquierda.
 * @property {object} column-cent - El contenedor de la columna central.
 * @property {object} column-der - El contenedor de la columna derecha.
 * @property {object} izq-arr - La sección superior de la columna izquierda.
 * @property {object} izq-aba - La sección inferior de la columna izquierda.
 * @property {object} content0 - La vista principal que muestra el título y el mensaje de bienvenida.
 * @property {object} content1 - La vista para agregar cursos.
 * @property {object} content2 - La vista para agregar actividades.
 */

/**
 * La sección de estilo del componente.
 *
 * @typedef {object} Style
 * @property {string} scoped - Define que los estilos son específicos para este componente.
 * @property {string} fade - Clase CSS para la animación de desvanecimiento.
 * @property {string} #app - Clase CSS para el contenedor principal.
 * @property {string} column-izq - Clase CSS para la columna izquierda.
 * @property {string} column-cent - Clase CSS para la columna central.
 * @property {string} column-der - Clase CSS para la columna derecha.
 * @property {string} der-arr - Clase CSS para la sección superior de la columna derecha.
 * @property {string} der-aba - Clase CSS para la sección inferior de la columna derecha.
 * @property {string} izq-arr - Clase CSS para la sección superior de la columna izquierda.
 * @property {string} izq-aba - Clase CSS para la sección inferior de la columna izquierda.
 * @property {string} materias - Clase CSS para el contenedor de materias.
 * @property {string} estilos - Clase CSS para el contenedor de estilos de aprendizaje.
 * @property {string} card - Clase CSS para las tarjetas de materias y estilos.
 * @property {string} styled-form - Clase CSS para el formulario estilizado.
 * @property {string} form-group - Clase CSS para los grupos de campos del formulario.
 * @property {string} form-control - Clase CSS para los controles del formulario.
 * @property {string} checkbox-group - Clase CSS para el grupo de checkboxes.
 * @property {string} btn-submit - Clase CSS para el botón de envío.
 */

/**
 * La sección de script del componente.
 *
 * @typedef {object} Script
 * @property {boolean} mostrarContenidoCurso - Indica si se debe mostrar el contenido de agregar curso.
 * @property {boolean} mostrarContenidoActividad - Indica si se debe mostrar el contenido de agregar actividad.
 * @property {function} ventanaAgregarCurso - Función para mostrar la vista de agregar curso.
 * @property {function} ventanaAgregarActividad - Función para mostrar la vista de agregar actividad.
 * @property {array} materias - Lista de materias disponibles.
 * @property {array} estilos - Lista de estilos de aprendizaje disponibles.
 * @property {array} selectedMaterias - Lista de materias seleccionadas.
 * @property {array} selectedEstilos - Lista de estilos seleccionados.
 * @property {string} nombre - Nombre del curso o actividad.
 * @property {string} descripcion - Descripción del curso o actividad.
 * @property {string} parcial - Parcial al que pertenece el curso.
 * @property {array} grupos - Grupos a los que pertenece el curso.
 * @property {function} toggleMateriaSelection - Función para alternar la selección de materias.
 * @property {function} toggleEstiloSelection - Función para alternar la selección de estilos.
 * @property {function} submitFormCurso - Función para enviar el formulario de agregar curso.
 * @property {function} submitFormActividad - Función para enviar el formulario de agregar actividad.
 * @property {array} palabras - Lista de palabras para el mensaje de bienvenida.
 * @property {number} i - Índice de la palabra actual en el mensaje de bienvenida.
 * @property {function} cambiarPalabra - Función para cambiar la palabra del mensaje de bienvenida.
 */
