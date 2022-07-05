import styled, { StyledComponent } from 'styled-components';

type IForm = StyledComponent<'form', any, {}, never> & {
   Input: StyledComponent<'input', any, {}, never>;
   Button: StyledComponent<'button', any, {}, never>;
}

const Form = styled.form`` as IForm;

Form.Input = styled.input`
   border-radius: 0.75rem;
   background-color: black;
   ::placeholder {
      --tw-text-opacity: 1;
      color: rgb(196 196 196 / var(--tw-text-opacity));
   }
`;

Form.Button = styled.button`
   border-radius: 0.75rem;
   border: 0 1px 1px;
   background-color: blue;
   :disabled {
      --tw-bg-opacity: 1;
      background-color: rgb(196 196 196 / var(--tw-bg-opacity));
   }
`;

export { Form };
