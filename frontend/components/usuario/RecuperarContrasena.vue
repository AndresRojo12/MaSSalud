<template>
  <div>
    <v-card
      class="mx-auto pa-12 pb-8"
      style="margin-top:60px ;"
      elevation="8"
      max-width="380"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis"
      style="text-align: center;">Recuperar contraseña</div>

      <v-text-field
        v-model="email"
        density="compact"
        style="margin-top: 20px;"
        placeholder="Correo electronico"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <v-btn
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        block
        @click.prevent="resendCode"
      >
        Enviar
      </v-btn>
    </v-card>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import Swal from 'sweetalert2';

  const email = ref('');
  const CONFIG = useRuntimeConfig();
  //const router = useRouter();

  const resendCode = async () => {
    try {
      const { data, error } = await useFetch(`${CONFIG.public.API_BASE_URL}auth/recovery`, {
        method: 'POST',
        body: {
          email: email.value
        }
      })

      if(data.value !=null) {
        await Swal.fire({
          title: 'Se envio un codigo de recuperación a tu cuenta de gmail!',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        email.value = ''
      } else {
        Swal.fire({
        title: 'Ops!',
        icon: 'warning',
        text: `${error.value?.data.message}`,
        confirmButtonText: 'Aceptar',
        })
      }
    } catch (error) {
      error
    }
  }
</script>
