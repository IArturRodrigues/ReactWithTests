import { Form, Header, Footer, ParticipantList } from '@components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function Router (): JSX.Element {
   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path='/' element={<Form />}>
               <Route index element={<ParticipantList />} />
            </Route>
         </Routes>
         <Footer />
      </BrowserRouter>
   );
}

export default Router;
