import { listarUsuarios, agregarUsuario } from "../services/htmlWire.js";

export async function getHtml(req, res) {
  const usuarios = await listarUsuarios();
  res.status(200).json(usuarios);
}
export async function postHtml(req, res) {
  const usuario = req.body;
  await agregarUsuario(usuario);
  res.redirect("/html-onwire");
}
