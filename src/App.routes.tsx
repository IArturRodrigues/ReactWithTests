import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Configuration from './pages/Configuration';
import Raffle from './pages/Raffle';

export function Router (): JSX.Element {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Configuration />} />
            <Route path='/sorteio' element={<Raffle />} />
         </Routes>
      </BrowserRouter>
   );
}

export default Router;
