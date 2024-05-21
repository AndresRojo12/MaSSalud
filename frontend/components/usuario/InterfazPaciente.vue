<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer location="right" permanent>
        <template v-slot:prepend>
          <v-list-item
            style="background-color: rgb(170, 202, 228)"
            lines="two"
            prepend-icon="mdi-account-circle"
            :title="`${userStore.user ? userStore.user.name : 'Usuario'}`"
            :subtitle="`${userStore.user ? userStore.user.role : 'Rol'}`"
          ></v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            @click="confirmLogout"
            prepend-icon="mdi-logout"
            title="Cerrar sesión"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
  <div class="background-image">
    <div class="image-container">
      <a href="/agenda/cita">
        <img
          src="../../util/cita-medica.png"
          style="max-width: 80%; margin-top: %; margin-right:8%;"
          alt="Imagen 1"
        />
        <br> <div style="font-size:25px ;
        margin-right: 20%;" class="image-title"> Agendamiento de citas</div>
      </a>
    </div>

    <div class="image-container">
      <a href="#">
        <img
          src="../../util/medicamentos.png"
          style="max-width: 80%;"
          alt="Imagen 2"
        />
        <div style="font-size:25px ;" class="image-title">Agendamiento de medicamentos</div>
      </a>
    </div>

    <div class="image-container">
      <a href="#">
        <img
          src="../../util/cuidado-de-la-salud.png"
          style="max-width: 80%; margin-right:8%;"
          alt="Imagen 3"
        />
        <div style="font-size:25px ;" class="image-title">Seguimientos médicos</div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from "~/store/auth";
import Swal from "sweetalert2";

const router = useRouter();
const userStore = useAuth()

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
  userStore.logout();
  router.push("/");
};
</script>

<style>
.background-image {
  width: 85%;
  height: 700px;
  background-image: url('../../util/actualidad-1_salud-291119-030013.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.image-container{
  margin-bottom: 15%;
  text-align: center;
}

.image-container a {
  text-decoration: none;
}

.image-title {
  margin-top: 8px;
  font-size: 16px;
  color:black 
}
</style>
