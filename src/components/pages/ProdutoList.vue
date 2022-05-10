<template>
  <table>
      <tr class="table">
          <th>nome</th>
          <th>tpo</th>
          <th>valor</th>
          <th>quantidade</th>
          <th>dimenção</th>
          <th>kilo</th>
          <th>Desc</th>
          <!-- <th>imgagem</th>     -->
      </tr>
      <tr v-for="produto in produtos" :key="produto.id">
          <th>{{produto.nome}}</th>
          <th>{{produto.tipo}}</th>
          <th>{{produto.valor.tofixed(2)}}</th>
          <th>{{produto.quantidade}}</th>
          <th>{{produto.dimenção}}</th>
          <th>{{produto.kilo}}</th>
          <th>{{produto.Desc}}</th>
          <th @click="getProduto(produto)">//</th>
          <th @click="deleteProduto(produto)">X</th>
          
          <!-- <th>imgagem</th>     -->
      </tr>
  </table>
</template>

<script>
import Produto from "./Produto";
let produto = new Produto();
export default {
    name:'ProdutoList',
    data(){
        return {
            produto: produto.getALL(),
            produto,
        };
    },
    methods: {
        getProduto(produto){
            console.log(produto)
            this.produto = produto;
        },
    },
};
</script>

<style>

</style>