import { http } from './config';

export default {
    list:function (){
        return http.get("usuario/list");

    },
    
    login:function (dadosUsuario){
        // {
        // "usuario": "sc@email.com",
        //     "senha": "123@123"
        // }
        return http.post("usuario/logon", { data: dadosUsuario });
    }
}