<template>
  <div>
    <v-card
      class="mx-auto pa-12 pb-8"
      style="margin-top: 60px"
      elevation="8"
      max-width="380"
      rounded="lg"
    >
      <div
        class="text-subtitle-1 text-medium-emphasis"
        style="text-align: center"
      >
        Inicio de sesión
      </div>

      <v-text-field
        v-model="email"
        density="compact"
        style="margin-top: 20px"
        placeholder="Correo electronico"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Contraseña

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank" @click.prevent="recuperarContrasena"
        >
          olvido su contraseña?</a
        >
      </div>

      <v-text-field
        v-model="password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Contraseña"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-btn
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        block
        @click.prevent="login"
      >
        Iniciar
      </v-btn>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";
import { storeToken, getToken, removeToken } from "@/util/token.js";

const CONFIG = useRuntimeConfig();
const router = useRouter();
const email = ref("");
const password = ref("");
const visible = false;

const login = async () => {
  try {
    const { data, error } = await useFetch(
      `${CONFIG.public.API_BASE_URL}auth/login`,
      {
        method: "POST",
        body: {
          email: email.value,
          password: password.value,
        },
      },
    );
    if (data.value !== null) {
      storeToken(data.value.token);
      router.push("/paciente/inicio");
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.value.data.message,
      });
    }
  } catch (error) {
    console.error("Error logging in");
  }
};

const recuperarContrasena = () => {
  router.push('/login/recuperar_contrasena');
}
</script>
