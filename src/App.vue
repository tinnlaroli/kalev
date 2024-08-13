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
            <div class="header">
              <div class="text-content">
                <h1 class="title">
                  <div class="gradient-text">KALEV</div>
                  
                </h1>
                <h2 class="subtitle">
                  <span id="k">Inteligencia artificial</span> <br><span id="a">para estrategias</span>  <br> 
                  <span id="le">de aprendizaje</span> <span id="v">personalizadas</span>
                </h2>
              </div>
              <img
                width="200"
                src="./assets/KALEVFINAL_1.png"
                class="image"
                alt="Kalev Logo"
              />
            </div>

            <div class="content">
              <p>buscando...</p>
              <span v-if="showWord" :key="currentWord" class="fade">{{ currentWord }}</span>
            </div>
        </v-card>
      </div>

      <!-- agregar curso -->
      <div v-if="mostrarAgregarCurso" class="agregarCursos">
        <h1>agregar curso</h1>
        <v-form ref="form">
          <!-- Campo de Nombre -->
          <v-text-field
            label="Nombre"
            v-model="formDataCurso.name"
            prepend-icon="mdi-account"
            required
          ></v-text-field>

          <!-- Campo de Descripción -->
          <v-textarea
            label="Descripción"
            v-model="formDataCurso.description"
            prepend-icon="mdi-note-text"
            required
          ></v-textarea>

          <!-- Seleccionar Parcial -->
          <v-select
            label="Seleccionar Parcial"
            :items="partials"
            v-model="formDataCurso.selectedPartial"
            prepend-icon="mdi-calendar"
            required
          ></v-select>

          <!-- Seleccionar Grupos -->
          <v-select
            label="Seleccionar Grupos"
            :items="groups"
            v-model="formDataCurso.selectedGroups"
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
          <v-alert v-if="formDataCurso.selectedSubject" type="info" dismissible>
            Materia seleccionada: {{ formDataCurso.selectedSubject }}
          </v-alert>

          <!-- Botón de Enviar -->
          <v-btn color="success" @click="submitForm">Enviar</v-btn>
        </v-form>
      </div>

      <!-- agregar activida -->
      <div v-if="mostrarAgregarActividad" class="agregarActividad">
        <h1>agregar actividad</h1>
        <v-form ref="form">
          <!-- Campo de Nombre -->
          <v-text-field
            label="Nombre"
            v-model="formDataAct.name"
            prepend-icon="mdi-account"
            required
          ></v-text-field>

          <!-- Campo de Descripción -->
          <v-textarea
            label="Descripción"
            v-model="formDataAct.description"
            prepend-icon="mdi-note-text"
            required
          ></v-textarea>

          <!-- Campo de Fecha de Entrega -->
          <v-menu
            v-model="menuDate"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="formDataAct.dueDate"
                label="Fecha de Entrega"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                class="date-field"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="formDataAct.dueDate"
              @input="menuDate = false"
              class="date-picker"
              :first-day-of-week="1" 
            ></v-date-picker>
          </v-menu>

          <!-- Seleccionar Cursos -->
          <v-select
            label="Seleccionar Cursos"
            :items="courses"
            v-model="formDataAct.selectedCourses"
            prepend-icon="mdi-school"
            multiple
            chips
            required
          ></v-select>

          <!-- Seleccionar Imágenes -->
          <v-row align="center" justify="center" class="mb-4">
            <v-col cols="12" sm="12" class="text-center">
              <div class="image-selection-container">
                <div
                  v-for="image in images"
                  :key="image.value"
                  class="image-selection"
                  :class="{ selected: formDataAct.selectedImages.includes(image.value) }"
                  @click="toggleImageSelection(image.value)"
                >
                  <v-img
                    :src="image.src"
                    :alt="image.alt"
                    class="image-thumbnail"
                    contain
                  ></v-img>
                  <span class="image-label">{{ image.label }}</span>
                </div>
              </div>
            </v-col>
          </v-row>

          <!-- Mostrar Imágenes Seleccionadas -->
          <v-alert v-if="formDataAct.selectedImages.length > 0" type="info" dismissible>
            Imágenes seleccionadas: {{ formDataAct.selectedImages.join(', ') }}
          </v-alert>

          <!-- Botón de Enviar -->
          <v-btn color="success" @click="submitForm">Enviar</v-btn>
        </v-form>
      </div>

      <!-- Cursos -->
      <div v-if="mostrarCursos" class="cursosExistentes">
        <h1>CURSOS</h1>
        <v-container class="d-flex flex-wrap justify-center">
          <v-card class="custom-card-curso" outlined>
            <v-card-title class="title-curso d-flex justify-center align-center">
              Español
            </v-card-title>
            <v-card-subtitle class="subtitle-curso text-center mb-3">
              Español 4A
            </v-card-subtitle>
          </v-card>

          <v-card class="custom-card-curso" outlined>
            <v-card-title class="title-curso d-flex justify-center align-center">
              Español
            </v-card-title>
            <v-card-subtitle class="subtitle-curso text-center mb-3">
              Español 5A
            </v-card-subtitle>
          </v-card>

          <v-card class="custom-card-curso" outlined>
            <v-card-title class="title-curso d-flex justify-center align-center">
              Geografia
            </v-card-title>
            <v-card-subtitle class="subtitle-curso text-center mb-3">
              Geografia 4A
            </v-card-subtitle>
          </v-card>
        </v-container>


        <!-- Botón Flotante Agregar-->
          <div class="fab-button-curso" @click="ventanaAgregarCursos">
              <v-icon>mdi-plus</v-icon>
              <span>Agregar curso</span>
          </div>
      </div>

      <!-- Grupos -->
      <div v-if="mostrarGrupos" class="gruposExistentes">
        <div class="header-container-alumnos">
          <h1>ALUMNOS</h1>
          <div class="spider-diagram">
            <!-- SVG del diagrama de araña -->
            <svg width="150" height="150" viewBox="-150 -150 300 300" xmlns="http://www.w3.org/2000/svg">
              <!-- Círculo exterior decorativo -->

              <!-- Líneas principales -->
              <line x1="0" y1="-100" x2="0" y2="100" stroke="#847D64" stroke-width="2" />
              <line x1="-100" y1="0" x2="100" y2="0" stroke="#847D64" stroke-width="2" />


              <!-- Polígono interior (pequeño) -->
              <polygon points="0,-90 50,0 0,60 -100,0" fill="#FFD700" opacity="0.5" />

              <!-- Letras en las esquinas -->
              <text x="0" y="-110" text-anchor="middle" font-size="20" fill="black">K</text>
              <text x="110" y="10" text-anchor="middle" font-size="20" fill="black">A</text>
              <text x="0" y="130" text-anchor="middle" font-size="20" fill="black">LE</text>
              <text x="-110" y="10" text-anchor="middle" font-size="20" fill="black">V</text>
            </svg>

          </div>
        </div>

        <v-container class="d-flex flex-wrap justify-center">
          <v-card class="custom-card-curso" outlined>
            <v-card-title class="title-curso d-flex justify-center align-center">
              4A
            </v-card-title>
            <v-card-subtitle class="subtitle-curso text-center mb-3">
              46 alumnos  
            </v-card-subtitle>
          </v-card>

          <v-card class="custom-card-curso" outlined>
            <v-card-title class="title-curso d-flex justify-center align-center">
              4B
            </v-card-title>
            <v-card-subtitle class="subtitle-curso text-center mb-3">
              38 alumnos
            </v-card-subtitle>
          </v-card>

          <v-card class="custom-card-curso" outlined>
            <v-card-title class="title-curso d-flex justify-center align-center">
              5A
            </v-card-title>
            <v-card-subtitle class="subtitle-curso text-center mb-3">
              36 alumnos
            </v-card-subtitle>
          </v-card>
        </v-container>

      </div>

      <!-- Alumnos -->
      <div v-if="mostrarAlumnos" class="alumnosExistentes">
        <div class="header-container-alumnos">
          <h1>ALUMNOS</h1>
          <div class="spider-diagram">
            <!-- SVG del diagrama de araña -->
            <svg width="150" height="150" viewBox="-150 -150 300 300" xmlns="http://www.w3.org/2000/svg">
              <!-- Círculo exterior decorativo -->

              <!-- Líneas principales -->
              <line x1="0" y1="-100" x2="0" y2="100" stroke="#847D64" stroke-width="2" />
              <line x1="-100" y1="0" x2="100" y2="0" stroke="#847D64" stroke-width="2" />


              <!-- Polígono interior (pequeño) -->
              <polygon points="0,-90 50,0 0,60 -100,0" fill="#FFD700" opacity="0.5" />

              <!-- Letras en las esquinas -->
              <text x="0" y="-110" text-anchor="middle" font-size="20" fill="black">K</text>
              <text x="110" y="10" text-anchor="middle" font-size="20" fill="black">A</text>
              <text x="0" y="130" text-anchor="middle" font-size="20" fill="black">LE</text>
              <text x="-110" y="10" text-anchor="middle" font-size="20" fill="black">V</text>
            </svg>

          </div>
        </div>

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


      words: ["apoyar", "innovar", "aprendizaje", "mejorar"],
      currentWord: "",
      wordIndex: 0,
      showWord: true,


      formDataCurso: {
        name: '',
        description: '',
        selectedPartial: null,
        selectedGroups: [],
        selectedSubject: null,
      },
      partials: ['Primer Parcial', 'Segundo Parcial', 'Tercer Parcial'],
      groups: ['Grupo A', 'Grupo B', 'Grupo C'],

      formDataAct: {
        name: '',
        description: '',
        dueDate: '',
        selectedCourses: [],  // Cambiado a un array para seleccionar múltiples cursos
        selectedImages: []
      },
      menuDate: false,
      courses: ['Curso 1', 'Curso 2', 'Curso 3'],
      images: [
        { src: 'https://via.placeholder.com/150', alt: 'Imagen 1', value: 'image1', label: 'Imagen 1' },
        { src: 'https://via.placeholder.com/150', alt: 'Imagen 2', value: 'image2', label: 'Imagen 2' },
        { src: 'https://via.placeholder.com/150', alt: 'Imagen 3', value: 'image3', label: 'Imagen 3' },
        { src: 'https://via.placeholder.com/150', alt: 'Imagen 4', value: 'image4', label: 'Imagen 4' }
      ],


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
  mounted() {
    this.startWordRotation();
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

    startWordRotation() {
      this.currentWord = this.words[this.wordIndex]; // Mostrar la primera palabra
      setInterval(() => {
        this.showWord = false; // Oculta el span antes de cambiar la palabra
        setTimeout(() => {
          this.wordIndex = (this.wordIndex + 1) % this.words.length; // Avanza al siguiente índice
          this.currentWord = this.words[this.wordIndex]; // Actualiza la palabra actual
          this.showWord = true; // Vuelve a mostrar el span con la nueva palabra
        }, 500); // Tiempo de desvanecimiento
      }, 2500); // Tiempo entre cambios de palabras
    },
    toggleImageSelection(imageValue) {
      const index = this.formDataAct.selectedImages.indexOf(imageValue);
      if (index === -1) {
        this.formDataAct.selectedImages.push(imageValue);
      } else {
        this.formDataAct.selectedImages.splice(index, 1);
      }
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
      this.formDataCurso.selectedSubject = 'Matemáticas';
    },
    selectSubjectEsp() {
      this.formDataCurso.selectedSubject = 'Español';
    },
    selectSubjectGeo() {
      this.formDataCurso.selectedSubject = 'Geografia';
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
    background-color: #ff5147; /* Color de fondo del botón */
    color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000; /* Asegura que el botón esté sobre otros elementos */
}
.fab-button-curso:hover,.fab-button-acti:hover {
    background-color: #f59f00; /* Color de fondo del botón al pasar el ratón */
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


/*************************************************************************** */
.content0 {
  background-image: url('./assets/saludokalevchiquititito.png');
background-size: cover;
background-position: left center;
background-repeat: no-repeat;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
padding: 0px;
box-sizing: border-box;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px; /* Aumenta el espacio entre el texto y la imagen */
}

.text-content {
  max-width: 70%; /* Aumenta el espacio para el texto */
  text-align: left;
}

.image {
  max-width: 300px; /* Aumenta el tamaño máximo de la imagen */
  height: auto;
}

.content {
  display: flex;
  align-items: center;
  font-size: 35px; /* Aumenta el tamaño del texto de "buscando..." */
  margin-top: 20px; /* Añade un margen superior para separar del texto anterior */
}

span.fade {
  font-weight: bold;
  margin-left: 10px; /* Aumenta el espacio entre "buscando..." y la palabra en fade */
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
  font-size: 40px; /* Aumenta el tamaño de la palabra */
}

.gradient-text {
  font-size: 70px; /* Aumenta el tamaño del texto de "KALEV" */
  font-weight: bold;
  background: linear-gradient(to right, 
      #0081a7, 
      #70ff70, 
      #f59f00, 
      #ff5147, 
      #0081a7);
  background-size: 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  animation: gradient-shift 8s infinite linear;
}

@keyframes gradient-shift {
  0% {
      background-position: 0% 50%;
  }
  100% {
      background-position: 100% 50%;
  }
}

#k {
  color: #0081a7;
  font-size: 40px; /* Aumenta el tamaño del texto */
}

#a {
  color: #70ff70;
  font-size: 40px; /* Aumenta el tamaño del texto */
}

#le {
  color: #f59f00;
  font-size: 40px; /* Aumenta el tamaño del texto */
}

