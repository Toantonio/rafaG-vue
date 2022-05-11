<template>

	<section id="addpro" class=" container">
        <div class="row my-5">	
			<div class="col-12 col-md-6 bor-1 rounded">
				
					<h2>Informe o produto e ser adicionado</h2>
					
					<div class="row">
						<div class="mb-3 col-md-6 col-12">
							<label for="nome" class="form-label">Nome do produto:</label>
							<input type="text" class="form-control required"  v-model="addproduto.produto" id="nome" placeholder="nome">
						</div>
						<div class="mb-3 col-md-6 col-12">
							<label for="tipo" class="form-label">Marca</label>
							<input type="text" class="form-control required" id="marca" placeholder="marca">
						</div>					
						<!-- <div class="mb-3 col-md-3 col-12">
							<label for="tipo" class="form-label">modelo</label>
							<input type="text" class="form-control required" id="mod" placeholder="modelo">
						</div>					 -->
						<div class="mb-3 col-md-4 col-12">
							<label for="tipo" class="form-label">tipo</label>
							<input type="text" class="form-control required" id="tipo" placeholder="tipo">
						</div>						
						<div class="mb-3 col-md-4 col-12">
							<label for="nome" class="form-label">Codigo:</label>
							<input type="text" class="form-control required" id="codigo" placeholder="codigo do produto">
						</div>
						<div class="mb-3 col-md-4 col-12">
							<label for="tipo" class="form-label">cor</label>
							<input type="text" class="form-control" id="tipo" placeholder="cor">
						</div>					
					</div>
					<div class="row">
						<div class="mb-3 col-md-3 col-12">
							<label for="nome" class="form-label">Lagura:</label>
							<input type="text" class="form-control" id="lagura" placeholder="lagura">
						</div>
						<div class="mb-3 col-md-3 col-12">
							<label for="tipo" class="form-label">altura</label>
							<input type="text" class="form-control" id="altura" placeholder="altura">
						</div>					
						<div class="mb-3 col-md-3 col-12">
							<label for="nome" class="form-label">Comprimento:</label>
							<input type="text" class="form-control" id="comp" placeholder="primentocom">
						</div>
						<div class="mb-3 col-md-3 col-12">
							<label for="tipo" class="form-label">Peso</label>
							<input type="text" class="form-control" id="peso" placeholder="Informe o pese em kilo">
						</div>	
					</div>
					
					<div class="row">
						<div class="mb-3 col-md-4 col-12">
							<label for="nome" class="form-label">Valodade:</label>
							<input type="text" class="form-control" id="valid" placeholder="Informe o nome">
						</div>
						<div class="mb-3 col-md-4 col-12">
							<label for="" class="form-label" placeholder="">Valor</label>
							<input type="number" class="form-control" id="valor" placeholder="Informe o valor">
						</div>
						<div class="mb-3 col-md-4 col-12">
							<label for="exampleInputPassword1" class="form-label">Quantidade</label>
							<input type="number" step="0" class="form-control" id="quant" placeholder=" informe a quantidade">
						</div>
						<div class="mb-3 col-12">
							<label for="exampleInputPassword1" class="form-label">OBS sobre o produto</label>
							<textarea type="number" cols="8" rows="5" class="form-control" id="desc" placeholder=" informe a quantidade"> </textarea>
						</div>
						<div class=" col-md-3 col-12 mb-3">
							<label for="exampleInputPassword1" class="form-label">1 foto do produto </label>
							<input type="file" class="form-control required" id="foto1" name="foto" placeholder="">
						</div>
						<div class=" col-md-3 col-12 mb-3">
							<label for="exampleInputPassword1" class="form-label">2 foto do produto </label>
							<input type="file" class="form-control" id="foto" name="foto2" placeholder="">
						</div>
						<div class=" col-md-3 col-12 mb-3">
							<label for="exampleInputPassword1" class="form-label">3 foto do produto </label>
							<input type="file" class="form-control" id="foto" name="foto3" placeholder="">
						</div>
						<div class=" col-md-3 col-12 mb-3">
							<label for="exampleInputPassword1" class="form-label">4 foto do produto </label>
							<input type="file" class="form-control" id="foto" name="foto4" placeholder="">
						</div>
					</div>
					<div class="row  ">
						<div class="col-md-2"></div>
						<div class="col-md-3 col-12 d-grid gap-2 ">
							<button type="submit " class="btn px-5   bg-info  cal-12"
								onclick="produtoController.addProduto()">Adicionar</button>
						</div>
						<div class="col-md-2"></div>
						<div class="col-md-3 col-12 d-grid gap-2 ">
							<button type="submit " class="btn px-5  bg-success  cal-12"
							onclick="produtoController.getAllProduto()">Listar</button>
						</div>
						<div class="col-md-2"></div>
					</div>
            </div>			
		</div>
        <ProdutoList/>
	</section>
</template>

<script>
    import ProdutoList from "@/components/produtoList.vue"
    import ProdutoService from "@//services/produtoadd.js";
    import {Produto} from "@/models/produto.js";
    import router from "@/router";
    let produto = new Produto();
export default {
    name:'ProAdd',
    componemts:{
        ProdutoList
    },
data() {
    return{
        Produto,
    };
},
     methods: {
    cadastrar() {
      ProdutoService.add(this.produto)
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