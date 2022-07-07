import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useParticipantList } from '@hooks/useParticipantList';

import Footer from '.';

jest.mock('@hooks/useParticipantList', () => {
   return {
      useParticipantList: jest.fn()
   };
});

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
   return {
      useNavigate: () => mockNavigate
   };
});

let button: HTMLElement;

describe('Footer component', () => {
   describe('quando nao existem partiicipantes', () => {
      beforeEach(() => {
         (useParticipantList as jest.Mock).mockReturnValue([]);
         
         render(
            <RecoilRoot>
               <Footer />
            </RecoilRoot>
         );
      
         button = screen.getByRole('button');
      });

      test('quando nao existem participantes o suficiente a brincadeira nao pode ser iniciada', () => {
         expect(button).toBeDisabled();
      });
   });

   describe('quando existem partcicipantes', () => {
      beforeEach(() => {
         (useParticipantList as jest.Mock).mockReturnValue(['Artur', 'Isabela', 'Ricardo', 'Manu']);
         
         render(
            <RecoilRoot>
               <Footer />
            </RecoilRoot>
         );

         button = screen.getByRole('button');
      });

      test('quando existem participantes suficiente a brincadeira pode ser começada', () => {
         expect(button).not.toBeDisabled();
      });
   
      test('a brincadeira foi iniciada', () => {
         fireEvent.click(button);
   
         expect(mockNavigate).toHaveBeenCalledTimes(1);
         expect(mockNavigate).toHaveBeenCalledWith('/sorteio');
      });
   });
});
