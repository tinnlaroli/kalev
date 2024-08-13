
<template>

    <div>
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

        <v-carad class="mb-5" v-for="(students, grade) in filteredStudents" :key="grade" v-if="students.length">
            <v-card-title>
                <v-icon left>mdi-account-group</v-icon>
                Alumnos de {{ grade }}
            </v-card-title>
            <v-card-text>
                <v-data-table
                    :headers="headers"
                    :items="students"
                    class="elevation-1"
                >
                    <template v-slot:item.actions="{ item }">
                        <v-icon small @click="editItem(item)">mdi-pencil</v-icon>
                        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-carad>
    </div>

</template>
<script>
export default {
    name: 'Grupos',
    data: () => ({
        headers: [
            { text: 'Nombre', value: 'first_name' },
            { text: 'Apellido Paterno', value: 'last_name_paternal' },
            { text: 'Apellido Materno', value: 'last_name_maternal' },
            { text: 'Grupo', value: 'group' },
            { text: 'Acciones', value: 'actions', sortable: false }
        ],
        search: '',
        selectedGrade: '',
        selectedGroup: '',
        grades: ['Cuarto Grado', 'Quinto Grado', 'Sexto Grado'],
        groups: ['A', 'B'],
        fourth_grade_students: [
            { first_name: 'Juan', last_name_paternal: 'Pérez', last_name_maternal: 'García', group: 'A' },
            { first_name: 'María', last_name_paternal: 'Gómez', last_name_maternal: 'Rodríguez', group: 'B' },
            { first_name: 'Carlos', last_name_paternal: 'López', last_name_maternal: 'Martínez', group: 'A' },
            { first_name: 'Ana', last_name_paternal: 'Hernández', last_name_maternal: 'González', group: 'B' },
            { first_name: 'Luis', last_name_paternal: 'Ramírez', last_name_maternal: 'Sánchez', group: 'A' },
            { first_name: 'Elena', last_name_paternal: 'Torres', last_name_maternal: 'Vásquez', group: 'B' },
            { first_name: 'Miguel', last_name_paternal: 'Mendoza', last_name_maternal: 'Rojas', group: 'A' },
            { first_name: 'Laura', last_name_paternal: 'Silva', last_name_maternal: 'Jiménez', group: 'B' },
            { first_name: 'Pedro', last_name_paternal: 'Castro', last_name_maternal: 'Morales', group: 'A' },
            { first_name: 'Lucía', last_name_paternal: 'Ortiz', last_name_maternal: 'Navarro', group: 'B' },
            { first_name: 'Jorge', last_name_paternal: 'Ramos', last_name_maternal: 'Ruiz', group: 'A' },
            { first_name: 'Sofía', last_name_paternal: 'Vega', last_name_maternal: 'Flores', group: 'B' },
            { first_name: 'Ricardo', last_name_paternal: 'Cruz', last_name_maternal: 'Hidalgo', group: 'A' },
            { first_name: 'Claudia', last_name_paternal: 'Álvarez', last_name_maternal: 'Campos', group: 'B' },
            { first_name: 'Diego', last_name_paternal: 'Fernández', last_name_maternal: 'Núñez', group: 'A' },
            { first_name: 'Valeria', last_name_paternal: 'Luna', last_name_maternal: 'Moreno', group: 'B' },
            { first_name: 'Andrés', last_name_paternal: 'Soto', last_name_maternal: 'Molina', group: 'A' },
            { first_name: 'Natalia', last_name_paternal: 'Ibáñez', last_name_maternal: 'Ponce', group: 'B' },
            { first_name: 'Diana', last_name_paternal: 'Campos', last_name_maternal: 'Ortega', group: 'A' },
            { first_name: 'Fernando', last_name_paternal: 'Ríos', last_name_maternal: 'Pérez', group: 'B' }
        ],
        fifth_grade_students: [
            { first_name: 'Isabel', last_name_paternal: 'Martín', last_name_maternal: 'Suárez', group: 'A' },
            { first_name: 'Gabriel', last_name_paternal: 'Lara', last_name_maternal: 'Durán', group: 'B' },
            { first_name: 'Julia', last_name_paternal: 'Ferrer', last_name_maternal: 'Paredes', group: 'A' },
            { first_name: 'Raúl', last_name_paternal: 'Santos', last_name_maternal: 'Carrillo', group: 'B' },
            { first_name: 'Carmen', last_name_paternal: 'Aguilar', last_name_maternal: 'Prieto', group: 'A' },
            { first_name: 'Francisco', last_name_paternal: 'Castillo', last_name_maternal: 'Méndez', group: 'B' },
            { first_name: 'Mónica', last_name_paternal: 'Ramos', last_name_maternal: 'Guzmán', group: 'A' },
            { first_name: 'Vicente', last_name_paternal: 'Valdez', last_name_maternal: 'Cano', group: 'B' },
            { first_name: 'Patricia', last_name_paternal: 'Escobar', last_name_maternal: 'Linares', group: 'A' },
            { first_name: 'Alejandro', last_name_paternal: 'Mejía', last_name_maternal: 'Romero', group: 'B' },
            { first_name: 'Andrea', last_name_paternal: 'Reyes', last_name_maternal: 'Vega', group: 'A' },
            { first_name: 'Enrique', last_name_paternal: 'Gallego', last_name_maternal: 'Miranda', group: 'B' },
            { first_name: 'Adriana', last_name_paternal: 'Navarrete', last_name_maternal: 'Herrera', group: 'A' },
            { first_name: 'David', last_name_paternal: 'Peña', last_name_maternal: 'Lara', group: 'B' },
            { first_name: 'Cristina', last_name_paternal: 'Bravo', last_name_maternal: 'Aranda', group: 'A' },
            { first_name: 'Esteban', last_name_paternal: 'Gonzales', last_name_maternal: 'Rueda', group: 'B' },
            { first_name: 'Marta', last_name_paternal: 'Ávila', last_name_maternal: 'Córdoba', group: 'A' },
            { first_name: 'Sergio', last_name_paternal: 'Moreno', last_name_maternal: 'Salazar', group: 'B' },
            { first_name: 'Lorena', last_name_paternal: 'Henao', last_name_maternal: 'Correa', group: 'A' },
            { first_name: 'Julián', last_name_paternal: 'Márquez', last_name_maternal: 'Valencia', group: 'B' }
        ],
        sixth_grade_students: [
            { first_name: 'Marcela', last_name_paternal: 'Ramírez', last_name_maternal: 'Padilla', group: 'A' },
            { first_name: 'Rodrigo', last_name_paternal: 'Ponce', last_name_maternal: 'Moreno', group: 'B' },
            { first_name: 'Sergio', last_name_paternal: 'Rivas', last_name_maternal: 'Vargas', group: 'A' },
            { first_name: 'Paula', last_name_paternal: 'Miranda', last_name_maternal: 'Soto', group: 'B' },
            { first_name: 'Cristian', last_name_paternal: 'Fuentes', last_name_maternal: 'Iglesias', group: 'A' },
            { first_name: 'Emilia', last_name_paternal: 'López', last_name_maternal: 'Cuevas', group: 'B' },
            { first_name: 'Ignacio', last_name_paternal: 'Márquez', last_name_maternal: 'Vidal', group: 'A' },
            { first_name: 'Liliana', last_name_paternal: 'Navarro', last_name_maternal: 'Linares', group: 'B' },
            { first_name: 'Héctor', last_name_paternal: 'Ortega', last_name_maternal: 'Roldán', group: 'A' },
            { first_name: 'Rafael', last_name_paternal: 'Pérez', last_name_maternal: 'Villalobos', group: 'B' },
            { first_name: 'Inés', last_name_paternal: 'Quintero', last_name_maternal: 'Pacheco', group: 'A' },
            { first_name: 'Valeria', last_name_paternal: 'Ramón', last_name_maternal: 'Hernández', group: 'B' },
            { first_name: 'Tomás', last_name_paternal: 'Sánchez', last_name_maternal: 'Martínez', group: 'A' },
            { first_name: 'Gloria', last_name_paternal: 'Vega', last_name_maternal: 'Lozano', group: 'B' },
            { first_name: 'Humberto', last_name_paternal: 'Yáñez', last_name_maternal: 'Morales', group: 'A' },
            { first_name: 'Luisa', last_name_paternal: 'Zapata', last_name_maternal: 'Rosales', group: 'B' },
            { first_name: 'Álvaro', last_name_paternal: 'Acevedo', last_name_maternal: 'Bermúdez', group: 'A' },
            { first_name: 'Marta', last_name_paternal: 'Bravo', last_name_maternal: 'Peñaloza', group: 'B' },
            { first_name: 'Rocío', last_name_paternal: 'Cardenas', last_name_maternal: 'Santana', group: 'A' },
            { first_name: 'Vicente', last_name_paternal: 'Díaz', last_name_maternal: 'Palacios', group: 'B' }
        ]
    }),
    computed: {
        filteredStudents() {
            let allStudents = [
                ...this.fourth_grade_students.map(s => ({ ...s, grade: 'Cuarto Grado' })),
                ...this.fifth_grade_students.map(s => ({ ...s, grade: 'Quinto Grado' })),
                ...this.sixth_grade_students.map(s => ({ ...s, grade: 'Sexto Grado' }))
            ];

            if (this.selectedGrade) {
                allStudents = allStudents.filter(student => student.grade === this.selectedGrade);
            }

            if (this.selectedGroup) {
                allStudents = allStudents.filter(student => student.group === this.selectedGroup);
            }

            if (this.search) {
                const searchLower = this.search.toLowerCase();
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
        }
    },
    methods: {
        clearFilters() {
            this.search = '';
            this.selectedGrade = '';
            this.selectedGroup = '';
        },
        editItem(item) {
            alert('Editar: ' + item.first_name + ' ' + item.last_name_paternal + ' ' + item.last_name_maternal + ' del grupo ' + item.group);
        },
        deleteItem(item) {
            alert('Eliminar: ' + item.first_name + ' ' + item.last_name_paternal + ' ' + item.last_name_maternal + ' del grupo ' + item.group);
        }
    }
};
</script>

