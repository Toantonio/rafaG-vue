<template>
    <section id="logon" class=" container ">
        <div class="row my-5">	
            <div class="col-md-4"></div>
                <div class="col-md-4 col-12 bor-1 rounded">
                   
                        <h2>Fazer Login</h2>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email </label>
                            <input type="email" class="form-control" v-model=" dadosUsuario.usuario" 
                             id="exampleInputEmail1" aria-describedby="emailHelp">                         
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Senha</label>
                            <input type="password" v-model=" dadosUsuario.senha" 
                            class="form-control" id="exampleInputPassword1">                                                   
                        </div>
                      
                        <div class="text-center">
                            <button type="button " class="btn px-5  orang bg-blue  cal-12" 
                            @click="loganUsuario()">LOGIN</button> 
                             <router-link type="button" class="btn px-5 orang bg-blue mt-3 col-12" 
                             to="/">Sair </router-link>                                         
                            <router-link to="/logonCadas" class="btn col-12 rounded-3 bg-orang pb-1 bor_1 mt-3 text-danger"
                            ><b>cadastre-se</b> </router-link>					
                        </div>
                  
                </div>
            <div class="col-nd-4"></div>
        </div>
    </section>
</template>

<script>


import UsuarioService from "@/services/usuario";

export default {
     name:'logonUser',
  components:{
   
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