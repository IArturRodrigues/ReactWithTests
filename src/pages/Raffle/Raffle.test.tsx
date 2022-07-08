import { act, fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useParticipantList } from '@hooks/useParticipantList';
import { useRaffleResult } from '@hooks/useRaffleResult';

import Raffle from '.';

let options: HTMLElement[];
let select: HTMLElement;
let button: HTMLElement;

const participants = ['Artur', 'Isabela', 'Ricardo', 'Manu'];
const result = new Map([
   ['Artur', 'Isabela'], ['Isabela', 'Manu'],
   ['Ricardo', 'Artur'], ['Manu', 'Ricardo']
]);

jest.mock('@hooks/useParticipantList', () => {
   return {
      useParticipantList: jest.fn()
   };
});

jest.mock('@hooks/useRaffleResult', () => {
   return {
      useRaffleResult: jest.fn()
   };
});

describe('<Raffle /> page', () => {
   beforeEach(() => {
      (useParticipantList as jest.Mock).mockReturnValue(participants);
      (useRaffleResult as jest.Mock).mockReturnValue(result);
      
      render(
         <RecoilRoot>
            <Raffle />
         </RecoilRoot>
      );

      options = screen.queryAllByRole('option');
      select = screen.getByPlaceholderText('Selecione o seu nome');
      button = screen.getByRole('button');
   });

   test('todos os participantes podem exibir seu amigo secreto', () => {
      expect(options).toHaveLength(participants.length + 1);
   });

   test('o amigo secreto é exibido quando solicitado', () => {
      fireEvent.change(select, {
         target: {
            value: participants[1]
         }
      });

      fireEvent.click(button);

      const secretFriend = screen.getByRole('alert');

      expect(secretFriend).toBeInTheDocument();
   });

   test('esconde o amigo secreto sorteado depois de 5 segundos', () => {
      jest.useFakeTimers();

      fireEvent.change(select, {
         target: {
            value: participants[0]
         }
      });

      fireEvent.click(button);

      const secretFriend = screen.getByRole('alert');

      act(() => {
         jest.runAllTimers();
      });

      expect(secretFriend).not.toBeInTheDocument();
   });
});
