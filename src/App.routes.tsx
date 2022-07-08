import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from '@components';

import Configuration from './pages/Configuration';
import Raffle from './pages/Raffle';

export function Router (): JSX.Element {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Header />}>
               <Route index element={<Configuration />} />
               <Route path='sorteio' element={<Raffle />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default Router;
