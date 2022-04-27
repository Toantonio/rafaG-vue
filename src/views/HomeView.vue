<template>
<div>
  <NavBar/>
  <DemonsTracao/>
  <ProdutoSite/>
  <!-- <PropaGanda/> -->
  <AreaSocial/>
  <MapSite/>
  <PGanda2/>
  <NoviDade/>
  <RodaPe/>
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import NavBar from '@/components/NavBar.vue';
import DemonsTracao from '@/components/Demonstracao.vue';
import ProdutoSite from '@/components/pages/produto/produtosite.vue';
// import PropaGanda from '@/components/propaganda.vue';
import AreaSocial from '@/components/areasocial.vue';
import MapSite from '@/components/MapSite.vue';
import PGanda2 from '@/components/pages/propaganda/p-ganda2.vue';
import NoviDade from '@/components/novidades.vue';
import RodaPe from '@/components/footer.vue';

export default {
  components: {  
    NavBar,
    DemonsTracao,
    ProdutoSite,
    // PropaGanda,
    AreaSocial,
    MapSite,
    PGanda2,
    NoviDade,
    RodaPe

  }
}
</script>
<style>
a{
	text-decoration: none;
	color: #eee;
}
a:hover{
	color:#f0a211;
}
.bg-white { background-color: #eee;}
.white { color: #eee}

.bg-blue { background-color: #2e5566;}
.blue {color:#2e5566;}

.bg-blue-white{
    background-color: #20B2AA;
}
.bg-orang{ background-color: rgb(241, 186, 84);}
.orang { color: rgb(241, 186, 84);}

.bg-orang1{ background-color: #f0a211;}
.orang1 { color: #f0a211;}

.bg-black {background-color: #201e1e;}
.black { color: #201e1e;}

[class*="col-"] {
    float: left;
    padding: 10px;
    /* border: 1px solid red; */

}
</style>