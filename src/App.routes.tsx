import { Form, Header } from '@components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

export function Router (): JSX.Element {
   return (
      <BrowserRouter>
         <RecoilRoot>
            <Routes>
               <Header />
               <Route path='/' element={<Form />} />
            </Routes>
         </RecoilRoot>
      </BrowserRouter>
   );
}

export default Router;