#v {
  color: #ff5147;
  font-size: 40px; /* Aumenta el tamaño del texto */
}

v-card {
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2); /* Añade una sombra para darle profundidad */
  border-radius: 15px; /* Redondea los bordes */
  border: 2px solid #0081a7; /* Añade un borde colorido */
  padding: 10px; /* Aumenta el padding para dar más espacio interno */
}

/** **************************************************/

.custom-card-curso {
  width: 250px; /* Ajusta el ancho de las tarjetas según tus necesidades */
  margin: 15px;
  border-radius: 10px; /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra para dar profundidad */
  transition: transform 0.3s, box-shadow 0.3s; /* Animación para interacción */
}

.custom-card-curso:hover {
  transform: scale(1.05); /* Efecto de zoom al pasar el mouse */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Sombra más pronunciada al pasar el mouse */
}

.title-curso {
  font-size: 1.25rem;
  font-weight: bold;
  color: #333; /* Color del texto del título */
}

.subtitle-curso {
  font-size: 1rem;
  color: #666; /* Color del texto del subtítulo */
} 

.date-field {
  background-color: #fff;
  border-radius: 4px;
  padding-right: 32px; /* Espacio para el ícono del calendario */
}

.date-picker {
  border-radius: 4px;
}

.image-selection-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.image-selection {
  width: 150px;
  margin: 10px;
  border: 2px solid transparent;
  border-radius: 10px;
  transition: border-color 0.3s;
  cursor: pointer;
}

.image-selection.selected {
  border-color: #1976d2; /* Color de la selección */
}

.image-thumbnail {
  width: 100%;
  height: 100%;
}

.image-label {
  display: block;
  margin-top: 5px;
  font-size: 0.9rem;
  color: #333;
}


.spider-diagram {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-container-alumnos {
  display: flex;
  align-items: center;
  gap: 20px; /* Espacio entre el título y el diagrama */
}
</style>
