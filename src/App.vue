<template>
  <div id="app" class="columns">
    <!-- Columna Izquierda -->
    <div class="column-izq">
      <div class="izq-arr">
        <!-- Perfil Aquí -->
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-card class="mx-auto card-perfil" max-width="375" elevation="10">
              <v-avatar class="mx-auto mt-4 foto-perfil" size="150">
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
              </v-avatar>
              <v-card-title class="justify-center nombre-perfil">Jaime Galindo</v-card-title>
              <v-card-subtitle class="justify-center escuela-perfil">Primaria: Benito Juárez</v-card-subtitle>
              <v-card-text class="text-center">
                <v-icon color="primary">mdi-email</v-icon>
                <span class="ml-2 desc-perfil">gavilan@utcv.com</span>
              </v-card-text>
              <v-card-text class="text-center">
                <v-icon color="primary">mdi-phone</v-icon>
                <span class="ml-2 desc-perfil">+123 456 7890</span>
              </v-card-text>
              <v-card-text class="text-center">
                <v-icon color="primary">mdi-map-marker</v-icon>
                <span class="ml-2 desc-perfil">Cuitlahuac, Ver.</span>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <div class="izq-aba">
        <v-col cols="12">
          <v-btn
            class="izq-btn"
            rounded="xl"
            size="x-large"
            block
            elevation="10"
            @click="ventanaCursos"
          >
            <v-icon left>mdi-certificate</v-icon> CURSOS
          </v-btn>
        </v-col>

        <v-col cols="12">
          <v-btn
            class="izq-btn"
            rounded="xl"
            size="x-large"
            block
            elevation="10"
            @click="ventanaGrupos"
          >
            <v-icon left>mdi-account-group</v-icon> GRUPOS
          </v-btn>
        </v-col>

        <v-col cols="12">
          <v-btn
            class="izq-btn"
            rounded="xl"
            size="x-large"
            block
            elevation="10"
            @click="ventanaAlumnos"
          >
            <v-icon left>mdi-account-school</v-icon> ALUMNOS
          </v-btn>
        </v-col>

        <v-col cols="12">
          <v-btn
            class="izq-btn"
            rounded="xl"
            size="x-large"
            block
            elevation="10"
            @click="ventanaActividades"
          >
            <v-icon left>mdi-clipboard-text</v-icon> ACTIVIDADES
          </v-btn>
        </v-col>
      </div>
    </div>

    <!-- Columna Central -->
    <div class="column-cent">
      <!-- Contenido Inicial -->
      <div
        v-if="
          !mostrarAgregarCurso &&
          !mostrarAgregarActividad &&
          !mostrarCursos &&
          !mostrarGrupos &&
          !mostrarAlumnos &&
          !mostrarActividades
        "
        class="content0"
      >
        <v-card class="pa-5" outlined>
          <h1 class="title text-center">KALEV</h1>
          <p class="text-center">
            EN BUSQUEDA DE <span id="titulos"></span>
          </p>
          <v-img
            src="./components/icons/kalev.png"
            class="mx-auto"
            alt="Kalev Logo"
          ></v-img>
        </v-card>
      </div>

      <!-- agregar curso -->
      <div v-if="mostrarAgregarCurso" class="agregarCursos">
        <h1>agregar curso</h1>
        <v-form ref="form">
          <!-- Campo de Nombre -->
          <v-text-field
            label="Nombre"
            v-model="formData.name"
            prepend-icon="mdi-account"
            required
          ></v-text-field>

          <!-- Campo de Descripción -->
          <v-textarea
            label="Descripción"
            v-model="formData.description"
            prepend-icon="mdi-note-text"
            required
          ></v-textarea>

          <!-- Seleccionar Parcial -->
          <v-select
            label="Seleccionar Parcial"
            :items="partials"
            v-model="formData.selectedPartial"
            prepend-icon="mdi-calendar"
            required
          ></v-select>

          <!-- Seleccionar Grupos -->
          <v-select
            label="Seleccionar Grupos"
            :items="groups"
            v-model="formData.selectedGroups"
            prepend-icon="mdi-account-group"
            multiple
            chips
            required
          ></v-select>

          <!-- Seleccionar Materia con Imagen Interactiva -->
          <v-row align="center" justify="center" class="mb-4">
            <v-col cols="12" sm="8" class="text-center">
              <div class="subject-selection-container">
                <div class="subject-selection" @click="selectSubjectMat">
                  <v-img
                    src="https://via.placeholder.com/150"
                    alt="Matemáticas"
                    class="subject-image"
                    contain
                  ></v-img>
                  <span class="subject-label">Matemáticas</span>
                </div>
                <div class="subject-selection" @click="selectSubjectEsp">
                  <v-img
                    src="https://via.placeholder.com/150"
                    alt="Español"
                    class="subject-image"
                    contain
                  ></v-img>
                  <span class="subject-label">Español</span>
                </div>
                <div class="subject-selection" @click="selectSubjectGeo">
                  <v-img
                    src="https://via.placeholder.com/150"
                    alt="Geografía"
                    class="subject-image"
                    contain
                  ></v-img>
                  <span class="subject-label">Geografía</span>
                </div>
              </div>
            </v-col>
          </v-row>

          <!-- Mostrar Materia Seleccionada -->
          <v-alert v-if="formData.selectedSubject" type="info" dismissible>
            Materia seleccionada: {{ formData.selectedSubject }}
          </v-alert>

          <!-- Botón de Enviar -->
          <v-btn color="success" @click="submitForm">Enviar</v-btn>
        </v-form>
      </div>

      <!-- agregar activida -->
      <div v-if="mostrarAgregarActividad" class="agregarActividad">
        <h1>agregar act</h1>
      </div>

      <!-- Cursos -->
      <div v-if="mostrarCursos" class="cursosExistentes">
        <h1>CURSOS</h1>
        <!-- Botón Flotante Agregar-->
          <div class="fab-button-curso" @click="ventanaAgregarCursos">
              <v-icon>mdi-plus</v-icon>
              <span>Agregar curso</span>
          </div>
      </div>

      <!-- Grupos -->
      <div v-if="mostrarGrupos" class="gruposExistentes">
        <h1>GRUPOS</h1>
      </div>

      <!-- Alumnos -->
      <div v-if="mostrarAlumnos" class="alumnosExistentes">
        <h1>ALUMNOS</h1>
        <!-- Aquí se integra el código HTML de los alumnos -->
        <v-app>
            <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="searchName"
                            label="Buscar por Nombre Completo"
                            prepend-icon="mdi-account-search"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="searchDOB"
                            label="Buscar por Fecha de Nacimiento"
                            prepend-icon="mdi-calendar-search"
                            type="date"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-card class="mt-4">
                    <v-card-title>
                        <v-icon left>mdi-school</v-icon>
                        Lista de Alumnos
                    </v-card-title>
                    <v-card-text>
                        <v-data-table
                            :headers_alum="headers_alum"
                            :items="filteredStudents"
                            class="elevation-1"
                        >
                            <template v-slot:item.name="{ item }">
                                <td>{{ item.name }}</td>
                            </template>
                            <template v-slot:item.dob="{ item }">
                                <td>{{ new Date(item.dob).toLocaleDateString() }}</td>
                            </template>
                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-app>
      </div>

      <!-- Actividades -->
      <div v-if="mostrarActividades" class="actividadesExistentes">
        <h1>ACTIVIDADES</h1>
        <!-- Aquí se integra el código HTML de las actividades -->
        <v-app>
          <v-container>
            <!-- Filtros de búsqueda por materia y tipo de aprendizaje -->
            <v-row>
              <v-col cols="12" md="6">
                <v-select
                  v-model="selectedSubject"
                  :items="subjects"
                  label="Filtrar por Materia"
                  append-icon="mdi-book"
                  single-line
                  hide-details
                ></v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-select
                  v-model="selectedLearningType"
                  :items="learningTypes"
                  label="Filtrar por Tipo de Aprendizaje"
                  append-icon="mdi-school"
                  single-line
                  hide-details
                ></v-select>
              </v-col>
            </v-row>

            <!-- Botón para mostrar todas las actividades -->
            <v-btn color="primary" @click="resetFilters">
              Mostrar todas las actividades
            </v-btn>

            <!-- Tabla de Actividades -->
            <v-card class="mt-4">
              <v-card-title>
                <v-icon left>mdi-book-open-variant</v-icon>
                Lista de Actividades Académicas
              </v-card-title>
              <v-card-text>
                <v-data-table
                  :headers_act="headers_act"
                  :items="filteredActivities"
                  class="elevation-1"
                >
                  <template v-slot:item.actions="{ item }">
                    <v-icon small @click="editItem(item)">mdi-pencil</v-icon>
                    <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>
          </v-container>
        </v-app>

        <!-- Botón Flotante Agregar-->
        <div class="fab-button-acti" @click="ventanaAgregarActividad">
              <v-icon>mdi-plus</v-icon>
              <span>Agregar actividad</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrarAgregarCurso: false,
      mostrarAgregarActividad: false,
      mostrarCursos: false,
      mostrarGrupos: false,
      mostrarAlumnos: false,
      mostrarActividades: false,

      selectedSubject: null,
      selectedLearningType: null,
      searchName: '',
      searchDOB: '',


      formData: {
        name: '',
        description: '',
        selectedPartial: null,
        selectedGroups: [],
        selectedSubject: null,
      },
      partials: ['Primer Parcial', 'Segundo Parcial', 'Tercer Parcial'],
      groups: ['Grupo A', 'Grupo B', 'Grupo C'],


      headers_act: [
        { text: 'Nombre', value: 'name' },
        { text: 'Descripción', value: 'description' },
        { text: 'Fecha de Entrega', value: 'due_date' },
        { text: 'Tipo de Aprendizaje', value: 'learning_type' },
        { text: 'Materia', value: 'subject' },
        { text: 'Acciones', value: 'actions', sortable: false }
      ],
      subjects: ['Español', 'Matemáticas', 'Geografía'],
      learningTypes: ['Lectura', 'Auditivo', 'Escritura', 'Kinestésico', 'Visual'],
      activities: [
        { name: 'Lectura de Poemas', description: 'Leer y analizar un poema.', due_date: '2024-09-10', learning_type: 'Lectura', subject: 'Español' },
        { name: 'Debate de Ideas', description: 'Debate sobre temas de interés.', due_date: '2024-09-12', learning_type: 'Auditivo', subject: 'Español' },
        { name: 'Redacción de Ensayo', description: 'Escribir un ensayo sobre un tema libre.', due_date: '2024-09-15', learning_type: 'Escritura', subject: 'Español' },
        { name: 'Dramatización', description: 'Dramatizar una escena literaria.', due_date: '2024-09-17', learning_type: 'Kinestésico', subject: 'Español' },
        { name: 'Análisis Visual', description: 'Analizar imágenes y cuadros.', due_date: '2024-09-20', learning_type: 'Visual', subject: 'Español' },
        { name: 'Problemas Matemáticos', description: 'Resolver problemas de lógica.', due_date: '2024-09-11', learning_type: 'Lectura', subject: 'Matemáticas' },
        { name: 'Juegos Numéricos', description: 'Juego de números en equipo.', due_date: '2024-09-13', learning_type: 'Kinestésico', subject: 'Matemáticas' },
        { name: 'Cálculo Mental', description: 'Ejercicios de cálculo rápido.', due_date: '2024-09-16', learning_type: 'Auditivo', subject: 'Matemáticas' },
        { name: 'Geometría Visual', description: 'Dibujar figuras geométricas.', due_date: '2024-09-18', learning_type: 'Visual', subject: 'Matemáticas' },
        { name: 'Explicación de Teoremas', description: 'Redactar y explicar teoremas.', due_date: '2024-09-21', learning_type: 'Escritura', subject: 'Matemáticas' },
        { name: 'Mapa Conceptual', description: 'Crear un mapa conceptual del tema.', due_date: '2024-09-09', learning_type: 'Visual', subject: 'Geografía' },
        { name: 'Explicación Oral', description: 'Exponer un tema en clase.', due_date: '2024-09-14', learning_type: 'Auditivo', subject: 'Geografía' },
        { name: 'Investigación Escrita', description: 'Investigar y redactar sobre un país.', due_date: '2024-09-19', learning_type: 'Escritura', subject: 'Geografía' },
        { name: 'Simulación de Viaje', description: 'Simular un viaje geográfico.', due_date: '2024-09-22', learning_type: 'Kinestésico', subject: 'Geografía' },
        { name: 'Lectura de Mapas', description: 'Leer e interpretar mapas.', due_date: '2024-09-25', learning_type: 'Lectura', subject: 'Geografía' }
      ],


      headers_alum: [
        { text: 'Nombre Completo', value: 'name' },
        { text: 'Fecha de Nacimiento', value: 'dob' }
      ],
      students: [
        { name: 'Juan Pérez García', dob: '2012-01-15' },
        { name: 'Ana Gómez Martínez', dob: '2011-03-22' },
        { name: 'Luis Martínez Fernández', dob: '2012-06-30' },
        { name: 'Maria Fernández López', dob: '2010-08-09' },
        { name: 'Pedro Sánchez Romero', dob: '2011-11-25' },
        { name: 'Sofía Rodríguez Moreno', dob: '2012-02-14' },
        { name: 'Carlos López García', dob: '2011-07-18' },
        { name: 'Laura González Pérez', dob: '2012-09-04' },
        { name: 'José Torres Díaz', dob: '2010-12-05' },
        { name: 'Carmen Morales Ruiz', dob: '2011-05-19' },
        { name: 'Miguel Álvarez Castillo', dob: '2012-10-11' },
        { name: 'Patricia Castro Martínez', dob: '2011-01-27' },
        { name: 'Javier Ortega García', dob: '2010-04-03' },
        { name: 'Natalia Ruiz Vargas', dob: '2012-11-21' },
        { name: 'Alberto Jiménez López', dob: '2011-06-15' }
      ]
    };
  },
  computed: {
    filteredActivities() {
      return this.activities.filter(activity => {
        return (
          (!this.selectedSubject || activity.subject === this.selectedSubject) &&
          (!this.selectedLearningType || activity.learning_type === this.selectedLearningType)
        );
      });
    },
    filteredStudents() {
      return this.students.filter(student => {
          const nameMatch = student.name.toLowerCase().includes(this.searchName.toLowerCase());
          const dobMatch = this.searchDOB ? new Date(student.dob).toLocaleDateString() === new Date(this.searchDOB).toLocaleDateString() : true;
          return nameMatch && dobMatch;
      });
    }
  },
  methods: {
    editItem(item) {
      alert('Editar: ' + item.name + ' - ' + item.learning_type);
    },
    deleteItem(item) {
      alert('Eliminar: ' + item.name + ' - ' + item.learning_type);
    },
    resetFilters() {
      this.selectedSubject = null;
      this.selectedLearningType = null;
    },


    ventanaAgregarActividad() {
      this.mostrarAgregarCurso = false;
      this.mostrarAgregarActividad = true;
      this.mostrarCursos = false;
      this.mostrarGrupos = false;
      this.mostrarAlumnos = false;
      this.mostrarActividades = false;
    },
    ventanaAgregarCursos() {
      this.mostrarAgregarCurso = true;
      this.mostrarAgregarActividad = false;
      this.mostrarCursos = false;
      this.mostrarGrupos = false;
      this.mostrarAlumnos = false;
      this.mostrarActividades = false;
    },
    ventanaCursos() {
      this.mostrarAgregarCurso = false;
      this.mostrarAgregarActividad = false;
      this.mostrarCursos = true;
      this.mostrarGrupos = false;
      this.mostrarAlumnos = false;
      this.mostrarActividades = false;
    },
    ventanaGrupos() {
      this.mostrarAgregarCurso = false;
      this.mostrarAgregarActividad = false;
      this.mostrarCursos = false;
      this.mostrarGrupos = true;
      this.mostrarAlumnos = false;
      this.mostrarActividades = false;
    },
    ventanaAlumnos() {
      this.mostrarAgregarCurso = false;
      this.mostrarAgregarActividad = false;
      this.mostrarCursos = false;
      this.mostrarGrupos = false;
      this.mostrarAlumnos = true;
      this.mostrarActividades = false;
    },
    ventanaActividades() {
      this.mostrarAgregarCurso = false;
      this.mostrarAgregarActividad = false;
      this.mostrarCursos = false;
      this.mostrarGrupos = false;
      this.mostrarAlumnos = false;
      this.mostrarActividades = true;
    },


    selectSubjectMat() {
      this.formData.selectedSubject = 'Matemáticas';
    },
    selectSubjectEsp() {
      this.formData.selectedSubject = 'Español';
    },
    selectSubjectGeo() {
      this.formData.selectedSubject = 'Geografia';
    },
    submitForm() {
      if (this.$refs.form.validate()) {
        alert('Formulario enviado con éxito');
      }
    },

  }
};
</script>

