<template>
<header  class=" container  ">
		<div class="row">		
			<div class="logo col-md-3 ">
				<img asrc="./assets\img\RafaGourmetlogo.png" class="imglogo px-3 img-fluid">
				<img src="src\assets\img\RafaGourmetlogo.png"  class="imglogo px-3 img-fluid">
			</div>
			<div class="col-md-3"></div>
			
		</div>	
	</header>
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
                <a class="nav-link" href="pages/logon/logon.html" target="blanck">Entrar</a>
              </li>
			<li class="nav-item">
                <a class="nav-link" href="pages/carrinho/carrinho.html" target="blanck">Carrinho</a>
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
export default {
    name:"NavBar",
}
</script>

<style>
header{ 
    background-color: #2e5566;
    min-height: 80px;	
}
.logo{
    text-align: center;
    min-height:80px ;
}
.imglogo{
    height: 80px; 
}
.img-1{
    width: 100%;
}
</style>