<template>
  <v-toolbar color="green">
    <template v-slot:prepend>
      <div class="text-h5">+MasSalud</div>
    </template>
    <v-toolbar-items>
      <v-btn variant="text"
      @click="crearUsuarios">Registrarse</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script setup>
  const router = useRouter();

  const crearUsuarios = () => {
    router.push('/registro/crear')
  }
</script>
