
<template>
  <!--start produtos-->
	<section id="produtos" class="container  p-2">
		<h2 class="blue px-3">Nosso Produtos</h2>
		<h2></h2>
		<div class="row p-2">
			<div class="col-md-3 col-12 ">
				<div class="row border-3 rounded-3">
					<div class="col-12">
						<a href="pages/produto/produto.html">
						<img src="img/produtos/bake-1003685_960_720.jpg"
						 alt="" class="img img-fluid rounded-3"/></a>
					</div>
					<div class=" blue valor col-12 text-center">
						<h4>torta gelada</h4>
						<p>RS:00,00</p>
					</div>
					<div class="col-6">
						<input type="number"step="0" min="1" max="10" value="0" class=" col-12 rounded-3"/>
					</div>
					<div class="col-6">
						<button type="button" class="col-12 rounded-3 bg-orang white bor_1">
							<a href="pages/produto/produto.html"target="blanck"class="white" >COMPRAR</a>
							</button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section  >
		<a href="https://getbootstrap.com/docs/5.1/forms/layout/" target="blanck">
		<div id="propaganda1" class="container"></div></a><!--imagem com link--> 
	</section>
		<section id="novidades" class="container">
			<h2 class="blue px-3 mt-2">Novidades</h2>
			<div class="row p-2">
				<div class="col-md-3 col-12 ">
					<div class="row border-3 rounded-3">
						<div class="col-12">
							<img src="img/produtos/5003d452a8da016f3ed02a6385cf54e8_XL.png" alt="" class="img img-fluid rounded-3"/>
						</div>
						<div class=" valor blue col-12 text-center">
							<h4>Brigadeiro Gourmet</h4>
							<p>RS:00,00</p>
						</div>
						<div class="col-6">
							<input type="number"step="0" min="1" max="10" value="0" class=" col-12 rounded-3"/>
						</div>
						<div class="col-6">
							<button type="button" class="col-12 rounded-3 bg-orang white bor_1">COMPRAR</button>
						</div>
					</div>
				</div>
			</div>
		</section>
		
	<section   >
		<a href="https://getbootstrap.com/docs/5.1/forms/layout/" target="blanck">
		<div id="propaganda2" class="container"></div></a><!--imagem com link--> 
			
	</section>
	<section id="areasocial" class="container p-4 " >
<div class="row" >
		<div>
			<h2 class="px-5 blue">Pra comentar cadastre-se</h2>
		<div >
			<div class="col-md-8 col-12 p-2">		
				<div class="row ">
					<div class="col-md-2 col-4 border border-2 rounded-3 ">
						<div class=" ">
							<img src="https://picsum.photos/seed/picsum/80/80" alt="" class="img-fluid rounded-circle"/>
						</div>
						<div class="blue text-center">
							<p>Usuario</p>
						</div>
					
					</div>
					<div class="col-md-10 col-8 border border-2 border-start-0 p-2">
						<div class=" blue social-1 overflow-auto">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Veritatis quam tempora beatae debitis, eum incidunt expedita 
							autem magnam et inventore quasi nesciunt ea, saepe nobis a nam
							deleniti quae aperiam.
						</div>
						<div class=" border-top border-0 border border-5 ">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-angry" viewBox="0 0 16 16">
								<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
								<path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zm6.991-8.38a.5.5 0 1 1 .448.894l-1.009.504c.176.27.285.64.285 1.049 0 .828-.448 1.5-1 1.5s-1-.672-1-1.5c0-.247.04-.48.11-.686a.502.502 0 0 1 .166-.761l2-1zm-6.552 0a.5.5 0 0 0-.448.894l1.009.504A1.94 1.94 0 0 0 5 6.5C5 7.328 5.448 8 6 8s1-.672 1-1.5c0-.247-.04-.48-.11-.686a.502.502 0 0 0-.166-.761l-2-1z"/>
							</svg>
						</div>
					</div>
				</div>	
			</div>
		</div>
		<div class=" col-md-4 col-12">
			<div class=" border-2">
				<form action="#" method="post">
					<h3 class="trxt-uppercase text-center blue">Faça logim ou</br> Cadastre-se</h3>
					<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label blue"><b>E-mail</b></label>
					<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
					<div class="text-end"><a href="" class="blue">Esqueceu ou Cadastrece</a></div>
					<div id="emailHelp" class="form-text blue">We'll never share your email with anyone else.</div>
					</div>
					<div class="mb-3">
					<label for="exampleInputPassword1" class="form-label"><b>Senha</b></label>
					<input type="password" class="form-control" id="exampleInputPassword1">
					<div class="text-end blue"><a href="">Esqueceu</a></div>
					</div>
					<div class="mb-3 form-check">
					<input type="checkbox" class="form-check-input" id="exampleCheck1">
					<label class="form-check-label blue" for="exampleCheck1">Check me out</label>
					</div>
					<diiv class="form-group">
						<button type="submit" class="btn bg-orang  form-control">
							<a class=" white" href="pages/logon/logon.html" target="blanck">Continuar</a>
							</button>
					</diiv>
				</form>
			</div>
		</div>
	</div>
</div>
	</section>

	<section >
		<a href="https://getbootstrap.com/docs/5.1/forms/layout/" target="blanck">
			<div id="propaganda2" class="container"></div></a><!--imagem com link--> 
	</section>


	<section id="mapsite" class="  container p-4 ">
		<div class="">

			<div class="row">
				<div class="col-md-6 col-12">
					
				</div>
				
				
				<div class="col-md-6 col-12">
					<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14694.787917164384!2d-43.69305294399414!3d-22.961384280863374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1643415899796!5m2!1spt-BR!2sbr" 
					width="98%" height="350" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
				</div>
			</div>
		</div>
	</section>

	<footer class="container bg-blue border-2 ">
		<div class="row">
			<div class="col-md-4">
				<h6>Contatos</h6>
				<div class="">
					<P>(21) 99654-0229</P>
				</div>
				<div class=""></div>
				<div class=""></div>
			</div>
				<div class="col-md-4">
				<h6>Redes Socias</h6>
					<div class="">
						<div class="">
							<a href="https://pt-br.facebook.com/" target="blank">Facebook</a>
						</div>
						<div class="">
							<a href="https://api.whatsapp.com/send?l=pt-BR&phone=5521969325181&text=vindo%20de%20RafaGouemet" target="blank"> <i class="bi bi-whatsapp"></i></a>
							
						</div>
						<div class="">
							<a href="https://www.instagram.com/" target="blank">INTAGRAN</a>
						</div>
						<div class="">
							<a href="" target="blank">E-MAIL</a>
						</div>
						
					</div>	
				</div>

			
			
			<div class="col-md-4">
				<h6>Formas de Pagamento</h6>
				<div class="">
					<img src="img/pagamento.jpg" srcset="" class="img-fluid">
				</div>
			</div>	
			

			

			<div class="col-12 p-0 ">
				<p>© 2021 RafaGourmet, todos os direitos .</p>
			</div>
	</div>
		
	</footer>


</template>

<script>
export default {
    name:'DividirTudo'
}
</script>

<style>

</style>
	