import React from 'react';

export default function ControleFigurinhasCopa2026() {
  const totalFigurinhas = 980;

  const nomesConhecidos = {
    "ECU 16": "Gonzalo Plata",
    "BRA 7": "Vinícius Júnior",
    "BRA 10": "Rodrygo",
    "URU 10": "Giorgian de Arrascaeta",
    "ARG 10": "Lionel Messi",
  };

  const obterSecaoDaFigurinha = (numero) => {
    const secoesOficiais = [
      { nome: 'Especiais', prefixo: 'FWC', inicio: 1, fim: 20, cor: 'bg-purple-600' },
      { nome: 'México', prefixo: 'MEX', inicio: 21, fim: 40, cor: 'bg-green-600' },
      { nome: 'África do Sul', prefixo: 'RSA', inicio: 41, fim: 60, cor: 'bg-green-700' },
      { nome: 'Coreia do República', prefixo: 'KOR', inicio: 61, fim: 80, cor: 'bg-red-500' },
      { nome: 'Chéquia', prefixo: 'CZE', inicio: 81, fim: 100, cor: 'bg-blue-800' },
      { nome: 'Brasil', prefixo: 'BRA', inicio: 101, fim: 120, cor: 'bg-yellow-500' },
      { nome: 'Marrocos', prefixo: 'MAR', inicio: 121, fim: 140, cor: 'bg-red-600' },
      { nome: 'Haiti', prefixo: 'HAI', inicio: 141, fim: 160, cor: 'bg-blue-400' },
      { nome: 'Escócia', prefixo: 'SCO', inicio: 161, fim: 180, cor: 'bg-blue-900' },
      { nome: 'Alemanha', prefixo: 'GER', inicio: 181, fim: 200, cor: 'bg-gray-800' },
      { nome: 'Curaçau', prefixo: 'CUW', inicio: 201, fim: 220, cor: 'bg-blue-500' },
      { nome: 'Costa do Marfim', prefixo: 'CIV', inicio: 221, fim: 240, cor: 'bg-orange-500' },
      { nome: 'Equador', prefixo: 'ECU', inicio: 241, fim: 260, cor: 'bg-yellow-400' },
      { nome: 'Bélgica', prefixo: 'BEL', inicio: 261, fim: 280, cor: 'bg-red-500' },
      { nome: 'Egito', prefixo: 'EGY', inicio: 281, fim: 300, cor: 'bg-red-600' },
      { nome: 'Irã', prefixo: 'IRN', inicio: 301, fim: 320, cor: 'bg-gray-400' },
      { nome: 'Nova Zelândia', prefixo: 'NZL', inicio: 321, fim: 340, cor: 'bg-gray-500' },
      { nome: 'França', prefixo: 'FRA', inicio: 341, fim: 360, cor: 'bg-blue-700' },
      { nome: 'Senegal', prefixo: 'SEN', inicio: 361, fim: 380, cor: 'bg-green-600' },
      { nome: 'Iraque', prefixo: 'IRQ', inicio: 381, fim: 400, cor: 'bg-green-700' },
      { nome: 'Noruega', prefixo: 'NOR', inicio: 401, fim: 420, cor: 'bg-red-600' },
      { nome: 'Portugal', prefixo: 'POR', inicio: 421, fim: 440, cor: 'bg-red-700' },
      { nome: 'Rep. Dem. do Congo', prefixo: 'COD', inicio: 441, fim: 460, cor: 'bg-blue-600' },
      { nome: 'Uzbequistão', prefixo: 'UZB', inicio: 461, fim: 480, cor: 'bg-blue-400' },
      { nome: 'Colômbia', prefixo: 'COL', inicio: 481, fim: 500, cor: 'bg-yellow-600' },
      { nome: 'Canadá', prefixo: 'CAN', inicio: 501, fim: 520, cor: 'bg-red-500' },
      { nome: 'Bósnia e Herzegovina', prefixo: 'BIH', inicio: 521, fim: 540, cor: 'bg-blue-900' },
      { nome: 'Catar', prefixo: 'QAT', inicio: 541, fim: 560, cor: 'bg-red-800' },
      { nome: 'Suíça', prefixo: 'SUI', inicio: 561, fim: 580, cor: 'bg-red-600' },
      { nome: 'Estados Unidos', prefixo: 'EUA', inicio: 581, fim: 600, cor: 'bg-blue-600' },
      { nome: 'Paraguai', prefixo: 'PAR', inicio: 601, fim: 620, cor: 'bg-red-700' },
      { nome: 'Austrália', prefixo: 'AUS', inicio: 621, fim: 640, cor: 'bg-yellow-400' },
      { nome: 'Turquia', prefixo: 'TUR', inicio: 641, fim: 660, cor: 'bg-red-600' },
      { nome: 'Países Baixos', prefixo: 'NED', inicio: 661, fim: 680, cor: 'bg-orange-500' },
      { nome: 'Japão', prefixo: 'JPN', inicio: 681, fim: 700, cor: 'bg-blue-600' },
      { nome: 'Suécia', prefixo: 'SWE', inicio: 701, fim: 720, cor: 'bg-yellow-400' },
      { nome: 'Tunísia', prefixo: 'TUN', inicio: 721, fim: 740, cor: 'bg-red-500' },
      { nome: 'Espanha', prefixo: 'ESP', inicio: 741, fim: 760, cor: 'bg-red-600' },
      { nome: 'Cabo Verde', prefixo: 'CPV', inicio: 761, fim: 780, cor: 'bg-blue-500' },
      { nome: 'Arábia Saudita', prefixo: 'KSA', inicio: 781, fim: 800, cor: 'bg-green-600' },
      { nome: 'Uruguai', prefixo: 'URU', inicio: 801, fim: 820, cor: 'bg-sky-300' },
      { nome: 'Argentina', prefixo: 'ARG', inicio: 821, fim: 840, cor: 'bg-sky-400' },
      { nome: 'Argélia', prefixo: 'ALG', inicio: 841, fim: 860, cor: 'bg-green-500' },
      { nome: 'Áustria', prefixo: 'AUT', inicio: 861, fim: 880, cor: 'bg-red-700' },
      { nome: 'Jordânia', prefixo: 'JOR', inicio: 881, fim: 900, cor: 'bg-white text-gray-800' },
      { nome: 'Inglaterra', prefixo: 'ENG', inicio: 901, fim: 920, cor: 'bg-gray-400' },
      { nome: 'Croácia', prefixo: 'CRO', inicio: 921, fim: 940, cor: 'bg-red-500' },
      { nome: 'Gana', prefixo: 'GHA', inicio: 941, fim: 960, cor: 'bg-yellow-500' },
      { nome: 'Panamá', prefixo: 'PAN', inicio: 961, fim: 980, cor: 'bg-blue-500' }
    ];
    
    return secoesOficiais.find(secao => numero >= secao.inicio && numero <= secao.fim) || secoesOficiais[0];
  };

  const calcularProgresso = (colecao) => {
    const preenchidas = colecao.filter((item) => item.possui).length;
    return ((preenchidas / totalFigurinhas) * 100).toFixed(1);
  };

  const gerarListaInicial = () => {
    return Array.from({ length: totalFigurinhas }, (_, i) => {
      const numero = i + 1;
      const secao = obterSecaoDaFigurinha(numero);
      const numeroNaSecao = numero - secao.inicio + 1;
      const codigoBusca = `${secao.prefixo} ${numeroNaSecao}`;
      const nomeJogador = nomesConhecidos[codigoBusca] || '';
      return {
        numero,
        codigoBusca,
        nomeJogador,
        possui: false,
        quantidadeRepetidas: 0,
        secaoNome: secao.nome,
        secaoCor: secao.cor
      };
    });
  };

  const [colecao, setColecao] = React.useState(gerarListaInicial);
  const [busca, setBusca] = React.useState('');
  const [filtroAtivo, setFiltroAtivo] = React.useState('todas'); 

  React.useEffect(() => {
    const dadosSalvos = localStorage.getItem('album2026');
    if (dadosSalvos) {
      const parsed = JSON.parse(dadosSalvos);
      const colecaoAtualizada = parsed.map((item) => {
        const secao = obterSecaoDaFigurinha(item.numero);
        const numeroNaSecao = item.numero - secao.inicio + 1;
        const codigoBusca = `${secao.prefixo} ${numeroNaSecao}`;
        const nomeJogador = nomesConhecidos[codigoBusca] || '';
        
        let qtd = item.quantidadeRepetidas || 0;
        if (qtd === 0 && item.repetida) {
          qtd = 1;
        }
        
        return { ...item, secaoNome: secao.nome, secaoCor: secao.cor, codigoBusca, nomeJogador, quantidadeRepetidas: qtd };
      });
      setColecao(colecaoAtualizada);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('album2026', JSON.stringify(colecao));
  }, [colecao]);

  const alternarPossui = (numero) => {
    setColecao((prev) =>
      prev.map((item) =>
        item.numero === numero ? { ...item, possui: !item.possui } : item
      )
    );
  };

  const adicionarRepetida = (numero) => {
    setColecao((prev) =>
      prev.map((item) =>
        item.numero === numero ? { ...item, quantidadeRepetidas: (item.quantidadeRepetidas || 0) + 1 } : item
      )
    );
  };

  const removerRepetida = (numero) => {
    setColecao((prev) =>
      prev.map((item) => {
        if (item.numero === numero && (item.quantidadeRepetidas || 0) > 0) {
          return { ...item, quantidadeRepetidas: item.quantidadeRepetidas - 1 };
        }
        return item;
      })
    );
  };

  const copiarParaWhatsApp = () => {
    const repetidasFiltradas = colecao.filter(item => (item.quantidadeRepetidas || 0) > 0);
    if (repetidasFiltradas.length === 0) {
      alert("Você ainda não tem figurinhas repetidas marcadas para trocar!");
      return;
    }

    let texto = "🔥 *Minhas Figurinhas Repetidas - Copa 2026* 🔥\n\n";
    repetidasFiltradas.forEach(item => {
      texto += `⚽ ${item.codigoBusca}`;
      if (item.nomeJogador) texto += ` (${item.nomeJogador})`;
      if (item.quantidadeRepetidas > 1) texto += ` - ${item.quantidadeRepetidas}x`;
      texto += "\n";
    });
    texto += "\nQuem tiver interesse, me chama!";

    navigator.clipboard.writeText(texto)
      .then(() => alert("Lista copiada com sucesso! Agora é só colar no seu WhatsApp."))
      .catch(() => alert("Erro ao copiar a lista. Tente novamente."));
  };

  const faltantesCount = colecao.filter((item) => !item.possui).length;
  const repetidasCount = colecao.reduce((acc, item) => acc + (item.quantidadeRepetidas || 0), 0);
  const progresso = calcularProgresso(colecao);

  const termoBusca = busca.trim().toLowerCase();
  let listaFiltrada = colecao;

  if (termoBusca !== '') {
    const ehSiglaExata = colecao.some(item => item.codigoBusca.split(' ')[0].toLowerCase() === termoBusca);
    
    if (ehSiglaExata && termoBusca.length === 3) {
      listaFiltrada = colecao.filter(item => item.codigoBusca.split(' ')[0].toLowerCase() === termoBusca);
    } else {
      listaFiltrada = colecao.filter((item) =>
        item.codigoBusca.toLowerCase().includes(termoBusca) || 
        item.secaoNome.toLowerCase().includes(termoBusca) ||
        item.numero.toString() === termoBusca ||
        (item.nomeJogador && item.nomeJogador.toLowerCase().includes(termoBusca))
      );
    }
  }

  if (filtroAtivo === 'conquistadas') {
    listaFiltrada = listaFiltrada.filter(item => item.possui);
  } else if (filtroAtivo === 'faltantes') {
    listaFiltrada = listaFiltrada.filter(item => !item.possui);
  } else if (filtroAtivo === 'repetidas') {
    listaFiltrada = listaFiltrada.filter(item => (item.quantidadeRepetidas || 0) > 0);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-6 border-t-8 border-blue-600">
          <h1 className="text-4xl font-extrabold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
            Controle Álbum Copa do Mundo 2026
          </h1>
          <p className="text-center text-gray-500 mb-6 font-medium">
            Panini • 980 figurinhas
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-gray-50 to-gray-200 rounded-2xl p-4 shadow-md border border-gray-100">
              <p className="text-sm text-gray-600 font-semibold uppercase">Total</p>
              <h2 className="text-3xl font-black text-gray-800">980</h2>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-200 rounded-2xl p-4 shadow-md border border-green-100">
              <p className="text-sm text-green-700 font-semibold uppercase">Concluído</p>
              <h2 className="text-3xl font-black text-green-800">{progresso}%</h2>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-200 rounded-2xl p-4 shadow-md border border-red-100">
              <p className="text-sm text-red-700 font-semibold uppercase">Faltantes</p>
              <h2 className="text-3xl font-black text-red-800">{faltantesCount}</h2>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-200 rounded-2xl p-4 shadow-md border border-yellow-100">
              <p className="text-sm text-yellow-700 font-semibold uppercase">Repetidas</p>
              <h2 className="text-3xl font-black text-yellow-800">{repetidasCount}</h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-4 mb-6">
          <input
            type="text"
            placeholder="Buscar por nome, código (ex: ECU 16) ou seleção..."
            className="w-full border-2 border-gray-200 rounded-2xl p-4 text-lg focus:outline-none focus:border-blue-500 transition-colors"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          
          <div className="flex flex-wrap gap-2 mt-4 pb-2">
            <button
              onClick={() => setFiltroAtivo('todas')}
              className={`flex-1 min-w-[90px] py-3 px-2 rounded-xl font-bold transition-colors ${filtroAtivo === 'todas' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              Todas
            </button>
            <button
              onClick={() => setFiltroAtivo('conquistadas')}
              className={`flex-1 min-w-[90px] py-3 px-2 rounded-xl font-bold transition-colors ${filtroAtivo === 'conquistadas' ? 'bg-green-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              Conquistadas
            </button>
            <button
              onClick={() => setFiltroAtivo('faltantes')}
              className={`flex-1 min-w-[90px] py-3 px-2 rounded-xl font-bold transition-colors ${filtroAtivo === 'faltantes' ? 'bg-red-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              Faltantes
            </button>
            <button
              onClick={() => setFiltroAtivo('repetidas')}
              className={`flex-1 min-w-[90px] py-3 px-2 rounded-xl font-bold transition-colors ${filtroAtivo === 'repetidas' ? 'bg-yellow-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              Repetidas
            </button>
          </div>
          
          <button
            onClick={copiarParaWhatsApp}
            className="w-full mt-2 py-3 px-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold shadow-md transition-colors flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Copiar Lista de Repetidas para WhatsApp
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {listaFiltrada.map((item) => (
            <div
              key={item.numero}
              className={`rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 bg-white border-2 flex flex-col ${
                item.possui ? 'border-green-500' : 'border-transparent'
              }`}
            >
              <div className={`${item.secaoCor} px-3 py-2 text-white text-xs font-bold text-center uppercase tracking-wider truncate`}>
                {item.secaoNome}
              </div>
              
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="flex flex-col justify-center items-center mb-4 min-h-[60px]">
                  <span className={`text-2xl font-black ${item.possui ? 'text-green-600' : 'text-gray-700'}`}>
                    {item.codigoBusca}
                  </span>
                  {item.nomeJogador && (
                    <span className="text-sm font-bold text-gray-500 mt-1 text-center leading-tight">
                      {item.nomeJogador}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => alternarPossui(item.numero)}
                    className={`rounded-xl p-2 text-white font-bold transition-colors ${
                      item.possui ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-300 hover:bg-gray-400 text-gray-700'
                    }`}
                  >
                    {item.possui ? '✓ Tenho' : 'Marcar'}
                  </button>

                  <div className="flex items-center justify-between bg-gray-100 rounded-xl p-1 border border-gray-200">
                    <button 
                      onClick={() => removerRepetida(item.numero)}
                      className="w-8 h-8 flex items-center justify-center bg-white rounded-lg font-bold text-gray-600 shadow hover:bg-gray-50 transition-colors"
                    >
                      -
                    </button>
                    <span className={`font-bold text-sm ${item.quantidadeRepetidas > 0 ? 'text-yellow-600' : 'text-gray-400'}`}>
                      {item.quantidadeRepetidas || 0} Rep.
                    </span>
                    <button 
                      onClick={() => adicionarRepetida(item.numero)}
                      className="w-8 h-8 flex items-center justify-center bg-yellow-400 rounded-lg font-bold text-yellow-900 shadow hover:bg-yellow-500 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}