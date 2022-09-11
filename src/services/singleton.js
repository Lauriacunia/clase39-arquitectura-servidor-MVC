import PrimeraConexion from "./singletonClass.js";

export function obtenerHora() {
  const instancia = PrimeraConexion.getInstance();
  return instancia.obtenerHora();
}
