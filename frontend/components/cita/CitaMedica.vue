<template>
  <div>
    <v-toolbar style="background-color: aqua">
      <v-divider class="ms-3" inset vertical></v-divider>

      <v-toolbar-title
        style="
          margin-left: 45%;
          font-family: &quot;Times New Roman&quot;, Times, serif;
        "
        >AGENDA TU CITA</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-divider vertical></v-divider>

        <v-btn @click="atras" variant="text">ATRAS</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <div style="display: flex; justify-content: center; margin-top: 2%">
      <v-img
        src="../../util/cita-medica.png"
        style="max-width: 40%; margin-right: 10%; margin-left: 1%"
      >
        <template #sources>
          <source srcset="../../util/cita-medica.png" />
        </template>
      </v-img>

      <v-container
        style="
          max-width: 50%;

          margin-right: 2%;
          border-style: groove;
          border-color: aqua;
        "
      >
        <h1
          style="
            text-align: center;
            background-color: aqua;
            font-family: &quot;Times New Roman&quot;, Times, serif;
          "
        >
          Citas Medicas
        </h1>
        <v-row style="margin-top: 5%">
          <v-col cols="8" md="4">
            <v-autocomplete
              v-model="especialidad"
              :items="specialty"
              :counter="10"
              class="mx-auto"
              label="Especialidad"
              placeholder="Select..."
              required
            ></v-autocomplete>
          </v-col>
          <v-col cols="8" md="4">
            <v-autocomplete
              v-model="medico"
              :items="filteredDoctors"
              :counter="10"
              class="mx-auto"
              label="Medicos"
              placeholder="Select..."
              required
            ></v-autocomplete>
          </v-col>
          <v-col cols="8" md="4">
            <v-text-field
              v-model="date"
              color="primary"
              label="Fecha"
              type="date"
              variant="underlined"
            ></v-text-field>
          </v-col>
          <v-col cols="8" md="4">
            <v-autocomplete
              v-model="horario"
              :items="schedule"
              :counter="10"
              class="mx-auto"
              label="Horarios"
              placeholder="Select..."
              required
            ></v-autocomplete>
          </v-col>
          <v-col cols="8" md="4">
            <v-autocomplete
              v-model="workingDays"
              :items="workingDay"
              :counter="10"
              class="mx-auto"
              label="Jornadas"
              placeholder="Select..."
              required
            ></v-autocomplete>
          </v-col>
          <v-col cols="8" md="4">
            <v-autocomplete
              v-model="hours"
              :items="filteredHours"
              :counter="10"
              class="mx-auto"
              label="Horas"
              placeholder="Select..."
              required
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-btn
          style="
            margin-left: 35%;
            background-color: aqua;
            margin-top: 2%;
            margin-bottom: 2%;
          "
          @click.prevent="registrarCita"
        >
          Agendar cita

          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-container>
    </div>
  </div>
</template>

<script setup>
const CONFIG = useRuntimeConfig();
import Swal from "sweetalert2";
import { ref } from "vue";
import { useAuth } from "~/store/auth";
const router = useRouter();
const userStore = useAuth();

const especialidad = ref("");
const medico = ref("");
const horario = ref("");
const workingDays = ref("");
const hours = ref("");
const date = ref("");

const hour = [
  "07:00:00 am",
  "08:00:00 am",
  "09:00:00 am",
  "10:00:00 am",
  "11:00:00 am",
  "12:00:00 pm",
  "01:00:00 pm",
  "02:00:00 pm",
  "03:00:00 pm",
  "04:00:00 pm",
  "05:00:00 pm",
  "06:00:00 pm",
];

const workingDay = ["Diurna", "Nocturna"];

const schedule = ["am", "pm"];

