import * as XLSX from "xlsx";

const carregarJogadores = async () => {
  try {
    const response = await fetch("/jogadores_copa_2026.xlsx");

    const arrayBuffer = await response.arrayBuffer();

    const workbook = XLSX.read(arrayBuffer, {
      type: "array",
    });

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    const dados = XLSX.utils.sheet_to_json(worksheet);

    const jogadores = {};

    dados.forEach((linha) => {
      if (linha.codigo && linha.nome) {
        jogadores[linha.codigo] = linha.nome;
      }
    });

    return jogadores;
  } catch (erro) {
    console.error("Erro ao carregar Excel:", erro);
    return {};
  }
};

export default carregarJogadores;