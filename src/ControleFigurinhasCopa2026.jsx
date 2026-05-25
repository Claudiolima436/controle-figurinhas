import React from 'react';

export default function ControleFigurinhasCopa2026() {
  const totalFigurinhas = 980;

  const obterSecaoDaFigurinha = (numero) => {
    if (numero <= 20) return { nome: 'Taça e Símbolos', cor: 'bg-purple-600' };
    if (numero <= 40) return { nome: 'Estádios', cor: 'bg-teal-500' };
    if (numero <= 60) return { nome: 'Argentina', cor: 'bg-sky-400' };
    if (numero <= 80) return { nome: 'Brasil', cor: 'bg-yellow-500' };
    if (numero <= 100) return { nome: 'França', cor: 'bg-blue-700' };
    if (numero <= 120) return { nome: 'Inglaterra', cor: 'bg-red-600' };
    if (numero <= 140) return { nome: 'Espanha', cor: 'bg-red-500' };
    if (numero <= 160) return { nome: 'Alemanha', cor: 'bg-gray-800' };
    if (numero <= 180) return { nome: 'Portugal', cor: 'bg-red-700' };
    const equipe = Math.ceil((numero - 180) / 20);
    return { nome: `Seleção ${equipe}`, cor: 'bg-indigo-500' };
  };

  const calcularProgresso = (colecao) => {
    const preenchidas = colecao.filter((item) => item.possui).length;
    return ((preenchidas / totalFigurinhas) * 100).toFixed(1);
  };

  const gerarListaInicial = () => {
    return Array.from({ length: totalFigurinhas }, (_, i) => {
      const numero = i + 1;
      const secao = obterSecaoDaFigurinha(numero);
      return {
        numero,
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
        return { ...item, secaoNome: secao.nome, secaoCor: secao.cor };
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
    item.numero.toString().includes(busca) || 
    item.secaoNome.toLowerCase().includes(busca.toLowerCase())
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
            placeholder="Buscar por número ou seleção..."
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
                    #{item.numero}
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