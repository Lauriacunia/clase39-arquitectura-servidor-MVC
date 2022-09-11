let instancia = null;

export default class PrimeraConexion {
  constructor() {
    this.hora = new Date().toLocaleString();
  }
  // Metodo de clase
  // garantiza que solo exista una instancia de la clase
  static getInstance() {
    if (!instancia) {
      instancia = new PrimeraConexion();
    }
    return instancia;
  }

  obtenerHora() {
    return this.hora;
  }
}
