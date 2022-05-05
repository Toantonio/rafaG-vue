<template>
  <section id="descricao" class=" container p-2  bg-white1 ">
    <div class="row">
      <div class=" col-12 p-4 ">
        <div class=" i row">
          <div class="col-md-7 col-12 ">
          <div class="   rounded-3  p-1 bg-white "><!--foto da torta-->
            <div class="col-12"><h3>Torta Gelada de Frutas</h3></div>
            <div class="row">
              <div class=" img-1 col-md-6 col-12 p-3">
                <div class="row">
                  <div class="col-6 p-2 px-3">
                    <i class="bi bi-heart"> Favorito</i>
                  </div>
                  <div class="col-6">
                    <i class="bi bi-share"> Compartilhar</i>
                  </div>
                  <div class=" ">
                    <div class=" img-2 col-2 white ">
                      <p class="px-4">Torta Gelada de Frutas</p>
                    </div>
                    <div class="">
                      <img src="../../../assets/img/produtos/bake-1003685_960_720.jpg" class="img img-fluid rounded-3"/>
                    </div>
                  </div>
                </div>
              </div>

                <div class=" col-12 mt-2 border-end-0 border-top-0 border-bottom-0 p-2">
                  <div class="  ">
                    <h4>Descrição do Produto</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis quisquam animi
                       quibusdam aut Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt porro
                        voluptate earum reprehenderit maxime sunt perspiciatis qui nobis laborum sequi 
                      quo eligendi itaque deserunt repudiandae, incidunt accusamus natus tempore autem! .</p>
                  </div>
                </div> 
                <div class="col-12 border-3 border-bottom-0 border-start-0 border-end-0 orang1 mt-2 p-0">
                  
                  <div class=" px-3 h2 mt-2">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                  </div>
                </div>            
            </div>
              
          </div>
          </div>
          <div class="col-md-1"></div>

          <div class="venda col-md-4 col-12 pt-5 mt-5"><!--parte de compras-->
              <div class="  border-3 rounded-3  mt-2 bg-white p-3">
              <div class=""> <h4 class="orang1 mt-1"> Torta Gelada de frutas </h4></div>
              <div class="mt-1 px-4"> <h2>RS:00,0</h2></div>
              <div class="p-0"><p class="">Em ate 12X sem juros nos <b>Cartoes de credito</b></p></div>
              <div class=" text-end "><a href="">mais formas de pagamentos</a></div>
              <div class="  border-bottom border-start-0 border-end-0 border-top py-3">
                <p>calcular frete e prazo</p>
                <div class="">
                  <form><!--retirado da internet--> 
                    <label for="CEP">
                    <input name="CEP" id="CEP"  placeholder="Digite o CEP" required pattern="\d{5}-\d{3}"/>
                    </label>
                    <input type="submit" value="OK" class=" ok " />
                  </form>
                </div>
              </div>
              <div class="d-grid gap-2 pt-2 mt-2">
                <button class="btn bg-info p-2" type="button"><i class="bi bi-basket2-fill">  Comprar</i></button>
               </div>
              
              <div class="p-2 ">
                <p>Este produto e vendido e entregue por <b>RafaGourmet</b></p>
              </div>
              <div class=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
	</section>
</template>

<script>
export default {
    name:'ProdutoVenda'
}
</script>

<style>
#descricao{
    height: auto;
    /* background-color: blue; */
}
.img-1 .img-2{
    /* float: right; */
    position: absolute;
    margin-top: 20px;
}
.img{background-image: url(../../../assets/img/produtos/bake-1003685_960_720.jpg);
background-position: center;background-size: cover;}
/* .ok{
    border-color:#f80707 ;
    color: #f80707;
} */
 /* [class*="col-"] {
    float: left;
    padding: 10px;
    border: 1px solid red;

} */
</style>