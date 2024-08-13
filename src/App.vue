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
            @click="VentanaCursosExistentes">
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
            @click="showGrupos">
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
            @click="">
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
            @click="">
            <v-icon left>mdi-clipboard-text</v-icon> ACTIVIDADES
          </v-btn>
        </v-col>

      </div>
    </div>
    
    <!-- Columna Central -->
    <div class="column-cent">
      <!-- Contenido Inicial -->
      <div v-if="!mostrarContenidoCurso && 
        !mostrarContenidoActividad && !MostrarVentanaCursosExistentes 
        && !mostrarActividades && !showGruposContent" class="content0">
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
            @change="onChange" 
            outlined />
          <v-card v-if="selectedParcial" :title="content[selectedParcial].title" :subtitle="content[selectedParcial].subtitle" :prepend-icon="content[selectedParcial].prependIcon" :append-icon="content[selectedParcial].appendIcon" outlined>
            <v-card-actions>
              <v-btn @click="showActividad" color="primary">Asignar calificaciones</v-btn>
            </v-card-actions>
          </v-card>

          <v-row v-if="showDiv">
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

      <!-- Grupos -->
      <div v-if="showGruposContent" class="grupos">
        <v-card class="pa-5" outlined>
          <h1>Grupos</h1>
          <v-select 
            :items="['4-A', '4-B', '5-A', '5-B', '6-A', '6-B']" 
            label="Grupo" 
            v-model="selectedGroup" 
            outlined 
            class="mb-4" 
          />
          <v-text-field label="Buscar estudiante" v-model="buscarAlumno" outlined />
          <v-list v-if="filteredAlumnos.length">
            <v-list-item v-for="(alumno, index) in filteredAlumnos" :key="index">
              <v-list-item-content>
                <v-list-item-title>{{ alumno }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import MateriaCard from "./components/MateriaCard.vue";
import EstiloAprendizajeCard from "./components/EstiloAprendizajeCard.vue";

export default {
  data() {
    return {
      mostrarContenidoCurso: false,
      mostrarContenidoActividad: false,
      MostrarVentanaCursosExistentes: false,
      mostrarActividades: false,
      showGruposContent: false,
      selectedMaterias: [],
      selectedEstilos: [],
      nombre: "",
      descripcion: "",
      parcial: "",
      grupos: [],
      cursos: [
        { name: "Curso 1", image: "path_to_image1" },
        { name: "Curso 2", image: "path_to_image2" },
      ],
      estilos: ["Visual", "Auditivo", "Kinestésico"],
      paraQueCurso: "",
      paraQueTema: "",
      fechaEntrega: "",
      content: {
        parcial1: {
          title: "Parcial 1",
          subtitle: "Contenido del primer parcial",
          prependIcon: "mdi-book",
          appendIcon: "mdi-chevron-right",
        },
      },
      parcial1: ["Parcial 1", "Parcial 2", "Parcial 3"],
      selectedParcial: "",
      showDiv: false,
      currentGroup: null,
      groupAItems: [
        { name: "Estudiante 1", grade: 0 },
        { name: "Estudiante 2", grade: 0 },
      ],
      groupBItems: [
        { name: "Estudiante 3", grade: 0 },
        { name: "Estudiante 4", grade: 0 },
      ],
      selectedGroup: "",
      buscarAlumno: "",
      alumnos: ["Alumno 1", "Alumno 2", "Alumno 3", "Alumno 4"],
    };
  },
  computed: {
    filteredAlumnos() {
      return this.alumnos.filter(alumno =>
        alumno.toLowerCase().includes(this.buscarAlumno.toLowerCase())
      );
    },
  },
  methods: {
    VentanaCursosExistentes() {
      this.mostrarContenidoCurso = false;
      this.mostrarContenidoActividad = false;
      this.MostrarVentanaCursosExistentes = true;
      this.mostrarActividades = false;
      this.showGruposContent = false;
    },
    showGrupos() {
      this.mostrarContenidoCurso = false;
      this.mostrarContenidoActividad = false;
      this.MostrarVentanaCursosExistentes = false;
      this.mostrarActividades = false;
      this.showGruposContent = true;
    },
    submitFormCurso() {
      // Lógica para crear curso
    },
    submitFormActividad() {
      // Lógica para crear actividad
    },
    toggleMateriaSelection(materia) {
      const index = this.selectedMaterias.indexOf(materia);
      if (index >= 0) {
        this.selectedMaterias.splice(index, 1);
      } else {
        this.selectedMaterias.push(materia);
      }
    },
    toggleEstiloSelection(estilo) {
      const index = this.selectedEstilos.indexOf(estilo);
      if (index >= 0) {
        this.selectedEstilos.splice(index, 1);
      } else {
        this.selectedEstilos.push(estilo);
      }
    },
    VentanaActividadesExistentes() {
      this.mostrarContenidoCurso = false;
      this.mostrarContenidoActividad = false;
      this.MostrarVentanaCursosExistentes = false;
      this.mostrarActividades = true;
      this.showGruposContent = false;
    },
    onChange() {
      this.showDiv = true;
    },
    showGroup(group) {
      this.currentGroup = group;
    },
    saveGrades(group) {
      // Lógica para guardar calificaciones
    },
    showActividad() {
      // Lógica para mostrar actividad
    },
  },
  components: {
    MateriaCard,
    EstiloAprendizajeCard,
  },
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

.content0,
.content1,
.content2,
.cursosExistentes,
.actividades,
.grupos {
  margin: 20px 0;
}

.styled-form {
  max-width: 600px;
  margin: 0 auto;
}

.v-card {
  margin-bottom: 20px;
}

.pa-5 {
  padding: 20px;
}

.title {
  font-size: 2em;
  font-weight: bold;
}

.v-btn {
  margin-top: 10px;
}

.mx-auto {
  margin: auto;
}

.mb-4 {
  margin-bottom: 16px;
}

/*botones izquierda*/
.izq-btn {
  background-color: var(--btn-background-color, #1976D2); /* Azul por defecto */
  color: white;
  font-weight: bold;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.izq-btn:hover {
  background-color: var(--btn-background-color-hover, #1565C0); /* Azul más oscuro en hover */
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
}

.izq-btn  :active {
  background-color: var(--btn-background-color-active, #0D47A1); /* Azul aún más oscuro al hacer clic */
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
}


/*la parte del perfil */
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

</style>