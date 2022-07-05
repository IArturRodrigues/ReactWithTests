import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Form from './index';

let input: HTMLElement;
let button: HTMLElement;

describe('Form component', () => {
   beforeAll(() => {
      render(<Form />);

      // encontrar no DOM o input
      input = screen.getByPlaceholderText('Insira os nomes dos participantes');
   
      // encontrar o botão
      button = screen.getByRole('button');
   });

   test('quando input estiver vazio, novos participantes nao podem ser adicionados', () => {
      // garantir que o input esteja no documento
      expect(input).toBeInTheDocument();
   
      // garantir que o botão esteja desabilitado
      expect(button).toBeDisabled();
   });

   test('botao ser clicável se tiver pelo menos 1 letra', () => {
      fireEvent.change(input, {
         target: {
            value: 'a'
         }
      });

      expect(button).not.toBeDisabled();
   });
   
   test('adicionar participante caso tenha algum nome preenchido', () => {
      // inserir valor no input
      fireEvent.change(input, {
         target: {
            value: 'Artur'
         }
      });
   
      // clicar no botão de submit
      fireEvent.click(button);
   
      // garantir que o input esteja com o foco ativo
      expect(input).toHaveFocus();
   
      // garantir que o input nao tenha um valor
      expect(input).toHaveValue('');
   });
});
