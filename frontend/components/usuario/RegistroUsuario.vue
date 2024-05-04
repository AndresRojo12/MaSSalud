<template>
  <v-card class="mx-auto" max-width="350" title="Registro"
    style="margin-top:50px;
    border-style:solid;
    border-color: rgb(87, 168, 20);
    background-color: rgb(230, 230, 238);
    margin-bottom: 50px;
      border-radius: 20px;
      text-align: center;
      border-width: 5px;">
    <v-container>
      <v-text-field
        v-model="name"
        color="primary"
        label="Nombre"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="lastName"
        color="primary"
        label="Apellido"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="secondSurname"
        color="primary"
        label="Segundo apellido"
        variant="underlined"
      ></v-text-field>

      <v-autocomplete
        v-model="tipDocument"
        :items="documentType"
        label="Tipo de documento"
        placeholder="Select..."
        required
      ></v-autocomplete>

      <v-text-field
        v-model="identificationCard"
        color="primary"
        label="Numero"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="expeditionDate"
        color="primary"
        label="Fecha de expedición"
        type="date"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="birthdate"
        color="primary"
        label="Fecha de nacimiento"
        type="date"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="gender"
        color="primary"
        label="Genero"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="phone"
        color="primary"
        label="Telefono"
        variant="underlined"
      ></v-text-field>

      <v-autocomplete
        v-model="ep"
        :items="eps"
        label="Eps"
        placeholder="Select..."
        required
      ></v-autocomplete>

      <v-text-field
        v-model="email"
        color="primary"
        label="Correo electronico"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="password"
        color="primary"
        label="Contraseña"
        variant="underlined"
      ></v-text-field>
    </v-container>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="green" @click.prevent="registrarUsuario">
        Completar Registro

        <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup>
const CONFIG = useRuntimeConfig();
import { ref } from "vue";
import Swal from 'sweetalert2'

const name = ref("")
const lastName = ref("")
const secondSurname = ref("")
const documentType = ['Cédula de Ciudadanía',
'Cédula de Extranjería',
'Pasaporte',
'Tarjeta de Identidad',
'Registro Civil',
'Número de Identificación Tributaria (NIT)',
'Permiso Especial de Permanencia (PEP)',
'Visa de Residencia',
'Tarjeta de Residencia']
const identificationCard = ref("")
const expeditionDate = ref("")
const birthdate = ref("")
const gender = ref("")
const phone = ref("")
const eps = ['EPS Sura',
'EPS Sanitas',
'EPS Coomeva',
'EPS Salud Total',
'EPS Compensar',
'EPS Famisanar',
'EPS Medimás',
'EPS Nueva EPS',
'EPS Aliansalud',
'EPS Cajacopi']
const ep = ref('');
const tipDocument = ref('');
const email = ref("")
const password = ref("")
//const role = ref("")

const registrarUsuario = async () => {

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
          //role: role.value,
        },
      }
    );
    if (data.value != null) {
      Swal.fire({
        title: 'Usuario registrado con exito!',
        //text: `${status.value}`,
        icon: 'success',
        confirmButtonText: 'Accept',
      });
      // Limpia el campo 'name' después de una creación exitosa
      //status.value = '';
        name.value = '';
        lastName.value = '';
        secondSurname.value = '';
        tipDocument.value = '';
        identificationCard.value = '';
        expeditionDate.value = '';
        birthdate.value = '';
        gender.value = '';
        phone.value = '';
        ep.value = '';
        email.value = '';
        password.value = '';
        //role.value = '';
    } else {
      Swal.fire({
        title: 'Ops!',
        icon: 'warning',
        text: `${error.value?.data.message}`,
        confirmButtonText: 'Accept',
      });
    }
  };
</script>
