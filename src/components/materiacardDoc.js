/**
 * @file MateriaCard.vue
 * @description Componente para representar una tarjeta de materia.
 * @module MateriaCard
 */

/**
 * La sección de plantilla del componente.
 *
 * @typedef {object} Template
 * @property {string} class - La clase CSS del contenedor de la tarjeta.
 * @property {object} img - Imagen de la materia.
 * @property {string} alt - Texto alternativo para la imagen de la materia.
 * @property {button} - Botón con el nombre de la materia.
 */

/**
 * La sección de script del componente.
 *
 * @typedef {object} Script
 * @property {object} props - Propiedades que acepta el componente.
 * @property {object} props.materia - Objeto que representa una materia con propiedades `name` e `image`.
 * @property {boolean} props.isSelected - Indica si la materia está seleccionada.
 * @property {object} methods - Métodos del componente.
 * @property {function} methods.selectMateria - Método que emite el evento `select-materia` con la materia seleccionada.
 */

/**
 * La sección de estilo del componente.
 *
 * @typedef {object} Style
 * @property {string} scoped - Define que los estilos son específicos para este componente.
 * @property {string} .card - Clase CSS para el contenedor de la tarjeta.
 * @property {string} .card img - Estilos para la imagen dentro de la tarjeta.
 * @property {string} button.selected - Estilos para el botón cuando está seleccionado.
 */
