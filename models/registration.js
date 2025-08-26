import { v4 as uuidv4 } from "uuid";

export default class Registration {
    constructor(
        horario_de_chegada, horario_marcado, convenio,
        numero, data, paciente, CPF, RG, FONE, endereço,
        data_nascimento, idade, profissao, email, indicacao,
    ) {
        this.horario_de_chegada = horario_de_chegada;
        this.horario_marcado = horario_marcado;
        this.convenio = convenio;
        this.numero = numero;
        this.data = data;
        this.paciente = paciente;
        this.CPF = CPF;
        this.RG = RG;
        this.FONE = FONE;
        this.endereço = endereço;
        this.data_nascimento = data_nascimento;
        this.idade = idade;
        this.profissao = profissao;
        this.email = email;
        this.indicacao = indicacao;
        this.id = uuidv4();
    }
}
