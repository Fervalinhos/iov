"use client"
import Inputs from "./components/inputs/page.jsx";
import Doctors_region from "./components/doctors_region/page.jsx";
import { useState, useEffect, useContext } from "react";
import Records from "@/models/records.js";
import styles from "./page.module.css";
import { usePDF } from 'react-to-pdf';

const registros = new Records();




function App() {

  const { toPDF, targetRef } = usePDF({ filename: 'IOV.pdf' });

  const [HC, setHC] = useState("");
  const [HM, setHM] = useState("");
  const [convenio, setConvenio] = useState("");
  const [numero, setNumero] = useState("");
  const [data, setData] = useState("");
  const [paciente, setPaciente] = useState("");
  const [CPF, setCPF] = useState("");
  const [RG, setRG] = useState("");
  const [FONE, setFONE] = useState("");
  const [CEP, setCEP] = useState("");
  const [endereco, setEndereco] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [idade, setIdade] = useState("");
  const [profissao, setProfissao] = useState("");
  const [email, setEmail] = useState("");
  const [indicacao, setIndicacao] = useState("");


  function calcularIdade(dataNascimento) {
    if (!dataNascimento) return "";
    const hoje = new Date();
    const partes = dataNascimento.split("-");
    if (partes.length != 3) return "";
    const anoNasc = parseInt(partes[0], 10);
    const mesNasc = parseInt(partes[1], 10) - 1;
    const diaNasc = parseInt(partes[2], 10);
    const nascimento = new Date(anoNasc, mesNasc, diaNasc);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();
    if (m < 0 || (m == 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  }
  useEffect(() => {
    setIdade(calcularIdade(dataNascimento));
  }, [dataNascimento]);

  useEffect(() => {
    async function buscarEndereco(cep) {
      if (!cep) return;
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep.replace(/\D/g, "")}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setEndereco(`${data.logradouro || ""}, ${data.bairro || ""}, ${data.localidade || ""} - ${data.uf || ""}`);
        }
      } catch (error) {
      }
    }
    buscarEndereco(CEP);
  }, [CEP]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      HC,
      HM,
      convenio,
      numero,
      data,
      paciente,
      CPF,
      RG,
      FONE,
      endereco,
      dataNascimento,
      idade,
      profissao,
      email,
      indicacao
    };

    registros.adicionarRegistro(newRecord);
    console.log(registros.listarRegistros());
    clearFields();
  }

  const clearFields = () => {
    setHC("");
    setHM("");
    setConvenio("");
    setNumero("");
    setData("");
    setPaciente("");
    setCPF("");
    setRG("");
    setFONE("");
    setEndereco("");
    setDataNascimento("");
    setIdade("");
    setProfissao("");
    setEmail("");
    setIndicacao("");
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.formContainer} ref={targetRef}>
        <h1 className={styles.title}>IOV</h1>
        <h1 className={styles.title}>INSTITUTO OFTALMOLOGICO DE VALINHOS</h1>
        <div className={styles.inputContainer}>
          <Inputs type="text" text="HC" value={HC} onChange={setHC} styleInput={styles.inputHC_HM} />
          <Inputs type="text" text="HM" value={HM} onChange={setHM} styleInput={styles.inputHC_HM} />
          <Inputs type="text" text="CONVÊNIO" value={convenio} onChange={setConvenio} styleInput={styles.inputConvenio} />
          <Inputs type="text" text="N°" value={numero} onChange={setNumero} styleInput={styles.inputNumero} />
          <Inputs type="date" text="DATA" value={data} onChange={setData} styleInput={styles.inputData} />
          <Inputs type="text" text="PACIENTE" value={paciente} onChange={setPaciente} styleInput={styles.inputPaciente} />
          <Inputs type="text" text="CPF" value={CPF} onChange={setCPF} styleInput={styles.inputCPF_RG_FONE} maxLength={11} />
          <Inputs type="text" text="RG" value={RG} onChange={setRG} styleInput={styles.inputCPF_RG_FONE} />
          <Inputs type="text" text="FONE" value={FONE} onChange={setFONE} styleInput={styles.inputCPF_RG_FONE} />
          <Inputs type="text" text="CEP" value={CEP} onChange={setCEP} styleInput={styles.inputCep} maxLength={9} />
          <Inputs type="text" text="ENDEREÇO" value={endereco} onChange={setEndereco} styleInput={styles.inputEndereco} />
          <Inputs type="date" text="DATA NASC" value={dataNascimento} onChange={setDataNascimento} styleInput={styles.inputDataNascimento} />
          <Inputs type="number" text="IDADE" value={idade} onChange={setIdade} styleInput={styles.inputIdade} />
          <Inputs type="text" text="PROFISSÃO" value={profissao} onChange={setProfissao} styleInput={styles.inputProfissao} />
          <Inputs type="text" text="E-mail" value={email} onChange={setEmail} styleInput={styles.inputEmail} />
          <Inputs type="text" text="Indicação" value={indicacao} onChange={setIndicacao} styleInput={styles.inputIndicacao} />
        </div>
        <h1 className={styles.title}>ANAMNSE</h1>
        <div className={styles.bar}></div>
        <Doctors_region />
      </div>
      <button onClick={() => toPDF()}>Download PDF</button>
    </main>
  );
}

export default App;
