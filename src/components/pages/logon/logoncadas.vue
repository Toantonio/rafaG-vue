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
								<input type="text" class="form-control" id="nome" >
							</div>
							<div class="mb-3 col-md-6">
								<label for="exampleInputEmail1" class="form-label">Telefone </label>
								<input type="text" class="form-control" id="tel" >
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
import UsuarioService from "@/services/usuario";
export default {
     name:'logonCadastro',
  components: {
    // NavbarPage,
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