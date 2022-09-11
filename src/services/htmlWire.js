import usuarioModel from "../models/usuarios.js";

export async function agregarUsuario(usuario) {
  await usuarioModel.agregarUsuario(usuario);
}

export async function listarUsuarios() {
  return await usuarioModel.listarUsuarios();
}
