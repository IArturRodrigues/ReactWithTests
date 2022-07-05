import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Header from '.';

describe('Header component', () => {
   it('verificar se existe no documento', () => {
      render(<Header />);

      const header = screen.getByRole('banner');

      const images = screen.getAllByRole('img', { queryFallbacks: true });
      
      expect(header).toBeInTheDocument();
      expect(images[0]).toBeInTheDocument();
      expect(images[1]).toBeInTheDocument();
   });
});
