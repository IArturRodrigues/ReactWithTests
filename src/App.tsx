import { RecoilRoot } from 'recoil';
import Router from './App.routes';

function App () {
   return (
      <RecoilRoot>
         <Router />
      </RecoilRoot>
   );
}

export default App;
