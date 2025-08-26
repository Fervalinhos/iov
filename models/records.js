import Registration from "./registration";

export default class Records {
    constructor() {
        this.registros = [];
    }

    adicionarRegistro(registro) {
        this.registros.push(registro);
    }

    buscarRegistroPorId(id) {
        return this.registros.find(registro => registro.id === id);
    }

    listarRegistros() {
        return this.registros;
    }
}
