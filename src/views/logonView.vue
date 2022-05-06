<template>
  <div>
    <!-- <NavbarPage /> -->
    <section class="container">
      <form action="" class="col-12 col-md-6 m-auto bg-white p-5">
        <div class="form-group">
          <label>E-mail</label>
          <input
            type="email"
            v-model="dadosUsuario.usuario"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <span class="d-flex justify-content-between"
            ><label>Senha</label> <i>esqueceu senha!</i></span
          >
          <input
            type="password"
            v-model="dadosUsuario.senha"
            class="form-control"
          />
        </div>
        <div>
          <input type="button" value="salvar" @click="loganUsuario()" />
        </div>
      </form>
      {{ dadosUsuario }}
    </section>
  </div>
</template>

<script>
// import NavbarPage from "@/components/NavbarPage.vue";
import UsuarioService from "@/services/usuario";
export default {
  components: {
    // NavbarPage,
  },
  data() {
    return {
      dadosUsuario: {
        usuario: "",
        senha: "",
      },
    };
  },
  mounted() {
    this.listarUsuarios();
  },
  methods: {
    listarUsuarios() {
      UsuarioService.list().then((res) => {
        console.log(res);
      });
    },
    loganUsuario() {
      UsuarioService.login(this.dadosUsuario)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style>
</style>