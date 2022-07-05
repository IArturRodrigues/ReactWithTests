import { Form as SForm } from './Form';

export function Form (): JSX.Element {
   return (
      <SForm>
         <SForm.Input type="text" placeholder="Insira os nomes dos participantes" />
         <SForm.Button disabled>Adicionar</SForm.Button>
      </SForm>
   );
}

export default Form;
