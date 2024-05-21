<template>
  <div style="display: flex; justify-content: center">
    <v-form style="max-width: 45%">
      <h1 style="text-align: center">Actualizar Información</h1>
      <v-row>
        <v-col cols="12" md="4" style="margin-top: 5%">
          <v-text-field
          v-model="editedPaciente.data"
            :counter="10"
            label="Nombre"
            class="mx-auto"
            hide-details
            required
          ></v-text-field>
        </v-col>

        <v-col cols="4" md="4" style="margin-top: 5%">
          <v-text-field
            v-model="lastName"
            :counter="10"
            label="Apellido"
            class="mx-auto"
            hide-details
            required
          ></v-text-field>
        </v-col>

        <v-col cols="8" md="4" style="margin-top: 5%">
          <v-text-field
            v-model="secondSurname"
            :counter="10"
            label="Segundo apellido"
            class="mx-auto"
            hide-details
            required
          ></v-text-field>
        </v-col>
        <v-col cols="8" md="8">
          <v-autocomplete
            v-model="tipDocument"
            :items="documentType"
            :counter="10"
            class="mx-auto"
            label="Tipo de documento"
            placeholder="Select..."
            required
          ></v-autocomplete>
        </v-col>

        <v-col cols="8" md="4">
          <v-text-field
            class="mx-auto"
            :counter="10"
            v-model="identificationCard"
            color="primary"
            label="Número"
            variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="8" md="4">
          <v-text-field
            v-model="expeditionDate"
            class="mx-auto"
            color="primary"
            label="Fecha de expedición"
            type="date"
            variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="8" md="4">
          <v-text-field
            v-model="birthdate"
            color="primary"
            label="Fecha de nacimiento"
            type="date"
            variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="8" md="4">
          <v-text-field
            v-model="gender"
            color="primary"
            label="Género"
            variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="8" md="4">
          <v-text-field
            v-model="phone"
            color="primary"
            label="Teléfono"
            variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col cols="8" md="8">
          <v-autocomplete
            v-model="ep"
            :items="eps"
            label="Eps"
            placeholder="Select..."
            required
          ></v-autocomplete>
        </v-col>
        <v-col>
          <v-text-field
            v-model="email"
            color="primary"
            label="Correo electrónico"
            variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="password"
            color="primary"
            label="Contraseña"
            variant="underlined"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn
        style="margin-left: 35%; background-color: aqua; margin-top: 5%"
        @click.prevent="actualizarUsuario"
      >
        Completar Actualización

        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-form>
  </div>
</template>

<script setup>
const CONFIG = useRuntimeConfig();
import { ref, onMounted } from "vue";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
import { useFetch } from "@vueuse/core";

const router = useRouter();
const { editedPaciente: initialEditedPaciente } = defineProps(['editedPetSpecie']);
const editedPaciente = ref(initialEditedPaciente || { id: null, name: "" });

const name = ref("");
const lastName = ref("");
const secondSurname = ref("");
const documentType = [
  "Cédula de Ciudadanía",
  "Cédula de Extranjería",
  "Pasaporte",
  "Tarjeta de Identidad",
  "Registro Civil",
  "Número de Identificación Tributaria (NIT)",
  "Permiso Especial de Permanencia (PEP)",
  "Visa de Residencia",
  "Tarjeta de Residencia",
];
const identificationCard = ref("");
const expeditionDate = ref("");
const birthdate = ref("");
const gender = ref("");
const phone = ref("");
const eps = [
  "EPS Sura",
  "EPS Sanitas",
  "EPS Coomeva",
  "EPS Salud Total",
  "EPS Compensar",
  "EPS Famisanar",
  "EPS Medimás",
  "EPS Nueva EPS",
  "EPS Aliansalud",
  "EPS Cajacopi",
];
const ep = ref("");
const tipDocument = ref("");
const email = ref("");
const password = ref("");
const users = ref([]);

const getUsers = async () => {
  const { data, error } = await useFetch(
    `${CONFIG.public.API_BASE_URL}usuarios/`,
    {
      method: "GET",
    },
  );

  if (data.value != null) {
    users.value = data.value;
  } else {
    Swal.fire({
      title: "¡Ops!",
      icon: "warning",
      text: `${error.value?.data.message}`,
      confirmButtonText: "Aceptar",
    });
  }
};

const actualizarUsuario = async (userId) => {
  const { data, error } = await useFetch(
    `${CONFIG.public.API_BASE_URL}usuarios/${userId}`, // URL para actualizar usuario por ID
    {
      method: "PATCH", // Método PATCH para actualizar parcialmente el usuario
      body: {
        // Aquí debes pasar solo los datos que se van a actualizar
        name: name.value,
        lastName: lastName.value,
        secondSurname: secondSurname.value,
        documentType: tipDocument.value,
        identificationCard: identificationCard.value,
        expeditionDate: expeditionDate.value,
        birthdate: birthdate.value,
        gender: gender.value,
        phone: phone.value,
        eps: ep.value,
        email: email.value,
        password: password.value,
      },
    },
  );

  // Manejo de la respuesta del servidor
  if (data.value != null) {
    Swal.fire({
      title: "Usuario actualizado con éxito!",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
    // Redirecciona al usuario a la página de inicio después de la actualización exitosa
    router.push("/");
  } else {
    Swal.fire({
      title: "¡Ops!",
      icon: "warning",
      text: `${error.value?.data.message}`,
      confirmButtonText: "Aceptar",
    });
  }
};

onMounted(() => {
  getUsers();
});
// const inicio = () => {
//   router.push('/');
// }
</script>
