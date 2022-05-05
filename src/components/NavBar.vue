<template>
<LayouT/>
  <nav class="navbar navbar-expand-lg navbar-light bg-orang container sticky-top ">
        <div class="container-fluid">
          <a class="navbar-brand orang1" href="#">RafaGourmet</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/logon" target="blanck">Entrar</a>
                <router-link to="/logon" class="nav-link">Entrar</router-link> <!-- usa esse agora no vue-->
              </li>
			<li class="nav-item">
                <a class="nav-link" href="@/components/pages/produto/produtoadd.vue" target="blanck">Carrinho</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Quem somos</a></li>                
                </ul>
              </li>
          
            </ul>
			
          </div>
		<div class="container-fluid col-md-6 p-0">
			<form class="d-flex">
			<input class="form-control me-2" type="search" placeholder="buscar" aria-label="Search">
			<button class="btn btn-outline-success" type="submit">Buscar</button>
			</form>
		</div>
        </div>
      </nav>
      
</template>

<script>
import LayouT from "./layout.vue"
export default {
    name:"NavBar",
    components:{
      LayouT
    }
  
}
</script>

<style>


</style>