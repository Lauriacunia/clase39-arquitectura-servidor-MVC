import { obtenerHora } from "../services/singleton.js";

export function getSingleton(req, res) {
  res.json({ hora: obtenerHora() });
}
