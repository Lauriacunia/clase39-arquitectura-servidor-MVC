class UsuariosBD {
  constructor() {
    this.usuarios = [];
  }

  agregarUsuario(usuario) {
    this.usuarios.push(usuario);
  }

  listarUsuarios() {
    return this.usuarios;
  }
}

export default new UsuariosBD();
