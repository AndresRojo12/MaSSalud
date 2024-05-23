<template>
  <div>
    <v-toolbar style="background-color: aqua">
      <v-toolbar-title class="text-center text-md-start" style="flex: 1;">
        REGISTRATE
      </v-toolbar-title>

      <v-btn @click="inicio" variant="text">Ir a Inicio</v-btn>
    </v-toolbar>

    <div >
      <v-img
        src="../../util/article_7049_cover_es_ES.png"
        class="mx-auto mb-4 mb-md-0"
        style="max-width:40%;"
      ></v-img>

      <v-form class="mx-auto" style="max-width: 90%; width: 400px;">
        <h1 class="text-center">Registro</h1>
        <v-row>
          <v-col cols="12" md="4" class="mt-3">
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Nombre"
              class="mx-auto"
              hide-details
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4" class="mt-3">
            <v-text-field
              v-model="lastName"
              :counter="10"
              :rules="nameRules"
              label="Apellido"
              class="mx-auto"
              hide-details
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4" class="mt-3">
            <v-text-field
              v-model="secondSurname"
              :rules="emailRules"
              :counter="10"
              label="Segundo apellido"
              class="mx-auto"
              hide-details
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" class="mt-3">
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

          <v-col cols="12" md="4" class="mt-3">
            <v-text-field
              class="mx-auto"
              :counter="10"
              v-model="identificationCard"
              color="primary"
              label="Número"
              variant="underlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" class="mt-3">
            <v-text-field
              v-model="expeditionDate"
              class="mx-auto"
              color="primary"
              label="Fecha de expedición"
              type="date"
              variant="underlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" class="mt-3">
            <v-text-field
              v-model="birthdate"
              color="primary"
              label="Fecha de nacimiento"
              type="date"
              variant="underlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" class="mt-3">
            <v-text-field
              v-model="gender"
              color="primary"
              label="Género"
              variant="underlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" class="mt-3">
            <v-text-field
              v-model="phone"
              color="primary"
              label="Teléfono"
              variant="underlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" class="mt-3">
            <v-autocomplete
              v-model="ep"
              :items="eps"
              label="Eps"
              placeholder="Select..."
              required
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="4" class="mt-3">
            <v-text-field
              v-model="email"
              color="primary"
              label="Correo electrónico"
              variant="underlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4" class="mt-3">
            <v-text-field
              v-model="password"
              color="primary"
              label="Contraseña"
              variant="underlined"
              type="password"
            ></v-text-field>
          </v-col>
          <v-btn class="mt-4 mx-auto" style="background-color: aqua;" @click.prevent="registrarUsuario">
            Completar Registro
            <v-icon icon="mdi-chevron-right" end></v-icon>
          </v-btn>
      </v-row>
      </v-form>
    </div>
  </div>
</template>

<script setup>
import { useRuntimeConfig, useFetch } from '#app';
const CONFIG = useRuntimeConfig();

import { ref } from "vue";
import Swal from "sweetalert2";

const router = useRouter();
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
//const role = ref("")

const registrarUsuario = async () => {
  //console.log('API Base URL in request:', `${CONFIG.public.API_BASE_URL}usuarios/`);
  const { data, error } = await useFetch(
    `${CONFIG.public.API_BASE_URL}usuarios/`,
    {
      method: "POST",
      body: {
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
  if (data.value != null) {
    Swal.fire({
      title: "Usuario registrado con exito!",
      icon: "success",
      confirmButtonText: "Accept",
    });

    name.value = "";
    lastName.value = "";
    secondSurname.value = "";
    tipDocument.value = "";
    identificationCard.value = "";
    expeditionDate.value = "";
    birthdate.value = "";
    gender.value = "";
    phone.value = "";
    ep.value = "";
    email.value = "";
    password.value = "";

  } else {
    Swal.fire({
      title: "Ops!",
      icon: "warning",
      text: `${error.value?.data.message}`,
      confirmButtonText: "Accept",
    });
  }
};

const inicio = () => {
  router.push('/');
}
</script>

<style scoped>
.text-center {
  text-align: center;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mt-4 {
  margin-top: 1rem;
}

/* .d-flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.flex-md-row {
  flex-direction: row;
}

.justify-center {
  justify-content: center;
}

.align-items-center {
  align-items: center;
} */
</style>
