import { render, screen } from '@testing-library/react';
import Cabecalho from './index';

test('Deve renderizar o nome do usuário logado', () => {
  //rendezidando componente
  render(<Cabecalho />);

  //consultando o componente para ver o que está sendo renderizado
  const nomeUsuario = screen.getByText('Joana Fonseca Gomes');

  //Espero que o nome do usuário esteja dentro do documento
  expect(nomeUsuario).toBeInTheDocument();
});
