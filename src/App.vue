<template>
  <v-app>
    <v-navigation-drawer app permanent>
      <v-list>
        <v-list-item>
          <v-avatar size="100" class="mx-auto">
            <v-icon size="100">mdi-account</v-icon>
          </v-avatar>
        </v-list-item>

        <v-list-item>
          <v-text-field label="Nombre"></v-text-field>
        </v-list-item>
        <v-list-item>
          <v-text-field label="Apellido"></v-text-field>
        </v-list-item>

        <!-- Botones de navegación que cambian las pantallas -->
        <v-list-item>
          <v-btn block color="primary" @click="showScreen('actividades')">Actividades</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn block color="primary" @click="showScreen('solicitarActividad')">Solicitar actividad</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn block color="primary" @click="showScreen('evaluarDesempeno')">Evaluar desempeño</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn block color="primary" @click="showScreen('grupos')">Grupos</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn block color="primary">Alumnos</v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <!-- Pantalla de Actividades -->
        <template v-if="currentScreen === 'actividades'">
          <h2 class="text-center" style="color: #ff8c00; font-weight: bold;">ACTIVIDADES ACADÉMICAS</h2>

          <div class="d-flex justify-center my-4">
            <v-btn class="mx-2" color="primary">4A</v-btn>
            <v-btn class="mx-2" color="primary">4B</v-btn>
            <v-btn class="mx-2" color="red lighten-1">5A</v-btn>
            <v-btn class="mx-2" color="green lighten-1">6B</v-btn>
          </div>

          <v-row>
            <v-col cols="12">
              <v-text-field append-icon="mdi-magnify" label="Buscar actividades" solo></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6" v-for="i in 2" :key="i">
              <v-card outlined>
                <v-row no-gutters>
                  <v-col cols="8">
                    <v-card-title>TITULO ACTIVIDAD</v-card-title>
                    <v-card-subtitle>Tema: Tema de la actividad</v-card-subtitle>
                  </v-col>
                  <v-col cols="4" class="text-center">
                    <v-img src="https://via.placeholder.com/100" width="100" height="100"></v-img>
                  </v-col>
                </v-row>
                <v-card-actions>
                  <v-icon left>mdi-calendar</v-icon> <span>Fecha</span>
                  <v-spacer></v-spacer>
                  <v-btn color="blue lighten-1" text>Ver más <v-icon right>mdi-plus</v-icon></v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </template>

        <!-- Pantalla de Solicitar Actividad -->
        <template v-if="currentScreen === 'solicitarActividad'">
          <h2 class="text-center" style="color: #ff8c00; font-weight: bold;">SOLICITAR ACTIVIDAD</h2>

          <v-row>
            <v-col cols="12" md="6">
              <h3>Saberes:</h3>
              <div class="d-flex justify-center my-4">
                <v-btn class="mx-2" color="primary">Pierre</v-btn>
                <v-btn class="mx-2" color="red lighten-1">Gero</v-btn>
                <v-btn class="mx-2" color="green lighten-1">Lañun</v-btn>
              </div>

              <v-text-field label="Tema"></v-text-field>
              <v-select :items="['Grupo A', 'Grupo B']" label="Grupo"></v-select>

              <v-btn block color="primary" @click="solicitarActividad">Solicitar</v-btn>
            </v-col>
          </v-row>
        </template>

        <!-- Pantalla de Evaluar Desempeño -->
        <template v-if="currentScreen === 'evaluarDesempeno'">
          <h2 class="text-center" style="color: #ff8c00; font-weight: bold;">EVALUAR DESEMPEÑO</h2>

          <div class="d-flex justify-center my-4">
            <v-btn class="mx-2" color="primary">4A</v-btn>
            <v-btn class="mx-2" color="primary">4B</v-btn>
            <v-btn class="mx-2" color="red lighten-1">5A</v-btn>
            <v-btn class="mx-2" color="green lighten-1">6B</v-btn>
          </div>

          <v-row>
            <v-col cols="12">
              <h3>Grupo: 4A</h3>
              <v-text-field append-icon="mdi-magnify" label="Buscar actividad" solo></v-text-field>
            </v-col>
          </v-row>

          <v-data-table :headers="headers" :items="desempenoData" class="elevation-1">
            <template v-slot:item.desempeno="{ item }">
              <v-text-field v-model="item.desempeno" hide-details></v-text-field>
            </template>
          </v-data-table>

          <v-btn block color="primary" @click="guardarDesempeno">Guardar</v-btn>
        </template>

        <!-- Pantalla de Grupos -->
        <template v-if="currentScreen === 'grupos'">
          <h2 class="text-center" style="color: #ff8c00; font-weight: bold;">GRUPOS</h2>

          <div class="d-flex justify-center my-4">
            <v-btn class="mx-2" color="primary">4A</v-btn>
            <v-btn class="mx-2" color="primary">4B</v-btn>
            <v-btn class="mx-2" color="red lighten-1">5A</v-btn>
            <v-btn class="mx-2" color="green lighten-1">6B</v-btn>
          </div>

          <v-row>
            <v-col cols="12">
              <h3>Grupo: 4A</h3>
              <v-text-field append-icon="mdi-magnify" label="Buscar estudiante" solo></v-text-field>
            </v-col>
          </v-row>

          <v-data-table :headers="headersGrupos" :items="gruposData" class="elevation-1"></v-data-table>
        </template>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      currentScreen: 'actividades', // Pantalla inicial
      headers: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Ap. Paterno', value: 'ap_paterno' },
        { text: 'Ap. Materno', value: 'ap_materno' },
        { text: 'Desempeño', value: 'desempeno' }
      ],
      desempenoData: [
        { nombre: 'Estudiante 1', ap_paterno: 'Apellido1', ap_materno: 'Apellido2', desempeno: '' },
        { nombre: 'Estudiante 2', ap_paterno: 'Apellido1', ap_materno: 'Apellido2', desempeno: '' }
      ],
      headersGrupos: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Ap. Paterno', value: 'ap_paterno' },
        { text: 'Ap. Materno', value: 'ap_materno' },
        { text: 'Edad', value: 'edad' },
        { text: 'Sexo', value: 'sexo' }
      ],
      gruposData: [
        { nombre: 'Estudiante 1', ap_paterno: 'Apellido1', ap_materno: 'Apellido2', edad: 15, sexo: 'M' },
        { nombre: 'Estudiante 2', ap_paterno: 'Apellido1', ap_materno: 'Apellido2', edad: 14, sexo: 'F' }
      ]
    };
  },
  methods: {
    showScreen(screen) {
      this.currentScreen = screen;
    },
    guardarDesempeno() {
      alert('Desempeño guardado correctamente');
    },
    solicitarActividad() {
      alert('Actividad solicitada');
    }
  }
};
</script>

<style>
/* Personalización adicional del estilo */
.v-btn {
  font-size: 1.2rem;
  font-weight: bold;
}

.v-btn:hover {
  opacity: 0.9;
}

.v-card-title {
  font-size: 1.1rem;
  font-weight: bold;
}

.v-card-subtitle {
  font-size: 0.9rem;
}
</style>
