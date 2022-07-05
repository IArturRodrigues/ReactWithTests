import { useRef, useState } from 'react';
import { useAddParticipant } from '../../hooks/useAddParticipant';
import { Form as SForm } from './Form';

export function Form (): JSX.Element {
   const [text, setText] = useState<string>('');

   const inputRef = useRef<HTMLInputElement>(null);

   const addInList = useAddParticipant();

   function addParticipant (event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      addInList(text);
      setText('');
      inputRef.current?.focus();
   }
   
   return (
      <SForm
         onSubmit={addParticipant}
      >
         <SForm.Input
            type="text"
            placeholder="Insira os nomes dos participantes"
            value={text}
            onChange={(e) => setText(e.target.value)}
            ref={inputRef}
         />
         <SForm.Button disabled={text.length === 0 ?? false} >
            Adicionar
         </SForm.Button>
      </SForm>
   );
}

export default Form;
