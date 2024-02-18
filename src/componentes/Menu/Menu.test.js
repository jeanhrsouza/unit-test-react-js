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

/**
 * Teste de snapshot
 */
test('Deve renderizar uma lista de links com a classe link', () => {
  render(<Menu />); // renderizando o menu

  const links = screen.getAllByRole('link'); //criando a consulta

  //verificando se os links estão com a classe correta
  links.forEach((link) => expect(link).toHaveClass('links'));

  //Criando um snapshot (forma para ver mais visual)
  // é sempre recomendado utilizar o snapshot com mais sessões.
  expect(links).toMatchSnapshot();
});
