import { useAddParticipant } from '@hooks/useAddParticipant';
import { useErrorMessage } from '@hooks/useErrorMessage';
import { useRef, useState } from 'react';
import { Form as SForm } from './Form';

// import Card from '../Card';

function Form (): JSX.Element {
   const [text, setText] = useState<string>('');

   const inputRef = useRef<HTMLInputElement>(null);

   const addInList = useAddParticipant();

   const errorMessage = useErrorMessage();

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
         <SForm.Button disabled={text.length === 0} >
            Adicionar
         </SForm.Button>
         {errorMessage && <SForm.AlertError role='alert'>{errorMessage}</SForm.AlertError>}
      </SForm>
   );
}

export default Form;
