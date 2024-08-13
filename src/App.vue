<!-- TINN505 FT gitCOPILOT -->
<template>
  <div id="app" class="columns">
    <!-- Columna Izquierda -->
    <div class="column-izq">
      <div class="izq-arr">
        <!-- Perfil Aquí -->
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-card class="mx-auto" max-width="500">
              <v-avatar class="mx-auto mt-4" size="100">
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
              </v-avatar>
              <v-card-title class="justify-center">Jaime Galindo</v-card-title>
              <v-card-subtitle class="justify-center">primaria: benito juarez</v-card-subtitle>
              <v-card-text class="text-center">
                <v-icon color="blue-grey">mdi-email</v-icon>
                <span class="ml-2">gavilan@utcv.com</span>
              </v-card-text>
              <v-card-text class="text-center">
                <v-icon color="blue-grey">mdi-phone</v-icon>
                <span class="ml-2">+123 456 7890</span>
              </v-card-text>
              <v-card-text class="text-center">
                <v-icon color="blue-grey">mdi-map-marker</v-icon>
                <span class="ml-2">Cuitlahuac, Ver.</span>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div class="izq-aba">
        <v-col cols="12" sm="">
          <v-btn 
            rounded="xl" 
            size="x-large" 
            block 
            @click="VentanaCursosExistentes">
            <v-icon left>mdi-book-multiple</v-icon> CURSOS
          </v-btn>
        </v-col>
        <v-col cols="12" sm="">
          
          <v-btn 
            rounded="xl"
            size="x-large"
            block
            @click="showGrupos">
            <v-icon left>mdi-account-group</v-icon> GRUPOS
          </v-btn>
        </v-col>
      </div>
    </div>

    <!-- Columna Central -->
    <div class="column-cent">
      <!-- Contenido Inicial -->
      <div v-if="!mostrarContenidoCurso && !mostrarContenidoActividad && !MostrarVentanaCursosExistentes && !mostrarActividades && !showGruposContent" class="content0">
        <v-card class="pa-5" outlined>
          <h1 class="title text-center">KALEV</h1>
          <p class="text-center">
            EN BUSQUEDA DE <span id="titulos"></span>
          </p>
          <img
            src="./components/icons/kalev.png"
            class="mx-auto"
            alt="Kalev Logo"
          ></img>
        </v-card>
      </div>

      <!-- Agregar Curso -->
      <div v-if="mostrarContenidoCurso" class="content1">
        <v-card class="pa-5" outlined>
          <h1>AGREGAR CURSO</h1>
          <p>En esta parte se agregará el curso</p>
          <v-form @submit.prevent="submitFormCurso" class="styled-form">
            <v-container>
              <v-row>
                <v-col v-for="(materia, index) in materias" :key="index" cols="12" sm="4">
                  <MateriaCard :materia="materia" :is-selected="selectedMaterias.includes(materia)" @select-materia="toggleMateriaSelection" />
                </v-col>
              </v-row>

              <v-text-field label="Nombre" v-model="nombre" outlined />
              <v-text-field label="Descripción" v-model="descripcion" outlined />
              <v-select label="Parcial" v-model="parcial" :items="['Primero', 'Segundo', 'Tercero']" outlined />
              <v-checkbox-group v-model="grupos">
                <v-checkbox label="Grupo 4-A" value="grupo-a" />
                <v-checkbox label="Grupo 4-B" value="grupo-b" />
                <v-checkbox label="Grupo 5-A" value="grupo-c" />
                <v-checkbox label="Grupo 5-B" value="grupo-d" />
                <v-checkbox label="Grupo 6-A" value="grupo-e" />
                <v-checkbox label="Grupo 6-B" value="grupo-f" />
              </v-checkbox-group>

              <v-btn type="submit" color="primary" class="mt-4">CREAR</v-btn>
            </v-container>
          </v-form>
        </v-card>
      </div>

      <!-- Agregar Actividad -->
      <div v-if="mostrarContenidoActividad" class="content2">
        <v-card class="pa-5" outlined>
          <h1>AGREGAR ACTIVIDAD</h1>
          <v-form @submit.prevent="submitFormActividad" class="styled-form">
            <v-text-field label="Nombre" v-model="nombre" outlined />
            <v-text-field label="Descripción" v-model="descripcion" outlined />
            <v-text-field label="Fecha Entrega" v-model="fechaEntrega" type="date" outlined />
            <v-select label="Curso" v-model="paraQueCurso" :items="['cursoPierreCuartoPrimerParcial', 'cursoLaniunCuartoPrimerParcial', 'cursoGeroCuartoPrimerParcial']" outlined />
            <v-select label="Temas" v-model="paraQueTema" :items="['tema1', 'tema2', 'tema3']" outlined />

            <v-row>
              <v-col v-for="(estilo, index) in estilos" :key="index" cols="12" sm="4">
                <EstiloAprendizajeCard :estilo="estilo" :is-selected="selectedEstilos.includes(estilo)" @select-estilo="toggleEstiloSelection" />
              </v-col>
            </v-row>

            <v-btn type="submit" color="primary" class="mt-4">CREAR</v-btn>
          </v-form>
        </v-card>
      </div>
      
      <!-- Cursos Existentes -->
      <div v-if="MostrarVentanaCursosExistentes" class="cursosExistentes">
        <v-card class="pa-5" outlined>
          <v-row>
            <v-col v-for="(curso, index) in cursos" :key="index" cols="12" sm="4">
              <v-card class="text-center">
                <v-img :src="curso.image" height="100px" />
                <v-card-title>{{ curso.name }}</v-card-title>
                <v-btn @click="VentanaActividadesExistentes">{{ curso.name }}</v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </div>

      <!-- Actividades -->
      <div v-if="mostrarActividades" class="actividades">
        <v-card class="pa-5" outlined>
          <h1>ACTIVIDADES</h1>
          <v-select 
            :items="parcial1" 
            label="Parciales" 
            v-model="selectedParcial" 
            @change="onChange" outlined />
          <v-card v-if="selectedParcial" :title="content[selectedParcial].title" :subtitle="content[selectedParcial].subtitle" :prepend-icon="content[selectedParcial].prependIcon" :append-icon="content[selectedParcial].appendIcon" outlined>
            <v-card-actions>
              <v-btn @click="showActividad" color="primary">Asignar calificaciones</v-btn>
            </v-card-actions>
          </v-card>
          <v-card v-if="selectedParcial" :title="content[selectedParcial].title" :subtitle="content[selectedParcial].subtitle" :prepend-icon="content[selectedParcial].prependIcon" :append-icon="content[selectedParcial].appendIcon" outlined>
            <v-card-actions>
              <v-btn @click="showActividad" color="primary">Asignar calificaciones</v-btn>imary        </v-card-actions>nar        </v-card>
          <v-card v-if="selectedParcial" :title="content[selectedParcial].title" :subtitle="content[selectedParcial].subtitle" :prepend-icon="content[selectedParcial].prependIcon" :append-icon="content[selectedParcial].appendIcon" outlined>
            <v-card-actions>
              <v-btn @click="showActividad" color="primary">Asignar calificaciones</v-btn>
            </v-card-actions>
          </v-card>

          <v-row v-if="showDiv">
            <v-row>
              <v-col cols="6">
              <v-btn @click="showGroup('A')" icon block>
                <v-icon>mdi-account-group</v-icon> GRUPO A
              </v-btn>
              </v-col>
              <v-col cols="6">
              <v-btn @click="showGroup('B')" icon block>
                <v-icon>mdi-account-group</v-icon> GRUPO B
              </v-btn>
              </v-col>
            </v-row>
          </v-row>

          <div v-if="currentGroup" class="gruposCalificaciones">
            <v-row v-if="currentGroup === 'A'">
              <v-col>
                <h2>GRUPO A</h2>
                <v-list>
                  <v-list-item v-for="(item, index) in groupAItems" :key="index">
                    <v-list-item-content>
                      <v-list-item-title>{{ item.name }}</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-text-field v-model.number="item.grade" label="Calificación" type="number" outlined></v-text-field>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
                <v-btn @click="saveGrades('A')" color="primary">
                  <v-icon left>mdi-content-save</v-icon> Guardar Calificaciones
                </v-btn>
              </v-col>
            </v-row>

            <v-row v-if="currentGroup === 'B'">
              <v-col>
                <h2>GRUPO B</h2>
                <v-list>
                  <v-list-item v-for="(item, index) in groupBItems" :key="index">
                    <v-list-item-content>
                      <v-list-item-title>{{ item.name }}</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-text-field v-model.number="item.grade" label="Calificación" type="number" outlined></v-text-field>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
                <v-btn @click="saveGrades('B')" color="primary">
                  <v-icon left>mdi-content-save</v-icon> Guardar Calificaciones
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </div>

      <!-- -------------------------GRUPOS---------------------->
      <div v-if="showGruposContent">
        <v-row>
            <v-col cols="12" sm="4">
                <v-select
                    v-model="selectedGrade"
                    :items="grades"
                    label="Filtrar por Grado"
                ></v-select>
            </v-col>
            <v-col cols="12" sm="4">
                <v-select
                    v-model="selectedGroup"
                    :items="groups"
                    label="Filtrar por Grupo"
                ></v-select>
            </v-col>
            <v-col cols="12" sm="4">
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Buscar"
                    single-line
                    hide-details
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-btn @click="clearFilters">Mostrar Todos</v-btn>
            </v-col>
        </v-row>
        
      </div>

    </div>

    <!-- Columna Derecha -->
    <div class="column-der">
      <div class="der-arr">
        <!-- Gráfica Aquí -->
        <v-card class="pa-0" outlined>
          <h2 class="text-center">Gráfica</h2>
          <svg class="spider-chart" viewBox="-150 -150 300 300">
            <!-- Draw axes -->
            <g class="axis">
              <line x1="0" y1="0" x2="100" y2="0"></line>
              <line x1="0" y1="0" x2="0" y2="100"></line>
              <line x1="0" y1="0" x2="-100" y2="0"></line>
              <line x1="0" y1="0" x2="0" y2="-100"></line>
            </g>
            <!-- Draw data polygon -->
            <polygon class="data-polygon" points="50,0 0,80 -90,0 0,-50"></polygon>
          </svg>
        </v-card>
      </div>
      <div class="der-aba">
        <v-col cols="12" sm="">
          <v-btn @click="ventanaAgregarCurso" rounded="xl" size="x-large" block>
            <v-icon left>mdi-book-plus</v-icon> Agregar <br>Curso
          </v-btn>
        </v-col>
        <v-col cols="12" sm="">
          <v-btn @click="ventanaAgregarActividad" rounded="xl" size="x-large" block>
            <v-icon left>mdi-calendar-plus</v-icon> Agregar <br>Actividad
          </v-btn>
        </v-col>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade {
  opacity: 0;
  transition: opacity 0.5s;
}

