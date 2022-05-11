<template>
  <section id="logon" class=" container ">
        <div class="row my-5">	
            <div class="col-md-3"></div>
                <div class="col-md-6 col-12 bor-1 rounded">
                    <form action="" method="post">
						<h2>Fazer Cadastro</h2>
						<div class="row">
							<div class="mb-3 col-md-6">
								<label for="exampleInputEmail1" class="form-label">Nome</label> 
								<input type="text" v-model="Usuario.nome"  class="form-control" id="nome" >
							</div>
							<div class="mb-3 col-md-6">
								<label for="exampleInputEmail1" class="form-label">Telefone </label>
								<input type="text" v-model="Usuario.tel" class="form-control" id="tel" >
							</div>
						</div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email </label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Senha</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                            <label for="exampleInputPassword1" class="form-label">Repita a Senha</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                           
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Mantenha-me conectado</label>
                        </div>
                        <div class="text-center">
                            <button type="submit " class="btn px-5  orang bg-blue  cal-12" @click="loganUsuario()">Cadastrar</button>
                        </div>
                    </form>
                </div>
            <div class="col-nd-3"></div>
        </div>
    </section>
	
</template>

<script>

// import NavbarPage from "@/components/NavbarPage.vue";
import UsuarioService from "@//services/usuario.js";
import {Usuario} from "@/models/Usuario.js"
import router from "@/router";
var usuario = new Usuario();

export default {
  name:"LogonCadastro",
  components: {
    // NavbarPage,
  },
  data() {
    return {
      usuario,
    };
  },
  methods: {
    cadastrar() {
      UsuarioService.add(this.usuario)
        .then(() => {
          //console.log(res);
          alert("Cadastrado!");
          router.push("/");
        })
        .catch((err) => {
          console.error(err);
          alert("Erro ao cadastrar!");
        });
    },
  },
};
</script>

<style>

</style>