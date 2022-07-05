import { useState } from 'react';
import { Form as SForm } from './Form';

export function Form (): JSX.Element {
   const [text, setText] = useState<string>('');
   
   return (
      <SForm>
         <SForm.Input type="text" placeholder="Insira os nomes dos participantes" onChange={(e) => setText(e.target.value)} />
         <SForm.Button disabled={text.length === 0 ?? false} >Adicionar</SForm.Button>
      </SForm>
   );
}

export default Form;
