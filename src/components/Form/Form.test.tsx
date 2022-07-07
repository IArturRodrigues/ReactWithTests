import { act, fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import Form from './index';

let input: HTMLElement;
let button: HTMLElement;

describe('Form component', () => {
   beforeEach(() => {
      // o recoil root agora e colocado por conta do hook criado utilizando o recoil
      render(
         <RecoilRoot>
            <Form />
         </RecoilRoot>
      );

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

   test('nomes duplicados nao podem ser adicionados a lista', () => {
      fireEvent.change(input, {
         target: {
            value: 'Artur'
         }
      });
      fireEvent.click(button);

      fireEvent.change(input, {
         target: {
            value: 'Artur'
         }
      });
      fireEvent.click(button);
      
      const errorMessage = screen.getByRole('alert');

      expect(errorMessage.textContent).toBe('Nomes duplicados nao sao permitidos!');
   });

   test('a mensagem de erro deve sumir apos os timers', () => {
      jest.useFakeTimers();

      fireEvent.change(input, {
         targe: {
            value: 'Artur'
         }
      });
      fireEvent.click(button);

      fireEvent.change(input, {
         targe: {
            value: 'Artur'
         }
      });
      fireEvent.click(button);

      let errorMessage = screen.queryByRole('alert');
      if (!errorMessage) return;
      expect(errorMessage).toBeInTheDocument();

      act(() => {
         // quando usando testes que mudam o estado no React, tem que ficar dentro da função act
         jest.runAllTimers();
      });

      errorMessage = screen.queryByRole('alert');
      expect(errorMessage).toBeNull();
   });
});
