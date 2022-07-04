import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Form from './Form';

test('quando input estiver vazio, novos participantes nao podem ser adicionados', () => {
   render(<Form />);

   // encontrar no DOM o input
   // const input = screen.findByPlaceholderText('Insira os nomes dos participantes');
   const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

   // encontrar o botão
   const button = screen.getByRole('button');

   // garantir que o input esteja no documento
   expect(input).toBeInTheDocument();

   // garantir que o botão esteja desabilitado
   expect(button).toBeDisabled();
});
