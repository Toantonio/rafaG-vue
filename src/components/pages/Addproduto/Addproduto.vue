<template>
  <section id="addpro" class=" container ">
        <div class="row my-5">	
			<div class="col-md-6 col-12 bor-1 rounded">
				<form action="" method="post">
					<h2>Informe o produto e ser adicionado</h2>
					
					<div class="row">
					<div class="mb-3 col-md-6 col-12">
						<label for="nome" class="form-label">Nome do produto:</label>
						<input type="text" class="form-control" id="nome" placeholder="Informe o nome">
					</div>
					<div class="mb-3 col-md-6 col-12">
						<label for="tipo" class="form-label">tipo</label>
						<input type="text" class="form-control" id="tipo" placeholder="Informe o tipo">
					</div>					
					</div>
					
					<div class="row">
						<div class="mb-3 col-md-6 col-12">
						<label for="" class="form-label" placeholder="">Valor</label>
						<input type="number" class="form-control" id="valor" placeholder="Informe o valor">
					</div>
					<div class="mb-3 col-md-6 col-12">
						<label for="exampleInputPassword1" class="form-label">Quantidade</label>
						<input type="number" step="0" class="form-control" id="quant" placeholder=" informe a quantidade">
					</div>
					
					</div>
					
					
					<div class="row">
						<div class=" col-md-6 col-12 mb-3">
							<label for="exampleInputPassword1" class="form-label">dimensão do produto </label>
							<input type="text" class="form-control" id="dimen" placeholder=" informe a quantidade">
						</div>
						<div class="mb-3 col-md-6 col-12">
							<label for="texto" class="form-label">Peso em kilo</label>
							<input type="text" class="form-control" id="kilo" placeholder=" informe a quantidade">
						</div>
					</div>
					
					
					<div class="row">
						<div class="mb-3 col-12">
							<label for="desc" class="form-label">Descriçao/label>
							<textarea type="text"  col="10" row="10" class="form-control" id="desc"    placeholder=" informe a Descriçao" ></textarea>
						</div>
						<div class="mb-3 col-12">
							<label for="exampleInputPassword1" class="form-label">Adicione uma imagem</label>
							<input type="file" class="form-control" id="imag">
						</div>
					
					</div>
					
				
					<div class="row  ">
						<div class="col-md-6 col-12 d-grid gap-2 ">
							<button type="submit " class="btn px-5   bg-info  cal-12">Adicionar</button>/button>

						</div>
						<div class="col-md-6 col-12 d-grid gap-2 ">
							<button type="submit " class="btn px-5  bg-success  cal-12">Canselar</button>

						</div>
					</div>
				</form>
            </div>
			<div class="col-md-6">
				<p class="text-center">Produtos adicionados</p>
            {{produto}}
				<ProdutoList/>
			</div>
		</div>
            
        
	</section>

</template>

<script>
import Produto from ',Produto';
import ProdutoList from '.produtolist';

let produto = new Produto();
let produtos = [];

export default {
    name:'AddProduto',
    components: {
        ProdutoList,
    },
    data(){
        return{
            produto,
            produtos,
        };
    },
    methods:{
        addProduto(){
            try{
                produto.add();
                alert("produto cadastrado!")
            }catch(ex){
                alert(ex);
            }
        },
    },
}
</script>


<style scoped>
.textErro {
  display: none;
  color: #f00;
  font-weight: bold;
  padding: 0 0 0 20px;
}

.imgProduto {
  height: 200px;
}