<template>
<!--start produtos-->
<section id="produtos" class="container  p-2">
	<h2 class="blue text-start">Nosso Produtos</h2>
	<h2></h2>
	<div class="row p-2">		
		<div class="col-md-3 col-12 p-3">
			<div class=" col-12 ">
				<div class="row border-3 rounded-3">
					<div class="col-12">
						<a href="pages/produto/produto.html">
						<img src="@/assets/img/produtos/bake-1003685_960_720.jpg" class="img img-fluid rounded-3"/></a>
					</div>
					<div class=" blue valor col-12 text-center">
						<h4>torta gelada</h4>
						<p>RS:00,00</p>
					</div>
					<div class="col-6">
						<input type="number" step="0" min="1" max="10" value="0" class=" col-12 rounded-3"/>
					</div>
					<div class="col-6">
						<button type="button" class="col-12 rounded-3 bg-orang white bor_1">
							<a href="pages/produto/produto.html" target="blanck" class="white" >COMPRAR</a>
							</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
</template>

<script>
export default {
    name:"ProdutoSite"
}
</script>

<style>
[class*="bor"] {
 
    padding: 10px;
    border: 1px solid #eee;
}
</style>