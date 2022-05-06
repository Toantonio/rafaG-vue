export class Usuario {
    //constructor()
    constructor(
        id = null,
        nome = "",
        senha = "",
        //data_nasc = new Date("1970-01-01"),
        data_nasc = null,
        email = "",
        foto_perfil = "",
        tel = "",
        cpf = "",
        ativo = true
    ) {
        this.id = id;
        this.nome = nome;
        this.senha = senha;
        this.data_nasc = data_nasc;
        this.email = email;
        this.foto_perfil = foto_perfil;
        this.tel = tel;
        this.cpf = cpf;
        this.ativo = ativo;
    }
}