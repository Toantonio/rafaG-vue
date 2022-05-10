<template>
    <form>
        <div class="mb-3">
            <label for="nome" class="form-label">Produto</label>
            <input type="email" class="form-control" id="nome" placeholder="Digite um nome">
            
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    
</template>

<script>

export default {
    name:"ProdutoAdd"
}
</script>

<style>

</style>