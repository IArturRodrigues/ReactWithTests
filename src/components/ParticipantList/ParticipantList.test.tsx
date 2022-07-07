import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useParticipantList } from '@hooks/useParticipantList';

import ParticipantList from '.';

jest.mock('@hooks/useParticipantList', () => {
   return {
      useParticipantList: jest.fn()
   };
});

let items: HTMLElement[];

describe('ParticipantList component', () => {
   describe('para uma lista sem participantes', () => {
      beforeEach(() => {
         render(
            <RecoilRoot>
               <ParticipantList />
            </RecoilRoot>
         );
   
         // listas ja possuem a role por padrão, por isso nao precisa ser especificado no jsx
         items = screen.queryAllByRole('listitem');
      });

      test('uma lista vazia de participantes', () => {
         expect(items).toHaveLength(0);
      });
   });

   describe('para uma lista com participantes', () => {
      const participants = ['Artur', 'Isabela'];
      
      beforeEach(() => {
         (useParticipantList as jest.Mock).mockReturnValue(participants);
         
         render(
            <RecoilRoot>
               <ParticipantList />
            </RecoilRoot>
         );

         // listas ja possuem a role por padrão, por isso nao precisa ser especificado no jsx
         items = screen.queryAllByRole('listitem');
      });
      
      test('a lista de participantes deve ter 2 participantes', () => {
         expect(items).toHaveLength(participants.length);
      });
   });
});