const specialty = [
  "Medico General",
  "Odontologia",
  "Alergología Clínica",
  "Anestesiología y Reanimación",
  "Cirugía General",
  "Cirugía Plástica: Reconstructiva y Estética",
  "Dermatología",
  "Ginecología y Obstetricia",
  // "Medicina del Deporte y de la Actividad Física",
  // "Medicina de Urgencias",
  // "Medicina Física y Rehabilitación",
  // "Medicina Interna",
  // "Neurocirugía",
  // "Neurología",
  // "Oftalmología",
  // "Ortopedia y Traumatología",
  // "Otorrinolaringología",
  // "Patología",
  // "Pediatría",
  // "Psiquiatría",
  // "Radiología",
  // "Toxicología Clínica",
  // "Urología",
  // "Cardiología Clínica",
  // "Cirugía de Cabeza y Cuello",
  // "Cirugía de Trasplantes",
  // "Cirugía oncológica",
  // "Cirugía Pediátrica",
  // "Cirugía Vascular",
  // "Endocrinología Clínica y Metabolismo",
  // "Endocrinología Pediátrica",
  // "Enfermedades Infecciosas",
  // "Hematología",
  // "Hemodinámica y Cardiología Intervencionista Vascular Periférico",
  // "Hepatología Clínica",
  // "Medicina Crítica y Cuidados Intensivos",
  // "Medicina del Dolor",
  // "Medicina Vascular",
  // "Nefrología",
  // "Nefrología pediátrica",
  // "Neonatología",
  // "Neurología Infantil",
  // "Neurorradiología",
  // "Psiquiatría",
  // "Psiquiatría Pediátrica",
  // "Radiología en Trauma y Urgencias",
  // "Radiología Intervencionista",
  // "Reumatología",
];

// const doctor = [
// "Dr. Juan Pérez",
// "Dra. María Rodríguez",
// "Dr. Carlos García",
// "Dra. Ana Martínez",
// "Dr. Luis Hernández",
// "Dra. Laura López",
// "Dr. José González",
// "Dra. Carmen Fernández",
// "Dr. Pablo Sánchez",
// "Dra. Isabel Jiménez",
// "Dr. David Ramírez",
// "Dra. Marta Torres",
// "Dr. Antonio Castro",
// "Dra. Silvia Ruiz",
// "Dr. Jorge Romero",
// "Dra. Elena Ortiz",
// "Dr. Manuel Morales",
// "Dra. Alicia Vargas",
// "Dr. Francisco Muñoz",
// "Dra. Patricia Castillo"
// ]

const filteredHours = computed(() => {
  if (horario.value === "am") {
    return hour.filter((h) => h.includes("am"));
  } else if (horario.value === "pm") {
    return hour.filter((h) => h.includes("pm"));
  }
  return hour;
});

const doctor = {
  "Medico General": ["Dr. Juan Pérez", "Dr. Carlos García"],
  Odontologia: ["Dra. María Rodríguez", "Dra. Ana Martínez"],
  "Alergología Clínica": ["Dr. Luis Hernández"],
  "Anestesiología y Reanimación": ["Dra. Laura López"],
  "Cirugía General": ["Dr. José González"],
  "Cirugía Plástica: Reconstructiva y Estética": ["Dra. Carmen Fernández"],
  Dermatología: ["Dr. Pablo Sánchez"],
  "Ginecología y Obstetricia": ["Dra. Isabel Jiménez"],
};

const filteredDoctors = computed(() => {
  return doctor[especialidad.value] || [];
});

const registrarCita = async () => {
  const { data, error } = await useFetch(
    `${CONFIG.public.API_BASE_URL}citas/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userStore.token}`,
      },
      body: {
        specialty: especialidad.value,
        doctor: medico.value,
        schedule: horario.value,
        workingDay: workingDays.value,
        hour: hours.value,
        date: date.value,
      },
    },
  );
  if (data.value != null) {
    Swal.fire({
      title: "Cita agendada, se te ha mandado una notificación a tu correo!",
      icon: "success",
      confirmButtonText: "Accept",
    });
    especialidad.value = "";
    medico.value = "";
    horario.value = "";
    workingDays.value = "";
    hours.value = "";
    date.value = "";

  } else {
    Swal.fire({
      title: "Ops!",
      icon: "warning",
      text: `${error.value?.data.message}`,
      confirmButtonText: "Accept",
    });
  }
};

const atras = () => {
  if(userStore.token) {
    router.push("/paciente/inicio");
  }
};
</script>
