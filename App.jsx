import { useState } from 'react';
import './App.css';

const Personagens = () => {
  const [familia, setFamilia] = useState(null);

  const personagens = [
    'Jill Valentine',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
  ];

  const obterSobrenome = (nomeCompleto) => {
    const partesDoNome = nomeCompleto.split(' ');
    return partesDoNome.length > 1 ? partesDoNome[partesDoNome.length - 1] : '';
  };

  const personagensFiltrados = familia
    ? personagens.filter(personagem => obterSobrenome(personagem).includes(familia))
    : personagens;

  return (
    <div>
      <h3> Personagens de Resident Evil </h3>
      <ul>
        {personagensFiltrados.map(personagem => (
          <li key={personagem} onClick={() => setFamilia(obterSobrenome(personagem))}>
            {personagem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Personagens;
