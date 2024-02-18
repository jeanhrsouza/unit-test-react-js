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
  const realizarTransacao = jest.fn(); //Criando uma dublagem do comportamento 'mock'

  render(<Formulario realizarTransacao={realizarTransacao} />); //criando renderização
  const botao = screen.getByRole('button'); //criando consulta

  userEvent.click(botao); //simulando o click do botão para submeter
  expect(realizarTransacao).toHaveBeenCalledTimes(1); //verifica se foi chamado, no mínimo, 1x
});

test('Deve ser possível selecionar uma opção do elemento <select/>', () => {
  render(<Formulario />); // renderiza o componente
  const select = screen.getByRole('combobox'); // faz a consulta do elemento select
  userEvent.selectOptions(select, ['Depósito']); // simula a ação de selecionar uma opção do select

  expect(
    screen.getByRole('option', { name: 'Selecione um tipo de transação' })
      .selected,
  ).toBe(false); // verifica se a opção de selecionar um tipo de transação não foi selecionada
  expect(screen.getByRole('option', { name: 'Depósito' }).selected).toBe(true); // verifica se a opção de depósito foi selecionada
});
