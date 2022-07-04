export function Form (): JSX.Element {
   return (
      <form>
         <input type="text" placeholder="Insira os nomes dos participantes" />
         <button disabled>Adicionar</button>
      </form>
   );
}

export default Form;
