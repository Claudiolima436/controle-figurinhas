import React from 'react';

export default function ControleFigurinhasCopa2026() {
  const totalFigurinhas = 980;

  const obterSecaoDaFigurinha = (numero) => {
    const secoesOficiais = [
      { nome: 'Especiais', prefixo: 'FWC', inicio: 1, fim: 20, cor: 'bg-purple-600' },
      { nome: 'Canadá', prefixo: 'CAN', inicio: 21, fim: 40, cor: 'bg-red-500' },
      { nome: 'México', prefixo: 'MEX', inicio: 41, fim: 60, cor: 'bg-green-600' },
      { nome: 'Estados Unidos', prefixo: 'USA', inicio: 61, fim: 80, cor: 'bg-blue-600' },
      { nome: 'Argentina', prefixo: 'ARG', inicio: 81, fim: 100, cor: 'bg-sky-400' },
      { nome: 'Brasil', prefixo: 'BRA', inicio: 101, fim: 120, cor: 'bg-yellow-500' },
      { nome: 'Equador', prefixo: 'ECU', inicio: 121, fim: 140, cor: 'bg-yellow-400' },
      { nome: 'Uruguai', prefixo: 'URU', inicio: 141, fim: 160, cor: 'bg-sky-300' },
      { nome: 'Colômbia', prefixo: 'COL', inicio: 161, fim: 180, cor: 'bg-yellow-600' },
      { nome: 'Chile', prefixo: 'CHI', inicio: 181, fim: 200, cor: 'bg-red-600' },
      { nome: 'Peru', prefixo: 'PER', inicio: 201, fim: 220, cor: 'bg-red-500' },
      { nome: 'Venezuela', prefixo: 'VEN', inicio: 221, fim: 240, cor: 'bg-red-800' },
      { nome: 'Paraguai', prefixo: 'PAR', inicio: 241, fim: 260, cor: 'bg-red-700' },
      { nome: 'Bolívia', prefixo: 'BOL', inicio: 261, fim: 280, cor: 'bg-green-500' },
      { nome: 'França', prefixo: 'FRA', inicio: 281, fim: 300, cor: 'bg-blue-700' },
      { nome: 'Inglaterra', prefixo: 'ENG', inicio: 301, fim: 320, cor: 'bg-gray-400' },
      { nome: 'Espanha', prefixo: 'ESP', inicio: 321, fim: 340, cor: 'bg-red-600' },
      { nome: 'Alemanha', prefixo: 'GER', inicio: 341, fim: 360, cor: 'bg-gray-800' },
      { nome: 'Portugal', prefixo: 'POR', inicio: 361, fim: 380, cor: 'bg-red-700' },
      { nome: 'Itália', prefixo: 'ITA', inicio: 381, fim: 400, cor: 'bg-blue-600' },
      { nome: 'Holanda', prefixo: 'NED', inicio: 401, fim: 420, cor: 'bg-orange-500' },
      { nome: 'Bélgica', prefixo: 'BEL', inicio: 421, fim: 440, cor: 'bg-red-500' },
      { nome: 'Croácia', prefixo: 'CRO', inicio: 441, fim: 460, cor: 'bg-red-500' },
      { nome: 'Suíça', prefixo: 'SUI', inicio: 461, fim: 480, cor: 'bg-red-600' },
      { nome: 'Dinamarca', prefixo: 'DEN', inicio: 481, fim: 500, cor: 'bg-red-600' },
      { nome: 'Suécia', prefixo: 'SWE', inicio: 501, fim: 520, cor: 'bg-yellow-400' },
      { nome: 'Sérvia', prefixo: 'SRB', inicio: 521, fim: 540, cor: 'bg-red-600' },
      { nome: 'Polônia', prefixo: 'POL', inicio: 541, fim: 560, cor: 'bg-gray-400' },
      { nome: 'Marrocos', prefixo: 'MAR', inicio: 561, fim: 580, cor: 'bg-red-600' },
      { nome: 'Senegal', prefixo: 'SEN', inicio: 581, fim: 600, cor: 'bg-green-600' },
      { nome: 'Argélia', prefixo: 'ALG', inicio: 601, fim: 620, cor: 'bg-green-500' },
      { nome: 'Nigéria', prefixo: 'NGA', inicio: 621, fim: 640, cor: 'bg-green-600' },
      { nome: 'Camarões', prefixo: 'CMR', inicio: 641, fim: 660, cor: 'bg-green-700' },
      { nome: 'Costa do Marfim', prefixo: 'CIV', inicio: 661, fim: 680, cor: 'bg-orange-500' },
      { nome: 'Egito', prefixo: 'EGY', inicio: 681, fim: 700, cor: 'bg-red-600' },
      { nome: 'Gana', prefixo: 'GHA', inicio: 701, fim: 720, cor: 'bg-yellow-500' },
      { nome: 'Mali', prefixo: 'MLI', inicio: 721, fim: 740, cor: 'bg-yellow-400' },
      { nome: 'Japão', prefixo: 'JPN', inicio: 741, fim: 760, cor: 'bg-blue-600' },
      { nome: 'Coreia do Sul', prefixo: 'KOR', inicio: 761, fim: 780, cor: 'bg-red-500' },
      { nome: 'Arábia Saudita', prefixo: 'KSA', inicio: 781, fim: 800, cor: 'bg-green-600' },
      { nome: 'Irã', prefixo: 'IRN', inicio: 801, fim: 820, cor: 'bg-gray-400' },
      { nome: 'Austrália', prefixo: 'AUS', inicio: 821, fim: 840, cor: 'bg-yellow-400' },
      { nome: 'Catar', prefixo: 'QAT', inicio: 841, fim: 860, cor: 'bg-red-800' },
      { nome: 'Iraque', prefixo: 'IRQ', inicio: 861, fim: 880, cor: 'bg-green-600' },
      { nome: 'Emirados Árabes', prefixo: 'UAE', inicio: 881, fim: 900, cor: 'bg-gray-400' },
      { nome: 'Costa Rica', prefixo: 'CRC', inicio: 901, fim: 920, cor: 'bg-red-600' },
      { nome: 'Panamá', prefixo: 'PAN', inicio: 921, fim: 940, cor: 'bg-red-500' },
      { nome: 'Jamaica', prefixo: 'JAM', inicio: 941, fim: 960, cor: 'bg-yellow-400' },
      { nome: 'Nova Zelândia', prefixo: 'NZL', inicio: 961, fim: 980, cor: 'bg-gray-400' }
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
      return {
        numero,
        codigoBusca,
        possui: false,
        repetida: false,
        secaoNome: secao.nome,
        secaoCor: secao.cor
      };
    });
  };

  const [colecao, setColecao] = React.useState(gerarListaInicial);
  const [busca, setBusca] = React.useState('');

  React.useEffect(() => {
    const dadosSalvos = localStorage.getItem('album2026');
    if (dadosSalvos) {
      const parsed = JSON.parse(dadosSalvos);
      const colecaoAtualizada = parsed.map((item) => {
        const secao = obterSecaoDaFigurinha(item.numero);
        const numeroNaSecao = item.numero - secao.inicio + 1;
        const codigoBusca = `${secao.prefixo} ${numeroNaSecao}`;
        return { ...item, secaoNome: secao.nome, secaoCor: secao.cor, codigoBusca };
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

  const alternarRepetida = (numero) => {
    setColecao((prev) =>
      prev.map((item) =>
        item.numero === numero ? { ...item, repetida: !item.repetida } : item
      )
    );
  };

  const faltantes = colecao.filter((item) => !item.possui).length;
  const repetidas = colecao.filter((item) => item.repetida).length;
  const progresso = calcularProgresso(colecao);

  const listaFiltrada = colecao.filter((item) =>
    item.codigoBusca.toLowerCase().includes(busca.toLowerCase()) || 
    item.secaoNome.toLowerCase().includes(busca.toLowerCase()) ||
    item.numero.toString() === busca
  );

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
              <h2 className="text-3xl font-black text-red-800">{faltantes}</h2>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-200 rounded-2xl p-4 shadow-md border border-yellow-100">
              <p className="text-sm text-yellow-700 font-semibold uppercase">Repetidas</p>
              <h2 className="text-3xl font-black text-yellow-800">{repetidas}</h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-4 mb-6">
          <input
            type="text"
            placeholder="Buscar por código (ex: ECU 16, BRA 5) ou seleção..."
            className="w-full border-2 border-gray-200 rounded-2xl p-4 text-lg focus:outline-none focus:border-blue-500 transition-colors"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {listaFiltrada.map((item) => (
            <div
              key={item.numero}
              className={`rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 bg-white border-2 ${
                item.possui ? 'border-green-500' : 'border-transparent'
              }`}
            >
              <div className={`${item.secaoCor} px-3 py-2 text-white text-xs font-bold text-center uppercase tracking-wider truncate`}>
                {item.secaoNome}
              </div>
              
              <div className="p-4">
                <div className="flex justify-center items-center mb-4">
                  <span className={`text-2xl font-black ${item.possui ? 'text-green-600' : 'text-gray-700'}`}>
                    {item.codigoBusca}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => alternarPossui(item.numero)}
                    className={`rounded-xl p-2 text-white font-bold transition-colors ${
                      item.possui ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-300 hover:bg-gray-400 text-gray-700'
                    }`}
                  >
                    {item.possui ? '✓ Tenho' : 'Marcar'}
                  </button>

                  <button
                    onClick={() => alternarRepetida(item.numero)}
                    className={`rounded-xl p-2 font-bold transition-colors ${
                      item.repetida ? 'bg-yellow-400 text-yellow-900 hover:bg-yellow-500' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }`}
                  >
                    {item.repetida ? '+ Repetida' : 'Normal'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}