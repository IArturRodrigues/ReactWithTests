import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useParticipantList } from '@hooks/useParticipantList';
import Raffle from '.';

let options: HTMLElement[];

const participants = ['Artur', 'Isabela', 'Ricardo', 'Manu'];

jest.mock('@hooks/useParticipantList', () => {
   return {
      useParticipantList: jest.fn()
   };
});

describe('<Raffle /> page', () => {
   beforeEach(() => {
      (useParticipantList as jest.Mock).mockReturnValue(participants);
      
      render(
         <RecoilRoot>
            <Raffle />
         </RecoilRoot>
      );

      options = screen.queryAllByRole('option');
   });

   test('todos os participantes podem exibir seu amigo secreto', () => {
      expect(options).toHaveLength(participants.length);
   });
});
