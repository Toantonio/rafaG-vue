<template>
    <section id="logon" class=" container ">
        <div class="row my-5">	
            <div class="col-md-4"></div>
                <div class="col-md-4 col-12 bor-1 rounded">
                    <form action="" method="post">
                        <h2>Fazer Login</h2>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email </label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            <a href="ms-auto">Esqueceu</a> ou <a href="">Cadastrese</a>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Senha</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                            <a href="">Esqueceu</a>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Mantenha-me conectado</label>
                        </div>
                        <div class="text-center">
                            <button type="submit " class="btn px-5  orang bg-blue  cal-12">LOGIN</button>
                        </div>
                    </form>
                </div>
            <div class="col-nd-4"></div>
        </div>
    </section>
</template>

<script>
export default {
    name:'logonUser'
}
</script>

<style>

</style>