<style scoped>
.columns {
  display: flex;
  justify-content: space-between;
}

.column-izq {
  width: 25%;
  padding: 10px;
}

.column-cent {
  width: 70%;
  padding: 10px;
}

.izq-arr,
.izq-aba {
  margin-bottom: 20px;
}

.content0 {
  margin: 20px 0;
}

.v-card {
  margin-bottom: 20px;
}

.title {
  font-size: 2em;
  font-weight: bold;
}

.mx-auto {
  margin: auto;
}

/* Botones izquierda */
.izq-btn {
  background-color: var(--btn-background-color, #1976D2);
  color: white;
  font-weight: bold;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.izq-btn:hover {
  background-color: var(--btn-background-color-hover, #1565C0);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
}

.izq-btn:active {
  background-color: var(--btn-background-color-active, #0D47A1);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
}

/* Perfil */
.card-perfil {
  border-radius: 20px;
  background-color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.foto-perfil {
  border: 4px solid var(--v-primary-base);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.nombre-perfil {
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--v-primary-darken2);
}

.escuela-perfil {
  color: var(--v-primary-lighten1);
}

.desc-perfil {
  font-size: 1rem;
  color: #555;
}

.desc-perfil:hover {
  color: var(--v-primary-darken1);
  text-decoration: underline;
}

/* boton agregar */
.fab-button-curso,.fab-button-acti {
    position: fixed;
    bottom: 16px;
    right: 16px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: #1976D2; /* Color de fondo del botón */
    color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000; /* Asegura que el botón esté sobre otros elementos */
}
.fab-button-curso:hover,.fab-button-acti:hover {
    background-color: #1565C0; /* Color de fondo del botón al pasar el ratón */
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
}
.fab-button-curso .mdi,.fab-button-acti .mdi {
    font-size: 24px; /* Tamaño del icono */
}
.fab-button-curso span ,.fab-button-acti span{
    position: absolute;
    bottom: 70px;
    right: 0;
    background: #1976D2;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    font-size: 12px;
    white-space: nowrap;
    transition: opacity 0.3s ease;
    opacity: 0;
    visibility: hidden;
}
.fab-button-curso:hover span,.fab-button-acti:hover span {
    opacity: 1;
    visibility: visible;
}


.subject-selection-container {
  display: flex;
  justify-content: space-around;
  gap: 20px;
}

.subject-selection {
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  flex-grow: 1
}

.subject-selection:hover {
  transform: scale(1.1);
}

.subject-image {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 150px;
  height: 150px;
}

.subject-label {
  margin-top: 8px;
  font-weight: bold;
  color: #424242;
  text-align: center;
  display: block;
}
</style>