.mx-auto {
  margin-left: auto !important;
  margin-right: auto !important;
}

#app {
  display: flex;
  width: 100%;
  height: 100%;
}

/* columnas */
.column-izq,
.column-der {
  width: 15%;
  height: 100vh;
  padding: 1%;
}

/*los cuadros laterales*/
.der-arr {

  height: 50%;
  margin: 2%;
  border-radius: 20px;
}

.der-aba {

  height: 50%;
  margin: 2%;
  border-radius: 20px;
}

.izq-arr {

  height: 50%;
  margin: 2%;
  border-radius: 20px;
}

.izq-aba {

  height: 50%;
  margin: 2%;
  border-radius: 20px;
}

.column-cent {
  background-color: lightyellow;
  width: 70%;
  padding: 2%;
}

.materias,
.estilos {
  display: flex;
}

.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
}

.card img {
  width: 100px;
  height: 100px;
}

button.selected {
  background-color: lightblue;
}

.styled-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.checkbox-group {
  display: flex;
  flex-wrap: wrap;
}

.checkbox-group label {
  margin-right: 10px;
}

.btn-submit {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.btn-submit:hover {
  background-color: #0056b3;
}


/* lo de ara;a */
.spider-chart {
      width: 100%;
      height: 100%;
    }
    .axis line {
      stroke: #000000;
    }
    .data-polygon {
      fill: rgba(195, 58, 245, 0.5);
      stroke: #b458e9;
      stroke-width: 2;
    }
/* de fer*/

table {
    border-collapse: collapse;
    width: 100%;
    max-width: 900px;
    margin: auto;
    background-color: #EA4457;

}
table, th, td {
    border: 2px solid black;
}
th, td {
    width: 20px;
    height: 648px;
    text-align: center;
    padding: 15px;
    font-size: 16px;
}

img{
    width: 300px;
    height: auto;
}

#button{
    display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            text-align: center;
            text-decoration: dotted;
            outline: none;
            color: #fff;
            background-color: #49A078;
            border: none;
            border-radius: 15px;
            box-shadow: 0 9px #216869;
}
.button:hover {
    background-color: #73B38D;
    box-shadow: 0 12px #204645;
    transform: translateY(-2px); 
}
.button:active {
    background-color: #70FF;
    box-shadow: 0 5px #EF5C6C;
    transform: translateY(4px); 
}
</style>

