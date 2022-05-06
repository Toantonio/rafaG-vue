import { Usuario } from '@/models/Usuario';
import { http } from './config';

export default {

    add: function(dadosUsuario = new Usuario) {
        console.log(dadosUsuario);
        return http.post("usuario/add", dadosUsuario);
    },


    list: function() {
        return http.get("usuario/list");
    },


    get: function(id) {
        return http.get("usuario/get/" + id);
    },


    login: function(dadosUsuario) {
        // {
        //  "usuario": "sc@email.com",
        //  "senha": "123@123"
        // }
        console.log(dadosUsuario);
        return http.post("usuario/logon", dadosUsuario);
    },

    upload: function(files) {
        console.log(files);
        return http.post("usuario/upload", files);
    }


};