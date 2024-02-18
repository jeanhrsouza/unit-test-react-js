import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

//O describe é uma switch de testes para realizar uma maior organização
describe('Deve renderizar um campo de input', () => {
  test('no documento', () => {
    render(<Formulario />);

    //criando consulta a partir do placeholder
    const campoTexto = screen.getByPlaceholderText('Digite um valor');

    //Espero que o meu input esteja no documento
    expect(campoTexto).toBeInTheDocument();
  });

  test('com o type number', () => {
    render(<Formulario />);

    //criando consulta a partir do placeholder
    const campoTexto = screen.getByPlaceholderText('Digite um valor');

    //Espero que o meu input seja do tipo number
    expect(campoTexto).toHaveAttribute('type', 'number');
  });

  /**
   * Teste unitário com eventos
   */

  test('que pode ser preenchido', () => {
    render(<Formulario />);

    //criando consulta a partir do placeholder
    const campoTexto = screen.getByPlaceholderText('Digite um valor');

    //adicionando evento de adicionar número 50 no input
    userEvent.type(campoTexto, '50');

    //Espero que o meu input tenha o valor de 50
    expect(campoTexto).toHaveValue(50);
  });
});

test('Deve chamar um evento de onSubmit ao clicar em realizar transação', () => {
  //Criando uma dublagem do comportamento 'mock'
  const realizarTransacao = jest.fn();

  //criando renderização
  render(<Formulario realizarTransacao={realizarTransacao} />);

  //criando consulta
  const botao = screen.getByRole('button');

  userEvent.click(botao);
  expect(realizarTransacao).toHaveBeenCalledTimes(1);
});