<script setup>
import { ref, computed } from 'vue';
import MateriaCard from './components/MateriaCard.vue';
import EstiloAprendizajeCard from './components/EstiloAprendizajeCard.vue';

/*****************MOSTRAR DIVS************************/
const mostrarContenidoCurso = ref(false);
const mostrarContenidoActividad = ref(false);
const MostrarVentanaCursosExistentes = ref(false);
const mostrarActividades = ref(false);
const showGruposContent = ref(false);

function showGrupos() {
  showGruposContent.value = true;
  mostrarContenidoActividad.value = false;
  MostrarVentanaCursosExistentes.value = false;
  mostrarActividades.value = false;
  mostrarContenidoCurso.value = false;
}

function ventanaAgregarCurso() {
  mostrarContenidoCurso.value = true;
  mostrarContenidoActividad.value = false;
  MostrarVentanaCursosExistentes.value = false;
  mostrarActividades.value = false;
  showGruposContent.value = false;
}

function ventanaAgregarActividad() {
  mostrarContenidoActividad.value = true;
  mostrarContenidoCurso.value = false;
  MostrarVentanaCursosExistentes.value = false;
  mostrarActividades.value = false;
  showGruposContent.value = false;
  showGruposContent.value = false;
}

function VentanaCursosExistentes() {
  MostrarVentanaCursosExistentes.value = true;
  mostrarContenidoActividad.value = false;
  mostrarContenidoCurso.value = false;
  mostrarActividades.value = false;
  showGruposContent.value = false;
}

