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
 * @property {object} izq-arr - La sección superior de la columna izquierda.
 * @property {object} izq-aba - La sección inferior de la columna izquierda.
 * @property {object} content0 - La vista principal que muestra el título y el mensaje de bienvenida.
 * @property {object} content1 - La vista para agregar cursos.
 * @property {object} content2 - La vista para agregar actividades.
 * @property {object} cursosExistentes - La vista que muestra los cursos existentes.
 * @property {object} actividades - La vista que muestra las actividades asignadas.
 * @property {object} grupos - La vista que muestra los grupos de estudiantes.
 */

/**
 * La sección de estilo del componente.
 *
 * @typedef {object} Style
 * @property {string} scoped - Define que los estilos son específicos para este componente.
 * @property {string} columns - Clase CSS para definir la estructura de columnas.
 * @property {string} column-izq - Clase CSS para la columna izquierda.
 * @property {string} column-cent - Clase CSS para la columna central.
 * @property {string} izq-arr - Clase CSS para la sección superior de la columna izquierda.
 * @property {string} izq-aba - Clase CSS para la sección inferior de la columna izquierda.
 * @property {string} content0 - Clase CSS para la vista principal.
 * @property {string} content1 - Clase CSS para la vista de agregar cursos.
 * @property {string} content2 - Clase CSS para la vista de agregar actividades.
 * @property {string} cursosExistentes - Clase CSS para la vista de cursos existentes.
 * @property {string} actividades - Clase CSS para la vista de actividades.
 * @property {string} grupos - Clase CSS para la vista de grupos.
 * @property {string} styled-form - Clase CSS para el formulario estilizado.
 * @property {string} mb-4 - Clase CSS para el margen inferior en ciertos elementos.
 */

/**
 * La sección de script del componente.
 *
 * @typedef {object} Script
 * @property {boolean} mostrarContenidoCurso - Indica si se debe mostrar la vista de agregar curso.
 * @property {boolean} mostrarContenidoActividad - Indica si se debe mostrar la vista de agregar actividad.
 * @property {boolean} MostrarVentanaCursosExistentes - Indica si se debe mostrar la vista de cursos existentes.
 * @property {boolean} mostrarActividades - Indica si se debe mostrar la vista de actividades.
 * @property {boolean} showGruposContent - Indica si se debe mostrar la vista de grupos.
 * @property {array} selectedMaterias - Lista de materias seleccionadas.
 * @property {array} selectedEstilos - Lista de estilos de aprendizaje seleccionados.
 * @property {string} nombre - Nombre del curso o actividad.
 * @property {string} descripcion - Descripción del curso o actividad.
 * @property {string} parcial - Parcial al que pertenece el curso.
 * @property {array} grupos - Grupos a los que pertenece el curso.
 * @property {array} cursos - Lista de cursos existentes.
 * @property {array} estilos - Lista de estilos de aprendizaje disponibles.
 * @property {string} paraQueCurso - Indica para qué curso se asigna la actividad.
 * @property {string} paraQueTema - Indica para qué tema se asigna la actividad.
 * @property {string} fechaEntrega - Fecha de entrega de la actividad.
 * @property {object} content - Contenido relacionado con los parciales.
 * @property {array} parcial1 - Lista de parciales.
 * @property {string} selectedParcial - Parcial seleccionado actualmente.
 * @property {boolean} showDiv - Indica si se deben mostrar los grupos para calificaciones.
 * @property {string|null} currentGroup - Grupo seleccionado para asignar calificaciones.
 * @property {array} groupAItems - Lista de estudiantes y calificaciones para el Grupo A.
 * @property {array} groupBItems - Lista de estudiantes y calificaciones para el Grupo B.
 * @property {string} selectedGroup - Grupo seleccionado en la vista de grupos.
 * @property {string} buscarAlumno - Texto de búsqueda para filtrar estudiantes en la vista de grupos.
 * @property {array} alumnos - Lista de estudiantes en los grupos.
 * @property {array} filteredAlumnos - Lista de estudiantes filtrados según la búsqueda.
 * @property {function} VentanaCursosExistentes - Función para mostrar la vista de cursos existentes.
 * @property {function} showGrupos - Función para mostrar la vista de grupos.
 * @property {function} submitFormCurso - Función para enviar el formulario de agregar curso.
 * @property {function} submitFormActividad - Función para enviar el formulario de agregar actividad.
 * @property {function} toggleMateriaSelection - Función para alternar la selección de materias.
 * @property {function} toggleEstiloSelection - Función para alternar la selección de estilos de aprendizaje.
 * @property {function} VentanaActividadesExistentes - Función para mostrar la vista de actividades.
 * @property {function} onChange - Función para manejar el cambio de selección de parcial.
 * @property {function} showGroup - Función para mostrar las calificaciones de un grupo específico.
 * @property {function} saveGrades - Función para guardar las calificaciones de un grupo.
 * @property {function} showActividad - Función para mostrar la actividad seleccionada.
 */
