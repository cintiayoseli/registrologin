let fs = require('fs');
let moduloUsuarios = {
    archivoJSON : './usuarios.json',
    leerJSON : function(){
        let usuariosJson = fs.readFileSync(this.archivoJSON, 'utf-8');
        let listaDeUsuarios = JSON.parse(usuariosJson)
        return listaDeUsuarios
    },
    guardarJSON : function(info){
        let nuevoJSON = JSON.stringify(info)
        fs.writeFileSync (this.archivo, nuevoJSON, 'utf-8');
    },
    registro : function (nombre,mail,contraseña){
        let listaDeUsuarios = this.leerJSON();
        let agregarUsuario = {
           nombre : nombre,
            mail : mail,
            contraseña : contraseña
        }
    listaDeUsuarios.push(agregarUsuario)
    this.guardarJSON(listaDeUsuarios) 
    return console.log(agregarUsuario)
},
    login : function (mail,contraseña){
        let listaDeUsuarios = this.leerJSON()
        let usuariosFiltrados =listaDeUsuarios.filter(usuario=>{
            return usuario.mail == mail && usuario.contraseña == contraseña
        })
        return usuariosFiltrados
    },
    eliminar: function(mail, contraseña) {
        let listaDeUsuarios = this.leerJSON();
​
        let listaActualizada = listaDeUsuarios.filter(usuario => {
            return usuario.mail != mail && usuario.contraseña != contraseña 
        })
​
        this.guardarJSON(listaActualizada);
   
}
}
module.exports = moduloUsuarios