import { render, screen } from '@testing-library/react';
import Extrato from './index';

test('Deve renderizar uma lista de transações', () => {
  //criando o mock
  const transacoes = [
    {
      transacao: 'Depósito',
      valor: 100,
    },
  ];

  //renderizando o componente com a prop
  render(<Extrato transacoes={transacoes} />);

  //Criando uma consulta
  const lista = screen.getByRole('listitem');

  expect(lista).toBeInTheDocument();
});
