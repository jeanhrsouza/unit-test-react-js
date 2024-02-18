import { render, screen } from '@testing-library/react';
import Menu from './index';

test('Deve renderizar um link para a página inicial', () => {
  render(<Menu />);

  //criando consulta
  const linkPaginaInicial = screen.getByText('Inicial');

  //Espero que o meu link da página inicial esteja no documento
  expect(linkPaginaInicial).toBeInTheDocument();
});

test('Deve renderizar uma lista de link', () => {
  //renderizando os componentes
  render(<Menu />);

  //criando consulta da lista de links. Estamos usando o getAllByRole para ter a role de link <a>.
  const listaDeLinks = screen.getAllByRole('link');

  //Espero que a minha lista de link tenha o tamanho de 4;
  expect(listaDeLinks).toHaveLength(4);
});

test('Não deve renderizar um link para Extrato', () => {
  //renderizando os componentes
  render(<Menu />);

  //criando consulta de componente
  const linkExtrato = screen.queryByText('Extarto');

  //espero que não esteja no meu documento
  expect(linkExtrato).not.toBeInTheDocument();
});
