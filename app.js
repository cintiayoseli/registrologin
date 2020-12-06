let moduloUsuarios = require('./usuarios')
const process = require('process');
let comando = process.argv[2]

switch (comando){
    case 'listar':
    let usuarios = moduloUsuarios.leerJSON();
    console.log('-----------------------------')
    console.log('--Lista de usuarios------------')
    console.log('-------------------------------')
    usuarios.forEach(usuario => {
        console.log('Usuario: ' + usuario.nombre + ' Mail: ' + usuario.mail + ' Contraseña: ' + usuario.contraseña)
    })
    break; 
    case 'registro':
    let nombre = process.argv[3];
    let mail = process.argv[4];
    let contraseña = process.argv[5];
    moduloUsuarios.registro(nombre,mail,contraseña)
    console.log('--------------------------')
    console.log('Se ha registrado su cuenta')
    console.log('--------------------------')
    break;
    case 'login':
    let loginmail = process.argv[3];
    let logincontraseña = process.argv[4];
    let resultado = moduloLogin.loguearUsuario(loginmail,logincontraseña)
    if (resultado.length == -1){
        console.log ('-----------------------------')
        console.log ('--No se pudo iniciar sesion--')
        console.log ('-----------------------------')
    }else{
        console.log ('------------------------')
        console.log ('-------Bienvenid@-------')
        console.log ('------------------------')
    }
        break;
    case 'eliminar':
    let mailEliminar = process.argv[3]
    let contraseñaEliminar = process.argv[4]
    let existe = moduloUsuarios.buscar(mailEliminar,contraseñaEliminar);
    if(existe.length == -1){
        console.log('---------------------------------')
        console.log('---No encontramos ese usuario----')
        console.log('---------------------------------')
    }else{
        moduloUsuarios.eliminar(mailEliminar, contraseñaEliminar)
        console.log('-------------------------------')
        console.log('Usuario eliminado correctamente')
        console.log('-------------------------------')
    } 
        
    }

    

        
     

