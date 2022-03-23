<template>
<DemostFoto/>
<section id="demosnstracao" class=" container my-2 ">
 <H3 class="blue">Noassa delicias</H3>
                <div class="p-4">
                    <div id="carouselExampleSlidesOnly" class="carousel slide " data-bs-ride="carousel">
                        <div class="carousel-inner col md-8">
                            <div class="carousel-item active">
                            <img src="../assets/img/produtos/bake-1003685_960_720.jpg" class=" carrcel car-3 d-block w-100 img-fluid" >
                            </div>
                            <div class="carousel-item">
                            <img src="../assets/img/produtos/produto03.jpg" class="carrcel car-1 d-block w-100 img-fluid" >
                            </div>
                            <div class="carousel-item">
                            <img src="../assets/img/produtos/produto01.jpg" class="carrcel car-2 d-block w-100 img-fluid" >
                            </div>
                        </div>
                    </div>
                </div>
</section>
</template>

<script>
import DemostFoto from "../../src/components/demonstracaofoto.vue";
export default {
    name:"DemonsTracao",
    components:{
        DemostFoto,
    }
}
</script>

<style>
.carrcel{
	background-size: cover;
	background-position: center;
	min-height: 150px;
	max-height: 1800px;
}
.car-1{
	background-image: url(../assets/img/produtos/bake-1003685_960_720.jpg);
}
.car-2{
	background-image: url(../assets/img/produtos/produto01.jpg);
}
.car-3{
	background-image: url(../assets/img/produtos/produto03.jpg);
}
#produtos{
	height: auto;
}
.social-1{
	max-height:70px ;

}
.social-2{
	max-height:10px ;
}
/* #propaganda1{

	padding: 0;
	width: 100%;
	background-image: url(../img/propaganda/p200x1000-01.jpg);	
	min-height: 160px;
	height: 100%;	
}
#propaganda2{
	background-image: url(../img/propaganda/p200x1000.jpg);
	
	min-height: 140px;

} */
</style>