function VentanaActividadesExistentes() {
  mostrarActividades.value = true;
  mostrarContenidoActividad.value = false;
  mostrarContenidoCurso.value = false;
  showGruposContent.value = false;
}

const showDiv = ref(false);

const showActividad = () => {
  showDiv.value = true;
};
/****************************************************/

// Datos de materias
const materias = ref([
  { name: 'Materia 1', image: 'path/to/image1.jpg' },
  { name: 'Materia 2', image: 'path/to/image2.jpg' },
  { name: 'Materia 3', image: 'path/to/image3.jpg' }
]);

// Datos de estilos de aprendizaje
const estilos = ref([
  { name: 'Visual', image: 'path/to/image1.jpg' },
  { name: 'Auditivo', image: 'path/to/image2.jpg' },
  { name: 'Kinestésico', image: 'path/to/image3.jpg' },
  { name: 'LectoEsc', image: 'path/to/image4.jpg' }
]);

const cursos = ref([
  { name: 'Curso 1', image: 'path/to/image1' }, 
  { name: 'Curso 2', image: 'path/to/image2' }, 
  { name: 'Curso 3', image: 'path/to/image3' }
]);

const parcial1 = ref(['Parcial 1', 'Parcial 2', 'Parcial 3']);
const selectedParcial = ref(null);

const content = {
  'Parcial 1': {
    title: 'Actividad 1',
    subtitle: 'Accede para la primera actividad',
    appendIcon: 'mdi-open-in-app',
    prependIcon: 'mdi-book-open-blank-variant',
  },
  'Parcial 2': {
    title: 'Actividad 2',
    subtitle: 'Accede para la segunda actividad',
    appendIcon: 'mdi-open-in-app',
    prependIcon: 'mdi-book-open-blank-variant',
  },
  'Parcial 3': {
    title: 'Actividad 3',
    subtitle: 'Accede para la tercera actividad',
    appendIcon: 'mdi-open-in-app',
    prependIcon: 'mdi-book-open-blank-variant',
  }
};

const onChange = (value) => {
  selectedParcial.value = value;
};

const selectedMaterias = ref([]);
const selectedEstilos = ref([]);
const nombre = ref('');
const descripcion = ref('');
const parcial = ref('');
const grupos = ref([]);

// Datos de grupos y estudiantes
const grades = ['Cuarto Grado', 'Quinto Grado', 'Sexto Grado'];
const groups = ['A', 'B'];

const fourth_grade_students = ref([
  { first_name: 'Juan', last_name_paternal: 'Pérez', last_name_maternal: 'García', group: 'A' },
  { first_name: 'María', last_name_paternal: 'Gómez', last_name_maternal: 'Rodríguez', group: 'B' },
  // ...otros estudiantes del cuarto grado
]);

const fifth_grade_students = ref([
  { first_name: 'Isabel', last_name_paternal: 'Martín', last_name_maternal: 'Suárez', group: 'A' },
  { first_name: 'Gabriel', last_name_paternal: 'Lara', last_name_maternal: 'Durán', group: 'B' },
  // ...otros estudiantes del quinto grado
]);

const sixth_grade_students = ref([
  { first_name: 'Marcela', last_name_paternal: 'Ramírez', last_name_maternal: 'Padilla', group: 'A' },
  { first_name: 'Rodrigo', last_name_paternal: 'Ponce', last_name_maternal: 'Moreno', group: 'B' },
  // ...otros estudiantes del sexto grado
]);

