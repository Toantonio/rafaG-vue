export default class Produto {
    constructor(){
        this.id = null,
        this.nome = "",
        this.tipo = "",
        this.valor = 0,
        this.quant = 0,
        this.dimen = "",
        this.kilo = 0,
        this.desc = "",
        this.img = "";

    }
    add(){
        try{
            this.validData();
            let baseProduto = JSON.parse(localStorage.getItem("produtos"));
            if (baseProduto == null){
                baseProduto = [];
            }
            this.id = Date.new();
            baseProduto.push(this);
            let produtoJson = JSON.stringify(baseProduto);
            localStorage.setItem("produtos",produtoJson);
            localStorage.setItem("atualizado", new Date().toString());

        }catch(ex){
            console.error(ex);
            throw ex;
        }
    }
    gatALL(){
        let baseProduto = JSON.parse(localStorage.getItem('produto'));
        if(baseProduto == null){
            baseProduto = [];
        }
        return baseProduto;
    }

    update(){
        try{
            this.validData();
            let produto = this.getALL();
           for (let i = 0; i < produto.length; i++){
               if (produto[i].id == this.id){
                   produto[i] = this;
               }
           } 
           let produtoJson = JSON.stringify('produto' );
           localStorage.setItem('produto',produtoJson);
        }catch(ex) {
            console.error(ex)
            throw ex;
        }
    }
    delete(index){
        let produtos = this.getALL();
        produtos.splice(index, 1);
        let produtoJson = JSON.stringify(produtos);
        localStorage.setItem('produto',produtoJson);
       
    }
    validData(){
        let error = "";
        if(!this.name || this.nome == ""){
            error += "não deve ficar vazio!\n";
        }
        if(!this.tipo || this.tipo == ""){
            error += "não deve ficar vazio!\n";
        }
        if(!this.valor || this.valor == ""){
            error += "não deve ficar vazio!\n";
        }
        if(!this.quant || this.quant == ""){
            error += "não deve ficar vazio!\n";
        }
        if(!this.dimen|| this.dimen == ""){
            error += "não deve ficar vazio!\n";
        }
        if(!this.kilo || this.kilo == ""){
            error += "não deve ficar vazio!\n";
        }
        if(!this.desc || this.desc == ""){
            error += "não deve ficar vazio!\n";
        }
        if(error != ""){
            throw error;
        }
    }





















}