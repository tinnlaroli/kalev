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

        <!-- Botones de navegación -->
        <v-list-item>
          <v-btn block color="primary" @click="showScreen('actividades')">Actividades</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn block color="primary">Solicitar actividad</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn block color="primary" @click="showScreen('evaluarDesempeno')">Evaluar desempeño</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn block color="primary" @click="showScreen('grupos')">Grupos</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn block color="primary" @click="showScreen('alumnos')">Alumnos</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn block color="primary">Actividades KALEV</v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <!-- Pantallas de navegación -->
        <template v-if="currentScreen === 'actividades'">
          <!-- Pantalla de Actividades -->
          <h2 class="text-center" style="color: #ff8c00; font-weight: bold;">ACTIVIDADES ACADÉMICAS</h2>
          <!-- Rest of activities code -->
        </template>

        <template v-if="currentScreen === 'evaluarDesempeno'">
          <!-- Pantalla de Evaluar Desempeño -->
          <h2 class="text-center" style="color: #ff8c00; font-weight: bold;">EVALUAR DESEMPEÑO</h2>
          <!-- Rest of evaluate performance code -->
        </template>

        <template v-if="currentScreen === 'grupos'">
          <!-- Pantalla de Grupos -->
          <h2 class="text-center" style="color: #ff8c00; font-weight: bold;">GRUPOS</h2>
          <!-- Rest of groups code -->
        </template>

        <template v-if="currentScreen === 'alumnos'">
          <!-- Pantalla de Alumnos -->
          <h2 class="text-center" style="color: #ff8c00; font-weight: bold;">ALUMNOS</h2>

          <!-- Barra de búsqueda -->
          <v-row>
            <v-col cols="12">
              <v-text-field append-icon="mdi-magnify" label="Buscar estudiante" solo></v-text-field>
            </v-col>
          </v-row>

          <!-- Tabla de estudiantes -->
          <v-row>
            <v-col cols="12">
              <v-data-table :headers="headersAlumnos" :items="alumnos" class="elevation-1">
                <template v-slot:top>
                  <v-toolbar flat>
                    <v-toolbar-title>00 Estudiantes</v-toolbar-title>
                  </v-toolbar>
                </template>
                <template v-slot:item.kalev="{ item }">
                  <span style="color: red;">K {{ item.k }}</span> 
                  <span style="color: orange;">A {{ item.a }}</span> 
                  <span style="color: green;">LE {{ item.le }}</span> 
                  <span style="color: blue;">V {{ item.v }}</span>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </template>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      currentScreen: 'actividades', // Default screen
      headersAlumnos: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Ap. Paterno', value: 'apPaterno' },
        { text: 'Ap. Materno', value: 'apMaterno' },
        { text: 'Edad', value: 'edad' },
        { text: 'Sexo', value: 'sexo' },
        { text: 'Grado', value: 'grado' },
        { text: 'Grupo', value: 'grupo' },
        { text: 'KALEV', value: 'kalev' }
      ],
      alumnos: [
        { nombre: 'Juan', apPaterno: 'Pérez', apMaterno: 'Lopez', edad: 15, sexo: 'M', grado: '10', grupo: '4A', k: '00%', a: '00%', le: '00%', v: '00%' },
        // Add more student data here
      ]
    };
  },
  methods: {
    showScreen(screen) {
      this.currentScreen = screen;
    }
  }
};
</script>

<style>
/* Estilos personalizados */
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

.v-toolbar-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.v-data-table {
  font-size: 0.9rem;
}
</style>
