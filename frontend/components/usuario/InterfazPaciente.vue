<template>
  <v-card>
    <h1 style="text-align:center;">Citas medicas</h1>
    <v-layout>
      <v-navigation-drawer
        location="right"
        permanent
      >
        <template v-slot:prepend>
          <v-list-item style="background-color:aqua;"
            lines="two"
            prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
            title="userId.name"
            subtitle="userId.role"
          ></v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-pencil" title="Actualizar información" value=""></v-list-item>
          <v-list-item  @click="confirmLogout" prepend-icon="mdi-logout" title="Cerrar sesión" ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 16px"></v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
  import { useAuth } from "../../store/auth";
  import Swal from "sweetalert2";

  const router = useRouter();
  const user = useAuth().userId;

  const auth = useAuth();

  const confirmLogout = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Quieres cerrar sesión?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        handleLogout();
      }
    });
  };

  const handleLogout = () => {
    auth.logout();
    router.push('/');
  };



</script>
