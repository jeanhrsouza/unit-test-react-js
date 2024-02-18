import { render, screen } from '@testing-library/react';
import Saldo from './index';

describe('Componente <Saldo />', () => {
  test('Deve renderizar o saldo com o valor monetário', () => {
    render(<Saldo saldo={1000} />); //renderizando com valor de 1000

    const saldo = screen.getByTestId('saldo'); //criando consulta
    expect(saldo).toHaveTextContent('R$ 1000'); //esperando que seja 1000 reais
  });
});