const filteredStudents = computed(() => {
  let allStudents = [
    ...fourth_grade_students.value.map(s => ({ ...s, grade: 'Cuarto Grado' })),
    ...fifth_grade_students.value.map(s => ({ ...s, grade: 'Quinto Grado' })),
    ...sixth_grade_students.value.map(s => ({ ...s, grade: 'Sexto Grado' }))
  ];

  if (selectedGrade.value) {
    allStudents = allStudents.filter(student => student.grade === selectedGrade.value);
  }

  if (selectedGroup.value) {
    allStudents = allStudents.filter(student => student.group === selectedGroup.value);
  }

  if (search.value) {
    const searchLower = search.value.toLowerCase();
    allStudents = allStudents.filter(student =>
      student.first_name.toLowerCase().includes(searchLower) ||
      student.last_name_paternal.toLowerCase().includes(searchLower) ||
      student.last_name_maternal.toLowerCase().includes(searchLower)
    );
  }

  return {
    'Cuarto Grado': allStudents.filter(s => s.grade === 'Cuarto Grado'),
    'Quinto Grado': allStudents.filter(s => s.grade === 'Quinto Grado'),
    'Sexto Grado': allStudents.filter(s => s.grade === 'Sexto Grado')
  };
});

const search = ref('');
const selectedGrade = ref('');
const selectedGroup = ref('');

function clearFilters() {
  search.value = '';
  selectedGrade.value = '';
  selectedGroup.value = '';
}

function editItem(item) {
  alert('Editar: ' + item.first_name + ' ' + item.last_name_paternal + ' ' + item.last_name_maternal + ' del grupo ' + item.group);
}

function deleteItem(item) {
  alert('Eliminar: ' + item.first_name + ' ' + item.last_name_paternal + ' ' + item.last_name_maternal + ' del grupo ' + item.group);
}

function toggleMateriaSelection(materia) {
  const index = selectedMaterias.value.indexOf(materia);
  if (index > -1) {
    selectedMaterias.value.splice(index, 1);
  } else {
    selectedMaterias.value.push(materia);
  }
}

function toggleEstiloSelection(estilo) {
  const index = selectedEstilos.value.indexOf(estilo);
  if (index > -1) {
    selectedEstilos.value.splice(index, 1);
  } else {
    selectedEstilos.value.push(estilo);
  }
}

function submitFormCurso() {
  const formData = {
    nombre: nombre.value,
    descripcion: descripcion.value,
    parcial: parcial.value,
    grupos: grupos.value,
    selectedMaterias: selectedMaterias.value
  };
  console.log(formData);
  // Aquí puedes enviar formData a tu servidor
}

function submitFormActividad() {
  const formData = {
    nombre: nombre.value,
    descripcion: descripcion.value,
    fechaEntrega: fechaEntrega.value,
    paraQueCurso: paraQueCurso.value,
    paraQueTema: paraQueTema.value,
    selectedEstilos: selectedEstilos.value
  };
  console.log(formData);
  // Aquí puedes enviar formData a tu servidor
}

// para las palabras de cambio
const palabras = ["educación", "aprendizaje", "apoyar", "mejorar"];
let i = 0;

function cambiarPalabra() {
  const span = document.getElementById("titulos");
  span.classList.add("fade"); // Añade la clase de animación

  setTimeout(() => {
    span.textContent = palabras[i];
    span.classList.remove("fade"); // Quita la clase de animación después de cambiar el texto
    i = (i + 1) % palabras.length; // Incrementa el índice y reinicia si llega al final del array
  }, 500); // Espera el tiempo de la animación antes de cambiar el texto
}

document.addEventListener("DOMContentLoaded", () => {
  cambiarPalabra();
  setInterval(cambiarPalabra, 2000);
});

const currentGroup = ref('');
const groupAItems = ref([
  { name: 'ALUMNO 1', grade: null },
  { name: 'ALUMNO 2', grade: null },
  { name: 'ALUMNO 3', grade: null },
]);
const groupBItems = ref([
  { name: 'ALUMNO 1', grade: null },
  { name: 'ALUMNO 2', grade: null },
  { name: 'ALUMNO 3', grade: null },
]);

function showGroup(group) {
  currentGroup.value = group;
}

function saveGrades(group) {
  if (group === 'A') {
    console.log('Guardando calificaciones de GRUPO A:', groupAItems.value);
    // Lógica para guardar las calificaciones del Grupo A
  } else if (group === 'B') {
    console.log('Guardando calificaciones de GRUPO B:', groupBItems.value);
    // Lógica para guardar las calificaciones del Grupo B
  }
}
</script>
