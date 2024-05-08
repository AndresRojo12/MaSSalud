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
        Inserte contraseña nueva
      </div>
      <v-text-field
        v-model="newPassword"
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
        @click.prevent="changePassword"
      >
        Cambiar
      </v-btn>

    </v-card>
  </div>
</template>

<script setup>
  const CONFIG = useRuntimeConfig();
  const router = useRouter();
  import { ref } from 'vue';
  import Swal from 'sweetalert2';

  const token = ref(router.currentRoute.value.query.token || '');
  const newPassword = ref('');

  const changePassword = async () => {
    try {
      const { data, error } = await useFetch(`${CONFIG.public.API_BASE_URL}auth/change-password`, {
        method: 'POST',
        body: {
          token: token.value,
          newPassword: newPassword.value
        }
      });

      if(data.value !=null) {
        Swal.fire({
          title: 'Success!',
          text: "Se ha cambiado la contraseña correctamente",
          icon: 'success',
          confirmButtonText: 'OK'
        });
        router.push('/login/usuario');
      }else {
        Swal.fire({
          title: 'Error!',
          icon: 'error',
          text: error.value.data.message,
          confirmButtonText: 'Aceptar'
        })
      }
    } catch (error) {
      error
    }
  }


</script>
