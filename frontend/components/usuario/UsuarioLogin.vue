<template>
  <div style="display: flex; margin-top: 5%;">
    <v-img src="../../util/salud.png" style="max-width: 65%">
      <template #sources>
        <source srcset="../../util/salud.png" />
      </template>
    </v-img>
    <v-card style="width:50%; height:80vh;" class="mx-auto pa-12 pb-11" elevation="4" max-width="400" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis" style="text-align: center; margin-top: 5%;">
        Inicio de sesión
      </div>

      <v-text-field
        v-model="email"
        density="compact"
        style="margin-top:20%"
        placeholder="Correo electronico"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Contraseña

        <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank" @click.prevent="recuperarContrasena">
          ¿Olvidó su contraseña?</a
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
        @click:append-inner="togglePasswordVisibility"
        @keyup.enter="login"
      ></v-text-field>

      <v-btn class="mb-8" color="blue" size="large" variant="tonal" block @click.prevent="login">
        Iniciar
      </v-btn>
      <v-card-text class="text-center">
        <a class="text-blue text-decoration-none" @click.prevent="registrarse" href="#" rel="noopener noreferrer" target="_blank">
          Registrarse
          <v-icon icon="mdi-chevron-right" @click.prevent="registrarse"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';
import { useAuth } from '~/store/auth';

const CONFIG = useRuntimeConfig();
const router = useRouter();
const email = ref('');
const password = ref('');
const visible = ref(false);
const auth = useAuth();

const login = async () => {
  try {
    const response = await fetch(`${CONFIG.public.API_BASE_URL}auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      auth.login(data.token, data.user);
      router.push('/paciente/inicio');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: data.message,
      });
    }
  } catch (error) {
    console.error('Error logging in', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Hubo un problema al iniciar sesión. Inténtalo de nuevo.',
    });
  }
};

const togglePasswordVisibility = () => {
  visible.value = !visible.value;
};

const recuperarContrasena = () => {
  router.push('/login/recuperar_contrasena');
};

const registrarse = () => {
  router.push('/registro/crear');
};
</script>
